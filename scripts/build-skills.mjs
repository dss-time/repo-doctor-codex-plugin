import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const packsDir = path.join(root, "packs");
const distDir = path.join(root, "dist");
const requestedTarget = process.argv.includes("--target")
  ? process.argv[process.argv.indexOf("--target") + 1]
  : null;

const targets = requestedTarget
  ? [requestedTarget]
  : ["generic-zh-CN", "generic-en", "codex-zh-CN", "claude-code-zh-CN"];

function walk(dir, predicate, results = []) {
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, predicate, results);
    else if (predicate(full)) results.push(full);
  }
  return results;
}

function isTemplatePath(filePath) {
  return filePath.includes(`${path.sep}packs${path.sep}_template${path.sep}`);
}

function field(yaml, block, locale) {
  const pattern = new RegExp(`^${block}:\\n(?:.*\\n)*?\\s{2}${locale}:\\s*(.+)$`, "m");
  return yaml.match(pattern)?.[1]?.trim() ?? "";
}

function scalar(yaml, key) {
  return yaml.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim() ?? "";
}

function renderSkill(skillDir, locale, target) {
  const yaml = readFileSync(path.join(skillDir, "skill.yaml"), "utf8");
  const name = field(yaml, "name", locale) || path.basename(skillDir);
  const description = field(yaml, "description", locale);
  const id = scalar(yaml, "id");
  const visibility = scalar(yaml, "visibility");
  const instructions = readFileSync(path.join(skillDir, `instructions.${locale}.md`), "utf8");
  const output = readFileSync(path.join(skillDir, `output.${locale}.md`), "utf8");

  if (target.startsWith("claude-code")) {
    return `---\nname: ${path.basename(skillDir)}\ndescription: ${description}\n---\n\n${instructions}\n\n${output}\n`;
  }

  if (target.startsWith("codex")) {
    return `# ${name}\n\nID: ${id}\nVisibility: ${visibility}\n\n${description}\n\n${instructions}\n\n${output}\n`;
  }

  return `# ${name}\n\n- ID: ${id}\n- Visibility: ${visibility}\n\n${description}\n\n${instructions}\n\n${output}\n`;
}

function buildTarget(target) {
  const locale = target.endsWith("en") ? "en" : "zh-CN";
  const outDir = path.join(distDir, target);
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  const skillDirs = walk(packsDir, (file) => path.basename(file) === "skill.yaml" && !isTemplatePath(file)).map((file) => path.dirname(file));

  if (target.startsWith("claude-code")) {
    for (const skillDir of skillDirs) {
      const skillName = path.basename(skillDir);
      const skillOutDir = path.join(outDir, ".claude", "skills", skillName);
      mkdirSync(skillOutDir, { recursive: true });
      writeFileSync(path.join(skillOutDir, "SKILL.md"), renderSkill(skillDir, locale, target));
    }
  } else if (target.startsWith("codex")) {
    const sections = skillDirs.map((skillDir) => renderSkill(skillDir, locale, target));
    writeFileSync(
      path.join(outDir, "AGENTS.md"),
      `# Generated Codex Skills\n\nThis file was generated from canonical skills under packs/.\n\n${sections.join("\n\n---\n\n")}`
    );
  } else {
    for (const skillDir of skillDirs) {
      const outName = `${path.basename(skillDir)}.md`;
      writeFileSync(path.join(outDir, outName), renderSkill(skillDir, locale, target));
    }
  }

  writeFileSync(
    path.join(outDir, "README.md"),
    `# ${target}\n\nGenerated from canonical skills under packs/.\n\n- Generic targets contain copyable Markdown prompts.\n- Codex targets contain AGENTS.md.\n- Claude Code targets contain .claude/skills/<skill-name>/SKILL.md.\n\nTODO: expand this adapter with platform-specific manifests.\n`
  );
  console.log(`Built ${target} with ${skillDirs.length} skills.`);
}

mkdirSync(distDir, { recursive: true });
for (const target of targets) buildTarget(target);
