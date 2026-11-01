"""Tests for react-research-brief. Put cases in evals.json (export them from the AgentSababa Lab) or edit CASES, then run:  python evals.py"""

import importlib.util
import json
import os
import re
import sys

spec = importlib.util.spec_from_file_location("agent", "agent.py")
agent = importlib.util.module_from_spec(spec)
spec.loader.exec_module(agent)
agent.APPROVAL = "none"  # tests must not wait for a person

CASES = [
    {
        "task": "What are the main trade-offs between SQLite and Postgres for a small SaaS product?",
        "must_contain": [],      # strings the answer has to include, e.g. ["postgres", "sqlite"]
        "must_not_contain": [],  # strings that signal a failure, e.g. ["i cannot"]
        "max_tokens": 100000,
    },
]

# evals.json: {"cases": [{"task": "...", "expect": "text the answer must contain, or /regex/i, one rule per line"}]}
# This is the same format the AgentSababa Lab exports, so the cases you tuned there run here and in CI.
if os.path.exists("evals.json"):
    with open("evals.json") as fh:
        data = json.load(fh)
    cases = data["cases"] if isinstance(data, dict) else data
    CASES = [{"task": c["task"], "expect": c.get("expect", ""), "must_contain": [], "must_not_contain": [], "max_tokens": 100000} for c in cases if c.get("task")]


def rule_ok(answer, expect):
    """Every non-empty line is a rule: plain text (case-insensitive) or /regex/flags."""
    for rule in [x.strip() for x in str(expect or "").split("\n") if x.strip()]:
        m = re.fullmatch(r"/(.+)/([a-z]*)", rule)
        if m:
            if not re.search(m.group(1), answer, re.I if "i" in m.group(2) else 0):
                return False
        elif rule.lower() not in answer.lower():
            return False
    return True


def main():
    failed = 0
    for i, case in enumerate(CASES, 1):
        before = agent.used_tokens()
        answer = agent.run(case["task"])
        low = answer.lower()
        missing = [s for s in case["must_contain"] if s.lower() not in low]
        banned = [s for s in case["must_not_contain"] if s.lower() in low]
        spent = agent.used_tokens() - before
        rules_ok = rule_ok(answer, case.get("expect", ""))
        ok = not missing and not banned and rules_ok and spent <= case["max_tokens"] and not answer.startswith("[stopped")
        print(("PASS" if ok else "FAIL") + f" case {i}: {case['task'][:60]}  ({spent} tokens)")
        if not ok:
            failed += 1
            print("   missing:", missing, "banned found:", banned, "rules ok:", rules_ok)
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
