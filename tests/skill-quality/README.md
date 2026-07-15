# Skill Quality Tests

Use `npm run validate` to run strict dependency-free YAML/JSON Schema validation plus repository-level Skill quality checks.

Use `npm test` to validate the bilingual activation contract matrix and the maintainer-tool fixtures. The matrix checks positive, adjacent-skill, negative, assumption-tolerant, and blocking-question cases for all twenty-one Repo Doctor workflows, three Document Data Doctor basic skills, eight Productivity Toolkit skills, and two Skill Maintainer workflows. The required Skill set is discovered from active canonical Pack manifests, so a newly active Skill without activation coverage fails automatically. These are deterministic routing contracts; live-model routing accuracy remains unknown until a separate online evaluation is run.

Future tests may add:

- Live model routing accuracy
- Semantic localization consistency
- Adapter output snapshots
- Broader public/private semantic review
