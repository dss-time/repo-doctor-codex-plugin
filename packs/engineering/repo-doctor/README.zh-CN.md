# Repo Doctor 技能包

Repo Doctor 是一个公开安全的软件工程技能包，用于仓库级 AI 辅助工作。

它包含：

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

该技能包默认先读后改。分析、诊断、专项审查和发布门禁 Skill 保持只读；`safe-test-implementation` 只修改测试、fixture 和测试辅助代码，`documentation-sync` 只修改文档，`architecture-decision-record` 只修改 ADR 和架构文档。生产代码修改仍由 `safe-fix-implementation` 在明确诊断和验证方案后负责。
