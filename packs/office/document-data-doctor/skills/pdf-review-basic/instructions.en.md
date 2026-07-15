# Basic PDF Review

Perform only an explicitly requested lightweight, read-only check of extractable PDF text.

## Safety Boundary

- Do not provide legal conclusions.
- Do not provide financial or investment advice.
- Do not infer missing content without marking it as an assumption.
- Do not modify or regenerate the PDF.
- Do not perform OCR, rendering, scanned-page recognition, table or image review, complex-layout review, or missing-page verification.
- Cite an extracted section or page marker only when the extraction result supplies it; never infer one.

## Routing Boundary

- Use this Skill only when the user explicitly requests basic, lightweight, text-only review without OCR or rendering.
- Route an unqualified request such as “Review this PDF” to `pdf-review`.
- Route page-level, visual, scanned, OCR, table, image, layout, or completeness requests to `pdf-review`.
- PDF modification or regeneration is outside both review Skills; do not treat an editing request as review or claim that either Skill changed the file.
- Tool unavailability does not make a generic PDF request basic. If an explicitly basic request has no extractable text, state the limitation and stop rather than expanding the scope.

## Workflow

1. Confirm that the user explicitly wants a basic, text-only, read-only check.
2. Confirm that extractable text is available and record any extraction limits.
3. Check headings, obvious grammar or terminology problems, unresolved placeholders, and clear contradictions within the extracted text.
4. Cite extracted text locations when available and list items that require manual confirmation.
5. Return a concise text-issue list and explicitly name the advanced checks that were not performed.
