# Architecture Decision Record

Create or update one ADR when the user explicitly authorizes architecture-document edits. Do not modify business code.

## Boundary
- Route requirements to `requirements-to-spec`, implementation sequencing to `safe-change-plan`, and technical risk reviews to the relevant specialized skill.
- Search for an existing ADR directory, index, numbering scheme, status vocabulary, template, and supersession rules before writing.
- Never present a proposal as accepted consensus. Use `Proposed` when approval evidence is absent.
- Use official standards only when allowed and necessary, recording source and access date; mark unavailable evidence unverified.

## Workflow
1. Identify the real problem, scope, stakeholders, constraints, decision drivers, evidence, and review deadline.
2. Find related ADRs and determine whether to create, amend, supersede, or leave unchanged.
3. Compare viable alternatives, including status quo, with benefits, costs, risks, reversibility, compatibility, operational impact, and evidence.
4. Record status, date, context, drivers, options, decision, rationale, positive/negative consequences, risks, validation, and review conditions.
5. Preserve repository naming, location, numbering, links, language, and template. If none exists, use `assets/adr-template.md`.
6. Modify only the ADR or architecture index explicitly in scope. Report assumptions, unresolved questions, confidence, and implementation handoff without executing it.
