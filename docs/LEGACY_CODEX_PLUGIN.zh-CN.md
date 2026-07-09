# 旧版 Codex 插件

本文档说明 Repo Doctor Skills 中原 Repo Doctor Codex 插件结构，以及它和新 `packs/` 结构的关系。

## 两套结构的区别

```text
plugins/repo-doctor/
```

这是原 Codex 插件结构。已有用户可以继续通过它安装和使用 Repo Doctor。

```text
packs/
```

这是新的跨平台 canonical 源结构。后续新增和维护跨平台 skills 时，应优先修改这里。

## 为什么保留 `plugins/`

保留旧结构是为了兼容已有 Codex 插件用户。本项目最初以 `repo-doctor-codex-plugin` 发布，推荐仓库名现在是 `repo-doctor-skills`。当前 `plugins/repo-doctor/.codex-plugin/plugin.json` 仍然指向：

```json
{
  "skills": "./skills/"
}
```

原 5 个 skills 仍然存在：

- `repo-onboarding`
- `project-health-check`
- `safe-code-review`
- `change-impact-analysis`
- `safe-fix-implementation`

## 如果只想快速使用 Codex 插件

使用：

```text
plugins/repo-doctor/
```

在 Codex plugin marketplace 中添加仓库来源：

```text
Source: dss-time/repo-doctor-skills
Git ref: main
Sparse path: leave empty
```

也可以使用完整 Git URL：

```text
Source: https://github.com/dss-time/repo-doctor-skills.git
Git ref: main
Sparse path: leave empty
```

安装 `Repo Doctor` 插件后，重启 Codex 或开启新会话。

## 如何验证

在 Codex 中输入：

```text
$
```

应能搜索到：

```text
repo-onboarding
project-health-check
safe-code-review
change-impact-analysis
safe-fix-implementation
```

## 如果想跨平台构建

使用：

```text
packs/
```

然后运行：

```bash
npm run validate
npm run build
```

构建脚本会从 `packs/` 生成不同平台输出，例如：

```text
dist/codex-zh-CN/AGENTS.md
dist/claude-code-zh-CN/.claude/skills/<skill-name>/SKILL.md
dist/generic-zh-CN/
```

## 后续方向

如果需要，可以继续增强构建脚本，让它从 `packs/` 自动生成 `plugins/` 结构。当前先保留手写旧插件结构，以保证已有用户不受影响。
