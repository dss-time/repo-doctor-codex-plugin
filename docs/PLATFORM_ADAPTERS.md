# Platform Adapters

Canonical skills live under `packs/`. Adapters render them into platform-specific formats.

## Claude Code

Target output:

```text
.claude/skills/<skill-name>/SKILL.md
```

Claude Code expects compact skill instructions. Adapter output should merge `skill.yaml`, localized instructions, and output format into a single `SKILL.md`.

## Codex / CodeX

Target output:

```text
AGENTS.md
```

or a plugin/skill document under a compatible plugin structure. This repository keeps the existing `plugins/repo-doctor/.codex-plugin/` path for compatibility while treating `packs/` as the canonical source.

## Cursor

Target output:

```text
.cursor/rules/*.mdc
```

or `AGENTS.md` when rule files are not desired. Cursor outputs should be concise and scoped because rule files may be loaded broadly.

## Generic Prompt Pack

Target output is ordinary Markdown. It should not assume file system, shell, Git, browser, or network tools unless the skill metadata explicitly allows them.

## Chinese LLM Environments

Chinese LLM adapters should:

- Default to `zh-CN`.
- Use explicit rules and fixed output formats.
- Avoid assuming file system, terminal, or network access.
- Keep safety boundaries visible in the generated prompt.
- Prefer structured outputs when downstream systems need predictable parsing.
