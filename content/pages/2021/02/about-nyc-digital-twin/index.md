---
title: About NYC Digital Twin
summary: Overview
publishSlug: /digital-twin/about
---

The NYC Digital Twin is a cloud service providing a central spatial data model of New York City to different UD Digital Practice products (like [UDTools for Rhino](/rhino/about)).

It currently includes data from the following sources:

| Layer | Source | Metadata |
|---|---|---|
| `dcp_streetcenterline` | DCP [Digital City Map](https://www1.nyc.gov/site/planning/data-maps/open-data.page#digitalcitymap) | [link](https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-digital-city-map.page#metadata) |
| `dcp_taxlots` | DCP [MapPLUTO](https://www1.nyc.gov/site/planning/data-maps/open-data.page#pluto) | [link](https://www1.nyc.gov/assets/planning/download/pdf/data-maps/open-data/meta_mappluto.pdf?r=20v6) |
| `dcp_zoning` | DCP [NYC GIS Zoning Features](https://www1.nyc.gov/site/planning/data-maps/open-data.page#zoning_related) | [link](https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-gis-zoning.page#metadata) |
| `doitt_boardwalk` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_buildings` | DOITT [NYC 3-D Building Model](https://www1.nyc.gov/site/doitt/initiatives/3d-building.page) | [link](https://github.com/CityOfNewYork/nyc-geo-metadata/blob/master/Metadata/Metadata_3DBuildingModel.md) |
| `doitt_elevation` | DOITT [1 Foot Digital Elevation Model (Integer)](https://data.cityofnewyork.us/City-Government/1-foot-Digital-Elevation-Model-DEM-Integer-Raster/7kuu-zah7) | [link](https://github.com/CityOfNewYork/nyc-geo-metadata/blob/master/Metadata/Metadata_DigitalElevationModel.md) |
| `doitt_hydrography` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_hydrostructure` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_median` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_miscstructurepoly` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_openspacenopark` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_park` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_parkinglot` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_plaza` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_railroadstructure` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_retainingwall` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_roadbed` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_shoreline` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_sidewalk` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_swimmingpool` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `doitt_transportstructure` | DOITT [Planimetrics](https://data.cityofnewyork.us/Transportation/NYC-Planimetrics/wt4d-p43d) | [link](https://github.com/CityOfNewYork/nyc-planimetrics/blob/master/Capture_Rules.md) |
| `dpr_streettree` | DPR [Street Tree Census](https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/uvpi-gqnh) | [link](https://data.cityofnewyork.us/api/views/uvpi-gqnh/files/8705bfd6-993c-40c5-8620-0c81191c7e25?download=true&filename=StreetTreeCensus2015TreesDataDictionary20161102.pdf) |

