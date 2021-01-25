---
slug: learning/intro
title: Rhino Basics
---

# Intro to Urban Design Digital Practice: UDTools and the NYC Digital Twin 
 
Have you heard talk of the “magic machine”, the “miracle box” or the “parametric tool”? This session will demystify the 3D modeling methods used by the Urban Design Office, introduce the tools we’re developing to enable the use of digital urban models at DCP, and lay the groundwork for two future training sessions covering these tools and methods. 

## Audience

- all agency staff who work on (or are interested in) urban design and physical planning issues
- staff who work with designers on neighborhood studies-related CEQR analysis, especially the RWCDS
- staff who may want to collaborate with UD for custom visualization or analysis
- designers who anticipate using UDTools in their work

## Prerequisites

(None)

## Learning Objectives 
 
- Introduce the UD Digital Practice Initiative, its background, and goals 
- Review historic and contemporary examples of urban models; discuss the value and insights models bring to physical planning and urban design 
- Introduce the NYC Digital Twin, a centralized outlet for 3D spatial data 
- Introduce UDTools, which allows Rhino 3D modeling software to: 
  - Connect with the Digital Twin, 
  - “Understand” zoning and urban design concepts, 
  - Generate zoning-compliant massings for real-world or hypothetical sites, 
  - Produce detailed take-offs of key development scenario metrics. 
- Introduce the Digital Practice documentation site, where you can find up-to-date tutorials and information about our products

## **Outline**

### Introduce the UD Digital Practice Initiative, its background, and goals 

- Welcome and ground rules
  - interrupt and ask questions
  - or send after?

- Self-introduction
  - I trained as an architect, graduated from the M. Arch program at Columbia GSAPP in 2018
  - Q: That's about buildings right?
  - I'm interested in architectural *thinking* as a way to work through complex problems and architectural *communication* as a set of technologies for collaborative work
  - Architectural thinking: being an amateur at everything, understanding *what's possible* to do with different configurations of people, tools and materials *even if you don't always know exactly how to do it yourself*
  - Architectural communication: drawings and models
  - Architecture and the digital, what is Computational Design?
  - Connotations/standard version vs a convenient catch-all for two separate but related fields I'm particularly interested in:
    - Spatial data & GIS
    - "New media" and architecture. Web/games as new environments to explore traditional uses of digital drawings/models in a way that makes them more accessible and democratic

- DPI introduction
  - The **Digital Practice Initiative** (DPI) seeks to amplify and enhance the value of urban design and physical planning in NYC, through the development and dissemination of **tools**, **methods** & **data**.
  - We have a vision for how **models** can help designers and planners be more context-aware, work more effectively, and communicate more vividly.
  - In this presentation we'll cover the following:
    - briefly walk through some ideas about what models can do in a planning agency context
    - touch on some of the challenges of working with digital models and how I've been working to remove those barriers
    - give a quick introduction to the two main products I work on, the NYC Digital Twin and UDTools for Rhino
    - present the UD Digital Practice documentation site, where you can find up-to-date tutorials and information as this project continues to evolve

### Review historic and contemporary examples of urban models; discuss the value and insights models bring to physical planning and urban design

- French Plans-Reliefs
  - like maps, **models record and store information about places**
- Environmental Simulation
  - San Francisco City Model
  - Environmental Simulation Center
  - **models allow us to experiment and answer questions**
- Participatory Design
  - Lucien Kroll La Mémé
  - **models are tangible and intuitive**
- Planning Education/Outreach
  - Center for Urban Pedagogy
  - **models can help build consensus and keep people on the same page**
- What makes a digital model different
  - more powerful
  - can help evaluate zoning, quantify impacts and coordinate consensus
  - less intuitive
  - involves specialized **tools**, used together with the right **methods**, to access and manipulate **data**.
  - **The overarching goal of this work is to make dealing with digital models as easy as possible.**

### Introduce DPI Products

- first, project history:
- UD has been exploring custom digital modeling tools since mid-2017
- before that, the definition of a Reasonable Worst Case Development Scenario (RWCDS) for CEQR required an extremely onerous manual process
  - designers needed to "manually" (meaning, draw/model in 3d software) mass individual development sites for each of the three analysis conditions
  - then, using measurement tools available in standard modeling software, measure **each individual floor** and enter data into spreadsheets by hand to arrive at sums
  - I have heard that the entire urban design staff would sometimes be diverted with these modeling and measurement tasks for full weeks at a time
  - Would not want to have to do that!
- early version of this was developed by David Vega Barachowitz (Bah-rock-o-witz) and Xun Liu in late 2018 to automate the process
  - basic insight that zoning is "parametric" i.e. the 3d zoning envelope and therefore a RWCDS massing for a given zoning lot can be defined or at least approximated through computational rules
  - this means the desired output of this process is (theoretically) obtainable without a room full of urban designers working on the world's most boring project for two weeks
  - using a visual programming environment called Grasshopper, which comes bundled with the Rhino 3d modeling software, David and Xun developed w working prototype of what they called the "Parametric Tool"
  - developed and tested alongside three neighborhood studies:
    - Bushwick
    - North Brooklyn
    - Bronx Metro-North
- when I started at the beginning of 2020 the project faced a couple of challenges:
  - first, people had started to talk about what else could be possible with tools like this
    - other parts of CEQR, shadow studies and open space analysis
    - a kind of "zoning spell check" to pre-screen applicant projects for common problems without wasting staff time
    - flexible modeling and analysis environment for one-off projects (zoning and urban design)
  - the prototype tool was built entirely around the multi-site RWCDS use case and couldn't be easily adapted to serve other purposes
  - second, it was somewhat complicated and required some special knowledge of a visual programming environment called Grasshopper to use.
  - third, it was implemented in a very "quick and dirty" way, which had allowed a successful initial rollout but posed big problems for maintainability
  - fourth, it required the user to find and prepare separately (using GIS software) a "context model" to ground the analysis, a process that could take weeks in some cases and led to dozens of duplicate copies of shapefiles and other data being stored in project folders
- we needed something that was
  - easier
  - more contextual
  - more flexible

### Introduce the NYC Digital Twin, a centralized outlet for 3D spatial data

- Parts of this had been automated but parts had not
- In particular, retrieval of latest-available spatial data defining tax lots, surrounding buildings, street widths and other critical elements remained a manual process
- NYC Digital Twin is a 3d-enabled, fully automated spatial database that can be consumed by different software
- It lives, as people say, "in the cloud"
- Collects multiple Open Data layers in the same place
- Data from DCP, DOITT, Parks, DOT and others
- Provides the basis for a more nuanced spatial understanding of zoning
- **DCP is in a singular position to build and maintain this** because it is:
  - Specific to NYC
  - Based on our own data products (MapPLUTO)
  - Not a "scalable" project

### Introduce UDTools for Rhino

- Rhino is the cadillac of 3d modeling software. Across architecture, engineering, manufacturing, shipbuilding and other industries people use it to 
- It's accurate, fast, gives a complete set of tools for manipulating different kinds of 3d models, and it's **extensible**
- UDTools is a custom Rhino plugin I'm developing to enhance its ability to deal with physical planning and zoning concepts
- People do this for lots of other industries, like with manufacturing robots and jewlery
- Does these things:
- Connects with the Digital Twin to fetch context models of real-world sites
- Gives Rhino an "understanding" of zoning concepts like the Zoning Lot, rules for height, bulk and use ("Smart Objects") concept?
- Can use this awareness to
  - **Generate** envelopes and massings for proposed developemnts according to zoning assumptions
  - **Measure** and generate quantity take-offs from Rhino models of proposed developments
- *Brief live demo or brief demoing current capabilities*

### Future Directions

- Extended Grasshopper features
  - users can access and manipulate low-level functions w/o need for programming knowledge, useful for custom analysis & environmental simulation
- Digital engagement deliverables
- Data science projects and collaborations
- Zoning Spell-Check functions built into Rhino and/or other software (Revit)
- NYC Digital Twin viewers for non-designers: web app without Rhino
- Applicant model pipeline, tools and infrastructure to allow certain kinds of submissions as digital models instead of maps/drawings

### Introduce the DPI Documentation Site (up-to-date tutorials and information)

- If you have Rhino available on your computer and want to get started, you can find pre-recorded version of the second session on the docs site.
  - There will be further Continuing Ed. sessions later in the year to walk thorough these "in person"
    - Session 2 – UDTools basics
    - Session 3 – Large models, RWCDS
  - Repeat, you can always find up-to-date information about what's going on with the DPI via our documentation page:
    - https://ud-digital-practice.netlify.app
