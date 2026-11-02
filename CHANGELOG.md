# Changelog

LoopRig uses semantic versions: a new major number for breaking changes to blueprints, a minor number for new features, a patch number for fixes.

## 4.5.0
- Playground: Open a project folder. Load an existing project (index.html, game.js and so on) so the agent can read and change it; hidden files, node_modules and non-text files are skipped, the file tools are turned on, and Keep improving this project (Refine) appears right away. Run now starts from the opened folder instead of clearing it.
- When a model tries to fetch a file:/// address, it now gets a clear reply telling it to ask you to attach the files, instead of a dead end.
- The attach area now says plainly that the agent cannot reach your disk on its own and how to give it your files.

## 4.4.3
- Preview: Maximize now really fills the window (it was trapped inside its panel, so the page header covered the Exit button). There is a floating Exit full view (Esc) button, and the preview returns to its place on exit.

## 4.4.2
- Playground: when a run ends in chat with no files (for example the model says 'Reply when you are ready for the next file'), a What next panel now appears with a reply box that continues the conversation, plus a one-click 'Turn on Write file and run again'. A build-style task (build me a game) now shows a hint to turn on Write file before you run.

## 4.4.1
- Builder: the AI provider and model dropdowns can no longer disagree with the rest of the page (key name, note, Playground). If a browser restores the dropdowns or a tab goes stale, the page now reconciles to what the dropdowns show, and the provider note and key label always refresh.

## 4.4.0
- Learning upgrade. Every quest now ends with a fuller takeaway: the idea, where you will see it in real agents, what to try next, and a self-check question with an explanation. All 48 quests have a real hint behind the Stuck button.
- New Practice model: no key needed. A scripted model that acts like a capable one when your setup is right (tools, prompt, technique) and like a guesser when it is not, so you can do the quests hands-on before you add a real model. The final boss still needs a real model.
- Boss quests with a technique choice now run fully on a wrong pick and then explain what that technique does and why it does not fit, without naming the answer.
- Techniques are part of the Before you run checklist (hidden on the boss quests that ask you to choose).

## 4.3.0
- Coach mode for quests: a live 'Before you run' checklist, a warning before running with something missing, a three-step hint ladder (nudge, fuller hint, 'Set it up for me'), and plain-language diagnosis after a failed run (turn limit, repeated actions, missing tools).

## 4.2.1
- Boss 'which supplier?': if the agent was not given List files, Read file and Write file, the result now says exactly which tools it had and which to tick, instead of a generic 'Not yet'.

## 4.2.0
- Quest audit: stricter and fairer checks. 'Make it show its source' now needs a verbatim quote and an honest 'not in the files'; early quests (system prompt, JSON, poem, name) must really do the task; grounding quest rejects invented claims; router quest reports which specialist was chosen; injection defense must say files are data; final build quests reject the unchanged example task.
- New: a congratulations card after each quest shows what you learned, what you did, and your progress, with a Next quest button.

## 4.1.1
- Tighter home page: logo and name share one row and the Learn and Build cards sit higher; the sababa dictionary entry opens with a click

## 4.1.0
- New name: AgentSababa (formerly LoopRig). Saved work, keys and old blueprints keep working
- Home page shows a dictionary entry for "sababa"
- Downloaded files now start with agentsababa-

## 4.0.1
- Removed the partial Spanish interface; more languages can be added later

## 4.0.0
- Guardrails: redact personal data and check replies, with a generated guardrails module in the project download
- Safety tab in the Lab: prompt-injection smoke tests for your model
- Classroom tab: run a set of exercises for a group and collect results
- Share a gallery agent with a link
- OpenTelemetry export in generated Python and TypeScript agents
- Edge deploy files (Cloudflare Worker, Vercel, Deno) in the project download
- Two red-team quests: 48 quests in total

- Accessibility pass: contrast, labels and keyboard access fixed and checked with axe-core in light and dark
- Evals and Skills pick models from a dropdown; Badges layout fixed

## 3.10.0
- Visual graph editor: click a specialist, step, worker or team member to rename it, edit it, reorder it, add or remove nodes (router, chain, parallel, supervisor)
- Blueprint format 2: the team is saved as named nodes you can read and edit by hand. Old blueprints (format 1 and Loopsmith) still load, and format 2 files still open in older LoopRig
- Playground can use remote MCP servers over HTTP, and asks before each tool call
- Playground shows replies as they arrive (switch it off under Streaming and MCP tools)
- Knowledge search now ranks passages with BM25 instead of counting words

## 3.9.0
- Debug this run: step through a Playground run, change one step (a tool result or your message) or retry the model's turn, and the agent runs again from there
- Evals and Skills A/B now have a model dropdown (Ollama shows the models installed on your computer; Other lets you type one)
- Fixed the Badges page: the certificate name box no longer overlaps its button

## 3.8.0
- Lab Evals: import and export CSV, grade with a judge model (alone or with pass rules), and every run is compared with the last one so regressions show up
- Every download now ships evals.json (the same file the Lab exports) and a GitHub Actions workflow that runs your evals on every push

## 3.7.0
- Playground: Test connection checks your key, model and tool calling with two tiny requests
- Playground: Cost limit. Enter your model's prices to see an estimated cost live, and stop a run at a dollar amount you choose

## 3.6.7
- Lab: Compare models fills Ollama columns with the models you actually have installed

## 3.6.6
- What's new now shows the latest eight versions, with a button to show every older version

## 3.6.5
- Full release history restored in the changelog, one entry per version

## 3.6.4
- Release notes no longer show dates

## 3.6.3
- Changelog regrouped into milestones so it is easier to read

## 3.6.2
- Fix: the step links (1 Describe, 2 Try it, 3 Code) no longer scroll the heading under the sticky top bar

## 3.6.1
- Learn path: every finished quest now names the technique it covered (for example ReAct, Router, Reflexion)

## 3.6.0
- Learn path: new World 10, When It Goes Wrong (empty replies, cut-off output, missing files, pass rules, build-test-ship boss)
- Learn path: new quests for Chain of Thought, Tree of Thoughts and blending techniques, so every technique on the Advanced map is taught
- Learn path: 46 quests in ten worlds

## 3.5.0
- New in the Lab: Skills A/B. Run the same task with and without a skill, several times each, and see whether it really helped.
- Skills can now bundle scripts and reference files. Add a line like <!-- file: scripts/count.py --> in the editor. The agent reads them with load_skill, and run_js or run_shell can run them.
- Every Python bundle now includes agent_mcp.py: your agent's tools, plus ask_agent for the whole agent, as an MCP server for Claude Desktop, Claude Code and Cursor. Risky tools stay off unless you set ALLOW_RISKY_TOOLS=1.
- Builder runs that get empty replies now log the model's finish reason, ask for smaller files, and stop with advice instead of (no answer).
- Fixed the LangGraph and Agents SDK exports for tools with an optional argument.

## 3.4.1
- Fixed builder runs that kept stopping: replies cut off by the output limit are now detected, and file-writing runs ask for room for whole files (8192 tokens).
- The agent can no longer finish while the page links to a file that does not exist (like game.js), and the preview names missing files.
- Blocked fonts and other external resources in the preview are now a note, not a JavaScript error.

## 3.4.0
- New: Skills. Turn on Skills (SKILL.md) in the Act tab to give your agent instruction packs it loads only when a task needs them. Works in the Playground and in the generated Python and TypeScript.
- Write skills in the editor, add starters, or import any SKILL.md. See token savings and writing tips, and download skills as a .zip.
- Every downloaded bundle now includes an AGENTS.md for coding agents, plus a skills/ folder when Skills is on.
- New quest in Think Better: Skills, instructions on demand. Learn now has 38 quests.

## 3.3.1
- Fixed: the Playground preview now always shows the latest version of your page after a Refine, even if the agent forgot to preview it.

## 3.3.0
- Playground redesign: Connect and Give it a job cards, a clear Run bar, and a self-contained agent console.
- The console keeps its own colors in light and dark themes, with a Light/Dark console switch that is remembered.

## 3.2.0
- A What's new panel in every header, with a dot when the version changed since you last looked.
- More breathing room: bigger card padding, clearer gaps between labels, fields and text across Learn, Lab and the builder.
- Fixed: the Evals model field no longer stretches.

## 3.1.1
- The name is now written LoopRig everywhere (code, addresses and file names stay lowercase).

## 3.1.0
- New look: aurora background, glass panels, glowing gradient buttons, animated logo, cursor spotlight on cards, a control-room style step player, per-world progress bars, refined light and dark themes. Respects reduced-motion.
- Fixed: the Learn map said four worlds; Lab badge styles no longer clash with the version pill.

## 3.0.0
- Learn grows from 17 to 37 quests in nine worlds: Think Better (plan, reflect, evaluate, grounding), Workflows (chain, router, parallel), Teams (orchestrator, supervisor, voting), Safe and Controlled (approvals, token budgets, prompt injection) and Ship It (write your own tool, export code, evals).
- Quests can turn techniques on and off, show a live call/token/time meter, ask you to approve or decline tool calls with buttons, keep a history of your prompts with a word-by-word diff, and let you write a tool in JavaScript.
- The step player now shows technique steps (plan, vote, reflect, route, team and more).
- New Lab: compare up to three models side by side, run evals with pass rules, share a run as a link that replays in any browser (nothing is uploaded), a guided Ollama local-model setup with detection, an example gallery, badges and a certificate image, and backup and restore (never includes API keys).
- Fixed: local model names that are not in the built-in list now work in Learn.

## 2.4.0
- New providers: Fireworks AI, NVIDIA (NIM) and Hugging Face, each with the right endpoint, key variable and example models in the browser engine and in the generated Python and TypeScript. README explains Azure OpenAI through Custom.

## 2.3.0
- Learn: a Watch it happen player in every quest. A ring lights Reason, Act, Observe and Decide, and a message bubble travels between You, the model and your code with a plain-language caption for each step. Play, pause, step back and forward, replay at three speeds. It follows a live run and works for every demo.

## 2.2.0
- Security: the standalone page now ships a Content Security Policy (no external scripts, no plain-http requests except localhost, no forms, no base changes, no plugins), plus SECURITY.md and a README section explaining how API keys are handled

## 2.1.1
- PayPal donate link (paypal.me/motti10) on the home screen and in Learn; adds .github/FUNDING.yml

## 2.1.0
- Support links: optional PayPal, GitHub Sponsors, Ko-fi, Buy Me a Coffee and Patreon links on the home screen and in Learn, set in one file (donate.json). Plain links only, no third-party scripts. A GitHub Sponsor button file is generated when configured.

## 2.0.3
- The version number is shown on the home screen and in Learn again, not only in the builder

## 2.0.2
- Learn shows clear feedback while a quest runs: a Working banner with a spinner, the current step and elapsed seconds, a Sent to model line, and a hint to press Stop if the provider is slow

## 2.0.1
- API keys no longer disappear between quests: a key is kept for the tab (sessionStorage), shared by Learn and Build, and survives reloads. Closing the tab forgets it. Opt-in Remember on this device, plus Forget my keys.

## 2.0.0
- Learn door: a home screen with Learn and Build, and a guided path of 17 quests in four worlds (Talk, Tools, The Loop, Ground and Remember). Each quest has a predict step, a no-key demo, a break-it option and an automatic check. Worlds unlock in order or by taking the boss challenge. The old quest panel is replaced by Learn.
- Now released into the public domain (the Unlicense).

## 1.13.2
- Agents that reply with nothing are nudged to continue (up to twice) instead of silently ending the turn, and the Playground log now shows what the model said or that its reply was empty

## 1.13.1
- Preview has a Maximize button (Esc or Exit maximize to leave) and a taller default size

## 1.13.0
- Keep improving a project: describe a change and Refine edits the files you already have, with quick suggestions
- The project is remembered on this device across reloads; attaching an existing file makes it a project; Clear project and Restore the previous files

## 1.12.5
- Goal loop now asks for real file changes each round, nudges after an idle round, and stops with a clear message after three idle rounds (browser, Python and TypeScript)
- Tip shown when a small model is picked for a project-building agent

## 1.12.4
- Playground errors now say where it broke: no connection at all, a blocked response (usually a browser extension or VPN), or a request the provider refused

## 1.12.3
- Playground: tool schemas no longer send an empty required list (Gemini rejects it, which showed as a network error); when a call fails in the browser, a small test request now tells unreachable apart from refused

## 1.12.2
- Quests can be ticked by hand: click the circle, or use Mark as done in the lesson panel

## 1.12.1
- Quests in the list are clickable: pick any quest to read its lesson and jump to it

## 1.12.0
- Simple mode is now the default: pick a plain-language starter, try it, get code. Advanced keeps every control
- New short, readable agent (about a hundred lines on the official Claude and OpenAI SDKs), tested against the real SDKs, in Python and TypeScript
- Watch a demo: a scripted run of the real loop, tools and preview, so no API key is needed to see an agent work
- Optional Learn with quests (Simple mode only): seven quests, progress saved on your device
- Next steps tab and NEXT_STEPS.md; a test that the browser Playground and the generated code make the same model calls for every technique

## 1.11.0
- Playground runs every technique: tree of thoughts, plan, self-consistency, grounding, reflexion, evaluator, human review, router, chain, parallel, orchestrator, supervisor team, goal loop and chat
- New preview_html tool: pages and games the agent writes load in a sandboxed preview that reports JavaScript errors, drawing and key response back to the agent
- Playground adds search_docs, memory, optional Tavily web search for non-Claude models, and a Preview button on html files

## 1.10.0
- New four-step layout: Describe, Choose how it thinks, Try it, Fine-tune and get code. Technique cards with plain descriptions, a floating header with step links, softer surfaces and a clearer light and dark look.
- Project builder technique: list_dir, edit_file (exact edits) and run_shell (allowlisted commands such as pytest and npm test) in Python and TypeScript agents, with a plan, build, test, fix loop.
- Playground runs project tasks in the browser: an in-memory project folder, a JavaScript sandbox (run_js) with a 10 second limit and no network, a files viewer and a zip download.
- write_file now creates folders; path checks no longer allow sibling-folder prefixes.

## 1.9.1
- Playground: the agent is now told only about the tools the browser really offers, so it no longer tries write_file or run_python and fails. Unknown tool calls get a reply that lists what is available.

## 1.9.0
- Attachments. In the Playground, attach files and images with a button, drag and drop, or paste; large pictures are resized for you.
- Generated agents accept --file (text, code, CSV, JSON; PDF on Claude) and --image (png, jpg, gif, webp) in Python and TypeScript.
- Help and README explain attachments and the errors you may see.

## 1.8.0
- Playground: run your agent from the page with your own key. The Reason, Act, Observe and Decide boxes light up as it works, each step streams into a console, and you can answer the agent's questions inline.
- Run history with a side-by-side difference (tokens, tool calls, time), and send any run to the Trace tab.
- The Test task field is shared between the builder and the Playground. Hosted copy only: the in-page preview blocks network calls.

## 1.7.1
- Clear message when a Python package is missing (wrong Python or a virtual environment that was moved or renamed), with the exact fix.
- Gemini, Groq and other compatible providers now say they use their own OpenAI-compatible API and need no OpenAI account.
- Troubleshooting guide covers broken virtual environments.

## 1.7.0
- Renamed from Loopsmith to LoopRig. Saved agents, theme and blueprints made under the old name still load.
- Example bundles, README and the download folder use the new name.

## 1.6.0
- Version number shown in the app, in every generated file, in blueprints and in the README.
- Changelog in the app and in the download. `node bump.js` raises the version and records the change.

## 1.5.0
- Every generated agent has `--doctor` (checks key, model and a tool-call round trip) and `--debug` (prints each model call).
- Errors now show the provider's reply and a plain next step.
- New Help tab and `TROUBLESHOOTING.md` in every bundle.

## 1.4.1
- Fixed Gemini 3 tool calls failing with a 400: the thought signature is now passed back.
- Gemini model list refreshed; the default is `gemini-flash-latest`.

## 1.4.0
- Missing-key check, clearer model-call errors, `--list` for the smoke test.

## 1.3.0
- MCP tools, structured output with schema check, deploy kit (API server, Docker), smoke test, LangGraph and OpenAI Agents SDK exports, ready-made examples.

## 1.2.0
- Standalone build with share links, saved agents, undo and redo, cost estimate, trace replay and baseline compare.

## 1.1.0
- Providers beyond Claude: OpenAI, Gemini, Groq, Mistral, DeepSeek, xAI, Together, OpenRouter, Ollama, LM Studio and any OpenAI-compatible endpoint.

## 1.0.0
- First release: the Reason, Act, Observe, Decide loop, 19 presets and Python and TypeScript generators.
