# Repo Doctor Skills

A bilingual, cross-platform AI Skills framework for repository diagnosis, code review, document review, and safe agent workflows.

Repo Doctor Skills is an early open-source framework for turning expert workflows into structured AI Skill packs. It includes a canonical `packs/` source format, validation scripts, build adapters, and a legacy Codex plugin for existing Repo Doctor users.

This project was originally published as `repo-doctor-codex-plugin` and still preserves the legacy Codex plugin structure.

## What This Project Can Do

- Define skills with metadata, permissions, localization, examples, and tests.
- Validate public skills before they are published.
- Build platform outputs for generic Markdown prompts, Codex / CodeX, and Claude Code.
- Keep public-safe packs separate from private or internal implementations.
- Preserve the original Repo Doctor Codex plugin while introducing a cross-platform source layout.

## What This Project Is Not

- It is not a loose prompt collection.
- It is not a private workflow repository.
- It is not a finance, stock, or investment strategy library.
- It does not include company templates, customer cases, secrets, or private data connectors.

## Who This Is For

- Developers building reusable Agent workflows.
- Open-source maintainers who want public-safe skill packs.
- Teams that need a clean split between public skills and private internal packs.
- Users who want to run Repo Doctor as a Codex plugin today and later build cross-platform outputs from the same source model.

## Quick Start

Clone the repository and run validation:

```bash
git clone https://github.com/dss-time/repo-doctor-skills.git
cd repo-doctor-skills
npm run validate
```

Build all supported outputs:

```bash
npm run build
```

Build one target:

```bash
node scripts/build-skills.mjs --target generic-zh-CN
node scripts/build-skills.mjs --target generic-en
node scripts/build-skills.mjs --target codex-zh-CN
node scripts/build-skills.mjs --target claude-code-zh-CN
```

Generated files are written to `dist/`. The generated output is ignored by Git; only `dist/.gitkeep` is kept.

For a step-by-step guide, see [docs/QUICK_START.md](docs/QUICK_START.md).

## Two Ways To Use This Repository

### 1. Use the Legacy Codex / CodeX Plugin Directly

If you only want the original Repo Doctor Codex plugin, use:

```text
plugins/repo-doctor/
```

The plugin exposes the original five skills:

- `repo-onboarding`
- `project-health-check`
- `safe-code-review`
- `change-impact-analysis`
- `safe-fix-implementation`

Installation and marketplace setup are documented in [docs/LEGACY_CODEX_PLUGIN.md](docs/LEGACY_CODEX_PLUGIN.md).

### 2. Use This As a Cross-Platform Skills Source Repository

If you want to build skills for multiple platforms, edit canonical sources under:

```text
packs/
```

Then run:

```bash
npm run validate
npm run build
```

Use adapter output from `dist/`:

- `dist/generic-zh-CN/` for Chinese generic Markdown prompts
- `dist/generic-en/` for English generic Markdown prompts
- `dist/codex-zh-CN/AGENTS.md` for Codex / CodeX-style usage
- `dist/claude-code-zh-CN/.claude/skills/<skill-name>/SKILL.md` for Claude Code

## `plugins/` vs `packs/`

| Path | Purpose | Edit First? |
|---|---|---|
| `plugins/` | Legacy Codex plugin compatibility. Existing users can install Repo Doctor from here. | No, unless maintaining the legacy plugin. |
| `packs/` | Canonical cross-platform skill source. New skills and updates should start here. | Yes. |
| `adapters/` | Platform-specific guidance for rendering skills. | Only when adapter behavior changes. |
| `dist/` | Generated output from `scripts/build-skills.mjs`. | Never edit directly. |

## Supported Platforms

- Codex / CodeX: legacy plugin under `plugins/`, or generated `dist/codex-zh-CN/AGENTS.md`
- Claude Code: generated `.claude/skills/<skill-name>/SKILL.md`
- Cursor: adapter guidance under `adapters/cursor/`
- Generic Prompt Pack: generated Markdown prompts
- Chinese LLM environments: adapter guidance under `adapters/chinese-llm/`

## Supported Languages

The public core supports:

- `en`
- `zh-CN`

`skill.yaml` is the metadata source of truth. English and Chinese instructions must keep the same permissions, risk boundaries, and workflow behavior.

## Repository Layout

```text
docs/       Standards, quick starts, safety model, localization, and adapter docs
schemas/    JSON schemas for skills and packs
adapters/   Platform-specific adapter notes
packs/      Canonical public skill packs and templates
examples/   Public-safe examples and sample outputs
tests/      Validation fixtures
scripts/    Validation and build scripts
dist/       Generated adapter outputs, ignored except .gitkeep
plugins/    Legacy Codex plugin compatibility structure
```

## Validate Skills

```bash
npm run validate
```

The validator checks required files, required metadata, locale coverage, permissions, read-only boundaries, and obvious sensitive terms in public skills.

## Build Platform Outputs

```bash
npm run build
```

Or build a single target:

```bash
node scripts/build-skills.mjs --target generic-zh-CN
node scripts/build-skills.mjs --target generic-en
node scripts/build-skills.mjs --target codex-zh-CN
node scripts/build-skills.mjs --target claude-code-zh-CN
```

## Add a Skill

New skills should start in `packs/`, not `plugins/` or `dist/`.

Use the template:

```text
packs/_template/
```

Every skill should include:

```text
skill.yaml
instructions.en.md
instructions.zh-CN.md
output.en.md
output.zh-CN.md
examples.en.md
examples.zh-CN.md
tests/case-001.en.yaml
tests/case-001.zh-CN.yaml
```

After adding or editing a skill:

```bash
npm run validate
npm run build
```

## Create a New Skill

Use the scaffold script:

```bash
npm run create:skill -- --pack engineering/repo-doctor --name bug-diagnosis --id repo.bug-diagnosis --category engineering
```

The new skill is created under `packs/`. Do not edit `dist/` directly, and do not start by changing the legacy `plugins/` structure. After creating the skill, update its generated files, then run:

```bash
npm run validate
npm run build
```

Detailed guidance is in [docs/ADDING_SKILLS.md](docs/ADDING_SKILLS.md).

## Public / Private Boundary

This public repository may include:

- Skill standards
- Generic workflows
- Platform adapters
- Repo Doctor base skills
- Basic PDF, Word, Excel, and report skills
- Public-safe examples and tests
- Finance skill interface and safety boundaries

This public repository must not include:

- Company-internal templates or workflows
- Customer cases
- Private data sources
- API keys, tokens, or secrets
- Stock screening rules
- Buy, sell, or hold logic
- Technical indicator strategy combinations
- Valuation model weights
- Portfolio construction rules
- Paid data source integration logic

See [docs/PUBLIC_PRIVATE_BOUNDARY.md](docs/PUBLIC_PRIVATE_BOUNDARY.md).

## Current Status

This project is early and experimental. The public structure, schemas, and adapters are intentionally conservative and may change as real platform integration work matures.

## Related Docs

- [Quick Start](docs/QUICK_START.md)
- [Adding Skills](docs/ADDING_SKILLS.md)
- [Legacy Codex Plugin](docs/LEGACY_CODEX_PLUGIN.md)
- [Skill Specification](docs/SKILL_SPEC.md)
- [Platform Adapters](docs/PLATFORM_ADAPTERS.md)
- [Security Model](docs/SECURITY_MODEL.md)
- [Localization Policy](docs/LOCALIZATION_POLICY.md)
- [Public / Private Boundary](docs/PUBLIC_PRIVATE_BOUNDARY.md)
- [Glossary](docs/GLOSSARY.md)

## License

MIT. See [LICENSE](LICENSE).
