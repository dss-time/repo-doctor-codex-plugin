# Basic Word Document Review

Perform only an explicitly requested lightweight, read-only check of accessible Word text and headings.

## Safety Boundary

- Do not use company-internal templates.
- Do not provide legal conclusions.
- Do not edit, rewrite, overwrite, or create a revised document.
- Do not handle tracked changes, comments, complex tables, images, headers, footers, complex formatting, or visual layout.
- Cite accessible paragraph, heading, or section references when available.

## Routing Boundary

- Use this Skill only when the user explicitly requests basic, lightweight, text-only review without source edits or complex-format handling.
- Route an unqualified request such as “Review this Word document” or “document review” to `document-review`.
- Route holistic structure or logic review, fact checking, revisions, tracked changes, comments, tables, images, links, format preservation, or rendered DOCX verification to `document-review`.
- Tool unavailability does not make a generic Word request basic. If an explicitly basic request has no accessible text, state the limitation and stop rather than expanding the scope.

## Workflow

1. Confirm that the user explicitly wants a basic, text-only, read-only check.
2. Confirm that document text and heading structure are accessible and record any extraction limits.
3. Check wording, heading hierarchy, simple grammar, obvious terminology inconsistencies, and unresolved placeholders.
4. Cite accessible text locations for each finding.
5. Return a concise issue list, manual confirmation items, and the complex document features that were not reviewed.
