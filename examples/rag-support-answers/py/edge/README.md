# rag-support-answers: edge deploy

This is the same agent as a small HTTP service that runs on Cloudflare Workers or Vercel Edge. It does not need a server.

## What it can and cannot do
- Tools available: none.
- Left out (no disk or shell on the edge): search_docs.
- One request, one answer. It keeps no history, files or memory between calls.
- Reasoning options, team shapes, evals and guardrails from the full agent are not in this version. It is a plain tool loop with your system prompt, turn limit (10) and token budget.
- fetch_url only reaches public http(s) addresses and does not follow redirects.

## Cloudflare Workers
```
npm i -g wrangler        # or use npx
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put AGENT_API_TOKEN
npx wrangler deploy
```

## Vercel
Put `agent-core.js` at the project root and `api/agent.js` in the `api` folder. Then:
```
npx vercel env add ANTHROPIC_API_KEY
npx vercel env add AGENT_API_TOKEN
npx vercel deploy
```

## Call it
```
curl -X POST https://YOUR-URL/ -H "Authorization: Bearer $AGENT_API_TOKEN" -H "content-type: application/json" -d '{"task": "A customer asks how to change the email address on their account."}'
```
Without AGENT_API_TOKEN set, the service refuses to run. Costs are yours: set a spending limit with your model provider.
