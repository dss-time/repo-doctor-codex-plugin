# Repo Doctor Pack

Repo Doctor is a public-safe engineering pack for repository-level AI-assisted work.

It includes:

- `repo-onboarding`
- `requirements-to-spec`
- `bug-root-cause-analysis`
- `project-health-check`
- `safe-code-review`
- `change-impact-analysis`
- `safe-change-plan`
- `test-gap-analysis`
- `safe-test-implementation`
- `ci-failure-diagnosis`
- `documentation-sync`
- `release-readiness-check`
- `dependency-upgrade-analysis`
- `api-contract-review`
- `database-migration-review`
- `dead-code-verification`
- `security-focused-review`
- `performance-regression-analysis`
- `architecture-decision-record`
- `configuration-audit`
- `safe-fix-implementation`

The pack defaults to read-first behavior. Analysis, diagnosis, specialized review, and release-gate skills are read-only. `safe-test-implementation` may edit tests, fixtures, and test helpers; `documentation-sync` may edit documentation; `architecture-decision-record` may edit ADR and architecture documentation only. Production-code editing remains the responsibility of `safe-fix-implementation` after a clear diagnosis and validation plan.
