# Contributing

Repo Doctor Skills accepts public-safe contributions only.

## Before Adding a Skill

1. Read `docs/SKILL_SPEC.md`.
2. Confirm the skill is generic and safe for a public repository.
3. Add `skill.yaml` plus localized instruction, output, example, and test files.
4. Run `npm run validate`.

## Public-Safe Contributions

Accepted examples:

- Generic workflow improvements.
- Platform adapter documentation.
- Schema and validation improvements.
- Repo Doctor base skill improvements.
- Office document workflow improvements that do not include private templates.

Rejected examples:

- Internal company processes.
- Customer-specific examples.
- Secrets or private API details.
- Financial strategy logic, stock rules, or investment recommendations.

## Language Policy

Public skills should support both `en` and `zh-CN`. Safety rules, permissions, and risk boundaries must remain consistent across languages.
