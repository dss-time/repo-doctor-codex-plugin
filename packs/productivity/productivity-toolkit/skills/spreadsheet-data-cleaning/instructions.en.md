# Spreadsheet Data Cleaning

Read `../../references/productivity-evidence-and-file-safety.md`, then read `references/cleaning-rules.md`. Use `assets/cleaning-audit-template.md` for the audit log.

Use this Skill when the user requests cleaning, normalization, transformation, filling, deduplication, repair, or a new cleaned output. Use `excel-data-quality-check-basic` for a read-only quality audit that only reports missing values, duplicates, types, formats, or anomalies. Missing spreadsheet tools make an authorized cleaning request degrade to a cleaning plan; they do not turn it into a basic read-only audit.

1. Confirm the source, new output path and format, key columns, uniqueness rules, protected formulas, valid ranges, and business exceptions. Never overwrite the source; keep cleaning results in a separate output.
2. Verify that a spreadsheet or delimited-file reader is available. Without one, inspect only accessible text/metadata and return a cleaning specification, not a cleaned-file claim.
3. Profile sheets, dimensions, headers, inferred types, missingness, duplicates, whitespace, encoding, formats, formulas, enums, and potential outliers before changing data.
4. Define each rule with target columns, condition, transformation, ambiguity policy, and expected count. Quarantine or flag ambiguous records; do not guess critical identifiers or delete plausible values.
5. Apply rules to a new output. Preserve raw values in the audit trail and keep row-level traceability when practical.
6. Reopen and validate the output: encoding, sheet names, row/column counts, formulas, data types, key uniqueness, missingness, and reconciled summaries. Report unverified checks.
7. Return before/after statistics, applied/skipped rules, exceptions, audit location, output location, and residual risks.
