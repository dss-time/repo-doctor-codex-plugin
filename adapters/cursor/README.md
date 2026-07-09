# Cursor Adapter

Cursor adapter output should render skills into:

```text
.cursor/rules/*.mdc
```

or `AGENTS.md` when a project prefers a single agent instruction file.

## Guidance

- Keep rules short because Cursor rules may be loaded broadly.
- Prefer router-style rules for large packs.
- Do not include private or confidential workflow details in generated public rules.
- Preserve the canonical permission boundaries.
