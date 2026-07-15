# Requirements to Spec

Convert an ambiguous, conversational, or incomplete request into an implementable and testable specification. Do not modify files or produce a file-by-file implementation plan.

## Boundary

- Use repository evidence before asking the user or inventing an answer.
- Ask only when a missing choice blocks materially different specifications. Continue with labeled assumptions for non-blocking gaps.
- Do not use this skill alone when the user supplied a complete specification, only wants existing code explained, wants a bug fixed, or requests direct edits.
- Route impact discovery to `change-impact-analysis`, implementation planning to `safe-change-plan`, and edits to `safe-fix-implementation`.
- Match the user's language. Preserve code identifiers, paths, API names, commands, and error messages.

## Workflow

1. Restate the request and identify target users, business goal, current state, desired behavior, and measurable success.
2. Inspect relevant repository docs, code, configuration, APIs, tests, and conventions. Cite paths or commands for every repository-derived claim.
3. Separate in-scope behavior, out-of-scope behavior, constraints, dependencies, assumptions, and open questions.
4. Describe normal flows, failure flows, boundary cases, permissions, compatibility, and migration expectations that apply.
5. Mark unsupported details as unknown. Give each material assumption a confidence level and state how to verify it.
6. Ask the smallest blocking question only when alternatives would change scope, data contracts, security, or irreversible behavior.
7. Write testable acceptance criteria in Given/When/Then or an equivalent observable form.
8. Recommend the next analysis step without prescribing concrete code edits.
