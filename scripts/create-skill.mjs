import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

function readArg(name) {
  const index = args.indexOf(`--${name}`);
  if (index === -1) return "";
  return args[index + 1] ?? "";
}

function fail(message) {
  console.error(`create-skill error: ${message}`);
  console.error("");
  console.error("Usage:");
  console.error("  npm run create:skill -- --pack engineering/repo-doctor --name bug-diagnosis --id repo.bug-diagnosis --category engineering");
  process.exit(1);
}

const pack = readArg("pack");
const name = readArg("name");
const id = readArg("id");
const category = readArg("category");

if (!pack) fail("missing required --pack");
if (!name) fail("missing required --name");
if (!id) fail("missing required --id");
if (!category) fail("missing required --category");

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
  fail("--name must use lowercase hyphen-case, for example bug-diagnosis");
}

if (!/^[a-z0-9]+(?:\.[a-z0-9]+(?:-[a-z0-9]+)*)+$/.test(id)) {
  fail("--id must be dot-namespaced, for example repo.bug-diagnosis");
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(category)) {
  fail("--category must use lowercase hyphen-case, for example engineering");
}

if (pack.includes("..") || path.isAbsolute(pack)) {
  fail("--pack must be a relative path under packs/");
}

const root = process.cwd();
const packDir = path.join(root, "packs", pack);
const skillsDir = path.join(packDir, "skills");
const targetDir = path.join(skillsDir, name);

if (!existsSync(packDir)) {
  fail(`pack does not exist: packs/${pack}`);
}

if (!existsSync(skillsDir)) {
  fail(`pack has no skills directory: packs/${pack}/skills`);
}

if (existsSync(targetDir)) {
  fail(`target skill already exists: packs/${pack}/skills/${name}`);
}

function titleFromName(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const title = titleFromName(name);
const zhTitle = `${title} / 待本地化`;

const files = {
  "skill.yaml": `id: ${id}
name:
  en: ${title}
  zh-CN: ${zhTitle}
category: ${category}
visibility: public
version: 0.1.0
status: draft
default_locale: zh-CN
supported_locales:
  - en
  - zh-CN
description:
  en: Describe what this public-safe skill does.
  zh-CN: 描述这个公开安全 Skill 的用途。
triggers:
  en:
    - ${name}
  zh-CN:
    - ${zhTitle}
tool_requirements:
  filesystem: read
  git: none
  shell: none
  web: none
permissions:
  read_files: true
  write_files: false
  run_shell_commands: false
  access_network: false
  destructive_actions_allowed: false
risk_level:
  default: read_only
output_schema:
  type: ${name.replaceAll("-", "_")}_report
localization:
  en:
    status: complete
  zh-CN:
    status: complete
`,
  "instructions.en.md": `# ${title}

Describe the workflow this skill should follow.

## Safety Boundary

- Keep the skill public-safe.
- Do not include private data, customer examples, credentials, or internal workflows.
- Do not modify files unless the skill explicitly requires write access.

## Workflow

1. Restate the user request.
2. Identify available evidence or source material.
3. Apply the skill-specific review or generation process.
4. Return the result with limitations and manual confirmation items.
`,
  "instructions.zh-CN.md": `# ${zhTitle}

描述这个 Skill 应遵循的工作流程。

## 安全边界

- 保持公开安全。
- 不包含私有数据、客户案例、凭证或内部流程。
- 除非该 Skill 明确需要写权限，否则不要修改文件。

## 工作流程

1. 重述用户请求。
2. 识别可用证据或来源材料。
3. 执行该 Skill 对应的审查或生成流程。
4. 输出结果，并说明限制和人工确认项。
`,
  "output.en.md": `# Output Format

1. Request summary
2. Evidence or source material
3. Findings or result
4. Limitations
5. Manual confirmation items
`,
  "output.zh-CN.md": `# 输出格式

1. 请求摘要
2. 证据或来源材料
3. 发现或结果
4. 限制
5. 人工确认项
`,
  "examples.en.md": `# Examples

User: "Use ${name} on this public-safe example."

Expected behavior: follow the skill workflow, cite available evidence, and avoid unsupported claims.
`,
  "examples.zh-CN.md": `# 示例

用户：“请对这个公开安全示例使用 ${zhTitle}。”

预期行为：遵循 Skill 工作流，引用可用证据，避免无依据结论。
`,
  "tests/case-001.en.yaml": `input: "Use ${name} on this public-safe example."
expected:
  must_include:
    - evidence
    - limitations
  must_not:
    - private data
`,
  "tests/case-001.zh-CN.yaml": `input: "请对这个公开安全示例使用 ${zhTitle}。"
expected:
  must_include:
    - 证据
    - 限制
  must_not:
    - 私有数据
`
};

mkdirSync(path.join(targetDir, "tests"), { recursive: true });

for (const [relativePath, content] of Object.entries(files)) {
  writeFileSync(path.join(targetDir, relativePath), content);
}

console.log(`Created skill at packs/${pack}/skills/${name}`);
console.log("");
console.log("Next steps:");
console.log("1. Edit the generated files.");
console.log("2. Update the pack README and pack.yaml if this is an active skill.");
console.log("3. Run npm run validate.");
console.log("4. Run npm run build.");
