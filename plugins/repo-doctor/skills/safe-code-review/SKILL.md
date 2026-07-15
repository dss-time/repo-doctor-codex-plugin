---
name: safe-code-review
description: Review a code change or PR broadly for correctness, compatibility, security, maintainability, and tests. Use security-focused-review, performance-regression-analysis, or api-contract-review when the user requests one bounded specialist assessment; do not implement fixes. 广泛审查代码改动或 PR 的正确性、兼容性、安全性、可维护性和测试。用户要求单一安全、性能回归或 API 契约专项时分别使用对应专项 Skill；本 Skill 不实施修复。
---

# Safe Code Review（安全代码审查）

Use the section matching the user's language. 使用与用户输入语言一致的章节。

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

# Output Format

1. Overall conclusion
2. Findings table: priority, location, evidence, problem, risk, suggested fix, validation
3. File-level review
4. Security and stability risks
5. Test suggestions
6. Final recommendation

---

# 安全代码审查

默认只审查，不修改文件。

## 原则

- 先读代码再判断。
- 没有证据不要编造问题。
- 优先检查正确性、兼容性、安全性和测试覆盖，而不是只看风格。
- 建议删除前先搜索引用。
- 不要在没有兼容性分析的情况下建议修改公共接口。

## 工作流程

1. 确定审查范围。
2. 检查改动文件、相关测试和公共接口。
3. 检查正确性、兼容性、安全、性能、可维护性和测试风险。
4. 按 P0/P1/P2/P3 排序。
5. 给出证据、风险、修复建议和验证方式。

# 输出格式

1. 整体结论
2. 问题表：优先级、位置、证据、问题、风险、建议修复、验证方式
3. 文件级审查
4. 安全和稳定性风险
5. 测试建议
6. 最终建议
