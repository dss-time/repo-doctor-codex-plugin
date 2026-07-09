# 新手快速开始

这份文档面向第一次看到这个项目的用户。

## 你正在看的是什么

这个仓库有两种实际用途：

1. 直接使用 `plugins/repo-doctor/` 下已有的 Repo Doctor Codex 插件。
2. 把 `packs/` 作为跨平台 AI Skills 的 canonical 源码，再构建到 `dist/`。

如果你只是想试用已有 Codex 插件，请看 [LEGACY_CODEX_PLUGIN.zh-CN.md](LEGACY_CODEX_PLUGIN.zh-CN.md)。如果你想构建多平台输出，继续看本页。

## 克隆仓库

```bash
git clone https://github.com/dss-time/repo-doctor-codex-plugin.git
cd repo-doctor-codex-plugin
```

## 运行校验

```bash
npm run validate
```

它会检查 public skills 是否包含必需文件、元数据、语言覆盖、权限声明和公开安全边界。

## 构建所有输出

```bash
npm run build
```

生成结果会写入 `dist/`。

## 生成中文通用 Prompt Pack

```bash
node scripts/build-skills.mjs --target generic-zh-CN
```

输出目录：

```text
dist/generic-zh-CN/
```

每个文件都是可复制使用的 Markdown prompt。

## 生成 Codex / CodeX 中文输出

```bash
node scripts/build-skills.mjs --target codex-zh-CN
```

输出文件：

```text
dist/codex-zh-CN/AGENTS.md
```

在支持 agent instruction 文件的 Codex / CodeX 风格项目中，可以复制或引用这个 `AGENTS.md`。

## 生成 Claude Code 中文输出

```bash
node scripts/build-skills.mjs --target claude-code-zh-CN
```

输出结构：

```text
dist/claude-code-zh-CN/.claude/skills/<skill-name>/SKILL.md
```

使用时，把生成的 `.claude/skills/` 目录复制到目标 Claude Code 环境。

## 查看 dist 输出

```bash
find dist -maxdepth 4 -type f | sort
```

生成文件会被 Git 忽略。不要直接修改 `dist/`。请修改 `packs/`，然后重新构建。

## 常见问题

### 我应该改 `plugins/` 还是 `packs/`？

新增跨平台 skill 时改 `packs/`。`plugins/` 是旧版 Codex 插件兼容结构。

### 需要提交 `dist/` 里的生成文件吗？

不需要。`dist/*` 被忽略，只保留 `dist/.gitkeep`。

### 需要安装依赖吗？

当前脚本只使用 Node 内置模块，不需要安装额外依赖。

### 新增 skill 从哪里开始？

先看 [ADDING_SKILLS.zh-CN.md](ADDING_SKILLS.zh-CN.md)，然后复制 `packs/_template/`。
