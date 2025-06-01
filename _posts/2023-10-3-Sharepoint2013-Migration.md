---
layout: post
title: On-premises SharePoint and file server infrastructure migration to Cloud for Toronto Hospital
date: 2023-10-03 00:00:00
tags: [ SharePoint, OneDrive, Migration, Modernization, Fileserver, Governance ]
categories: [Data, Technology]
image: /images/sharepoint2013MigrationFSOD.png
published: true
---

A **Toronto hospital** required a rapid migration of its on-premises file infrastructure and unstructured data—including file servers and a SharePoint Server 2013 environment—to the cloud. <!--more--> The hospital adopted a **multi-staged transformation strategy**, beginning with a lift-and-shift migration of its SharePoint environment to **SharePoint Online**, taking advantage of the enhanced security, scalability, and integration offered by **Microsoft 365**. In parallel, user home drives hosted on file servers were migrated to OneDrive, while departmental and organizational data was moved to **SharePoint Online**, unlocking modern collaboration features for staff. In the final stage, the legacy SharePoint classic architecture was modernized.

![sharepoint2016Migration][1]
## Challenges:
- No collaboration and cloud and device based data protection and security controls. 
- One Large site collection and with thousands of nested subsite structure on SharePoint server 2013.
- Hundreds of Large Lists and libraries with large views.
- Legacy SharePoint solutions and pages that required rebuild due to feature deprecation.
- Thousands of orphaned and detached identity objects.
- Migration and cut-over complexity as several mission critical solutions being used across various departments.
- Fixing fileserver files permissions and other hard errors at scale.
- Migration of thousands of users home drive data and terabytes of organizational data within cutover windows.

## Solution:
TechMeka was engaged to lead each phase of the hospital’s modernization journey—beginning with the migration of aging SharePoint Server 2013 infrastructure to SharePoint Online. This effort extended beyond technical execution to include organizational change management and user training, both of which were actively supported by TechMeka to ensure smooth adoption. In parallel, user home drives and departmental data were migrated from on-premises file servers to individual OneDrive accounts and SharePoint Online, respectively. This large-scale migration was carefully orchestrated to maintain network performance and resilience while transferring terabytes of data in both directions. In the final phase, the legacy SharePoint environment was transformed by converting classic sites and pages into modern, user-friendly SharePoint Online experiences using modern layouts and web parts.


Key Contributions by TechMeka:
- Conducted a comprehensive assessment of the hospital’s SharePoint Server 2013 environment using the SharePoint Migration Assessment Tool (SMAT).
- Led governance workshops with the hospital’s CTO, CIO, and security teams to strengthen the organization’s security posture and ensure alignment with the modern Microsoft 365 and SharePoint Online.
- Developed and executed a detailed migration strategy to transition thousands of SharePoint 2013 sites to SharePoint Online, while effectively managing organizational change across all departments.
- Prepared and optimized the source environment by addressing non-migratable artifacts and ensuring a clean, efficient migration path.
- Restructured and de-nested complex site hierarchies to adopt a flatter architecture, and designed a future-state information architecture to support a scalable document management system.
- Automated large-scale data migrations from on-premises file servers to thousands of OneDrive accounts, enabling efficient and seamless cutovers.
- Partnered with hospital stakeholders to draft the long-term vision and structure for a modern document management solution on SharePoint Online.
- Orchestrated strategic cutovers and supported department-level onboarding to ensure a smooth transition to the modern SharePoint experience.
- Planned and executed the transformation of classic SharePoint sites and pages into modern, responsive designs with enhanced usability.
- Provided stability and operational support with short SLA windows, ensuring continuity of critical hospital functions during the migration process.
- Coordinated across internal teams and external partners to ensure smooth delivery and successful completion of the project.


## Benefits:


 [1]: /images/sharepoint2013MigrationFSOD.png