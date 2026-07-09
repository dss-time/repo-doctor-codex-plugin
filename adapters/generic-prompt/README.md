# Generic Prompt Adapter

The generic prompt adapter outputs ordinary Markdown prompts.

## Assumptions

Generic prompt outputs must not assume:

- File system access
- Git access
- Shell access
- Network access
- Browser tools

unless the target environment explicitly provides those capabilities.

## Output

Generated prompts should include:

- Skill name
- Purpose
- Safety boundary
- Workflow
- Output format
- Evidence requirements
