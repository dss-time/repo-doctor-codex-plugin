# Contributing

Repo Doctor Skills accepts public-safe contributions only.

## Source of Truth

Maintain Skill and Pack logic only under `packs/`. The `plugins/` tree is synchronized compatibility and distribution output, and `dist/` contains generated cross-platform artifacts. Do not manually maintain a second copy of canonical content in either generated tree.

## Before Adding a Skill

1. Read `docs/SKILL_SPEC.md`.
2. Confirm the skill is generic and safe for a public repository.
3. Use the existing `npm run create:skill -- ...` scaffold; do not copy a second creation system.
4. Add localized workflows, output contracts, examples, activation cases, UI metadata, and only necessary referenced resources.
5. Run `npm run validate`, `npm test`, and `npm run build`.

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

## Quality Gates

The project intentionally has no standalone `format` or `lint` script and does not add empty scripts or formatter/linter dependencies merely to fill those labels. Use the existing evidence-based gates:

```bash
find scripts -type f -name '*.mjs' -exec node --check {} \;
npm run validate
npm test
npm run build
node scripts/check-skill-quality.mjs --check-dist
git diff --check
```

`npm test` includes isolated deterministic-build and ZIP-order fixtures. Before release, run the full build twice and confirm the generated-tree fingerprint is unchanged. A unified formatter or linter can be evaluated later if the executable codebase grows enough to justify one; it is not a current release blocker.
