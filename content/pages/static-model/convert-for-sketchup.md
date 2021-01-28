---
slug: /static-model/convert-skp
title: Convert for Sketchup
---

Rhino to Sketchup Export Instructions

![screenshot of small model in rhino]()
![screenshot of the same model in sketchup]()


Introduction
Since many planners at DCP need to work with the NYC 3D model in Sketchup, below is a basic workflow
for how to export a Rhino .3dm model into Sketchup.
For starters, you don’t need to export all of the layers in the model. Turn off the layers you won’t be
using in Sketchup. In this case, I suggest turning off the Building line layers (Building_Footprint,
Building_Rooftop, Building_Facade).

2
For this exercise, we will export your model of Lower Manhattan to a .dxf/.dwg format, which can be
imported into Sketchup. (Below Credit: Sefaira)
Instructions
1. [In Rhino ] File → Export Selected → .dwg OR .dxf (both file types have the same export properties).
After you click Save, a dialog box will pop up. (.dwg will produce a smaller file size)
2. Select export scheme as 2004 Lines, then click Edit Schemes.
3. Under the General tab, select Write Surfaces As: Meshes and Write Meshes As: Meshes. Click
Close, then OK.
4. The next dialog box gives you basic control over the model’s complexity. Select Simple Controls and
move the slider all the way to the left. This results in a simplified, faceted model. You generally want to
move the slider all the way to “Fewer Polygons. For more control over export options, click Detailed
Controls.
Note: for the NYC 3D Model, you will want to simplify the model as much as possible.
5. Uncheck all boxes EXCEPT simple planes. The only input you are concerned with is Density. The
density scale ranges from 0-1, but your exports should not exceed .25 (otherwise the exported file will
be too heavy).
For the NYC 3D Model, choose a density of 0.
Original Rhino model: solid sphere and NURBS surface
0.0 Density: 16 Planes
0.05 Density: 44 Planes
0.10 Density: 146 Planes
0.20 Density: 336 Planes
6. Click Ok. Depending on the size the model, the export may take some time.
To test your exported model, open Sketchup and go to File → Import. Import the .dwg file. Please note
that depending on the file size and complexity, the import can take some time. You must also check
“merge coplanar faces” for the model to come into Sketchup clean.
Issues with Sketchup Import
Once you’ve imported your model into Sketchup, you’ll notice that the model has several issues. First,
the entire model comes into the file in one group, so you’ll need to reformulate its layers. None of the
buildings come into Sketchup as components, unless they have been previously joined in Rhino. For a
basic context model, that may not be an issue. For more complex models, joining in Rhino prior to
export is a good idea.