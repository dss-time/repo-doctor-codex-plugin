# Quick Start

This guide is for first-time users.

## What You Are Looking At

This repository has two practical uses:

1. Use the existing Repo Doctor Codex plugin under `plugins/repo-doctor/`.
2. Use `packs/` as the canonical source for cross-platform AI skills and build outputs into `dist/`.

If you only want to try the existing Codex plugin, read [LEGACY_CODEX_PLUGIN.md](LEGACY_CODEX_PLUGIN.md). If you want to build platform outputs, continue here.

## Clone the Repository

```bash
git clone https://github.com/dss-time/repo-doctor-codex-plugin.git
cd repo-doctor-codex-plugin
```

## Validate Skills

```bash
npm run validate
```

This checks that public skills have the required files, metadata, locale coverage, permissions, and public-safe boundaries.

## Build All Outputs

```bash
npm run build
```

This generates platform outputs under `dist/`.

## Build a Chinese Generic Prompt Pack

```bash
node scripts/build-skills.mjs --target generic-zh-CN
```

Output:

```text
dist/generic-zh-CN/
```

Each file is a copyable Markdown prompt.

## Build a Codex / CodeX Chinese Output

```bash
node scripts/build-skills.mjs --target codex-zh-CN
```

Output:

```text
dist/codex-zh-CN/AGENTS.md
```

Use this by copying or referencing `AGENTS.md` in a Codex / CodeX-style project context that supports agent instruction files.

## Build a Claude Code Chinese Output

```bash
node scripts/build-skills.mjs --target claude-code-zh-CN
```

Output:

```text
dist/claude-code-zh-CN/.claude/skills/<skill-name>/SKILL.md
```

Use this by copying the generated `.claude/skills/` directory into the target Claude Code environment.

## View the Output

```bash
find dist -maxdepth 4 -type f | sort
```

Generated files are ignored by Git. Do not edit `dist/` directly. Edit `packs/`, then rebuild.

## Common Questions

### Should I edit `plugins/` or `packs/`?

Edit `packs/` for new cross-platform skill work. `plugins/` is the legacy Codex plugin compatibility structure.

### Should I commit generated `dist/` files?

No. `dist/*` is ignored. Keep only `dist/.gitkeep`.

### Do I need dependencies?

No package installation is currently required for the provided scripts. They use Node built-in modules.

### Where do I add a new skill?

Start with [ADDING_SKILLS.md](ADDING_SKILLS.md) and copy the template from `packs/_template/`.
