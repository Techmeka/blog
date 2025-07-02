---
layout: post
title: Power Apps to Manage Facilities and Lab Requests
date: 2025-01-01 00:00:00
tags: [ PowerApps, Power Automate, SharePoint, Ticketing System, Clean Lab, Manufacturing ]
categories: [Technology, Apps]
image: /blog/images/facilitiesPowerApps.png
published: true
---

**CCRM’s** Operations team required a modern, centralized system to manage a growing volume of facilities and clean lab service requests. <!--more--> Their previous ITSM platform was inflexible and unable to meet the real-time demands of a **GMP-regulated research and manufacturing environment**. High-priority requests originating from **clean lab areas**—used for critical research and cell & gene therapy production—required immediate routing, tracking, and resolution to ensure operational continuity.

To address these needs, TechMeka delivered a **custom ticketing tool** using **Microsoft Power Platform**—leveraging SharePoint, PowerApps, and Power Automate to support secure, compliant, and responsive request handling.

![CCRM Facilities Ticketing Tool][1]

## Challenges:
- The legacy ITSM system could not differentiate between routine and high-priority clean lab requests.
- Critical clean room issues (e.g., equipment faults, contamination risks, HVAC failures) required **immediate action** and escalation mechanisms.
- Requests were often tracked via siloed emails and spreadsheets, with poor visibility and limited accountability.
- The organization required a lightweight, cost-effective solution using its existing Microsoft 365 stack.

## Solution – A Power Platform-Based, GMP-Aware Ticketing System

TechMeka designed a custom request management system with compliance, prioritization, and traceability built-in:

### SharePoint List: Structured & Secure Data Store
- Leveraged **SharePoint lists** to act as the backend database with fields for:
  - Request type (Facilities / Clean Lab)
  - Urgency level (Standard / Critical)
  - Status tracking
  - Submitter, department, timestamps, and assigned technician
- Configured security trimming to protect sensitive facility and lab data, ensuring clean lab tickets remained private and auditable.

###  PowerApps: Frontend Built for Speed & Clarity
- Developed a **responsive PowerApps canvas app** to allow staff to:
  - Submit new tickets with contextual information (room, equipment ID, urgency, etc.)
  - View, filter, and manage ticket history
  - Trigger escalations for critical lab issues
- Included role-based UI views: Requestors saw their own tickets, while Ops leads accessed team-wide visibility.

###  Power Automate: Orchestration & Escalation
- Created multiple **Power Automate flows** to:
  - Send instant email/SMS alerts for **critical clean lab requests**
  - Auto-assign technicians based on location/type
  - Notify secondary stakeholders if response SLAs were breached
  - Archive completed tickets with traceability logs for audits

## Results & Benefits:
- **Support for GMP-Compliant Operations**: Prioritized and tracked sensitive clean lab requests with full traceability.
- **Faster Response Times**: Automated notifications and escalations helped address critical issues before they escalated.
- **Unified Ticketing Across Facilities**: All service requests—routine and critical—now managed under one secure platform.
- **No Additional Licensing**: Delivered entirely using Microsoft 365—no third-party tools or licensing fees.
- **Customizable & Extensible**: The app is easily adjustable for future needs such as HVAC tracking, access control, or integration with Teams.

---

Through a purpose-built Power Platform solution, TechMeka enabled CCRM to streamline and safeguard critical operations in both general facilities and highly controlled clean lab environments—supporting uptime, compliance, and efficiency for Canada’s leading regenerative medicine manufacturer.

[1]: /blog/images/facilitiesPowerApps.png