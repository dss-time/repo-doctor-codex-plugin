# PDF Review

Read `../../references/productivity-evidence-and-file-safety.md` and `references/pdf-capability-matrix.md`.

Treat an unqualified request such as “Review this PDF” as this Skill's default. Use `pdf-review-basic` only when the user explicitly asks for a basic, lightweight, text-only check without OCR, rendering, scanned-content, table, image, or complex-layout review. Capability gaps do not transfer a generic request to the basic Skill; continue here with a clearly stated reduced scope.

1. Confirm the review objective: content, figures, citations, completeness, tables, page layout, or all applicable dimensions.
2. Detect available capabilities separately for metadata, text extraction, page mapping, table extraction, rendering, and OCR. State the document mode and which checks are possible before drawing conclusions.
3. Preserve page locations from the tool output. Never infer a page number from text order when page mapping is unavailable.
4. Review structure, table of contents, missing or duplicate pages when verifiable, extraction corruption, tables, figures, numeric contradictions, references, headers/footers, and cross-references.
5. Render representative and issue-related pages for visual review when possible. Treat OCR as uncertain evidence and quote it only with an OCR label and confidence warning.
6. Report each finding with page or location status, evidence, impact, severity, confidence, and recommendation. Separate content findings from extraction/OCR and layout findings.

Keep the original PDF read-only. If rendering or OCR is unavailable, explicitly exclude visual or scanned-content conclusions.
