# Repo Doctor Skills v0.3.0 Stable Release

> Stable release date: 2026-07-17. This is the authorized non-prerelease for tag `v0.3.0`. All deterministic release gates pass. Live-model routing accuracy remains **UNKNOWN** under the version-scoped maintainer waiver recorded in `docs/RELEASE_PREPARATION_0.3.0.md`.

## Highlights

- 4 active Packs and 38 active Skills, including 25 Repo Doctor, 8 Productivity Toolkit, 2 Skill Maintainer, and 3 Document Data Doctor Skills.
- 11 canonical workflows and 3 bilingual Golden Workflows.
- 281 activation contracts with 38/38 required Skills represented.
- 7 regular platform targets and 35 standalone ChatGPT Skill ZIPs: 25 `rd-*`, 8 `pt-*`, and 2 `sm-*`.
- Canonical Pack, generated plugin, documentation, permission, workflow, and distribution drift checks.

## Stability statement

Project version `0.3.0` is the first stable project-channel release after `v0.3.0-rc.1`. Project stability does not promote Pack or Skill maturity: all 4 active Packs and all 38 active Skills remain `beta`, while the template Pack and Skill remain `draft`. Pack/plugin/Skill component versions remain independent.

The stable decision is based on deterministic repository evidence, successful RC publication and CI, no code drift after the RC, and explicit maintainer authorization. It does not claim bug-free behavior or measured hosted-model routing accuracy.

## Compatibility

No public Skill slug is removed between `v0.3.0-rc.1` and `v0.3.0`; the stable release uses the same validated functional content. Existing `v0.2.0` users gain the four additional Repo Doctor Skills, canonical workflow registry, Golden Workflows, offline evaluation tooling, read-only doctor command, and strengthened quality gates introduced by the RC.

Component versions remain:

- Repo Doctor Pack/plugin: 0.6.0.
- Productivity Toolkit Pack/plugin: 0.1.0.
- Skill Maintainer Pack/plugin: 0.2.0.
- Document Data Doctor Pack: 0.1.0.

## Upgrade

From `v0.3.0-rc.1`:

1. Fetch or download `v0.3.0`.
2. Rebuild or reinstall the same platform artifact if you want the stable tag provenance.
3. No Skill slug or workflow migration is required.

From `v0.2.0`:

1. Fetch or download `v0.3.0`.
2. Rebuild platform outputs or reinstall the relevant plugin/standalone ChatGPT ZIP.
3. Review the new requirements, workflow, test-mode, and session-handoff boundaries before automation.

## Validation evidence

The release process requires successful script syntax checks, documentation generation and drift checks, release metadata validation, Schema/Skill/workflow validation, the full test suite, quality checks, two identical builds, sensitive-content scans, ZIP integrity checks, remote `main` and tag CI, asset checksum verification, and post-release download verification.

The GitHub Release contains 38 assets: 35 Skill ZIPs, `SHA256SUMS.txt`, these Release Notes, and a Release Manifest tied to the release commit and annotated tag.

## Known limitation and maintainer waiver

Live-model routing accuracy is **UNKNOWN**. Offline activation contracts, deterministic validation, and Golden Workflows are not represented as hosted-model evidence. The maintainer waiver is explicitly authorized only for project release `v0.3.0` and only for the missing Live-model measurement (waiver scope: v0.3.0 only). It does not waive or suppress Schema, test, security, permission, build, CI, artifact, or checksum gates. Future stable releases require a new decision if Live-model evidence remains unavailable.

## Historical RC

The `v0.3.0-rc.1` tag and GitHub prerelease remain preserved as immutable release history. The stable release does not replace, retag, or edit that RC.
