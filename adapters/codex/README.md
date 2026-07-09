# Codex Adapter

Codex adapter output may target:

```text
AGENTS.md
```

or a plugin-compatible skill directory. This repository keeps the existing `plugins/repo-doctor/.codex-plugin/` structure for compatibility.

## Mapping

- Use `packs/` as the canonical source.
- Generate concise instructions from `instructions.<locale>.md`.
- Preserve permission and risk boundaries from `skill.yaml`.
- Keep localized output format requirements visible.

## Compatibility

The current `plugins/repo-doctor` directory remains available for Codex plugin installation while the new pack model matures.
