# Skill Maintenance Boundaries

## Repository architecture

- Treat `packs/<category>/<pack>/skills/<slug>/` as canonical source.
- Treat `plugins/<plugin>/skills/` as synchronized compatibility or distribution output.
- Treat `dist/` as generated output; never maintain business logic there.
- Reuse `npm run create:skill`, shared sync helpers, validators, activation contracts, and platform builders before adding new tooling.

## Deterministic checks

Use scripts for facts that can be decided without semantic judgment:

- folder, slug, ID, frontmatter, and required-file rules;
- line limits, resource paths, forbidden files, orphan resources, and UI metadata shape;
- duplicate IDs/slugs, Pack/plugin/marketplace references, permissions contradictions;
- obvious credential patterns, machine paths, generated-target coverage, exit codes, and repeat-build hashes.

Never claim a deterministic checker has judged trigger accuracy, bilingual naturalness, workflow quality, or business safety.

## Model judgment

Use evidence-backed model review for:

- whether repeated work deserves a Skill;
- semantic duplication and adjacent-trigger conflict;
- description breadth, natural bilingual phrasing, and intent coverage;
- workflow executability, ordering, stopping conditions, failure handling, and permission design;
- whether progressive resources are necessary and non-duplicative;
- whether outputs are verifiable and finding severity matches real impact.

## Public boundary

Do not publish organization-specific procedures, customer material, credentials, private paths, non-public data access, or restricted investment and trading logic. If a request requires those details, keep the public interface generic and route private implementation to a separate private distribution.
