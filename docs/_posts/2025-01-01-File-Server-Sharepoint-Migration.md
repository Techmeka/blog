---
layout: post
title: SharePoint Intranet for Cancer Research Non-For-Profit Organization
date: 2025-01-01 00:00:00
tags: [ SharePoint, Microsoft Purview, Migration, Information Architecture, Governance, Intranet ]
categories: [Data, Technology]
image: /blog/images/SharePointNFP.png
published: true
---

A large **not‑for‑profit organization**, **CCRM (Centre for Commercialization of Regenerative Medicine)**, desired to transform their fragmented legacy systems into a modern, secure, and compliant digital workspace using **SharePoint Online**. <!--more--> As a federally funded biotech hub operating across **13 departments**, CCRM manages highly sensitive, regulated content—requiring advanced governance, structured collaboration, and future‑proofed digital practices.

Their legacy environment included deeply nested file shares with inconsistent ACLs, outdated SharePoint sites, and interlinked Excel workbooks essential cell & gene therapy manufacturing. The task required a strategic transformation grounded in modern governance, Microsoft Purview integration, and intranet best practices.

![SharePoint Cancer Therapy Org][1]

## Challenges:
- File shares with excessive path lengths, unsupported characters, and broken inheritance.
- Complex Excel models with critical cross-linked files.
- Outdated SharePoint environments with inconsistent site structures and missing metadata.
- High regulatory pressure around data classification, retention, and auditability.
- No centralized governance or standardized branding across collaboration platforms.
- Multiple user personas ranging from frontline researchers to compliance officers, requiring role-specific training.

## Solution – Enterprise-Grade Architecture

TechMeka led a full-lifecycle SharePoint Online deployment—from design through implementation—integrating security, compliance, and long-term scalability.

### Information & Logical Architecture
- **Hub-and-Spoke Model**: Architected a scalable site framework using SharePoint hubs aligned to business units, with connected communication and team sites.
- **Metadata Strategy**: Defined enterprise content types and site columns tied to terms, improving content discoverability and enforcing naming and tagging standards.
- **Navigation Design**: Delivered structured global, hub-level, and local navigation with audience targeting for contextual access.

### Governance & Compliance via Microsoft Purview
- **Sensitivity & Retention Labels**: Designed **sensitivity labels** and **retention policies** to enforce lifecycle control, protect PII/PHI, and support DLP enforcement.
- **Access Governance**: Transitioned from legacy ACLs to Microsoft 365 Groups with 

### Intranet Branding & UX
- **Intranet Style Guide**: Created a visual identity including logos, fonts, color palette, and UX patterns.
- **Landing Page Design**: Built a modern, engaging SharePoint home with web parts for announcements, quick links, alerts, and cross-departmental navigation.
- **Reusable Templates**: Standardized team site templates for each department, embedded with pre-configured document libraries and metadata filters.

### Legacy Migration & Content Cleanup
- **File Share & Legacy Site Cleanup**: Used PowerShell and migration tools to sanitize files, resolve long paths, and prepare metadata mapping.
- **Excel Model Integrity**: Maintained file linkage integrity where possible and grouped Excel artifacts within document sets for manageability.
- **Structured Migration Plan**: Executed phased migrations with pilot testing and rollback planning for each business unit.

### Training & Knowledge Enablement
- **Role-Based Training**: Delivered tailored sessions for end users, content owners, and **Site Collection Admins**—focusing on metadata use, sensitivity labels, and Purview alerts.
- **Documentation & SOPs**: Created an internal knowledge base with standard operating procedures, KB articles, and governance documentation for long-term enablement.

## Outcomes & Benefits:
- **Regulatory Compliance**: Microsoft Purview integration ensured strong alignment with data protection and retention mandates.
- **Unified Architecture**: Modern site structure with centralized governance and decentralized site ownership.
- **Scalable Metadata Strategy**: Standardized content tagging using Purview Glossary terms improved classification and reporting.
- **Improved Security Posture**: Role-based access and policy-enforced labels replaced legacy file server sprawl.
- **High User Adoption**: Branded UX, department-specific designs, and practical training accelerated change acceptance.
- **Operational Readiness**: The SharePoint intranet now supports both day-to-day collaboration and long-term record keeping in a high-regulation research environment.

---

Through deep integration of **Microsoft 365** and **Microsoft Purview**, TechMeka empowered this life sciences organization to modernize its collaboration systems while meeting the demanding security and compliance requirements of its industry. This case demonstrates our ability to deliver SharePoint solutions that are not only technically sound but also aligned with enterprise-grade data governance and usability standards.

[1]: /blog/images/SharePointNFP.png