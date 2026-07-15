# CI Failure Diagnosis

Diagnose a CI-specific failure using workflow definitions, logs, repository configuration, and environment evidence. Do not implement the fix.

## Boundary

- Require a CI run, log excerpt, or identifiable failed workflow context. Route ordinary runtime bugs without CI context to `bug-root-cause-analysis`.
- Keep all files unchanged. Provide repair direction only.
- Never print credential values, request credential disclosure, or recommend disabling permissions, checks, branch protection, or other security controls.
- Redact credential-like values and distinguish a missing permission or credential reference from its value.
- Do not treat downstream cancellations or cascaded failures as root cause.

## Workflow

1. Identify the provider, workflow, run, job, matrix entry, step, command, and failure time from available evidence.
2. Locate the first trustworthy error before cascaded errors, retries, skipped steps, and cleanup failures.
3. Classify the failure as code, test, dependency, cache, permission/credential, runner environment, configuration, infrastructure, or flaky/unknown.
4. Compare CI and local runtime versions, operating system, architecture, environment variable presence, dependency lockfile, install mode, shell, working directory, services, caches, and commands.
5. Trace the evidence chain from CI input/state to the failing command, failure point, and job result.
6. Propose safe local reproduction steps only from repository and workflow evidence. Mark unverified commands as hypotheses.
7. Separate confirmed root cause, primary hypothesis, alternatives, and unknowns. Try to falsify flaky and cache explanations.
8. Give the minimum repair direction, validation path, confidence, and evidence needed next without editing files.
