# 维护者检查清单

发布、合并或大幅更新文档前，请使用这份清单。

## 文档

- [ ] 用户可见行为变化时，同时更新 `README.md` 和 `README.zh-CN.md`。
- [ ] `docs/QUICK_START.md` 和 `docs/QUICK_START.zh-CN.md` 仍匹配当前命令和输出。
- [ ] `docs/ADDING_SKILLS.md` 和 `docs/ADDING_SKILLS.zh-CN.md` 仍匹配当前 skill 结构。
- [ ] `CHANGELOG.md` 已记录相关公开变化。

## Skill 结构

每个新增或修改的 skill 都应包含：

- [ ] `skill.yaml`
- [ ] `instructions.en.md`
- [ ] `instructions.zh-CN.md`
- [ ] `output.en.md`
- [ ] `output.zh-CN.md`
- [ ] `examples.en.md`
- [ ] `examples.zh-CN.md`
- [ ] `tests/case-001.en.yaml`
- [ ] `tests/case-001.zh-CN.yaml`

## 元数据

- [ ] `skill.yaml` 包含必需字段：`id`、`name`、`category`、`visibility`、`version`、`status`、`default_locale`、`supported_locales`、`description`、`triggers`、`tool_requirements`、`permissions`、`risk_level`、`output_schema` 和 `localization`。
- [ ] `visibility` 适合公开仓库。
- [ ] `supported_locales` 包含 `en` 和 `zh-CN`。
- [ ] 权限明确声明是否允许写文件、运行命令、联网和破坏性操作。

## 公开安全

- [ ] 没有提交 token、API key、凭证或 secret。
- [ ] 没有加入公司内部流程、模板、客户案例或私有数据源。
- [ ] 没有把股票池、买卖信号、投资策略、估值权重或非公开业务规则加入 public skills。
- [ ] 财务相关内容仍然只作为接口规范和安全边界存在。

## 验证

- [ ] `npm run validate` 通过。
- [ ] `npm run build` 通过。
- [ ] `dist/` 生成文件没有被提交。
- [ ] 只保留 `dist/.gitkeep`。

## 兼容性

- [ ] `plugins/repo-doctor/` 仍然存在。
- [ ] `plugins/repo-doctor/.codex-plugin/plugin.json` 仍然指向 legacy skills 目录。
- [ ] 原 Repo Doctor legacy skill 文件仍然存在。
- [ ] adapters 文档仍然匹配生成输出行为。
