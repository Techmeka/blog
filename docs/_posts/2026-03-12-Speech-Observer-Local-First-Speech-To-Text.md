---
layout: post
title: "speech.observer: Local-First Speech-to-Text You Can Air-Gap"
date: 2026-03-12 00:00:00
tags: [ Speech, STT, Whisper, Self-Hosted, Privacy, AI, Compliance ]
categories: [Product, Technology]
image: https://techmeka.com/blog/images/speech-observer-hero.png
published: true
---

> What if Whisper-grade transcription ran entirely inside your firewall — with hot model swapping and a full request audit log?

**speech.observer** wraps Whisper.cpp into a clean HTTP API.<!--more--> Air-gappable. Three pre-loaded models with runtime swapping. Dark-mode dashboard with request history. No cloud dependency. No API key. No third-party data path.

**[Explore speech.observer →](https://techmeka.com/observers)**

---

![speech.observer](/blog/images/speech-observer-hero.png)

## The Problem with Cloud Speech-to-Text

Cloud STT (Deepgram, Azure Speech, AWS Transcribe) is fast and accurate. But it ships your audio to a third party. For regulated workloads — legal, healthcare, defense, internal HR — that's a hard no.

The alternative — running Whisper yourself — usually means a research project:

- Pick a model
- Wire a transcription pipeline
- Manage CUDA
- Handle audio format conversion
- Build an admin UI

Most teams give up. They either use the cloud (and accept the compliance risk) or skip transcription altogether.

You need a clean primitive.

---

## What speech.observer Does

A single-file Express server (~666 LOC) that wraps Whisper.cpp into a clean HTTP API.

- **POST audio** to `/api/transcribe` — webm, mp4, mp3, ogg, wav, aac all supported
- **Server converts** to 16kHz mono via ffmpeg
- **Whisper.cpp inference** runs locally
- **JSON response** with transcript, response time, request ID
- **Three pre-loaded models** with hot runtime swapping
- **Dark-mode dashboard** with request history capped at 1000 entries

No cloud dependency. No API key required.

---

## Three Reasons Regulated Teams Choose It

### 1. Air-Gappable

Whisper.cpp + local GGML weights. **No outbound network.** Run inside a regulated network boundary with confidence.

Your audio never leaves. Your compliance officer sleeps better.

### 2. Hot Model Swap

| Model | Use Case |
|-------|----------|
| `tiny.en` | Fastest, smallest — quick drafts |
| `base.en-q5_1` | Quantized middle ground — balanced |
| `base.en` | Full quality — final transcripts |

Switch at runtime via `POST /api/model`. No restart. No pod cycle.

### 3. Comprehensive Request Audit

Every request — success or failure — logged with:

- Filename
- Size
- MIME type
- Transcribed text
- Response time

Searchable in the dashboard. Capped retention prevents disk bloat.

---

## Who Buys It

### Regulated Enterprises

Legal, healthcare, defense — anywhere transcription with a third-party data path is a non-starter. Air-gap and ship.

### Internal Tooling Teams

A self-hosted STT endpoint for meeting transcripts, voicemail, and internal recordings. One container. Three models. Done.

### AI Platform Teams

A deterministic transcription primitive for downstream NLP pipelines. No vendor lock. No rate limits. No surprise pricing.

---

## Better Together: The Observer Suite

- Pair with **assistants.work** (Azure-powered voice bot platform) to enrich call archives with local Whisper transcripts as a compliance-grade cold-storage alternative
- Pair with **logging.observer** to send transcription metrics + request logs into the centralized Grafana stack
- Drop behind **transmission.observer** as a transcription tool callable from AI sessions

Standalone? Container up on port 4004. `curl -F audio=@file.wav http://localhost:4004/api/transcribe`. Done. No suite. No dependencies. No SaaS. No API key.

Three models bundled (274MB total). ffmpeg in the container. Dashboard built in.

---

## Developer Preview — Honest Status

We ship this as a **developer preview**, not enterprise-ready:

- ~666 LOC single-file monolith
- English-only (`-l en` hard-coded)
- No auth (intended for trusted networks)
- No batching, no parallel-request queueing
- No retry on inference failure
- Request log is in-memory (lost on crash) with 1000-entry cap

Production-grade for an internal-team prototype or controlled pilot. Needs hardening for external exposure or high-throughput workloads. We'll publish a hardening checklist with the GA release.

---

## Getting Started

1. **Container up** on `localhost:4004`
2. **POST an audio file** to `/api/transcribe`
3. **Watch the dashboard** populate
4. **Hot-swap models** via `POST /api/model`

```
curl -F audio=@meeting.wav http://localhost:4004/api/transcribe
```

---

## TL;DR

> **speech.observer = Whisper, behind your firewall, with an API.**
>
> Air-gappable. Three models. Hot swap. Request audit.
> Developer preview — hardening in progress.

📞 [Contact us](https://techmeka.com/contact) to evaluate speech.observer for your environment.
