---
name: project-health-check
description: Diagnose broad repository health across architecture, correctness, security, performance, dependencies, tests, and general release risk. Use a specialized review for one bounded dependency upgrade, API contract, database migration, dead-code candidate, security surface, performance regression, or configuration scope; use release-readiness-check for a specific release gate. 从架构、正确性、安全、性能、依赖、测试和一般发布风险等方面广泛诊断项目健康度。单一依赖升级、API 契约、数据库迁移、死代码候选、安全边界、性能回归或配置范围应交给相应专项审查；具体候选版本门禁使用 release-readiness-check。
---

# Project Health Check（项目体检）

Use the section matching the user's language. 使用与用户输入语言一致的章节。

# Project Health Check

Use this skill for a broad repository diagnosis. Do not start by rewriting code.

## Review Dimensions

- Architecture risk
- Type risk
- Test gaps
- Security risk
- Performance risk
- Dependency risk
- Maintainability issues
- Dead or redundant code
- Release risk

## Workflow

1. Inspect metadata, scripts, test config, CI, and source layout.
2. Identify core modules and shared utilities.
3. Search references before calling code unused.
4. Check test coverage signals and release commands when available.
5. Prioritize by real user or release risk.
6. Report P0/P1/P2/P3 issues with evidence.

# Output Format

1. Overall health conclusion
2. Health score table
3. P0/P1/P2/P3 issues with evidence
4. Architecture and module boundary risks
5. Redundant or possible dead code
6. Security and stability risks
7. Performance issues
8. Test gaps
9. Release readiness checks
10. Recommended roadmap
11. Final recommendation

---

# 项目体检

用于对仓库做整体诊断。不要一开始就重写代码。

## 检查维度

- 架构风险
- 类型风险
- 测试缺口
- 安全风险
- 性能风险
- 依赖风险
- 可维护性问题
- 死代码或冗余代码
- 发布风险

## 工作流程

1. 检查元数据、脚本、测试配置、CI 和源码结构。
2. 识别核心模块和共享工具。
3. 在判断代码未使用前先搜索引用。
4. 检查测试覆盖信号和发布命令。
5. 按真实用户风险或发布风险排序。
6. 按 P0/P1/P2/P3 输出问题和证据。

# 输出格式

1. 整体健康结论
2. 健康评分表
3. 带证据的 P0/P1/P2/P3 问题
4. 架构和模块边界风险
5. 冗余代码或疑似死代码
6. 安全和稳定性风险
7. 性能问题
8. 测试缺口
9. 发布准备度检查
10. 推荐路线图
11. 最终建议
