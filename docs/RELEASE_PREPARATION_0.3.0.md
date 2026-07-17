# Release Preparation: v0.3.0 Stable

## Decision

Promote the validated `v0.3.0-rc.1` content to project version `0.3.0` as a stable, non-prerelease GitHub Release. No code or public Skill slug changed after the RC. Pack/plugin/Skill component versions remain independent, all active Packs and Skills remain `beta`, and the template remains `draft`.

The formal authorization record is intentionally machine-auditable:

- stable release target: 0.3.0
- live model status: UNKNOWN
- maintainer waiver: explicitly authorized
- waiver scope: v0.3.0 only

The waiver scope is `live-model-status-only`. It applies only to the absence of measured hosted-model routing evidence for this project release. It does not and must not waive Schema validation, tests, security checks, permission checks, build reproducibility, CI, artifact integrity, checksums, or post-release verification. It creates no policy precedent for another version.

## Evidence snapshot

- Stable source RC: `v0.3.0-rc.1`, commit `45c2fc46cc824975f6d854939d52deb84381c32b`.
- RC annotated tag object: `819defefe067d99df2e98ec6523266b7d6403db4`.
- Stable target: `0.3.0` / `v0.3.0`.
- Release date: 2026-07-17.
- RC-to-stable functional diff before preparation: empty.
- Active inventory: 4 Packs and 38 Skills.
- Distribution inventory: 7 regular platform targets and 35 ChatGPT ZIPs.
- Workflow evidence: 11 canonical workflows and 3 Golden Workflows.
- Activation evidence: 281 cases and 38/38 required Skills.
- Live-model status: `UNKNOWN`.
- RC `main` and tag CI: successful.
- Open repository issues at promotion preflight: none.

## Compatibility and migration

No public Skill slug is removed. Consumers upgrading from `v0.3.0-rc.1` need no workflow migration; rebuilding or reinstalling only changes provenance from prerelease to stable. Consumers upgrading from `v0.2.0` should review the new requirements, work-item, routing, testing, and handoff boundaries documented in the stable Release Notes.

## Component versions and maturity

Project, Pack/plugin, Skill versions, and maturity are separate:

- Repo Doctor Pack/plugin: 0.6.0.
- Productivity Toolkit Pack/plugin: 0.1.0.
- Skill Maintainer Pack/plugin: 0.2.0.
- Document Data Doctor Pack: 0.1.0.
- Active Packs and Skills: `beta`.
- Template Pack and Skill: `draft`.

## Required release assets

- 25 versioned `rd-*.zip` files.
- 8 versioned `pt-*.zip` files.
- 2 versioned `sm-*.zip` files.
- SHA-256 checksum file.
- Stable Release Notes.
- Release Manifest tied to the stable release commit and annotated tag.

## Gate conclusion

**GO FOR STABLE RELEASE** only after all non-waived local gates, repeated deterministic builds, sensitive-content scans, remote `main` CI, immutable annotated tag creation, tag CI, GitHub stable Release creation, asset upload, latest-stable verification, and post-release download verification succeed.
