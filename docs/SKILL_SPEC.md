# Skill Specification

This document defines the canonical public skill format.

## Directory Layout

Each skill directory must include:

```text
skill-name/
├── skill.yaml
├── instructions.en.md
├── instructions.zh-CN.md
├── output.en.md
├── output.zh-CN.md
├── examples.en.md
├── examples.zh-CN.md
├── references/             # optional, first-level detailed rules
├── assets/                 # optional, reusable output templates
├── scripts/                # optional, deterministic logic with tests
└── tests/
    ├── case-001.en.yaml
    └── case-001.zh-CN.yaml
```

Create this structure with `npm run create:skill`; do not maintain a second scaffold. Optional resource directories must be non-empty, directly referenced by both applicable workflows, and limited to the minimum needed. Do not add Skill-local README, CHANGELOG, or installation files.

## Metadata

`skill.yaml` is the single source of truth for metadata.

Required fields:

```yaml
id: repo.safe-code-review
name:
  en: Safe Code Review
  zh-CN: 安全代码审查
category: engineering
visibility: public
version: 0.1.0
status: draft
default_locale: zh-CN
supported_locales:
  - en
  - zh-CN
description:
  en: Review code changes for correctness, compatibility, security, maintainability, and test coverage.
  zh-CN: 审查代码改动中的正确性、兼容性、安全性、可维护性和测试覆盖。
triggers:
  en:
    - review this code
  zh-CN:
    - 审查代码
tool_requirements:
  filesystem: read
  git: optional
  shell: optional
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
  type: review_report
localization:
  en:
    status: complete
  zh-CN:
    status: complete
```

## Rules

- `visibility: public` skills must not contain private, internal, confidential, customer-specific, or strategy-specific content.
- English and Chinese versions must carry the same permissions and safety boundaries.
- Skill instructions should be specific enough to produce repeatable process, not fixed answers.
- Long reference material should be split into separate files only when needed by a specific skill.
- Keep the core executable workflow concise. Generated plugin `SKILL.md` files use lowercase hyphen-case `name`, a bilingual `description`, no other frontmatter fields, and a 500-line limit.
- Keep platform invocation syntax out of canonical instructions. Adapters and plugin sync own platform-specific rendering.
- Put reusable templates in `assets/`; put only deterministic, validated, tested logic in `scripts/`.
- Skills should separate facts, assumptions, and recommendations.

## Status Values

- `draft`: early and usable for review.
- `beta`: used in real tasks but not stable.
- `stable`: mature public interface.
- `deprecated`: retained only for compatibility.

## Visibility Values

- `public`: safe for this open-source repository.
- `internal`: not allowed in this public repository.
- `private`: not allowed in this public repository.
- `confidential`: not allowed in this public repository.
