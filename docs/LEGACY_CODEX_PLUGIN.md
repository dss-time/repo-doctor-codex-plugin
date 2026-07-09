# Legacy Codex Plugin

This document preserves the original Repo Doctor Codex plugin installation and usage path for Repo Doctor Skills.

## `plugins/` vs `packs/`

```text
plugins/repo-doctor/
```

This is the original Codex plugin structure. Use it if you only want to install and run the existing Repo Doctor plugin.

```text
packs/
```

This is the newer cross-platform canonical source structure. Use it if you want to validate and build skills for multiple platforms through `scripts/build-skills.mjs`.

The legacy plugin is kept for existing users. Repo Doctor Skills was originally published as `repo-doctor-codex-plugin`; the recommended repository name is now `repo-doctor-skills`. In the future, the build script can be extended to generate plugin structures from `packs/`.

## Existing Plugin Structure

```text
.agents/plugins/marketplace.json
plugins/repo-doctor/.codex-plugin/plugin.json
plugins/repo-doctor/skills/
```

`plugins/repo-doctor/.codex-plugin/plugin.json` points to:

```json
{
  "skills": "./skills/"
}
```

The original five skills remain available:

- `repo-onboarding`
- `project-health-check`
- `safe-code-review`
- `change-impact-analysis`
- `safe-fix-implementation`

## Marketplace Source

Open Codex plugin marketplace and add this repository as a marketplace source.

Use:

```text
Source: dss-time/repo-doctor-skills
Git ref: main
Sparse path: leave empty
```

Or use the full Git URL:

```text
Source: https://github.com/dss-time/repo-doctor-skills.git
Git ref: main
Sparse path: leave empty
```

Then install the `Repo Doctor` plugin.

## Local Marketplace Configuration

The repository also includes:

```text
.agents/plugins/marketplace.json
```

It points to the local plugin path:

```json
{
  "source": {
    "source": "local",
    "path": "./plugins/repo-doctor"
  }
}
```

## Verify Installation

After installing the plugin, restart Codex or start a new conversation in the target repository.

Type:

```text
$
```

You should be able to search for:

```text
repo-onboarding
project-health-check
safe-code-review
change-impact-analysis
safe-fix-implementation
```

## Quick Start

```text
$repo-onboarding

Help me understand this repository before I make changes.
Do not modify code.
```

```text
$project-health-check

Run a project health check.
Do not modify code.
Give me P0/P1/P2/P3 priorities.
```

```text
$safe-code-review

Review my current changes.
Focus on correctness, maintainability, security, performance, types, tests, and redundant code.
```

```text
$change-impact-analysis

I want to refactor src/utils/request.ts.
Before editing, analyze what depends on it, what can break, and what tests I need.
```

```text
$safe-fix-implementation

Please fix the highest-priority issue from the previous project-health-check report.
Do not fix all issues at once.
Start with the smallest safe P0/P1 fix.
After editing, run or suggest validation commands.
```

## 中文快速开始

```text
$repo-onboarding

请帮我理解当前项目。
先不要修改任何代码。
```

```text
$project-health-check

请对当前项目做一次项目体检。
先不要修改代码。
请按照 P0/P1/P2/P3 给出优先级。
```

```text
$safe-fix-implementation

请基于刚才的 project-health-check 报告开始修复。
不要一次修复所有问题。
请优先选择最高优先级且影响范围最小的问题。
修改后请运行或建议验证命令。
```
