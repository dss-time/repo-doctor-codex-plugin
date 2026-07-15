# Test Gap Analysis

Analyze coverage gaps for a requirement, root cause, existing test suite, or Git diff. Do not create or modify tests.

## Boundary

- Do not treat a coverage percentage as sufficient evidence of behavioral coverage.
- Do not generate bulk test code or modify code, tests, configuration, dependencies, or documentation.
- If the user explicitly requests implementation, route to `safe-test-implementation` when available; otherwise state that an implementation skill is required.
- Keep broad repository health findings in `project-health-check` and general code findings in `safe-code-review`.
- Match the user's language and preserve technical identifiers.

## Workflow

1. Define the requirement, root cause, diff, modules, or behaviors in scope.
2. Discover test frameworks, layers, naming and fixture conventions, CI integration, and real runnable commands from manifests and configuration. Mark inferred commands; never invent them.
3. Map each behavior and risk to existing tests using file paths, test names, assertions, fixtures, mocks, or execution evidence.
4. Classify each scenario as covered, partially covered, missing, or unknown.
5. Check normal, failure, boundary, permission, concurrency, compatibility, migration, and regression scenarios when applicable.
6. Select the appropriate layer: unit, integration, contract, end-to-end, or manual validation. Avoid duplicating the same assertion across every layer.
7. Prioritize gaps by failure impact, likelihood, change risk, observability, and test value rather than coverage percentage alone.
8. Recommend focused test cases and verified commands without writing test code.
9. State evidence limits and the inputs needed to resolve unknown coverage.
