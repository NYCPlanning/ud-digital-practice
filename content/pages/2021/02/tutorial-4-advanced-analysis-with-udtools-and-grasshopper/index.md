---
title: "Tutorial 4: Advanced Analysis with UDTools and Grasshopper"
summary: Use Rhino's built-in visual programming environment to perform custom analysis.
publishSlug: /tutorials/rhino/module-4
---

### Audience

- Designers likely to use UDTools for environmental modeling or custom analysis

### Prerequisites

- Sessions 1 & 2
- Intermediate/advanced Rhino
- Basic familiarity with Grasshopper

### Learning Objectives

### Outline
s
    environmental analysis
    and more

  general concepts
    - layer standard
    - BIM/GIS (geometry, attributes) or dumb -> smart geometry
    - overrides and defaults
    - tool ecology
    - tools versus methods
  getting started w udtools

  introduce DPI page
    - overview of what's there
    - how-to guide - mention that this is always going to have the most up-to-date
    - installation guide
    - need to show this actually
      download
      unzip
      choose correct file for your platform
      double-click, rhino will install
      note- on windows may need to unblock for windows firewall
      look at example files
    - prerequisites
      rhino 6 running on mac/pc, agency desktop or personal computer

- skill level comment
  - 101 demo is about how to use with dashboard, also provided thorugh rhino command interface, if you're more familiar with that
  - data is also exposed in grsshopper through components,
  - can be used for many use cases by many different types of users
  - look forward to other tutorials

- dashboard tour
  - the dashboard is like a "remote control" for rhino, it triggers commands and makes changes to your model, reads it and displays information in a more accessibel way
  - connection indicator
  - guide link
  - report problem link (show how this works)
  - version indicator, in case you don't have it when communicating about problems
  - five tabs, organized left-right as you build and modify a model

- steps

- CONTEXT
  - fetch geometry from the digital twin to give you a site model, base map
  - three options:
    - map only - 2d map things only (no 3d buildings or ground)
    - flattened - 3d buildings but sitting on ground plane
    - full 3d - all 3d geometry plus ground surface
  - after clicking import model, may have to move rhino display to redraw (bug, missing redraw call?)
  - introduce concept of the layer tree
    - udtools uses a fixed *layer standard* to organize information
    - MODEL > BASE > 2D/3D, look at layers that are in here
      - note BBL ids on tax lots
      - remarks about accurac