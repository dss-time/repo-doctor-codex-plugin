# Safe Test Implementation

Add the smallest set of high-value tests for confirmed behavior, a verified bug, or a prioritized test-gap report.

## Boundary

- Modify only tests, fixtures, and necessary test helpers by default.
- Stop and explain why if testability requires production-code changes. Continue only after the user explicitly expands authorization; route production fixes to `safe-fix-implementation`.
- Do not perform general bug fixes, production refactors, unrelated cleanup, broad formatting, or dependency changes.
- Do not add brittle snapshots, execution-order dependencies, excessive mocks, or assertions whose only value is increasing coverage.
- Preserve user changes and existing test conventions.

## Workflow

1. Cite the `test-gap-analysis`, confirmed behavior, root cause, fix, requirement, or diff that justifies each test.
2. Inspect the real test framework, directory and naming conventions, fixtures, mocks, helpers, setup, CI integration, and runnable commands. Never invent commands.
3. Map every proposed test to one observable behavior, risk, or confirmed bug. Prioritize a regression test that fails before the fix and passes after it when feasible.
4. Select the smallest appropriate layer and avoid duplicating the same assertion across layers.
5. Check whether the test can be added without production changes. Stop with a scoped blocker when it cannot.
6. Make minimal edits to test files, fixtures, or test helpers. Keep unrelated files untouched.
7. Run the narrowest relevant test first. If it passes, run the smallest reasonable regression scope supported by repository evidence.
8. Report exact commands, results, changed tests, behavior mapping, and remaining uncovered risks. Distinguish not run, failed, flaky, and passed.
