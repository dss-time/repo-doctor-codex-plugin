# Security Model

## Permission Levels

| Level | Meaning |
|---|---|
| L0 | Read-only analysis. Does not modify files. |
| L1 | Can generate recommendations, but does not write files. |
| L2 | Can modify non-sensitive files. |
| L3 | Can run test or build commands. |
| L4 | Can access external network resources. |
| L5 | Can handle sensitive data. |
| L6 | Can execute destructive actions. Prohibited by default. |

Public skills should default to L0 or L1. L2 and L3 require explicit purpose and validation instructions. L4-L6 should not be used in public base skills unless there is a strong, documented reason.

## Risk Priorities

| Priority | Definition |
|---|---|
| P0 | Blocking issue that may cause data loss, security vulnerabilities, build failure, or severe production incident. |
| P1 | High priority issue that may cause major functional error, compatibility breakage, or clear regression. |
| P2 | Medium priority issue involving maintainability, boundary cases, test gaps, or potential bugs. |
| P3 | Low priority naming, style, minor duplication, or documentation improvement. |

## Public Safety Defaults

- Do not assume file write access.
- Do not assume shell access.
- Do not assume network access.
- Do not process secrets in public examples.
- Do not include business-sensitive rules in public skills.
- Require evidence for findings.
