NYC 3D Model Instructions

Getting Started
DoITT’s NYC 3D Model, like the City itself, is a behemoth. The model is a heavy, yet powerful tool for
planners and designers to imagine and project the evolution of the city over time. While DOITT initially
made this model available based on a 2014 aerial survey, at the time, the model was not provided in
prevailing 3D modelling formats. NYC Department of City Planning’s Urban Design division has imported
and surfaced the model, separated buildings into 64 community districts and park areas, and added base
layer geometry to the files for context. Below are some basic FAQs to get you started. All other
questions or requests can be directed to Udesign@planning.nyc.gov.
FAQs
Do you have to open the model using Rhino or can it be loaded into other software?
 NYC Planning has created a version of the NYC 3D Model in .3dm format, which is the native file
format of Rhinoceros 3D software. .3dm files can be exported into multiple file formats,
including .dxf/.dwg, .dae (collada), and many more, enabling an easy import into other
prominent types of software.
 The Urban Design Office has detailed procedures for importing portions of the 3D model into
Sketchup, which are available on the DCP Guide to Planning Resources.
 DOITT has made the entire model available in multiple format, including CityGML, Multipatch
(ESRI), and DGN (Microstation). Downloads are available here:
https://www1.nyc.gov/site/doitt/initiatives/3d‐building.page
 The entire model can also be viewed online at Cesium 3D Tiles (https://cesiumjs.org/NewYork/).
Do general staff have access to Rhino?
 Urban design and zoning staff in the central office and urban designers in the borough offices
have access to Rhino. Rhino access must be granted and installed on individual computers by
contacting Helpdesk.
 Because Rhino licenses are limited, they are managed remotely, with a limited number of users
at any given time. To view who is using the software, please use the following link:
http://thezoolm.dcp.nycnet/status
If not, how does one request or is there a dedicated machine available?
 Requests for Rhino access should be submitted directly to Helpdesk. If an infrequent Rhino user
would like access to the 3D model, they can use one of the computers in the Urban Design quad,
most of which have Rhino installed.
Can you use the file directly from M drive (which is read only) or do you need to save it locally?

October 2018 ‐ 2

 3D files cannot be written directly to the M Drive and must be copied to a local or network
drive.
 Users are strongly recommended to save 3D model files to a local drive when doing their work,
since performance may be slow otherwise. Due to the large size of certain models, certain
computers may be unable to process them. High‐processing computers (located in UD or
Population) are recommended when processing extremely large files.
How do I make the buildings in the model sit on the same plane?
The buildings in the NYC 3D Model are modeled at elevation, meaning that they sit on a kind of invisible
topographic plane. Because building bases, facades, and roofs are separated into three distinct layers,
buildings cannot simply be aligned to the ground plane. Urban Design has created basic instructions for
how to bring the buildings in the model onto a flat plane, which may be accessed via the Guide to
Planning Resources.
What if I am dealing with an area that spans multiple Community Districts?
If your study area spans multiple CDs, we do not recommend copying and pasting all of the districts into
one model. Open each district separately, overlay your study area, and delete all non‐relevant data.
Once you have done this, assemble the pieces of the model in a separate file using copy and paste.
Does DCP plan to make improvements to the model over time?
DCP hopes to make improvements to the model over time, especially in areas whose development has
changed significantly since 2014. UD is in the process of establishing a timetable for adding the following
features to the 3D model:
 New Buildings (to reflect current built conditions)
 Topography
 Prominent structures (highways, bridges etc.)
Whom should I contact if I find an error in the model?
Please email 3D model suggestions or comments to Udesign@planning.nyc.gov.

October 2018 ‐ 3

3D Model Basics

![screenshot of BK Community District model in Rhino]()

Each model has the same layer convention in Rhino, consisting of three primary layers with multiple
secondary layers.
1. The Community Districts Layer is consistent throughout the model and has a sublayer with
labels using the two‐letter borough acronym with the community district number
2. The Buildings layer consists of six sublayers. These layers are split into “building” layers, which
include basic linework for footprints, rooftops, and facades (each on their own separate layer)
and “Surface” layers, which are the filled surfaces of the same linework. Individual buildings are
not joined. Each consists of these six components spread across these secondary layers. The
buildings in the model are at their correct elevation, rather than sitting on a flat plane.
3. The Linework layer consists of 14 secondary layers, which were imported to Rhino via the Rhino
Grasshopper‐Meerkat plug‐in.
 Bridges & Tunnels ‐ New York Statewide Flyover 2014 Planimetrics
 Building Footprints‐ DoITT
 Contour Lines– DoITT Planimetrics, based on 2006 imagery
 Lot Lines – MapPLUTO, version 18V1
 NYCHA – New York City Housing Authority, Public Housing Developments as of July 2016
 Open Space – DoITT Planimetrics, published 2/29/16, based on 2014 imagery
 Parking Lot – DoITT Planimetrics, published 2/29/16, based on 2014 imagery
 Parks – DoITT Planimetrics, published 2/29/16, based on 2014 imagery
 Pavement Edge – DoITT Planimetrics, published 2/29/16, based on 2014 imagery

October 2018 ‐ 4

 Rail Line – DoITT Planimetrics, published 2/29/16, based on 2014 imagery
 Roadbed – DoITT Planimetrics, published 2/29/16, based on 2014 imagery
 Sidewalks – DoITT Planimetrics, published 2/29/16, based on 2014 imagery
 Subway Line ‐ MTA
 Subway Station Envelope ‐ MTA

![screenshot of rhino layer tree]()