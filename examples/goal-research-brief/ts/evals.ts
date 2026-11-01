// Tests for goal-research-brief. Put cases in evals.json (export them from the AgentSababa Lab) or edit CASES, then run:  npx tsx evals.ts

import { existsSync, readFileSync } from "node:fs";
import { run, usedTokens } from "./agent";

type Case = { task: string; expect?: string; mustContain: string[]; mustNotContain: string[]; maxTokens: number };
let CASES: Case[] = [
  {
    task: "What are the main trade-offs between SQLite and Postgres for a small SaaS product?",
    mustContain: [] as string[], // strings the answer has to include
    mustNotContain: [] as string[], // strings that signal a failure
    maxTokens: 100000,
  },
];

// evals.json: {"cases": [{"task": "...", "expect": "text the answer must contain, or /regex/i, one rule per line"}]}
// This is the same format the AgentSababa Lab exports, so the cases you tuned there run here and in CI.
if (existsSync("evals.json")) {
  const data = JSON.parse(readFileSync("evals.json", "utf8"));
  const list: { task?: string; expect?: string }[] = Array.isArray(data) ? data : data.cases;
  CASES = list.filter((c) => c.task).map((c) => ({ task: c.task as string, expect: c.expect || "", mustContain: [], mustNotContain: [], maxTokens: 100000 }));
}

function ruleOk(answer: string, expect = ""): boolean {
  for (const rule of expect.split("\n").map((x) => x.trim()).filter(Boolean)) {
    const m = /^\/(.+)\/([a-z]*)$/.exec(rule);
    if (m) { if (!new RegExp(m[1], m[2]).test(answer)) return false; }
    else if (!answer.toLowerCase().includes(rule.toLowerCase())) return false;
  }
  return true;
}

async function main() {
  let failed = 0;
  for (const [i, c] of CASES.entries()) {
    const before = usedTokens();
    const answer = await run(c.task);
    const low = answer.toLowerCase();
    const missing = c.mustContain.filter((s) => !low.includes(s.toLowerCase()));
    const banned = c.mustNotContain.filter((s) => low.includes(s.toLowerCase()));
    const spent = usedTokens() - before;
    const ok = !missing.length && !banned.length && ruleOk(answer, c.expect) && spent <= c.maxTokens && !answer.startsWith("[stopped");
    console.log((ok ? "PASS" : "FAIL") + " case " + (i + 1) + ": " + c.task.slice(0, 60) + "  (" + spent + " tokens)");
    if (!ok) {
      failed++;
      console.log("   missing:", missing, "banned found:", banned);
    }
  }
  process.exit(failed ? 1 : 0);
}

main();
