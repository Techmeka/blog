---
layout: post
title: "tests.observer: One Test Runner for Every Repo in Your Portfolio"
date: 2026-01-29 00:00:00
tags: [ Testing, CI, DevEx, Vitest, Playwright, AI, Test Orchestration ]
categories: [Product, Technology]
image: https://techmeka.com/blog/images/tests-observer-hero.png
published: true
screenshots:
  - src: /blog/images/screenshots/tests-observer/dashboard.png
    caption: Portfolio dashboard — pass rate, recent runs, and failing tests across every repo
  - src: /blog/images/screenshots/tests-observer/projects.png
    caption: Registered projects with auto-detected stack tags and one-click run buttons
  - src: /blog/images/screenshots/tests-observer/errors-setup.png
    caption: Drop-in script tag — capture client-side errors, breadcrumbs, and perf from any site
  - src: /blog/images/screenshots/tests-observer/client-errors.png
    caption: Errors panel — browser errors, console logs, and failed requests aggregated per project
---

> What if every test result in your org — human or AI-triggered — showed up on the task that produced it?

**tests.observer** is a central test orchestrator for multi-repo organizations.<!--more--> Register a project once, trigger runs from anywhere, stream results live, and auto-post the summary back to the task that triggered them.

**[Explore tests.observer →](https://techmeka.com/observers)**

---

![tests.observer](/blog/images/tests-observer-hero.png)


{% include screenshot-carousel.html %}
## The Problem with Multi-Repo Testing

Every project has its own test runner, its own CI pipeline, its own way of surfacing failures. Multi-project orgs end up with test results scattered across GitHub Actions, GitLab CI, CircleCI tabs, console output, and the occasional Slack message nobody reads.

When AI agents run tests, the results live in some session log nobody can find.

There's no central record of "which projects passed today." No way to link a test run back to the work item that produced it. And no way for a non-engineer to see whether their team is green.

---

## What tests.observer Does

A central test orchestrator. Projects register via a `tests.observer.json` config. The service auto-discovers test files in `tests/api/`, `tests/unit/`, and `tests/e2e/`. A REST API + dashboard lets you trigger runs, stream live results via Server-Sent Events, and auto-post run summaries back to tasks.observer as structured task comments.

Spawn-based execution model supports **Vitest**, **Jest**, and **Playwright** out of the box.

---

## Three Reasons Engineering Orgs Choose It

### 1. One Runner, Every Project

Register once via `tests.observer.json`. No per-project CI plumbing. New projects scaffolded by `scaffold new` are wired in automatically.

```json
{
  "projectId": "my-project",
  "testTypes": ["unit", "api", "e2e"]
}
```

That's the config.

### 2. Live Streaming, Not Log Files

SSE-based log streaming pushes batched results and log lines to any UI in real time. Polling-free. 200ms latency. Supports browser dashboards and AI clients alike.

You don't refresh the page. You watch the run.

### 3. Tied to the Work That Produced It

Pass `taskId` to a run and the result lands back on that task in tasks.observer as a structured comment with pass/fail counts, duration, and a link to the full report. CI runs auto-link. AI sessions auto-link.

No more "where did that test result go?"

---

## How It Compares

| Feature | tests.observer | GitHub Actions | CircleCI | Jenkins |
|---------|----------------|----------------|----------|---------|
| Multi-repo dashboard | Yes | Per-repo | Per-repo | Plugin |
| Live SSE streaming | Yes | No | No | No |
| Task-linked results | Native | No | No | No |
| MCP / AI tools | Yes | No | No | No |
| Self-hosted | Yes | No | No | Yes |
| Per-build pricing | No | Yes | Yes | No |

---

## Who Buys It

### Platform / DX Teams in Multi-Repo Orgs

One place to run, view, and audit tests across the entire portfolio. No more bouncing between five CI dashboards to find which repo broke.

### Engineering Managers

Cross-project pass/fail visibility without opening any CI dashboard. Green-board view of the whole org.

### AI-Forward Teams

Every AI-driven code change runs tests and posts the result back to the originating task. Sessions can't claim "done" until the test card lands.

---

## Better Together: The Observer Suite

tests.observer is the CI layer of the Observer suite:

- **tasks.observer** receives the structured result comment on the task that triggered the run
- **transmission.observer** exposes `run_tests` and `get_test_run` as MCP tools so AI sessions run tests and watch them complete
- **shield.observer** assessments can run as an additional test type — gate decisions land in the same run record
- **logging.observer** receives execution telemetry

Standalone? Register any repo with a `tests.observer.json`. POST `/api/run` from your CI, your terminal, your Slack bot, or your own UI. Stream results via SSE. The dashboard, auto-detection, and result storage all work with zero suite dependency.

---

## Getting Started

1. **Add `tests.observer.json`** to your repo
2. **POST to `/api/projects`** (auto-config-scan)
3. **POST to `/api/run`** from CI, terminal, or AI session
4. **Stream live** via SSE
5. **Link the run** to a task with `taskId` — result auto-posts back

---

## TL;DR

> **tests.observer = test results that find the work that caused them.**
>
> One runner. Every repo. Live streaming. Auto-linked to tasks.
> Vitest, Jest, Playwright supported out of the box.

📞 [Contact us](https://techmeka.com/contact) to bring tests.observer to your portfolio.
