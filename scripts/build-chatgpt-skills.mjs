import { execFileSync } from "node:child_process";
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "plugins", "repo-doctor", "skills");
const outputRoot = path.join(root, "dist", "chatgpt-skills");
// Keep this short and ASCII-only so typing "@rd" filters every Repo Doctor skill.
const publishPrefix = "rd";

const interfaces = {
  "change-impact-analysis": {
    displayName: "Change Impact Analysis（改代码看影响）",
    shortDescription: "修改、重构、重命名或删除代码前，先分析依赖与影响范围",
    defaultPrompt: "使用 $change-impact-analysis 分析这次代码变更的影响范围和安全实施方案。",
    chineseDescription: "用于修改、重构、重命名、删除或移动代码前分析依赖、风险、兼容性与测试范围。",
  },
  "project-health-check": {
    displayName: "Project Health Check（项目健康检查）",
    shortDescription: "全面检查架构、质量、安全、性能、测试和发布风险",
    defaultPrompt: "使用 $project-health-check 对这个项目进行全面健康检查并给出优先级建议。",
    chineseDescription: "用于项目健康检查、仓库诊断、架构审查、可维护性、安全、性能、依赖和测试评估。",
  },
  "repo-onboarding": {
    displayName: "Repo Onboarding（理解新项目）",
    shortDescription: "快速理解陌生项目的结构、技术栈、入口、命令与核心模块",
    defaultPrompt: "使用 $repo-onboarding 帮我快速理解这个陌生项目以及应该从哪里开始阅读。",
    chineseDescription: "用于理解陌生仓库的项目结构、技术栈、入口、构建测试命令、核心模块和部署流程。",
  },
  "safe-code-review": {
    displayName: "Safe Code Review（安全审查代码）",
    shortDescription: "专业审查代码或 PR，识别缺陷、安全风险与可维护性问题",
    defaultPrompt: "使用 $safe-code-review 审查这些代码改动，并按优先级报告可操作问题。",
    chineseDescription: "用于专业代码审查、PR 审查，以及检查缺陷、安全风险、性能、类型和 API 设计。",
  },
  "safe-fix-implementation": {
    displayName: "Safe Fix Implementation（只修一个问题）",
    shortDescription: "一次只实施一个小而安全、可验证的修复",
    defaultPrompt: "使用 $safe-fix-implementation 安全修复一个已确认的问题并完成验证。",
    chineseDescription: "用于安全实施已确认的问题修复；坚持小范围修改、验证结果，不一次修复所有问题。",
  },
};

function yamlString(value) {
  return JSON.stringify(value);
}

function titleCase(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function interfaceFor(source, slug) {
  const configured = interfaces[slug];
  if (configured) return configured;

  const content = readFileSync(source, "utf8");
  const heading = content.match(/^#\s+(.+)$/m)?.[1] ?? titleCase(slug);
  const description = content.match(/^description:\s*(.+)$/m)?.[1] ?? "Repo Doctor workflow";
  return {
    displayName: heading,
    shortDescription: description.slice(0, 80),
    defaultPrompt: `使用 $${slug} 执行这个 Repo Doctor 工作流。`,
    chineseDescription: "Repo Doctor 技能套件中的可复用工作流。",
  };
}

function renderSkill(source, slug, config) {
  let content = readFileSync(source, "utf8");
  content = content.replace(/^name:.*$/m, `name: ${slug}`);
  content = content.replace(
    /^description:\s*(.*)$/m,
    (_, description) => `description: ${description} ${config.chineseDescription}`,
  );
  content = content.replace(/^# .*$/m, `# ${config.displayName}`);
  return content;
}

function renderInterface(config, publishedSlug) {
  const defaultPrompt = config.defaultPrompt.replace(
    /\$[a-z0-9-]+/,
    `$${publishedSlug}`,
  );
  return [
    "interface:",
    `  display_name: ${yamlString(`RD · ${config.displayName}`)}`,
    `  short_description: ${yamlString(config.shortDescription)}`,
    `  default_prompt: ${yamlString(defaultPrompt)}`,
    "",
  ].join("\n");
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });

for (const slug of readdirSync(sourceRoot).sort()) {
  const source = path.join(sourceRoot, slug, "SKILL.md");
  const config = interfaceFor(source, slug);
  const publishedSlug = `${publishPrefix}-${slug}`;

  const skillRoot = path.join(outputRoot, publishedSlug);
  const agentsRoot = path.join(skillRoot, "agents");
  mkdirSync(agentsRoot, { recursive: true });
  writeFileSync(
    path.join(skillRoot, "SKILL.md"),
    renderSkill(source, publishedSlug, config),
  );
  writeFileSync(
    path.join(agentsRoot, "openai.yaml"),
    renderInterface(config, publishedSlug),
  );

  const archive = path.join(outputRoot, `${publishedSlug}.zip`);
  execFileSync("zip", ["-q", "-r", archive, "SKILL.md", "agents"], {
    cwd: skillRoot,
  });
  console.log(`Built ${path.relative(root, archive)}`);
}
