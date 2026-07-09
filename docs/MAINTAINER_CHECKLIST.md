# Maintainer Checklist

Use this checklist before release, merge, or major documentation updates.

## Documentation

- [ ] `README.md` and `README.zh-CN.md` are both updated when user-facing behavior changes.
- [ ] `docs/QUICK_START.md` and `docs/QUICK_START.zh-CN.md` still match the current commands and outputs.
- [ ] `docs/ADDING_SKILLS.md` and `docs/ADDING_SKILLS.zh-CN.md` still match the current skill structure.
- [ ] `CHANGELOG.md` includes the relevant public changes.

## Skill Structure

For each new or changed skill, confirm these files exist:

- [ ] `skill.yaml`
- [ ] `instructions.en.md`
- [ ] `instructions.zh-CN.md`
- [ ] `output.en.md`
- [ ] `output.zh-CN.md`
- [ ] `examples.en.md`
- [ ] `examples.zh-CN.md`
- [ ] `tests/case-001.en.yaml`
- [ ] `tests/case-001.zh-CN.yaml`

## Metadata

- [ ] `skill.yaml` includes required fields: `id`, `name`, `category`, `visibility`, `version`, `status`, `default_locale`, `supported_locales`, `description`, `triggers`, `tool_requirements`, `permissions`, `risk_level`, `output_schema`, and `localization`.
- [ ] `visibility` is correct for a public repository.
- [ ] `supported_locales` includes `en` and `zh-CN`.
- [ ] Permissions explicitly declare file write, shell, network, and destructive-action behavior.

## Public Safety

- [ ] No token, API key, credential, or secret was committed.
- [ ] No company-internal workflow, template, customer case, or private data source was added.
- [ ] No stock pool, buy/sell signal, investment strategy, valuation weight, or non-public business rule was added to public skills.
- [ ] Finance-related content remains interface-only and safety-boundary-only.

## Validation

- [ ] `npm run validate` passes.
- [ ] `npm run build` passes.
- [ ] `dist/` generated files are not committed.
- [ ] Only `dist/.gitkeep` is kept.

## Compatibility

- [ ] `plugins/repo-doctor/` still exists.
- [ ] `plugins/repo-doctor/.codex-plugin/plugin.json` still points to the legacy skills directory.
- [ ] The original legacy Repo Doctor skill files still exist.
- [ ] Adapter documentation still matches generated output behavior.
