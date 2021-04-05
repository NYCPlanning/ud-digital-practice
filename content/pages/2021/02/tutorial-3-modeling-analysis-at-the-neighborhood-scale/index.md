---
title: "Tutorial 3: Modeling & Analysis at the Neighborhood Scale"
summary: Use UDTools for Rhino to document and refine a neighborhood-scale RWCDS.
publishSlug: /tutorials/rhino/module-3
---

This is the third tutorial in the UDTools for Rhino training series, focused on producing RWCDS documentation for neighborhood-scale projects. Like the second session, the intended audience is urban designers and other Rhino users who will be tasked with producing models and quantity takeoffs as part of their everyday work. However, project managers and others involved in the RWCDS process may find the included discussions on project roles and approaches to iterative process helpful as well.

The tutorial assumes basic familiarity with Rhino, and that you've completed the [introduction](/tutorials/rhino/module-1) and the previous tutorial on modeling and analysis at [the building scale](/tutorials/rhino/module-2). Some familiarity with GIS tools + methods is helpful but not required.

## Learning Objectives

* Situate UDTools-based RWCDS documentation within the context of CEQR; review key stakeholders and roles
* Review key concepts from the building-scale tutorial (layers, sites/scenarios)
* Introduce new concepts related to large-scale work (single-source-of-truth, dimensionality)
* Define custom zoning rules and proposed zoning changes
* Define sites and scenarios in bulk
* Generate massings for multiple sites at once
* Export a complete RWCDS spreadsheet
* Discuss recommended approaches to iteration when working on a team

## The RWCDS in Context

For generic actions (as contrasted with localized actions) under CEQR, such as a large rezoning, a Reasonable Worst Case Development Scenario needs to be developed and documented. This documentation represents the physical change likely to occur as a result of the proposed action, and is used as the basis for analyzing specific impacts from a range of different perspectives. Generally speaking, documentation needs to:

* Describe conditions at three moments in time, usually referred to Existing, No-Action and With-Action (we call these **scenarios**)
* Include all projected and potential development **sites**, identified geographically (usually by tax lot BBL)
* Give detailed floor area breakdowns by use, with specific flags for supermarkets, medical office uses and several other categories
* Be passed on for downstream analysis as a coordinated set of files including a 3D model, 2D shapefiles, and tabular data in Excel format

UDTools is designed to make the documentation of a RWCDS easier, faster and less error-prone. Using it effectively, however, requires more than just technical know-how: good project management and coordination are also needed to achieve success.

Answers to many CEQR-related questions can be found in the [CEQR Technical Manual](https://www1.nyc.gov/site/oec/environmental-quality-review/technical-manual.page).

## Project Roles

They say it takes a village to raise a child, and it takes nearly as many people to define and document a RWCDS. A smaller group of about four typically deals with UDTools directly to document the larger group's decisions and to provide feedback in the form of results. This team of four works together to define inputs, generate massings for each site and scenario, run takeoffs and iterate as necessary. Two of the four (the Project Manager and Designer) are members of the project team proper, and handle communication with the larger team. The other two (the Project Support Liaison and Development Lead\*) sit on the sidelines as external project support, much like consultants on a conventional design and construction project. Typical responsibilities for each participant are outlined [here](/collaborate/rwcds-roles).

We'll return to the broad RWCDS workflow and project roles briefly at the end of the session in discussing approaches to effective iteration, for now let's turn to what the Designer will need to know and do to set up the project in UDTools, model massings and run takeoffs for a large collection of sites.

\**Note the use of the term "development" here refers to software development, not real estate development.*

## Review & New Concepts

Before we start on the demo, we need to quickly recap key concepts from the previous tutorial and introduce two new ones.

Last time, we covered how UDTools works – running inside of Rhino, it **interprets** plain CAD geometry as **smart objects** based on **names**, **layers** and user input.

We saw how to harness the special capabilities of these smart objects to generate new elements in our model, preview their attributes, and summarize those attributes across scenarios and the study as a whole. First we defined a single scenario (a moment in time) and a single site (a geographic location), which gave us a **zoning lot**. We then used this zoning lot to generate a **zoning envelope**, which we adjusted slightly before using it to generate the massing of a **proposed building**. As soon as the proposed building was present in the model, the UDTools **dashboard** showed us a live view of different metrics concerning its floor area, FAR usage, unit counts etc.

We also discussed how UDTools relies on a defined **layer standard** and model object **naming convention** to correctly interpret the contents of the Rhino model. Remember especially that the geometries that define individual floors of proposed bulidings need to be on the innermost sublayers of a scenario layer, where the layer name reflects the zoning use group and an optional label.

In what comes next, we'll apply these concepts to a neighborhood-scale project containing multiple scenarios and many sites. For this, it's helpful to understand the concept of **dimensionality**. In a design computing context, dimensionality refers to the number of different *parameters*, or variables, under consideration in what we call the *design space* of a given problem.

Let's break that down. It helps to think about this in terms of *lists*, which computers are excellent at managing. We see this at work all of the time. A Word document is basically a list of headings, paragraphs, occasional images and so on – this list has just one dimension. An Excel spreadsheet is a two-dimensional list - each cell is defined as the intersection between a list of rows and a list of columns. 3D geometry in Rhino is defined in terms of vertices, which each exist at the intersection of a range of possible X, Y and Z values. We can think of each of these lists as a parameter.

Up to about three dimensions, these ways of representing information tend to make intuitive sense to most people. Past that though, things get weird. You'll often hear people talking about time as a fourth dimension. But the fourth, fifth, sixth or any other dimension can be defined any range of possibile values. When documenting a RWCDS, we're dealing with a list of scenarios (moments in time), a list of sites (two-dimensional locations on a map), and a proposed building at the intersection of each which is itself defined as a list of floors consisting of a use and a three-dimensional geometric shape. Depending on how you slice and dice it, this whole mess is at least a 7-dimensional design space, if not more.

I don't know about you but that's way beyond the scope of what my brain is able to comprehend all at once, no matter how hard I think about it. But for a computer it's easy, we just put a list inside of a list inside of a list... until we're 7 dimensions deep. A minor sticking point is that we can't easily fit this n-dimensional model into a word document, an excel spreadsheet, or even a normal Rhino model. But UDTools is designed and built around this particular multidimensional design space, and provides us with ways to load information and read it back out in manageable 1D, 2D and 3D pieces that won't make our brains explode. In our neighborhood-scale use case especially, UDTools is largely about helping us manage multidimensional complexity.

For more in-depth discussion of dimensionality and the design space, along with discussion on how this is used to approach optimization problems, see Danil Nagy's Medium post on [the design space](https://medium.com/generative-design/step-1-generate-6bf73fb3a004).

The second new concept is related to how dimensionality poses a problem for collaborative work. If it's impossible for a single person to grasp the full range of a project's complexity, it's even less likely that a group of people working together will be able to stay on the same page without some help. This is especially true when decisions change frequently and different stakeholders deal with different subsets of the information. In this situation it is critical to maintain documentation of where things stand, ideally in one place and in an accessible form. 

Information systems theory gives us a good label for this: **single source of truth** (SSOT). In the multi-stakeholder project context, the set of files used to define the project in UDTools should be treated as the SSOT whenever possible to avoid coordination problems. Otherwise, the project manager will need to make sure effective practices for document coordination and quality control are in place.

Let's turn back to the how-to. As we work through the setup this time, keep in mind how we're gradually building up a multidimensional project model in UDTools by loading the required information in manageable pieces.

## Saving and Restoring

Remember from our recap that UDTools works by interpreting the Rhino model as a collection of "smart objects" based on its contents. Each time you quit, all of your model geometry is saved in the Rhino file like usual, and the smart part goes away. To get it back, first run `UDTools` to enable the plugin followed by `UDRestoreModel`. This will identify all of the smart objects under the site model `BASE` layer (like tax lots and buildings) and restore them to their former glory by re-fetching their attributes from the NYC Digital Twin. This may seem like a pain at first but one advantage is that MapPLUTO-derived data you get from take-offs will always be up-to-date since the Digital Twin reflects the latest available version of its data sources.

Every UDTools release comes with a collection of examples showing how to accomplish various tasks. To get started on this tutorial, either open the `model.3dm` Rhino file located in the `examples/tutorials/neighborhood` folder in the examples, or else import the study area bounded by Broadway, Prince Street, West Broadway, and Grand Street into a new empty file. If you're starting from scratch, it's recommended to use the "Map Only" option to fetch just 2D context geometry. You might want the 3D buildings later for visualization, and they can be brought in separately, but since it will make the `UDImportModel` operation take longer to complete we'll skip it for now. Either way you should be starting with something like this:

![UDImportModel result](importmodel_result.png)

Just like before, there's a bit of additional setup required before you can start massing buildings. Our sites, scenarios, and zoning lots are smart objects too and need to be loaded into the modeling environment in a specific way. In the previous tutorial, we saw how to define sites and scenarios one-by-one using `UDAddScenario` and `UDAddSite`, with zoning rules defined by built-in zoning districts. This time we'll see how to define custom zoning rules to override the built-in defaultss, and how to load multiple scenarios and sites in bulk from a single table. Both are essential skills for efficiently modeling a large project!

## Setup: Custom Zone Definitions

Both our custom zones and our site/scenario bulk import will be defined as tables in the [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) file format. CSV is an open file format that contains basically the same information as a single sheet in an Excel workbook but without any formatting. We use it in UDTools instead of Excel's own .XLSX format because it can be easily read and written by a huge variety of other software – but can still be edited in Excel. Let's open up `zones.csv` from the examples to start defining some custom zones.

Inside the file you'll see a header row with labels for each field, and two rows representing fake made-up zones, an `R12Q` and `C1-2X`. Each is identified by an ID, which can be any sequence of alphanumeric characters, dashes or underscores (no spaces!) and a Note, which contains text that the designer will see when modeling individual sites. The remaining fields encode numeric values for different zoning parameters. A brief description of the available fields is provided below.

First, allowable FAR for each zoning lot is provided through:

- `ResidentialFAR` 
- `CommunityFacilityFAR`
- `CommercialFAR`
- `ManufacturingFAR`

Quality Housing envelopes are based on:

- `BaseHeightMin`
- `BaseHeightMax`
- `BldgHeightMax`
- `LotCoverageMax`

Sky Exposure Planes are defined with:

- `SkyPlaneSlope`
- `SkyPlaneSetback `
- `SkyPlaneHeight`

Finally, parking and loading are expressed through the variables below. Residential spaces are calculated using the percentage of units required to have a parking space, while other uses use the amount of floor area for which a single space needs to be provided. Loading is the count of berths needed per building, and waivers are expressed as the maximum number of spaces that can be waived.

- `ResidentialParkingPct`
- `ResidentialParkingWaiver`
- `CommunityFacilityParkingFactor`
- `CommunityFacilityParkingWaiver`
- `CommunityFacilityLoading`
- `CommercialParkingFactor`
- `CommercialParkingWaiver`
- `CommercialLoading`
- `ManufacturingParkingFactor`
- `ManufacturingParkingWaiver`
- `ManufacturingLoading`

A few things to note: first, *each field must have a value* for the rules to load successfully. A value of 0 can be used for any field that isn't needed. Second, when using a custom zone definition, rules that rely on geometric context like setbacks determined by street width will be overridden by a static value. This is a limitation of the level of dimensionality we're able to squeeze into the zoning definition as represented by a row in a two-dimensional table.

Once your custom zones are defined, load them into UDTools with `UDLoadCustomZones`. You'll be prompted to specify the location of your zoning definition CSV, when the command completes you should see the Custom Zone IDs appear on the Dashboard Setup panel and in the Rhino Command History Panel.

## Setup: Defining Sites/Scenarios in Bulk

Next let's look in `sites.csv`. Like in our zoning table, you'll find a header row up at the top with our field names followed by several rows that, in this case, represent individual sites. The fields in this table should be familiar if you recall the information provided by the `UDAddSite` command, here we provide:

- an `ID` which has the same naming criteria as zones but is usually a letter or number
- a geographic location by `TaxLots`, one or more [BBL](https://en.wikipedia.org/wiki/Borough,_Block_and_Lot)s separated by commas
- an optional `Note` that will be seen by the designer when massing or previewing sites
- an optional `Group` label, used to indicate whether sites are "Projected" or "Potential" as defined in the CEQR Technical Manual

One important difference versus the manual entry method is that scenarios are now defined automatically based on any column headers prefixed with `Zone`. In the example, three are provided: `ZoneExisting`, `ZoneNoAction` and `ZoneWithAction` corresponding to the three standard scenarios for the RWCDS, but you can add additional columns (ex. `ZoneMyScenario`) or remove them from the file if different scenario labels are required for your use case.

Provide the zoning district ID you'd like to use for each site under each scenario, these can reference the [built-in](/rhino/about#built-in-zoning-districts) zones we saw in the last tutorial or the ID of a custom zone definition created in the previous section.

When your table is ready, run `UDLoadSites` and follow the on-screen instructions. As soon as the sites and scenarios defined in the table are loaded, UDTools will automatically create zoning lots for each and you'll see their boundaries appear in the Rhino window outlined in blue with an ID label at the center.

Site definitions including lots, IDs, notes and group designations can all be updated by editing your site table and re-loading them into UDTools. Unfortunately, the same is not yet true of custom zone definitions. These need to be defined before sites and cannot be changed once in place without restarting Rhino.

When using this method to add sites, you won't need to use `UDAddScenario` at all. However, if you didn't have a pre-defined list of sites and were going to start working on a RWCDS model from scratch, you could use the "Use Defaults" option in the `UDAddScenario` command to auto-populate the site list with the three standard scenarios.

## Generate Massings In Bulk

At this point, you could follow the same steps as the previous tutorial to create massings for each individual site one-by-one. For 25 sites across two different scenarios, that would take a long time! Fortunately, our approach to managing data in multidimensional lists also makes it easy to automate these kinds of repetitive tasks. Use the Dashboard to set the current scenario to WithAction, then run `UDGenerateMassing`. This time, change the Mode in the command dialog to `Auto`. Now, instead of massing a single site only, UDTools will loop through all sites defined in the study and generate zoning envelopes and proposed building massings for each.

Similarly to when working through sites individually, UDTools will still check for and use any existing zoning envelopes on each site. If you're not satisfied with the automatic results for certain sites in the study, you can discard the massing layers, leaving only the envelope, adjust the envelope as needed, then re-run `UDGenerateMassing` to recalculate the massing.

Note that UDTools keeps track of envelopes in the model for you, making it difficult to create duplicates unless the site definitions change. This is not true yet for proposed buildings, so you'll need to be careful to delete any existing models on a site or across a scenario before auto-generating new massings. An easy way to clear the model for an entire scenario is to simply delete the major use category layers within it, along with all sublayers. These will be auto-created for you again when you re-run `UDGenerateMassing`.

## Export Data

When your RWCDS model is finished, go to the last panel in the Dashboard, labeled "Summary". Use the "Calculate Summary Table" button to re-run calculations on all scenarios in the model, and then "Export to Excel" to download an Excel spreadsheet containing everything that's needed to document the RWCDS. The second button will only appear once the first has been clicked.

Inside of the resulting workbook you'll find six tabs:

- `sites_existing`
- `sites_no-action`
- `sites_with-action`
- `sites_increment`
- `sites_lots` 
- `lots`

The first three show site-by-site breakdowns for each scenario and `sites_increment` is provided as a blank sheet so the increment can be calculated and checked manually. `sites_lots` provides an address and list of BBLs for each defined site, and `lots` passes through a subset of MapPLUTO data for each individual tax lot in the study area.

It's important to understand where data comes from in the existing and no-action cases, as this masks a data limitation that sometimes causes confusion in the document review. Existing floor area will *always* be sourced from MapPLUTO, whichever version is present in the NYC Digital Twin at the time of export. No-Action sites are handled differently based on whether or not a proposed building model is present on the scenario layer. If no massing is found, floor area will be sourced from MapPLUTO, otherwise, figures will be calculated based on the massing. With-Action and all other scenarios will always show model-derived numbers no matter what.

<!-- A CSV file of just the current scenario can also be exported by running the command `UDExportScenario`. -->
