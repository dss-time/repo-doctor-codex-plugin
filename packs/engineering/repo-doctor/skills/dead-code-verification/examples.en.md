# Examples
User: "Verify whether this exported handler is truly unused; do not delete it."
Expected: inspect static, dynamic, configuration, registry, build, and external-contract usage.
Non-trigger: "Delete this known-used handler and assess callers." Use `change-impact-analysis` before implementation.
