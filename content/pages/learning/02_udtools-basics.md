---
slug: learning/udtools-101
title: Rhino Basics
---

# UDTools 101: Building-Scale Modeling & Analysis Basics 
 
(Course Description)

### Audience

- designers who anticipate using UDTools
- but all are welcome

### Prerequisites

- Session 1
- Basic familiarity with Rhino (expand)
- Helpful but not required to have some understanding/experience with GIS

## Learning Objectives 
 
- Provide an overview of key concepts and recommended practices for urban modeling with UDTools + Rhino 
- Tour UDTools’ main interface, the Dashboard, and understand how it relates to other available interfaces for advanced users (Rhino commands, Grasshopper access) 
- Import a site model from the NYC Digital Twin and review the UDTools layer standard 
- Define Scenarios and Sites, learn how UDTools uses these to structure space and time and evaluate key zoning concepts 
- Generate a massing for a defined site; understand how development metrics are calculated and previewed 
- Export data for use in Excel or GIS 

## Outline

- **Provide an overview of key concepts and recommended practices for urban modeling with UDTools + Rhino**
- Pick up from last time: towards easy urban modeling
  - How many people have GIS experience?
  - How many people have BIM experience, like Revit?
  - Can anyone that raised their hand offer a definition for what GIS or BIM is? (What makes it different than a drawing in powerpoint?)
  - The goal of UDTools is to make certain kinds of modeling you can do in GIS/BIM way easier
  - How do we represent urban spaces in Rhino?
    - Rhino geometry basics
      - Points, Lines, PolyLines. Analogs in GIS (Polygons are closed polylines, with or without holes)
      - Surfaces, PolySurfaces and Meshes
    - Attributes
      - Rhino has very limited attribute functionality outside of display properties/materials etc. It is mainly a tool for describing shapes of things
      - GIS has attribute table, that can describe any number of custom properties for each object
      - ⚠️ UDTools "interprets" geometry as special "smart objects" with geometry, attributes and behavior, and lets you deal with them inside Rhino
  - How does this work?
    - Layer Standard. like AIA CAD guidelines, used to guarantee models people work on are organized the same way so complex models are readable by other people
    - here we use it "semantically" that is, it gives the geometry in the rhino model special meaning. A point is just a point until you put it on `street-tree`, then it represents the location of a specific street tree captured in the street tree census
    - as UDTools interprets your model, it makes lots of assumptions along the way. Making this easy requires the use of dozens of "default assumptions" that obscure a lot of nuance in the interest of simplification. But UDTools is also designed to allow you to override these assumptions when you need to. in future tutorials we'll look at how this is done at different points in the process

  - OK so what can I do with this?
    - There is a lot but today we're focusing on simple zoning analysis
    - Once you have smart objects, you can interact with them using special tools to ask them questions
    - You can say, OK zoning lot, what does your maximum zoning envelope look like? How much floor area could I reasonably fit in there? etc.
    - You can also say "Who owns you?" or "When was the last time someone pulled permits for a major construction project here"
    - (DPI philosophy)
      - The question really matters
      - tools vs methods: not just a "magic machine" that spits out answers but something that participates in an existing ecosystem of professional tools that you can use in a number of ways to solve different problems
      - Current components:
        - NYC Digital Twin
          - centralized data model containing everything we know from Open Data and other sources about the current state of the city
        - UDTools, extends Rhino to do cool stuff related to urban design and zoning
          - Connect with the Digital Twin, 
          - “Understand” zoning and urban design concepts, 
          - Generate zoning-compliant massings for real-world or hypothetical sites, 
          - Produce detailed take-offs of key development scenario metrics.
        - UDTools grasshopper components

  - how to install. this is already running on my machine, but here's how you would do it:
    - Prerequisites:
      - Rhino 6 running on Mac/PC, either agency desktop or personal computer
    - From DPI documentation page on installation:
      - download
      - unzip
      - choose correct file for your platform
      - double-click, rhino will install
      - note- on windows may need to unblock for windows firewall
      - look at example files
- **Tour UDTools’ main interface, the Dashboard, and understand how it relates to other available interfaces for advanced users (Rhino commands, Grasshopper access)**
  - this is the UDTools Dashboard, it's the easiest way to interact with UDTools for most tasks
  - there are two other ways, using the Rhino command line, and through custom grasshopper components, we'll talk about both in future tutorials
  - the dashboard is like a "remote control" for rhino, it triggers commands and makes changes to your model, reads it and displays information in a more accessible way. here's what you see:
    - connection indicator
    - guide link
    - report problem link (show how this works)
    - version indicator, in case you don't have it when communicating about problems
    - five tabs, organized left-right as you build and modify a model
  - we'll walk through them one-by one as we model a single site
- CONTEXT **Import a site model from the NYC Digital Twin and review the UDTools layer standard** 
  - kick off methods/process section. look at diagram/flow chart
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
      - remarks about accuracy, especially for different point layers
        - street trees accurate generally, litter baskets not as good
      - 3D - note BIN numbers on buildings
    - meant to be a starting point for modeling not an accurate representation of the physical city
    - the map is not the territory! neither is a 3d model, even if it looks more like the real thing
- SETUP **Define Scenarios and Sites, learn how UDTools uses these to structure space and time and evaluate key zoning concepts**
  - next step is to define *sites* and *scenarios* for analysis
  - site - a fixed geographic location (stays the same over time)
  - scenario - a moment in time (conditions, like zoning, change with time)
  - what's shown in the dashboard is the intersection between a site and scenario - a *snapshot*
  - check back in on layers
    - scenarios are stored as separate layer trees
    - sites are stored as different geographic locations
  - different ways to set up your file: this session, basic one-by-one commands
    - first, add scenarios (`UD_AddScenario`) - takes label only
    - then, add sites (`UD_AddSites`)
      - has to be done in Rhino, dashboard doesn't provide ability yet
      - sites require ID first
      - then, zoning to use for each label
      - pick lots from lots layer to use as zoning lot (one or more)
    - alternate version, custom lot
      - same as above, except:
        - create new geom on 2D > lot-custom layer (or wherever convenient)
        - talk about how this can be either a subdivided site or an arbitrary place
        - select polyline
        - select front lot lines, side lot lines and rear (explain why, software is able to understand which lot line types to use when you have the context, but can't figure it out when it's an arbitrary geometry)
  - in RWCDS session, will talk about how to define and import sites in bulk
  - will also cover custom zoning overrides
- BUILD **Generate a massing for a defined site; understand how development metrics are calculated and previewed** 
  - generate massing for defined sites in the model
  - needs two things, zoning rules (looked up automatically), and massing goals
  - massing goals provided as a list of floor heights and use groups
  - interface likely to change in the near future to be less confusing, but for now need to provide use groups
  - both floor heights, use groups provided as a list, ordered bottom-up
  - last item in the list repeats until FAR runs out 
  - click set massing goals
  - "generate massing" will create an envelope, with default assumptions
  - you can also create a custom envelope, or modify the existing, and generate massing will use what's there (use this to inject the process with zoning know-how)
  - think of this as a "tool sharpening" moment, can overcome the shortcomings of the "blunt tool" of built-in zoning with something that makes more sense
    - designer or planner can intervene with information you know that the tool doesn't know
  - demo moving the setback, generate a new massing with the modified envelope (if you wanted to see with minimum base height instead of max)
  - one more example, split the envelope to partial lot
    - make plane, boolean split
    - run generatemassing again
- MEASURE
  - now we have a smaller massing than what's probably allowed in FAR terms
  - what if we want to know how much smaller it is and how much FAR we have left?
  - change to measure tab
  - explain dot scale diagram - shows total GFA, ZFA and balance of utilized/available FAR for each use category
  - show that it changes on the fly as you modify the massing in rhino. demo getting close to limit when full-floor thing kicks in
  - other things on the page
    - dimensions, unit counts
      - not ethat street frontage is for zoning lot not neccessarily massing
      - unit counts etc are estimates based on sqft assumptions
    - parking/loading/bike parking
      - number of spaces, approx area required
  - demo how to solve for bike parking
    - won't be modeled automatically, but you can add on a parking layer to see how it will affect the massing
    - shortcomings will be highlighted in red, once you provide required amount it will go black
- SUMMARY **Export data for use in Excel or GIS**
  - as of the 1.5 release this is broken, unfortunately, but we can see the steps to take anyway
  - jsut one site in this demo, but if we had more than one site this would show a list of all sites in the model
  - shows broad use category total, residential unit count
  - excel sheet can be downloaded, needs special scenario names for rwcds

---

## To-Do:

- insert comment about tool "ecosystems" - meant to provide robust but flexible "kit of parts" that can help solve different problems, rather than just performing a specific task
- further reading:
  - gis definitions
  - bim definitions
  - layer standard