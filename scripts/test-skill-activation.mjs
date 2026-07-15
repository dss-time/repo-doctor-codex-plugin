import { readFileSync } from "node:fs";
import path from "node:path";
import { compareNames } from "./deterministic-files.mjs";
import { discoverActivePackSkills, discoverPackRoots } from "./sync-pack-plugin.mjs";

const root = process.cwd();

const packRoots = discoverPackRoots(path.join(root, "packs"));
const cases = JSON.parse(
  readFileSync(path.join(root, "tests", "skill-quality", "activation-cases.json"), "utf8"),
);
const requiredSkills = packRoots.flatMap((packRoot) => discoverActivePackSkills(packRoot));
const requiredSkillSet = new Set(requiredSkills);
const extendedCoverageSkills = new Set([
  "repo-onboarding",
  "project-health-check",
  "safe-code-review",
  "change-impact-analysis",
  "safe-fix-implementation",
]);
const requiredKinds = new Set([
  "positive",
  "adjacent",
  "negative",
  "assumption",
  "blocking",
]);
const errors = [];

if (packRoots.length === 0) errors.push("no canonical pack manifests discovered");
if (requiredSkillSet.size !== requiredSkills.length) {
  const seen = new Set();
  const duplicates = new Set();
  for (const skill of requiredSkills) {
    if (seen.has(skill)) duplicates.add(skill);
    seen.add(skill);
  }
  errors.push(`active skill slugs must be globally unique: ${[...duplicates].sort(compareNames).join(", ")}`);
}

for (const skill of requiredSkills) {
  const skillCases = cases.filter((item) => item.subject_skill === skill);
  const kinds = new Set(skillCases.map((item) => item.kind));
  const locales = new Set(skillCases.map((item) => item.locale));
  const minimumCases = extendedCoverageSkills.has(skill) ? 10 : 6;
  if (skillCases.length < minimumCases) errors.push(`${skill}: requires at least ${minimumCases} activation cases`);
  if (!locales.has("en") || !locales.has("zh-CN")) errors.push(`${skill}: requires en and zh-CN cases`);
  for (const kind of requiredKinds) {
    if (!kinds.has(kind)) errors.push(`${skill}: missing ${kind} activation case`);
  }
  if (
    !skillCases.some(
      (item) =>
        item.kind === "positive" &&
        item.expected_skill === skill &&
        Array.isArray(item.must_not_trigger) &&
        !item.must_not_trigger.includes(skill),
    )
  ) {
    errors.push(`${skill}: requires a valid positive case routed to itself`);
  }
  if (extendedCoverageSkills.has(skill)) {
    for (const locale of ["en", "zh-CN"]) {
      if (
        !skillCases.some(
          (item) =>
            item.locale === locale &&
            typeof item.input === "string" &&
            item.input.includes(`$${skill}`) &&
            item.expected_skill === skill &&
            Array.isArray(item.must_not_trigger) &&
            !item.must_not_trigger.includes(skill),
        )
      ) {
        errors.push(`${skill}: requires a valid ${locale} explicit $${skill} case`);
      }
      if (
        !skillCases.some(
          (item) =>
            item.locale === locale &&
            new Set(["adjacent", "negative"]).has(item.kind) &&
            item.expected_skill !== skill &&
            Array.isArray(item.must_not_trigger) &&
            item.must_not_trigger.includes(skill),
        )
      ) {
        errors.push(`${skill}: requires a rerouted ${locale} negative or adjacent case`);
      }
    }
  }
}

const seenInputs = new Set();
const seenIds = new Set();
for (const testCase of cases) {
  if (typeof testCase.id !== "string" || !testCase.id.trim()) errors.push("activation case requires a non-empty id");
  else if (seenIds.has(testCase.id)) errors.push(`duplicate activation id: ${testCase.id}`);
  else seenIds.add(testCase.id);
  if (typeof testCase.input !== "string" || !testCase.input.trim()) {
    errors.push(`${testCase.id ?? "unknown"}: input must be a non-empty string`);
    continue;
  }
  if (!Array.isArray(testCase.must_not_trigger)) {
    errors.push(`${testCase.id}: must_not_trigger must be an array`);
    continue;
  }
  const key = testCase.input.trim().toLowerCase();
  if (seenInputs.has(key)) errors.push(`duplicate activation input: ${testCase.input}`);
  seenInputs.add(key);

  if (!requiredSkillSet.has(testCase.subject_skill)) {
    errors.push(`unknown subject_skill: ${testCase.subject_skill}`);
  }
  if (!requiredKinds.has(testCase.kind)) errors.push(`invalid kind: ${testCase.kind}`);
  if (!new Set(["en", "zh-CN"]).has(testCase.locale)) errors.push(`invalid locale: ${testCase.locale}`);
  if (testCase.expected_skill && testCase.must_not_trigger.includes(testCase.expected_skill)) {
    errors.push(`${testCase.id}: expected_skill is also excluded`);
  }
  for (const skill of [testCase.expected_skill, ...testCase.must_not_trigger].filter(Boolean)) {
    if (!requiredSkillSet.has(skill)) errors.push(`${testCase.id}: referenced skill is not active: ${skill}`);
  }
}

if (errors.length) {
  console.error("Activation contract tests failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Activation contract tests passed for ${cases.length} cases across ${requiredSkills.length} required skills.`);
