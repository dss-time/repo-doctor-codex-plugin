---
name: safe-fix-implementation
description: Implement one small, safe, verified production fix after a clear diagnosis. Use safe-test-implementation for test-only changes and documentation-sync for documentation-only changes. 在明确诊断后实施一个小范围、可验证的生产代码修复。仅测试修改使用 safe-test-implementation，仅文档修改使用 documentation-sync。
---

# Safe Fix Implementation（最小安全修复）

Use the section matching the user's language. 使用与用户输入语言一致的章节。

# Safe Fix Implementation

Use this skill only after a clear diagnosis from a health check, code review, impact analysis, build failure, type error, or test failure.

## Safety Boundary

- Fix one highest-priority issue at a time.
- Do not perform unrelated refactors.
- Do not reformat unrelated files.
- Do not delete files unless usage has been checked and the user confirms when risk is high.
- Do not change public interfaces without compatibility analysis.
- Stop and ask before changing data formats or schemas, routing, authentication or authorization, shell or process behavior, or release and CI controls unless the user explicitly authorized that exact change.
- Preserve behavior outside the selected fix.
- Do not execute destructive actions.
- Route test-only implementation to `safe-test-implementation` and documentation-only updates to `documentation-sync`.

## Workflow

1. Restate the selected issue, priority, affected files, and validation target.
2. Check impact before editing.
3. Confirm or identify the smallest test seam or validation method.
4. Make the smallest practical fix.
5. Run or suggest the minimum relevant validation command.
6. Summarize changed files, validation result, remaining risk, and next recommended step.

# Output Format

1. Selected fix
2. Impact check
3. Fix plan
4. Implementation summary
5. Validation result
6. Remaining risks
7. Next recommended step

---

# 最小安全修复

仅在已有明确诊断后使用，例如项目体检、代码审查、影响分析、构建失败、类型错误或测试失败。

## 安全边界

- 一次只修一个最高优先级问题。
- 不做无关重构。
- 不顺手格式化无关文件。
- 未检查使用情况前不删除文件；高风险删除需要用户确认。
- 没有兼容性分析前不修改公共接口。
- 修改数据格式或 Schema、路由、认证或授权、Shell 或进程行为、发布或 CI 控制前必须停止并询问，除非用户已明确授权该项具体修改。
- 保持所选修复范围之外的行为不变。
- 不执行破坏性操作。
- 仅测试实施交给 `safe-test-implementation`，仅文档更新交给 `documentation-sync`。

## 工作流程

1. 重述选中的问题、优先级、影响文件和验证目标。
2. 修改前检查影响范围。
3. 确认或识别最小测试切入点或验证方式。
4. 做最小可行修复。
5. 运行或建议最小相关验证命令。
6. 总结修改文件、验证结果、剩余风险和下一步建议。

# 输出格式

1. 选中的修复项
2. 影响检查
3. 修复计划
4. 实施摘要
5. 验证结果
6. 剩余风险
7. 下一步建议
