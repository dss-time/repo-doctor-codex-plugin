# 新增 Skills 指南

这份文档说明如何新增一个公开安全的 Skill。

## 什么是 Skill？

Skill 是一个结构化工作流包。在本仓库中，它包含元数据、本地化说明、输出约定、示例和测试。

## 什么是 Pack？

Pack 是一组相关 skills。例如：

```text
packs/engineering/repo-doctor/
packs/office/document-data-doctor/
```

## 新增 Skill 应该放在哪里

新 skill 应放到：

```text
packs/<category>/<pack-name>/skills/<skill-name>/
```

不要从这些地方开始：

- `dist/`：这是生成结果，永远不要直接修改。
- `plugins/`：这是旧版 Codex 插件兼容结构。

如果一个 skill 需要支持多平台，先放到 `packs/`，再由构建脚本生成平台输出。

## 标准 Skill 结构

```text
skill-name/
├── skill.yaml
├── instructions.en.md
├── instructions.zh-CN.md
├── output.en.md
├── output.zh-CN.md
├── examples.en.md
├── examples.zh-CN.md
└── tests/
    ├── case-001.en.yaml
    └── case-001.zh-CN.yaml
```

## `skill.yaml`

`skill.yaml` 是元数据唯一来源。必需字段：

```yaml
id: example.example-skill
name:
  en: Example Skill
  zh-CN: 示例 Skill
category: example
visibility: public
version: 0.1.0
status: draft
default_locale: zh-CN
supported_locales:
  - en
  - zh-CN
description:
  en: A short public-safe description.
  zh-CN: 一句公开安全的简短说明。
triggers:
  en:
    - example trigger
  zh-CN:
    - 示例触发词
tool_requirements:
  filesystem: read
  git: none
  shell: none
  web: none
permissions:
  read_files: true
  write_files: false
  run_shell_commands: false
  access_network: false
  destructive_actions_allowed: false
risk_level:
  default: read_only
output_schema:
  type: example_report
localization:
  en:
    status: complete
  zh-CN:
    status: complete
```

## `instructions.en.md` 和 `instructions.zh-CN.md`

这里写 Agent 应该执行的工作流。

建议包含：

- 用途
- 安全边界
- 分步骤流程
- 证据要求
- 不应该做什么

中文应自然，不要机械翻译英文，但必须保持相同的安全规则和权限边界。

## `output.en.md` 和 `output.zh-CN.md`

这里定义报告或回复格式。

好的输出格式应说明：

- 必需章节
- 是否需要表格
- 证据字段
- 人工确认项
- 限制或假设

## `examples.en.md` 和 `examples.zh-CN.md`

示例应简短且公开安全。

建议包含：

- 示例用户请求
- 预期行为
- 重要安全提醒

不要包含客户数据、内部模板、secret 或私有策略。

## 测试文件

使用轻量 YAML：

```yaml
input: "Review this example input."
expected:
  must_include:
    - evidence
    - limitations
  must_not:
    - private data
```

中英文都要有：

```text
tests/case-001.en.yaml
tests/case-001.zh-CN.yaml
```

## 运行校验

```bash
npm run validate
```

提交前应修复所有报错。

## 运行构建

```bash
npm run build
```

可以检查 `dist/` 下的生成结果，但不要直接修改或提交生成文件。

## 更新 Pack README

如果新增 skill 改变了 pack 能力，需要更新：

```text
packs/<category>/<pack-name>/README.md
packs/<category>/<pack-name>/README.zh-CN.md
packs/<category>/<pack-name>/pack.yaml
```

## public-safe 判断

公开 skill 不应包含：

- 公司内部模板或流程
- 客户案例
- 私有数据源
- API key、token、secret
- 财务、股票或投资策略逻辑
- 付费数据源接入实现

如果内容依赖私有业务规则，请放到私有 pack。

## 完整示例

复制：

```text
packs/_template/
```

然后把：

```text
packs/_template/skills/example-skill/
```

改成你的目标路径：

```text
packs/<category>/<pack-name>/skills/<new-skill-name>/
```

再更新 `skill.yaml`、双语说明、输出格式、示例、测试和 pack README。
