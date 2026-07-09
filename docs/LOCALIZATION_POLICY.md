# Localization Policy

## Supported Locales

The public core supports:

- `en`
- `zh-CN`

## Single Source of Truth

`skill.yaml` is the only metadata source. English and Chinese instructions must not become separate forked skills.

## Consistency Requirements

- Safety rules must be equivalent across languages.
- Permission rules must be equivalent across languages.
- Risk boundaries must be equivalent across languages.
- Output schemas must be equivalent across languages.
- Examples may be culturally natural, but must not change the skill's behavior.

## Runtime Language Behavior

- If the user asks in Chinese, default to Chinese output.
- If the user asks in English, default to English output.
- If the user's language is mixed, use the dominant language.
- Keep code identifiers, paths, package names, API names, commands, and error messages unchanged.

## Chinese LLM Defaults

Adapters for Chinese LLM environments default to `zh-CN`, explicit safety rules, and fixed output formats.

## Private Finance Packs

Private finance packs may start with Chinese-only support if the team using them operates primarily in Chinese. Public interface documents should still explain safety boundaries in both English and Chinese where practical.
