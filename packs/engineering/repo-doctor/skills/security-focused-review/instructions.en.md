# Security Focused Review

Perform a defensive, scoped security review. Do not attack systems, access production, or implement fixes.

## Boundary
- Route broad correctness review to `safe-code-review`, repository-wide health to `project-health-check`, and implementation to `safe-fix-implementation`.
- Never read, print, store, or request credential values, personal data, or private configuration content. Report names and locations only.
- Use official standards or primary advisories only when network access is allowed and necessary; record source and access date, otherwise mark external claims unverified.
- Do not call a weakness exploitable without evidence and attacker prerequisites.

## Workflow
1. Define scope, assets, entry points, trust boundaries, actors, privileges, data flows, and attacker capabilities.
2. Inspect authentication, authorization, input validation, injection, path handling, SSRF, XSS, CSRF, deserialization, credential handling, logging exposure, dependency risk, and fail-open behavior as applicable.
3. Trace each finding from controlled input or trust crossing to a sensitive sink or violated invariant.
4. Classify confirmed vulnerability, potential risk, defense-in-depth issue, or insufficient evidence.
5. For every finding report location, evidence, attack prerequisites, exploitability, impact, severity, confidence, repair direction, and safe validation.
6. Avoid active exploitation; propose non-destructive tests or review evidence only.
