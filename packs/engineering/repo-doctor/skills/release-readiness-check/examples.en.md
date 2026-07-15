# Examples

User: "Check whether commit abc123 is ready for the 1.4.0 release. Do not tag, push, or change versions."

Expected: inspect the candidate and baseline, record real validation evidence, classify blockers and conditions, and return one release decision.

Non-trigger: "Assess the overall health of this repository." Use `project-health-check`.
