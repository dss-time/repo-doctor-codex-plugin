# Document Review

Read `../../references/productivity-evidence-and-file-safety.md` and `references/document-review-checklist.md`.

Treat an unqualified request such as “Review this document” or “Review this Word document” as this Skill's default. Use `word-document-review-basic` only when the user explicitly requests a basic, lightweight, read-only check limited to accessible text and headings without editing, tracked changes, comments, complex tables, images, or formatting preservation. Capability gaps do not transfer a generic request to the basic Skill; continue here with a clearly stated reduced scope.

1. Confirm the audience, purpose, review depth, source of truth, allowed fact-checking, and whether the user wants findings only or an edited copy.
2. Verify the available reader and, for DOCX edits, the ability to preserve structure and render the result. If unavailable, review only accessible text and state formatting limits.
3. Review the document as a whole before line edits: structure, argument, missing sections, contradictions, unsupported claims, figures, citations, terminology, grammar, links, tables, captions, and formatting consistency.
4. Report issues with location, evidence, impact, and a concrete suggestion. Classify them as required, recommended, or optional. Do not rewrite the whole document by default.
5. If edits are explicitly requested, preserve meaning, headings, tables, links, terminology, and traceability; write a new file unless overwrite is explicit.
6. Reopen and render the edited artifact when tools support it. Report which textual, structural, link, and visual checks passed or remained unavailable.

Use `content-consistency-check` when the primary task is reconciling values across multiple artifacts.
