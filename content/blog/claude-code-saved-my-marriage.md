---
title: "Claude Code saved my marriage"
date: 2026-01-16
excerpt: "How AI agents gave me my nights and weekends back — a practical guide to building with Claude Code at scale"
draft: true
---

<div style="position: relative; width: 100%; padding-bottom: 56.25%; margin-bottom: 2rem;">
  <iframe
    src="https://blaze-business.vercel.app/claude-code/1"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="fullscreen"
    title="Claude Code Presentation"
  ></iframe>
</div>

## Introduction

I recently gave a presentation about how we've integrated Claude Code into our development workflow at Blaze. The title is tongue-in-cheek, but the impact is real — Claude Code has transformed how I work as a founder and developer.

**What is Claude Code?** It's Claude, but in your terminal. It reads your code, talks to your databases, runs queries, and does the tedious work while you focus on what matters. But it's not just for coding — it handles writing emails, analyzing metrics, creating documentation, and acting as a thinking partner for complex decisions.

The key insight: **give it context about your business and it becomes an extension of your brain.** This post extracts the key points from the presentation above, covering our systematic approach to building with AI agents at scale.

## The Evolution: From Copy-Paste to Autonomous Agents

We've come a long way in just three years:

**2022 - ChatGPT Era**: Copy code snippets from ChatGPT and paste into VS Code, hoping they work.

**2023 - Copilot Era**: AI autocomplete inside the IDE, providing inline suggestions as you type.

**2024 - Cursor Era**: File-level changes where AI could modify entire files at once.

**2025 - Claude Code Era**: The paradigm shift. You create a spec, verify it, and send Claude out to work autonomously. The work happens while you move to the next task.

This isn't about better autocomplete. It's about delegating entire tasks to an autonomous agent with tools and context.

## Part 1: The HumanLayer Methodology

Our workflows are heavily inspired by [HumanLayer's systematic approach](https://github.com/humanlayer/humanlayer) and their [12 Factor Agents methodology](https://www.youtube.com/watch?v=IS_y40zY-hc). The core pattern is simple but powerful:

**Research → Plan → Implement**

### Research Capabilities

When you run `/research-codebase "How does user authentication work?"`, Claude spawns a squad of specialist agents who investigate in parallel:

- **Code explorer**: Searches implementations and patterns
- **Documentation hunter**: Finds related docs and comments
- **Test analyzer**: Examines test coverage and examples
- **Synthesizer**: Connects the dots and creates a comprehensive summary

The output isn't a quick answer — it's production-quality documentation with GitHub permalinks, flow diagrams, and timestamped context. You'll actually reference it three months later when you've forgotten how everything works.

### Planning Process

The `/create-plan` command launches an interactive 5-step process:

1. **Context Gathering**: Understand requirements and constraints
2. **Research & Discovery**: Explore existing patterns in your codebase
3. **Plan Structure**: Outline phases and milestones
4. **Detailed Writing**: Specify files, changes, and tests
5. **Review**: Iterate with your feedback

The output is a comprehensive implementation plan with AI context summary, phases, critical files, testing strategy, and success criteria. This gives both you and Claude clear direction before writing any code.

### Why This Works

The methodology forces systematic thinking. Instead of jumping straight to implementation, you gather context first. This prevents the classic mistake of building the wrong thing or solving the wrong problem.

We've heavily customized HumanLayer's prompts to include mandatory documentation standards, parallel agent spawning strategies, success criteria frameworks, and testing integration.

## Part 2: Research, Planning & Investigation at Blaze

### Our Repository Setup

We've built a comprehensive Claude Code setup in our GitHub repository:

```
.claude/
├── commands/           # Custom slash commands
│   ├── research-codebase.md
│   ├── create-plan.md
│   ├── implement-plan.md
│   ├── investigate-bug.md
│   └── loop.md
├── skills/            # Reusable workflows
│   ├── research-codebase/
│   ├── create-plan/
│   ├── investigate-bug/
│   └── manage-tests/
└── CLAUDE.md          # Main instructions

.github/
└── workflows/
    └── claude-bug-investigation.yml
```

The separation between commands (user-facing) and skills (implementation guides) lets us build systematic, repeatable workflows that embody the Research → Plan → Implement approach.

### Investigation Framework

Our `/investigate-bug` command spawns 8 specialized investigators that gather evidence in parallel:

- **Database**: Query user data and transactions
- **Logs**: Search application logs
- **Blockchain**: Check on-chain state
- **Provider**: Verify 3rd party API behavior
- **Queue**: Inspect job state
- **Error**: Analyze error patterns
- **Intelligence**: Synthesize findings
- **Settlement**: Check payment flows

The output is a comprehensive investigation document with evidence from multiple systems, timeline reconstruction, root cause analysis, and actionable recommendations.

### Automated Bug Investigation

We've built a fully automated bug triage pipeline using GitHub Actions. When errors occur — from queue failures, Sentry alerts, or manual reports — they funnel into GitHub issues with the `auto-investigate` label. Claude then:

1. Reads the error context
2. Queries production database
3. Searches application logs
4. Checks Redis queue state
5. Synthesizes findings
6. Creates a fix PR (if straightforward) or documents findings for human review

One recent bug investigation took Claude 10 minutes and spawned 8 investigators in parallel. It identified an unindexed array query causing table scans, generated a detailed investigation document, and created a PR with the fix. All automatically.

### Context Engineering: The Real Secret

Everyone focuses on prompt engineering, but **context engineering is what actually matters**. It's not about the prompt — it's about what's in the context window.

Your CLAUDE.md file, the files Claude has read, the conversation history, and tool results all contribute to the context. A mediocre prompt with great context beats a perfect prompt with bad context every time.

**Key insight**: Claude gets "drunk" after ~70% context usage. Performance degrades significantly. The solution? Spawn sub-agents with fresh context windows. That's why our research and investigation workflows use parallel agent execution.

### The /clear Discipline

This is the practice that makes the HumanLayer methodology actually work:

```
/research-codebase "how does auth work?"
    ↓
📄 Research doc saved to docs/context/
    ↓
/clear  ← Fresh context
    ↓
/create-plan "add OAuth2"
    ↓
📄 Plan saved to docs/context/
    ↓
/clear  ← Fresh context again
    ↓
/implement-plan
```

After each phase, clear the context and start fresh. The knowledge lives in `docs/context/` where Claude can read it if needed, but each new phase gets 100% clean context. It's counterintuitive, but clearing more often leads to better results.

Let the filesystem be the memory, not Claude's context window.

### MCP Integration: The Real Unlock

We've connected Claude Code to our entire infrastructure through MCP servers:

- **PostgreSQL** (production & staging)
- **Betterstack** (application logs)
- **Redis** (queue state)
- **GitHub** (repositories & PRs)
- **ClickUp** (task management)
- **Slack** (notifications)
- **Meta Ads** (campaign management)
- **Notion** (documentation)

This means Claude can query production data, search logs, create tasks, and update tickets — all in one workflow, without human context switching. This is where the real power comes from.

### Running Blaze with Claude Code

We've taken this further by creating **domain-specific AI specialists** using a single CLAUDE.md file that routes requests to specialized identities:

**Growth Specialist**: Handles Meta Ads campaigns, Mixpanel analytics, user acquisition, and A/B experiments.

**Finance Manager**: Manages budget planning, reconciliations, P&L analysis, and investor updates.

**Operations Lead**: Optimizes processes, coordinates teams, manages projects, and creates SOPs.

When you say "help me with our Meta ads," Claude becomes a growth specialist. Say "what's our runway," and it becomes a finance manager. Say "document this process," and it becomes an ops lead.

It's like having three senior hires who've memorized everything about your business and never take PTO.

## Part 3: Tools & Infrastructure

### Conductor: Parallel Workflows

[Conductor](https://conductor.build) lets you run multiple Claude agents simultaneously — each working on something different. They work in parallel without stepping on each other, share context through a common `.context/` folder, and you can review results when convenient.

Real example from a recent day:
- Claude #1: Investigating a bug in payments
- Claude #2: Researching how auth works
- Claude #3: Planning a new feature

All happening at the same time on the same codebase. This is the closest thing to cloning yourself.

### Remote Claude: Cloud-Based Agent Execution

[Remote Claude](https://github.com/l2succes/remote-claude) is our solution for running Claude Code in cloud environments with full MCP access. The architecture is built on the Claude Agent SDK and includes:

- **Frontend**: React-based task management UI
- **Backend**: Supabase for PostgreSQL, real-time subscriptions, and auth
- **Agent Core**: Claude Agent SDK handles tool execution, autonomous loops, and context management
- **Compute**: Isolated execution environments on EC2 or GitHub Codespaces

The Agent SDK reduced our codebase by 70% because we didn't need to implement tool execution loops, context management, or agent orchestration — it's all built in.

### Claude Agent SDK

The [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk-typescript) gives you Claude Code's full autonomous agent capabilities as a library in TypeScript and Python:

```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "Find and fix the bug in auth.py",
  options: { allowedTools: ["Read", "Edit", "Bash"] }
})) {
  console.log(message);
}
```

This is production-grade AI agent infrastructure that you can deploy anywhere. Same tools, same agent loop, same context management — just programmable.

## Lessons Learned

### What Worked

- **Research → Plan → Implement**: Gives structure to follow for both you and Claude
- **Forcing documentation**: You'll thank yourself in 3 months when you've forgotten everything
- **MCP access**: Direct connection to infrastructure is the unlock
- **Parallel agents**: The closest thing to cloning yourself

### Things I Learned the Hard Way

- **Don't give production write access on day one** — yes, I learned this one personally
- **Token costs sneak up on you** — Claude likes to be thorough
- **Your first prompts will be bad** — iteration is part of the learning curve
- **Trust takes time** — you'll hover at first, that's fine

### Actually Useful Tips

- Start read-only, graduate to write access as you build trust
- If you do something twice, make it a skill
- Git everything — Claude makes mistakes too
- Review before deploy, always

## Impact & Conclusion

Claude Code has enabled me to do things I never thought possible:

**Finally shipped my blog** — after trying for 5 years.

**Creating content for my projects** — something I always put off.

**Building features as a busy founder** — things I never had time for.

**Writing better** — proposals, documents, even emails.

With the right context, Claude Code acts like a **co-founder**. It thinks objectively, challenges assumptions, and helps make better decisions. As a founder constantly context-switching, having something that can hold context, think through problems, and execute with you feels transformative.

That's why I genuinely love this tool.

---

### Links & Resources

- **Claude Code**: [anthropic.com/claude-code](https://anthropic.com/claude-code)
- **Remote Claude**: [github.com/l2succes/remote-claude](https://github.com/l2succes/remote-claude)
- **HumanLayer**: [github.com/humanlayer/humanlayer](https://github.com/humanlayer/humanlayer)
- **Advanced Context Engineering**: [youtube.com/watch?v=IS_y40zY-hc](https://www.youtube.com/watch?v=IS_y40zY-hc)
- **Blaze**: [blaze.money](https://blaze.money)

Special thanks to my co-founder Faiyam for helping refine this entire system.
