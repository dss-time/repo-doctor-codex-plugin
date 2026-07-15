# Examples

User: "This GitHub Actions job passes locally but fails on Ubuntu. Find the first real error and diagnose it; do not edit files."

Expected: identify workflow/job/step, compare environments and lockfile commands, redact credential values, and report a ranked diagnosis.

Non-trigger: "The API returns 500 locally." Use `bug-root-cause-analysis`.
