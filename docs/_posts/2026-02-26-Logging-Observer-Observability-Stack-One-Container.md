---
layout: post
title: "logging.observer: A Complete Observability Stack in One Container"
date: 2026-02-26 00:00:00
tags: [ Observability, Logging, Metrics, Grafana, Loki, Prometheus, SRE ]
categories: [Product, Technology]
image: https://techmeka.com/blog/images/logging-observer-hero.png
published: true
---

> What if Loki, Promtail, Prometheus, Grafana, and 230 pre-built dashboards were one `docker run` away?

**logging.observer** ships a complete log + metrics + dashboard stack across your entire project portfolio.<!--more--> One container. Zero application code. Centralized observability standing in an afternoon, not a quarter.

**[Explore logging.observer →](https://techmeka.com/observers)**

---

![logging.observer](/blog/images/logging-observer-hero.png)

## The Problem with Building Observability

Every team that runs more than five services hits the same wall:

- Log aggregation needs Loki or ELK
- Metrics need Prometheus
- Visualization needs Grafana
- Network telemetry needs UniFi-poller or similar
- Syslog needs Promtail
- Firewall logs need GeoIP enrichment

Stitching it together is a quarter of platform engineering work. Most teams give up and run with no central observability for years.

You need a stack, not a project.

---

## What logging.observer Does

A single container that orchestrates:

- **Loki 3.3.2**
- **Promtail 3.3.2**
- **Prometheus 2.48**
- **Grafana** (latest)

Pre-wired with:

- RFC3164 syslog ingestion
- GeoIP-enriched firewall log parsing
- IDS/IPS alert correlation
- File tailing across your portfolio's PM2 logs
- M365 webhook ingestion
- UniFi network instrumentation
- **~230 pre-built Grafana dashboards** for the Observer suite and infrastructure

No custom application code. Pure infrastructure config — hardened and pinned.

---

## Three Reasons SRE Teams Choose It

### 1. Ship a Stack, Not a Project

Loki + Promtail + Prometheus + Grafana in one container, auto-orchestrated by a shell entrypoint with PID tracking.

Stand up centralized observability in an afternoon. Not a quarter.

### 2. Firewall Intelligence Built In

UDM Pro syslog parsed for action / source IP / dest IP / protocol / port, then GeoIP-tagged by country. Suricata / Snort IDS alerts promoted to queryable Loki labels.

Inbound-threat visibility from day one.

### 3. Pre-Built Dashboards for the Suite

| Dashboard Category | Count |
|--------------------|-------|
| Observer-suite projects | 8 projects covered |
| System view | Yes |
| Security view | Yes |
| Network view | Yes |
| **Total dashboards** | **~230** |

Add a new project to the file-tail config and your dashboards already exist.

---

## What's Inside

| Component | Version | Purpose |
|-----------|---------|---------|
| Loki | 3.3.2 | Log aggregation |
| Promtail | 3.3.2 | Log shipper + file tailer |
| Prometheus | 2.48 | Metrics storage |
| Grafana | latest | Visualization |
| GeoIP MMDB | bundled | IP-to-country enrichment |
| RFC3164 parser | built-in | Syslog ingestion |

All pinned. All hardened. All orchestrated by one entrypoint.

---

## Who Buys It

### Platform / SRE Teams

Centralized logs + metrics + dashboards without a quarter of stitching. The stack you would have built — already built.

### Security Operations

Firewall + IDS log enrichment and queryable alert history. Inbound threat visibility from day one.

### Engineering Managers

One Grafana to monitor portfolio health. One URL to bookmark. One place to send your team.

---

## Better Together: The Observer Suite

logging.observer is the observability backplane of the suite:

- **cost.observer** ships structured access logs to Loki; pre-built dashboards already exist
- **shield.observer** assessment events feed Prometheus metrics
- **transmission.observer** session telemetry lands in Loki
- **tasks.observer** activity events feed dashboards
- Every Observer-suite project tails its PM2 logs into Loki via Promtail

Standalone? Bring your own services. Point Promtail at their log paths or send syslog to UDP 1514. Grafana, Loki, and Prometheus all function with zero Observer dependency. The Observer-specific dashboards are illustrative — add your own.

---

## Getting Started

1. **`podman run`** the container
2. **Hit Grafana** on port 3100
3. **Add a file tail** to `config/promtail.yml` for any service
4. **Watch dashboards populate** within minutes
5. **Send firewall syslog** to UDP 1514 for GeoIP enrichment

---

## TL;DR

> **logging.observer = the observability stack you would have built, already built.**
>
> Loki + Promtail + Prometheus + Grafana, one container.
> 230 pre-built dashboards. Firewall GeoIP. IDS correlation. Zero app code.

📞 [Contact us](https://techmeka.com/contact) to deploy logging.observer in your environment.
