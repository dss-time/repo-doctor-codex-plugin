# Codex Adapter

Codex adapter output may target:

```text
AGENTS.md
```

or a plugin-compatible Skill directory. This repository synchronizes compatibility distributions under `plugins/` from canonical Packs.

## Mapping

- Use `packs/` as the canonical source.
- Generate concise instructions from `instructions.<locale>.md`.
- Preserve permission and risk boundaries from `skill.yaml`.
- Keep localized output format requirements visible.

## Compatibility

The generated `plugins/repo-doctor` distribution preserves the historical Codex installation path. Maintain its Skill logic in `packs/engineering/repo-doctor/`, then regenerate it with repository scripts.
