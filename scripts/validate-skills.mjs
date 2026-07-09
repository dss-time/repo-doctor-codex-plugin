import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const packsDir = path.join(root, "packs");

const requiredFiles = [
  "skill.yaml",
  "instructions.en.md",
  "instructions.zh-CN.md",
  "output.en.md",
  "output.zh-CN.md",
  "examples.en.md",
  "examples.zh-CN.md",
  "tests/case-001.en.yaml",
  "tests/case-001.zh-CN.yaml"
];

const requiredMetadata = [
  "id",
  "name",
  "category",
  "visibility",
  "version",
  "status",
  "default_locale",
  "supported_locales",
  "description",
  "triggers",
  "tool_requirements",
  "permissions",
  "risk_level",
  "output_schema",
  "localization"
];

const sensitiveTerms = [
  "API_KEY",
  "SECRET",
  "TOKEN",
  "买入",
  "卖出",
  "持有",
  "满仓",
  "清仓",
  "股票池",
  "选股",
  "投资策略",
  "技术指标组合",
  "买入信号",
  "卖出信号",
  "稳赚",
  "保证收益",
  "估值权重",
  "私有策略",
  "internal-only",
  "private strategy"
];

const readOnlyRiskLevels = new Set(["read_only", "advisory"]);

function walk(dir, predicate, results = []) {
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full, predicate, results);
    } else if (predicate(full)) {
      results.push(full);
    }
  }
  return results;
}

function getScalar(yaml, key) {
  const match = yaml.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return match ? match[1].trim() : "";
}

function hasListItemUnder(yaml, key, item) {
  const block = yaml.match(new RegExp(`^${key}:\\n([\\s\\S]*?)(?=^[a-zA-Z_][a-zA-Z0-9_]*:|\\Z)`, "m"))?.[1] ?? "";
  return new RegExp(`^\\s*-\\s*${item}\\s*$`, "m").test(block);
}

function hasNestedScalar(yaml, parent, key, value) {
  const block = yaml.match(new RegExp(`^${parent}:\\n([\\s\\S]*?)(?=^[a-zA-Z_][a-zA-Z0-9_]*:|\\Z)`, "m"))?.[1] ?? "";
  return new RegExp(`^\\s+${key}:\\s*${value}\\s*$`, "m").test(block);
}

function nestedScalar(yaml, parent, key) {
  const block = yaml.match(new RegExp(`^${parent}:\\n([\\s\\S]*?)(?=^[a-zA-Z_][a-zA-Z0-9_]*:|\\Z)`, "m"))?.[1] ?? "";
  return block.match(new RegExp(`^\\s+${key}:\\s*(.+)$`, "m"))?.[1]?.trim() ?? "";
}

function validateSkill(skillDir) {
  const errors = [];
  const rel = path.relative(root, skillDir);

  for (const file of requiredFiles) {
    const target = path.join(skillDir, file);
    if (!existsSync(target)) errors.push(`${rel}: missing ${file}`);
  }

  const yamlPath = path.join(skillDir, "skill.yaml");
  if (!existsSync(yamlPath)) return errors;

  const yaml = readFileSync(yamlPath, "utf8");
  for (const field of requiredMetadata) {
    if (!new RegExp(`^${field}:`, "m").test(yaml)) {
      errors.push(`${rel}: skill.yaml missing ${field}`);
    }
  }

  const visibility = getScalar(yaml, "visibility");
  if (!visibility) errors.push(`${rel}: skill.yaml must declare visibility`);
  if (visibility && visibility !== "public") {
    errors.push(`${rel}: visibility must be public in this repository`);
  }

  if (!hasListItemUnder(yaml, "supported_locales", "en")) {
    errors.push(`${rel}: supported_locales must include en`);
  }
  if (!hasListItemUnder(yaml, "supported_locales", "zh-CN")) {
    errors.push(`${rel}: supported_locales must include zh-CN`);
  }

  for (const permission of [
    "read_files",
    "write_files",
    "run_shell_commands",
    "access_network",
    "destructive_actions_allowed"
  ]) {
    if (!hasNestedScalar(yaml, "permissions", permission, "true") && !hasNestedScalar(yaml, "permissions", permission, "false")) {
      errors.push(`${rel}: permissions.${permission} must be explicitly true or false`);
    }
  }

  const riskDefault = nestedScalar(yaml, "risk_level", "default");
  const writeFiles = nestedScalar(yaml, "permissions", "write_files");
  if (readOnlyRiskLevels.has(riskDefault) && writeFiles === "true") {
    errors.push(`${rel}: ${riskDefault} skill cannot set permissions.write_files: true`);
  }

  const skillName = path.basename(skillDir);
  if (skillName.includes("review") && writeFiles === "true") {
    errors.push(`${rel}: review skills must not modify files by default`);
  }

  if (visibility === "public") {
    const files = walk(skillDir, () => true);
    for (const file of files) {
      const text = readFileSync(file, "utf8");
      for (const term of sensitiveTerms) {
        if (text.toLowerCase().includes(term.toLowerCase())) {
          errors.push(`${path.relative(root, file)}: public skill contains sensitive term "${term}"`);
        }
      }
    }
  }

  return errors;
}

const skillYamlFiles = walk(packsDir, (file) => path.basename(file) === "skill.yaml");
const skillDirs = skillYamlFiles
  .filter((file) => file.includes(`${path.sep}skills${path.sep}`))
  .map((file) => path.dirname(file));
const errors = skillDirs.flatMap(validateSkill);
const activeSkillCount = skillDirs.filter((dir) => !dir.includes(`${path.sep}packs${path.sep}_template${path.sep}`)).length;
const templateSkillCount = skillDirs.length - activeSkillCount;

if (skillDirs.length === 0) {
  errors.push("No skills found under packs/");
}

if (errors.length > 0) {
  console.error("Skill validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Skill validation passed for ${activeSkillCount} active skills and ${templateSkillCount} template skills.`);

// TODO: Replace lightweight text checks with a YAML parser plus JSON Schema validation.
