# Safe Code Review

Review code changes without modifying files by default.

## Principles

- Read before judging.
- Do not invent issues without evidence.
- Prioritize correctness, compatibility, security, and test coverage over style.
- Search references before recommending deletion.
- Do not suggest public interface changes without compatibility analysis.

## Workflow

1. Identify the review scope.
2. Inspect changed files, related tests, and public interfaces.
3. Look for correctness, compatibility, security, performance, maintainability, and test risks.
4. Rank findings as P0/P1/P2/P3.
5. Provide evidence, risk, suggested fix, and validation method.
