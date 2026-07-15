---
name: safe-test-implementation
description: Add the smallest set of high-value tests from a test-gap analysis, confirmed behavior, or verified fix, following the repository's real framework and conventions. Use to edit tests, fixtures, and necessary test helpers only; do not use for general bug fixes, production refactors, or coverage-only assertions, and stop before production-code changes unless the user explicitly expands scope. 根据测试缺口分析、已确认行为或已验证修复，遵循仓库真实框架和约定最小化补充高价值测试。用于修改测试、fixture 和必要测试辅助代码；不用于通用 Bug 修复、生产代码重构或只为覆盖率添加断言，必须改生产代码时除非用户明确扩大范围否则停止。
---

# Safe Test Implementation（安全补充测试）

Use the section matching the user's language. 使用与用户输入语言一致的章节。

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

# Output Contract

1. Test basis and evidence
2. Added or modified tests and files
3. Behavior-risk-test mapping
4. Commands run, with evidence for each command
5. Results: passed, failed, flaky, or not run
6. Production-code boundary or blockers
7. Remaining uncovered risks

Do not claim a test passed unless its command completed successfully.

---

# 安全补充测试

针对已确认行为、已验证 Bug 或已排序测试缺口，最小化补充高价值测试。

## 职责边界

- 默认只修改测试、fixture 和必要测试辅助代码。
- 如果可测试性要求修改生产代码，停止并说明原因；只有用户明确扩大授权后才继续，生产修复交给 `safe-fix-implementation`。
- 不做通用 Bug 修复、生产代码重构、无关清理、大范围格式化或依赖变更。
- 不添加脆弱快照、执行顺序依赖、过度 mock 或只为提高覆盖率的断言。
- 保留用户改动和现有测试约定。

## 工作流程

1. 引用支撑每项测试的 `test-gap-analysis`、已确认行为、根因、修复、需求或 diff。
2. 检查真实测试框架、目录与命名约定、fixture、mock、辅助代码、setup、CI 集成和可运行命令；不得编造命令。
3. 将每个拟新增测试映射到一个可观察行为、风险或已确认 Bug；可行时优先添加修复前失败、修复后通过的回归测试。
4. 选择最小合适层级，避免跨层重复同一断言。
5. 检查能否不改生产代码完成测试；不能时输出范围明确的阻塞项并停止。
6. 最小化修改测试、fixture 或测试辅助文件，不碰无关文件。
7. 先运行最小相关测试；通过后，再运行仓库证据支持的最小合理回归范围。
8. 报告准确命令、结果、改动测试、行为映射和未覆盖风险；区分未运行、失败、flaky 和通过。

# 输出契约

1. 测试依据与证据
2. 添加或修改的测试及文件
3. 行为—风险—测试映射
4. 实际运行命令及其仓库依据
5. 结果：通过、失败、flaky 或未运行
6. 生产代码边界或阻塞项
7. 未覆盖风险

测试命令未成功完成时，不得声称测试通过。
