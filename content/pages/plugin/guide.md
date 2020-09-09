---
slug: /plugin/guide
title: UDTools Guide
---

## Import Model

Using the map, draw a line around the area you want to import. It can be a single building, a street, or a whole neighborhood. Just be aware a large area will take longer to import than something small.

In Rhino, run the command `UD_ImportModel` to get all available layers, or `UD_ImportModel2D` for MapPLUTO lots only. The command will take a few moments to run, but when it completes you should see the imported geometry added to your model.

## Mass Sites

Now you can begin to build out your model.

Launch Grasshopper with the `Grasshopper` command in Rhino, and then open the `massing.gh` example which can be found in the release folder under `examples/rwcds`. Once the script loads, you can minimize the Grasshopper window, it is not needed.

Turn on the Grasshopper remote panel in Rhino. You should see a single green button labeled "Update Massing". Each time you change Sites or Scenarios in the Dashboard, pressing this button will generate a new massing from the provided zoning assumptions and update the preview.

When you're ready to add the massing to your model, run the command `UD_GenerateMassing` and the massing will automatically be saved to the Rhino file under the appropriate layers.

At this point you can make further modifications to the massing as needed to fit the Scenario's requirements. You can change the layer of individual floor geometries just as you would any other Rhino object. Altering the geometries or creating new ones on a given site will also add or subtract from the floor area totals you see in the Dashboard. (Updates are made every time you deselect objects in Rhino).

If you need to create new layers to denote additional uses, the following naming convention and hierarchy must be observed:

- `MODEL` contains all geometry representing a 'real' physical or legal thing.
  - `BASE` is generated automatically when you run `UD_ImportModel`
  - Scenario layers, `SCN_Scenario_Name` contain all geometry particular to a given scenario. Examples: `SCN_Existing`, `SCN_No-Action`, `SCN_Proposal-2`. `SCN_Existing` and `SCN_No-Action`/`SCN_Without-Action` are special cases that pull floor area data from MapPLUTO instead of the model based on the requirements of the RWCDS analysis.
    - `envelope` contains volumes representing the maximum allowable bulk under the Scenario's zoning.
    - `RESIDENTIAL`, `COMMERCIAL`, `COMMUNITYFACILITY` and `MANUFACTURING` group together sublayers with each specific use
      - Specific uses are coded as `NN_use-label` where NN is a zero-padded number corresponding with a use code in the ZR and use-label is an arbitrary tag that can be used to track groups of floor area for non-zoning purposes. Examples: `02_condo`, `16_auto-related`, `06_office`, `06_local-retail`

Note: by convention, layers in all-caps should never contain geometry.

## Import Assumptions

When starting a new project, you'll need to tell UDTools which lots in your model should be treated as "sites" for analysis. UDTools contains built-in zoning assumptions for most districts, but you can also provide your own custom zoning definitions that will override the defaults. Both site and zoning assumptions need to be provided as .csv files which can be exported from any Excel workbook.

Follow the [instructions](https://nycplanning.github.io/ud-digital-practice/plugin/what-you-need) on the Digital Practice documentation page to prepare your assumptions. Once they're ready, run `UD_ImportZoning` then `UD_ImportSites` in Rhino and follow the instructions in the prompt.

Once your assumptions have been loaded, you should see the boundaries of each site appear in Rhino, and a list of available sites and scenarios will appear. Clicking on a site, and then a scenario will show a preview of the FAR and floor area totals for that combination, as well as a list of zoning assumptions and site details.

## Export

If you want to use the data contained in the model with another program (like Excel) or share it with another member of the project team, it can be exported to a file with `UD_ExportScenario`. Rhino will prompt you for a file path, navigate to the desired location and name the file `your-file.csv` (you must provide the extension yourself). All sites under the currently-selected scenario will be exported.
