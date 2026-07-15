---
name: release-readiness-check
description: Perform an evidence-backed, read-only release gate for a specific candidate version and return GO, GO WITH CONDITIONS, or NO-GO after checking workspace state, versioning, changes, validation, compatibility, rollback, documentation, and sensitive artifacts. Use for release candidates; do not use as a broad project health check or execute release, commit, tag, push, or version changes. 针对具体候选版本执行有证据的只读发布门禁，检查工作区、版本、变更、验证、兼容性、回滚、文档和敏感产物后给出 GO、GO WITH CONDITIONS 或 NO-GO。用于候选版本；不作为广泛项目体检，也不执行发布、提交、tag、push 或版本修改。
---

# Release Readiness Check（发布就绪检查）

Use the section matching the user's language. 使用与用户输入语言一致的章节。

# Release Readiness Check

Evaluate a specific release candidate and return an evidence-backed `GO`, `GO WITH CONDITIONS`, or `NO-GO`. Keep the check read-only.

## Boundary

- Require a release object such as a version, branch, commit, tag candidate, build artifact, or explicit change range. Route broad repository diagnosis to `project-health-check`.
- Do not publish, deploy, commit, tag, push, change versions, edit files, or approve despite unresolved blockers.
- Use only repository-provided validation commands and actual results. Mark checks not run and explain why.
- Do not expose credential values or private data when scanning evidence.
- A checklist without reproducible evidence is insufficient.

## Workflow

1. Define the release object, target environment, change range, included artifacts, and comparison baseline.
2. Inspect workspace status, version consistency, change scope, dependency lockfiles, generated outputs, and untracked or temporary files.
3. Identify repository-provided test, build, lint, typecheck, schema, package, and release verification commands. Record actual results or `not run`.
4. Check API, database, configuration, permission, runtime, and platform compatibility; migration ordering; rollback feasibility; and forward/backward compatibility where applicable.
5. Check documentation, CHANGELOG, release notes, deprecations, migration guidance, and operator/user communication against the actual change.
6. Scan for credential-like material, private data, debug code, disabled checks, temporary files, absolute machine paths, and unexpected generated artifacts without revealing sensitive values.
7. Classify findings as blockers, pre-release conditions, recommendations, or post-release observations. Attach evidence and an owner/action when available.
8. Evaluate rollback readiness, observability, monitoring signals, and stop or rollback thresholds.
9. Return exactly one decision: `GO`, `GO WITH CONDITIONS`, or `NO-GO`, with conditions and next steps tied to evidence.

# Output Contract

1. Release object and baseline
2. Check scope and evidence sources
3. Passed checks with commands or file evidence
4. Blocking items
5. Conditional items and pre-release actions
6. Risks and post-release observations
7. Rollback readiness and thresholds
8. Final decision: GO, GO WITH CONDITIONS, or NO-GO
9. Next steps

List unrun checks explicitly. Do not perform release actions.

---

# 发布就绪检查

评估具体候选版本，并给出有证据的 `GO`、`GO WITH CONDITIONS` 或 `NO-GO`。保持只读。

## 职责边界

- 需要版本、分支、commit、候选 tag、构建产物或明确变更范围等发布对象；广泛仓库诊断交给 `project-health-check`。
- 不发布、不部署、不提交、不打 tag、不 push、不修改版本或文件，也不得在阻塞项未解决时批准发布。
- 只使用仓库提供的验证命令和真实结果；未运行项必须标明并解释原因。
- 扫描证据时不得暴露密钥或私有数据。
- 没有可复现证据的笼统 checklist 不足以支持结论。

## 工作流程

1. 明确发布对象、目标环境、变更范围、包含产物和比较基线。
2. 检查工作区状态、版本一致性、变更范围、依赖锁文件、生成物、未跟踪或临时文件。
3. 识别仓库提供的测试、构建、lint、typecheck、schema、打包和发布验证命令；记录真实结果或“未运行”。
4. 检查 API、数据库、配置、权限、运行时和平台兼容性，以及迁移顺序、回滚可行性和适用的前后向兼容。
5. 根据实际变更检查文档、CHANGELOG、发布说明、弃用、迁移指南和用户/运维通知。
6. 扫描疑似密钥、私有数据、调试代码、禁用检查、临时文件、机器绝对路径和异常生成物，但不展示敏感值。
7. 将发现分类为阻塞项、发布前条件、建议或发布后观察项；附证据及可用的负责人/动作。
8. 评估回滚准备、可观察性、监控信号以及停止或回滚阈值。
9. 只给一个结论：`GO`、`GO WITH CONDITIONS` 或 `NO-GO`，条件和下一步必须关联证据。

# 输出契约

1. 发布对象与基线
2. 检查范围与证据来源
3. 通过项及命令或文件证据
4. 阻塞项
5. 条件项与发布前动作
6. 风险与发布后观察项
7. 回滚准备与阈值
8. 最终结论：GO、GO WITH CONDITIONS 或 NO-GO
9. 下一步

明确列出未运行检查，不执行发布动作。
