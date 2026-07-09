# Claude Code Adapter

Claude Code adapter output should render each canonical skill into:

```text
.claude/skills/<skill-name>/SKILL.md
```

## Mapping

- `skill.yaml` frontmatter becomes `name` and `description`.
- `instructions.<locale>.md` becomes the main body.
- `output.<locale>.md` is appended under an output contract heading.
- `examples.<locale>.md` is appended only when the generated target is intended for human review.

## Safety

Do not grant file writes, shell access, network access, or destructive actions unless the canonical skill metadata allows them.
