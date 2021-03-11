---
title: "Tutorial 3: Modeling & Analysis at the Neighborhood Scale"
summary: Use UDTools for Rhino to document and refine a neighborhood-scale RWCDS.
publishSlug: /tutorials/rhino/module-3
---
### Audience

all agency staff who work on RWCDS analysis, while the second half will cover the methods available to designers for performing the analysis using UDTools.

* Planners and managers involved in the CEQR process for neighborhood studies (pt. 1 only)
* Designers likely to use UDTools for RWCDS work (pts. 1 and 2)

### Prerequisites

* Session 1
* Pt. 2 Only:

  * Session 2
  * Basic familiarity with Rhino, esp. layer management and solid modeling

## Learning Objectives

* Situate UDTools-based RWCDS analysis in the overall CEQR process; review key inputs, outputs and stakeholders
* Discuss recommended project roles and what to expect when working with the DPI team on rezonings
* Review key concepts and recommended practices for urban-scale modeling with UDTools + Rhino
* Review the structure (layers, sites/scenarios) of a basic building-scale model from UDTools 101
* Define custom zoning rules and apply proposed zoning changes spatially in your model
* Define sites and scenarios in bulk from a table or shapefile
* Batch-generate massings for multiple sites at once
* Discuss recommended approaches to iteration, and how to update data exports incrementally

## Outline

* Recap building-scale modeling concepts/techniques
* New concepts:

  * Dimensionality. In the last tutorial, we walked through the creation of a single 
  * Single source of truth (SSOT)
* Situate UDTools usage for RWCDS definition within larger process for neighborhood studies

  * inputs/outputs
  * stakeholders
  * challenges: iterative process with many variables

## The RWCDS in Context

For generic actions (as contrasted with localized actions) under CEQR, such as a large rezoning, a Reasonable Worst Case Development Scenario needs to be developed and documented. Generally speaking, documentation needs to show the following:

- Describe conditions at three moments in time, usually referred to Existing, No-Action and With-Action (also called scenarios)
- All development sites identified geographically by tax lot BBL
- Development sites marked as Projected and Potential
- Detailed floor area breakdowns by use, with specific flags for supermarkets, medical office uses and several other categories.
- Provide a 3D model, 2D shapefiles, and tabular data in Excel format

Many CEQR-related questions can be addressed by looking at the \[CEQR Technical Manual](https://www1.nyc.gov/site/oec/environmental-quality-review/technical-manual.page)

UDTools is designed to make the documentation of a RWCDS easier to produce and update. Using it effectively, however, requires more than just technical know-how: good project management and coordination are also needed to achieve success.

Two frequent challenges faced by project teams are 1) that a RWCDS has many variables and 2) that working iteratively can be challenging. 

## Project Roles

On a typical project, 

Look at \[project roles](/collaborate/roles) for a more in-depth explanation on what to expect.

With that in mind, let's turn back to the technical stuff. In the previous tutorial we covered how a 

* Review of model structure, now thinking about dimensionality

  * sites/scenarios
  * layers


Select the area bounded by Broadway, Prince Street, West Broadway, and Grand Street and run `UDImportModel`.

This time, let's use the "Map Only" option to get just 2D context geometry. You might want the 3D buildings later for visualization, and they can be brought in separately, but since it will make the `UDImportModel` operation take longer to complete we'll skip it for now.



* Restore a saved model
* Define custom zoning definitions and boundaries

Just like before, there's a bit of setup required before you can start massing buildings. This time we'll define scenarios and sites in bulk from a table, instead of one-by-one, and we'll also see how to define custom zoning rules to override the built-in defaults.

Every UDTools release comes with a collection of examples showing how to accomplish various tasks. For neighborhood-scale analysis, we can use the contents of `examples/rwcds` to get started. 

Both our custom zones and our site/scenario bulk import will be defined as tables in the [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) file format. CSV is an open file format that contains basically the same information as a single sheet in an Excel workbook but without formatting. We use it in UDTools instead of Excel's own .XLSX format because it can be easily read and written by a huge variety of other software – but can still be edited in Excel. Let's open up `zoning.csv` to start defining some custom zones.

Next let's look in `sites.csv`. You might recognize the structure of this table from our discussion of dimensionality, on the left we have a list of site 

* Define sites/scenarios in bulk from a CSV table
* Batch-generate massings

  * How to do this with envelope overrides
* Export scenario CSVs and full RWCDS spreadsheet

  * as of the 1.5 release this is broken, unfortunately, but we can see the steps to take anyway
  * just one site in this demo, but if we had more than one site this would show a list of all sites in the model
  * shows broad use category total, residential unit count
  * excel sheet can be downloaded, needs special scenario names for rwcds
* Recommended approaches to iterative/incremental process