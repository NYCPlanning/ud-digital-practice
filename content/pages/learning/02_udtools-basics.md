# UDTools 101: Building-Scale Modeling & Analysis Basics 
 
(Course Description)

### Audience

- designers who anticipate using UDTools
- but all are welcome

### Prerequisites

- Session 1
- Basic familiarity with Rhino (expand)

## Learning Objectives 
 
- Provide an overview of key concepts and recommended practices for urban modeling with UDTools + Rhino 
- Tour UDTools’ main interface, the Dashboard, and understand how it relates to other available interfaces for advanced users (Rhino commands, Grasshopper access) 
- Import a site model from the NYC Digital Twin and review the UDTools layer standard 
- Define Scenarios and Sites, learn how UDTools uses these to structure space and time and evaluate key zoning concepts 
- Generate a massing for a defined site; understand how development metrics are calculated and previewed 
- Export data for use in Excel or GIS 




## Outline

- Provide an overview of key concepts and recommended practices for urban modeling with UDTools + Rhino 
- Tour UDTools’ main interface, the Dashboard, and understand how it relates to other available interfaces for advanced users (Rhino commands, Grasshopper access) 
- Import a site model from the NYC Digital Twin and review the UDTools layer standard 
- Define Scenarios and Sites, learn how UDTools uses these to structure space and time and evaluate key zoning concepts 
- Generate a massing for a defined site; understand how development metrics are calculated and previewed 
- Export data for use in Excel or GIS 


- Core concepts
  - Layer standards
  - "Smart" geometry – like in GIS and BIM, UDTools enhances otherwise "dumb" shapes in Rhino to be able to store information and answer questions based on *what* they are and how they fit into a *context*
  - Defaults/overrides – things are simplified by default but complexity/nuance can be expressed by providing additional information
- (Recap) DPI documentation page
    - overview of what's there
    - how-to guide - mention that this is always going to have the most up-to-date
    - installation guide
- Installation
  - prerequisites
    - Rhino 6 running on Mac/PC, either agency desktop or personal computer
  - From DPI documentation page on installation:
    - download
    - unzip
    - choose correct file for your platform
    - double-click, rhino will install
    - note- on windows may need to unblock for windows firewall
    - look at example files
- (Recap) dashboard overview
  - the dashboard is like a "remote control" for rhino, it triggers commands and makes changes to your model, reads it and displays information in a more accessibel way
  - connection indicator
  - guide link
  - report problem link (show how this works)
  - version indicator, in case you don't have it when communicating about problems
  - five tabs, organized left-right as you build and modify a model
  - we'll walk through them one-by one as we model a single site
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
      - remarks about accuracy, especially for different point layers
        - street trees accurate generally, litter baskets not as good
      - 3D - note BIN numbers on buildings
    - meant to be a starting point for modeling not an accurate representation of the physical city
    - the map is not the territory! neither is a 3d model, even if it looks more like the real thing
- SETUP
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
- BUILD
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
- SUMMARY
  - jsut one site in this demo, but if we had more than one site this would show a list of all sites in the model
  - shows broad use category total, residential unit count
  - excel sheet can be downloaded, needs special scenario names for rwcds