# Output Contract

1. Problem summary
2. Environment and exact reproduction conditions
3. Executed diagnostic commands, working directories, and exit status
4. Command results, including commands that failed, were not run, or were blocked
5. Evidence table with source, observation, and `Observed` / `Reproduced` / `Inferred` / `Unverified` / `Blocked` status
6. Execution path and causal chain
7. Root cause, labeled confirmed or hypothesized
8. Alternative hypotheses and falsification status
9. Impact scope
10. Minimum repair direction without implementation
11. Regression test recommendations without creating tests
12. Confidence and evidence needed next
13. Unverified and blocked items with reasons

Never claim a confirmed root cause without direct supporting evidence. Never claim `Reproduced` or a passing test unless the corresponding command actually ran successfully under the reported conditions.
