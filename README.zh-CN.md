# Repo Doctor Skills

Repo Doctor Skills 是一个双语、跨平台的 AI Skills 工程化框架，用于仓库诊断、代码审查、文档审查和安全 Agent 工作流。

这是一个早期的开源框架，用于把专家工作流整理成结构化 Skill packs。它包含 canonical `packs/` 源结构、校验脚本、构建适配器，以及兼容已有用户的旧版 Repo Doctor Codex 插件。

本项目最初以 `repo-doctor-codex-plugin` 发布，现在已扩展为跨平台 Skills 工程化框架，并继续保留 legacy Codex 插件结构。

## 这个项目能做什么

- 用元数据、权限、本地化说明、示例和测试定义 Skill。
- 在发布前校验 public skills。
- 构建通用 Markdown Prompt、Codex / CodeX、Claude Code 等平台输出。
- 把公开安全的 skills 和私有内部实现分开。
- 保留原 Repo Doctor Codex 插件，同时引入跨平台源码结构。

## 它不是什么

- 不是零散 prompt 仓库。
- 不是公司内部流程仓库。
- 不是财务、股票或投资策略库。
- 不包含公司模板、客户案例、secret 或私有数据源接入逻辑。

## 适合谁

- 想构建可复用 Agent 工作流的开发者。
- 希望维护公开安全 skill packs 的开源维护者。
- 需要区分公开 skills 和私有内部包的团队。
- 现在想直接使用 Repo Doctor Codex 插件，后续又想支持多平台构建的用户。

## 快速开始

克隆仓库并运行校验：

```bash
git clone https://github.com/dss-time/repo-doctor-skills.git
cd repo-doctor-skills
npm run validate
```

构建所有支持的输出：

```bash
npm run build
```

只构建一个目标：

```bash
node scripts/build-skills.mjs --target generic-zh-CN
node scripts/build-skills.mjs --target generic-en
node scripts/build-skills.mjs --target codex-zh-CN
node scripts/build-skills.mjs --target claude-code-zh-CN
```

生成文件会写入 `dist/`。生成内容被 Git 忽略，只保留 `dist/.gitkeep`。

更详细的新手步骤见 [docs/QUICK_START.zh-CN.md](docs/QUICK_START.zh-CN.md)。

## 两种使用方式

### 1. 直接作为 Codex / CodeX 插件使用

如果你只想使用原来的 Repo Doctor Codex 插件，看这里：

```text
plugins/repo-doctor/
```

插件暴露原来的 5 个 skills：

- `repo-onboarding`
- `project-health-check`
- `safe-code-review`
- `change-impact-analysis`
- `safe-fix-implementation`

安装和 marketplace 配置见 [docs/LEGACY_CODEX_PLUGIN.zh-CN.md](docs/LEGACY_CODEX_PLUGIN.zh-CN.md)。

### 2. 作为跨平台 Skills 源码仓库使用

如果你想为多个平台构建 skills，应该修改 canonical 源文件：

```text
packs/
```

然后运行：

```bash
npm run validate
npm run build
```

从 `dist/` 使用适配输出：

- `dist/generic-zh-CN/`：中文通用 Markdown Prompt
- `dist/generic-en/`：英文通用 Markdown Prompt
- `dist/codex-zh-CN/AGENTS.md`：Codex / CodeX 风格使用
- `dist/claude-code-zh-CN/.claude/skills/<skill-name>/SKILL.md`：Claude Code 使用

## `plugins/` 和 `packs/` 的区别

| 路径 | 用途 | 是否优先修改 |
|---|---|---|
| `plugins/` | 旧版 Codex 插件兼容结构，已有用户可继续从这里安装 Repo Doctor。 | 否，除非维护旧插件。 |
| `packs/` | 跨平台 canonical skill 源码，新 skill 和更新都应从这里开始。 | 是。 |
| `adapters/` | 各平台适配说明。 | 只有适配行为变化时修改。 |
| `dist/` | `scripts/build-skills.mjs` 生成的输出。 | 永远不要直接修改。 |

## 支持平台

- Codex / CodeX：使用 `plugins/` 旧插件，或生成的 `dist/codex-zh-CN/AGENTS.md`
- Claude Code：生成 `.claude/skills/<skill-name>/SKILL.md`
- Cursor：见 `adapters/cursor/`
- 通用 Prompt Pack：生成 Markdown prompt
- 国内模型环境：见 `adapters/chinese-llm/`

## 支持语言

公开核心支持：

- `en`
- `zh-CN`

`skill.yaml` 是元数据唯一来源。英文和中文说明必须保持相同的权限、风险边界和工作流行为。

## 目录结构

```text
docs/       标准、新手文档、安全模型、本地化和适配文档
schemas/    Skill 和 Pack 的 JSON Schema
adapters/   平台适配说明
packs/      canonical public skill packs 和模板
examples/   公开安全示例和样例输出
tests/      校验 fixtures
scripts/    校验和构建脚本
dist/       生成的平台输出，除 .gitkeep 外被忽略
plugins/    旧版 Codex 插件兼容结构
```

## 运行校验

```bash
npm run validate
```

校验器会检查必需文件、必需元数据、语言覆盖、权限、只读边界，以及 public skills 中明显敏感词。

## 构建不同平台版本

```bash
npm run build
```

或者只构建单个目标：

```bash
node scripts/build-skills.mjs --target generic-zh-CN
node scripts/build-skills.mjs --target generic-en
node scripts/build-skills.mjs --target codex-zh-CN
node scripts/build-skills.mjs --target claude-code-zh-CN
```

## 新增 Skill

新 skill 应该先放到 `packs/`，不要先改 `plugins/` 或 `dist/`。

可以从模板复制：

```text
packs/_template/
```

每个 skill 应包含：

```text
skill.yaml
instructions.en.md
instructions.zh-CN.md
output.en.md
output.zh-CN.md
examples.en.md
examples.zh-CN.md
tests/case-001.en.yaml
tests/case-001.zh-CN.yaml
```

新增或修改后运行：

```bash
npm run validate
npm run build
```

## 创建新的 Skill

使用脚手架脚本：

```bash
npm run create:skill -- --pack engineering/repo-doctor --name bug-diagnosis --id repo.bug-diagnosis --category engineering
```

新 Skill 会创建在 `packs/` 下。不要直接修改 `dist/`，也不要优先修改 legacy `plugins/` 结构。创建后先更新生成文件，再运行：

```bash
npm run validate
npm run build
```

详细说明见 [docs/ADDING_SKILLS.zh-CN.md](docs/ADDING_SKILLS.zh-CN.md)。

## 公开 / 私有内容边界

本公开仓库可以包含：

- Skill 标准
- 通用工作流
- 平台适配器
- Repo Doctor 基础版
- PDF、Word、Excel、报告基础 skills
- 公开安全示例和测试
- 财务类接口规范和安全边界

本公开仓库禁止包含：

- 公司内部模板或流程
- 客户案例
- 私有数据源
- API key、token、secret
- 股票筛选规则
- 买入、卖出、持有逻辑
- 技术指标组合策略
- 估值模型权重
- 投资组合策略
- 付费数据源接入逻辑

详见 [docs/PUBLIC_PRIVATE_BOUNDARY.md](docs/PUBLIC_PRIVATE_BOUNDARY.md)。

## 当前状态

本项目处于 early / experimental 阶段。公开结构、schema 和 adapter 会随着真实平台适配逐步完善。

## 相关文档

- [新手快速开始](docs/QUICK_START.zh-CN.md)
- [新增 Skills 指南](docs/ADDING_SKILLS.zh-CN.md)
- [旧版 Codex 插件](docs/LEGACY_CODEX_PLUGIN.zh-CN.md)
- [Skill 规范](docs/SKILL_SPEC.md)
- [平台适配](docs/PLATFORM_ADAPTERS.md)
- [安全模型](docs/SECURITY_MODEL.md)
- [本地化策略](docs/LOCALIZATION_POLICY.md)
- [公开 / 私有边界](docs/PUBLIC_PRIVATE_BOUNDARY.md)
- [术语表](docs/GLOSSARY.md)

## License

MIT。详见 [LICENSE](LICENSE)。
