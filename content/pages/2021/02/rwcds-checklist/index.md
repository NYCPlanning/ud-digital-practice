---
title: RWCDS Checklist
summary: 
publishSlug: /collaborate/rwcds
---

There are a few things you and your project team will need before getting started:

- [ ] A defined study area
- [ ] Site definition table
- [ ] Zoning assumptions table
- [ ] (Optional) Custom data export template

### Study Area

The first step in setting up a new model is to define the study area. A general idea is fine as long as your entire team agrees. Inside Rhino, you'll be prompted to draw a polygon on a map before running a command to fetch 3d buildings, tax lots and more from DCP GIS servers for you. It doesn't need to be exact; it's a good idea to err on the side of an overly generous boundary that you can trim down later if needed.

### Site Definition

Next, you'll need to define your Sites ("soft sites" in RWCDS terminology). The tax lots in your Rhino model will be identified by their Borough-Block-Lot (BBL) number, so sites are defined spatially as a list of BBLs. Each site needs to have a unique identifying number, and can optionally be assigned to a `group` (used for Projected/Potential in RWCDS) or be given a `note`. The different Scenarios in your project (understood as a single possible moment in the past, present or future) are also defined here, along with the assumed zoning under each. Your table will look like this:

| site_id | lot_ids | group | zoning_SCN_Existing | zoning_SCN_Without_Action | zoning_SCN_With_Action | note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2039430207, 2039430208 | Projected | M1-1 | M1-1 | C4-3 | Please review WOA zoning |
| ... | ... | ... | ... | ... | ... | ... |

### Zoning Assumptions

For **every** zoning district specified in your site definition table, you'll need to provide a list of basic assumptions. This should be developed in collaboration with the Zoning Division and Urban Design. Your zoning assumptions will look like this:

| district | ... | residential_far | ... | commercial_parking | ... |
| --- | --- | --- | --- | --- | --- |
| R4 |  | 0.75 | | 0 |
| ... |  | ... | | ... |

Note that every parameter for each district entry needs to have a value, blanks will cause the script to fail.

### Data Export Template (Optional)

By default, the script will create a data export of all calculated site information for each scenario using the standard table provided for RWCDS consultants. If you need only a subset of the full range, you can provide your own list of fields to use in a text file. The full list of available fields is available [here](../developer/data-model).
