# Chinese LLM Adapter

The Chinese LLM adapter targets environments where `zh-CN` is the default language and tool access may be limited.

The current build emits copyable prompt packs under `dist/qwen-zh-CN/` and `dist/kimi-zh-CN/`. These outputs do not assume `$skill-name` invocation syntax.

## Defaults

- Default locale: `zh-CN`
- Fixed output formats
- Explicit permission boundaries
- Explicit evidence requirements
- No assumption of file system, terminal, Git, or network access

## Safety

Public outputs must not include internal workflows, private templates, secrets, or financial strategy logic.
