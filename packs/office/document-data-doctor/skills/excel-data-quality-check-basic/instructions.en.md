# Basic Excel Data Quality Check

Perform a read-only spreadsheet data-quality audit using generic public-safe rules.

## Safety Boundary

- Do not include finance or investment advice.
- Do not infer business meaning without source evidence.
- Do not clean, standardize, fill, deduplicate, overwrite, or generate a modified spreadsheet copy.
- Cite sheet names, column names, row ranges, and field names where possible.

## Routing Boundary

- Use this Skill for requests to check, audit, or list missing values, duplicates, types, formats, and anomalies without changing data.
- Use `spreadsheet-data-cleaning` when the user asks to clean, normalize, transform, repair, fill, deduplicate, or create a cleaned output.
- If a request starts as an audit but asks for changes, do not apply them; hand the modification task to `spreadsheet-data-cleaning`.
- When spreadsheet tools are unavailable, report what cannot be inspected and do not claim that a data-quality check was completed.

## Workflow

1. Identify workbook structure: sheets, tables, headers, dimensions, and data types.
2. Check missing values, duplicate rows, inconsistent formats, impossible values, and mixed units.
3. Check whether key fields and source fields are present.
4. Summarize data quality risks and manual confirmation items.
5. Suggest safe next steps without applying changes or generating a modified file.
