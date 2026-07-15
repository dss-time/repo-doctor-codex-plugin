---
name: requirements-to-spec
description: Convert an ambiguous or incomplete request into an implementable, testable specification by using repository evidence, explicit assumptions, scoped questions, flows, boundaries, and acceptance criteria. Use before impact analysis or implementation planning; do not use alone for complete specifications, code explanation, bug fixing, or direct edits. 将模糊、口语化或不完整的需求基于仓库证据整理为可实施、可验证的规格，明确假设、问题、流程、边界与验收标准。用于影响分析或实施计划之前；完整规格、代码解释、Bug 修复或直接修改请求不应单独使用。
---

# Requirements to Spec（需求澄清与规格化）

Use the section matching the user's language. 使用与用户输入语言一致的章节。

# Requirements to Spec

Convert an ambiguous, conversational, or incomplete request into an implementable and testable specification. Do not modify files or produce a file-by-file implementation plan.

## Boundary

- Use repository evidence before asking the user or inventing an answer.
- Ask only when a missing choice blocks materially different specifications. Continue with labeled assumptions for non-blocking gaps.
- Do not use this skill alone when the user supplied a complete specification, only wants existing code explained, wants a bug fixed, or requests direct edits.
- Route impact discovery to `change-impact-analysis`, implementation planning to `safe-change-plan`, and edits to `safe-fix-implementation`.
- Match the user's language. Preserve code identifiers, paths, API names, commands, and error messages.

## Workflow

1. Restate the request and identify target users, business goal, current state, desired behavior, and measurable success.
2. Inspect relevant repository docs, code, configuration, APIs, tests, and conventions. Cite paths or commands for every repository-derived claim.
3. Separate in-scope behavior, out-of-scope behavior, constraints, dependencies, assumptions, and open questions.
4. Describe normal flows, failure flows, boundary cases, permissions, compatibility, and migration expectations that apply.
5. Mark unsupported details as unknown. Give each material assumption a confidence level and state how to verify it.
6. Ask the smallest blocking question only when alternatives would change scope, data contracts, security, or irreversible behavior.
7. Write testable acceptance criteria in Given/When/Then or an equivalent observable form.
8. Recommend the next analysis step without prescribing concrete code edits.

# Output Contract

1. Requirements summary
2. Users and goals
3. Current behavior, with evidence or `Unknown`
4. Target behavior
5. In scope
6. Out of scope
7. Constraints and dependencies
8. Assumptions, confidence, and verification
9. Open questions, labeled blocking or non-blocking
10. Acceptance criteria covering normal, failure, boundary, and compatibility behavior
11. Risks
12. Recommended next step

Do not include a file-by-file implementation plan or edits.

---

# 需求澄清与规格化

把模糊、口语化或不完整的需求整理为可实施、可验证的规格。不要修改文件，也不要输出逐文件代码实施方案。

## 职责边界

- 先用仓库证据消除疑问，再考虑询问用户或作出假设。
- 只有缺失选择会导致规格实质分叉时才询问；非阻塞缺口使用显式假设继续。
- 用户已提供完整规格、只想解释现有代码、要求修 Bug 或直接修改时，不要单独使用本 Skill。
- 影响发现交给 `change-impact-analysis`，实施规划交给 `safe-change-plan`，实际修改交给 `safe-fix-implementation`。
- 输出语言跟随用户输入；代码标识符、路径、API 名称、命令和错误信息保持原样。

## 工作流程

1. 重述需求，识别目标用户、业务目标、当前状态、期望行为和可衡量成功标准。
2. 检查相关仓库文档、代码、配置、API、测试和约定；仓库事实必须引用路径或命令证据。
3. 分离范围内、范围外、约束、依赖、假设和待确认问题。
4. 描述正常流程、异常流程、边界条件，以及适用的权限、兼容性和迁移要求。
5. 将无证据内容标为未知；为重要假设标注置信度和验证方式。
6. 只有不同选择会改变范围、数据契约、安全性或不可逆行为时，才提出最少的阻塞问题。
7. 用 Given/When/Then 或等价的可观察结构编写验收标准。
8. 建议下一项分析工作，但不要指定具体代码改动。

# 输出契约

1. 需求摘要
2. 用户与目标
3. 当前行为，附证据或标记“未知”
4. 目标行为
5. 范围内
6. 范围外
7. 约束与依赖
8. 假设、置信度与验证方式
9. 待确认问题，标明阻塞或非阻塞
10. 验收标准，覆盖正常、异常、边界和兼容性行为
11. 风险
12. 建议下一步

不得包含逐文件实施计划或实际修改。
