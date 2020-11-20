---
slug: /developer/datamodel
title: UDTools Data Model
---

```mermaid
graph TD


    subgraph Sources
        user[User]
        digitalTwin[(NYC Digital Twin)]
        shp[Shapefile]
    end

    subgraph UDTools
        scn[Scenario]
        user --> scn
        mpLot[MapPlutoLot]
        shp --> mpLot
        digitalTwin --> mpLot
        site[Site]
        scn --> site
        user --> site
        zLot[ZoningLot]
        zLot --> site
        mpLot --> zLot
        zRules[ZoneRulesBasic]
        zRules --> zLot
        existingBldg[ExistingBuilding]
        digitalTwin --> existingBldg
        envelope[Envelope]
        zLot --> envelope
        massGoals[MassingGoals]
        user --> massGoals
        proposedBldg[ProposedBuilding]
        massGoals --> proposedBldg
        envelope --> proposedBldg
    end

    subgraph Rhino
        modelGeom[(Geometry)]
        proposedBldg --> modelGeom
        existingBldg --> modelGeom
        modelGeom --> view[View]
    end

    subgraph Grasshopper
        ghComponents[Data Connectors]
        site ---> ghComponents
    end
```

## Zoning

```mermaid
classDiagram
    class BuiltInZoning

    class ZoningDistrict

    class ZoneRulesBasic

    class ZoningLot{
        +List Lots
    }

    class ZoningEnvelope
```

## Non-Zoning Parameters

```mermaid
classDiagram
    class Use
    
    class MassingGoals{
        +List~Use~ FloorUses
        +List~double~ FloorHeights
    }

    Use --> MassingGoals
```

## Proposed Building

```mermaid
classDiagram
    class Site

    class BuildingStorey

    class ProposedBuilding{
        +List~BuildingStorey~ Floors
        +ProposedBuilding(Envelope, MassingGoals)
        +Generate(Envelope, MassingGoals)
        +MakeFloor(envelope, cutHeight, floorHeight)
    }
```

Sites are processed differently in two special cases, triggered by Scenario ID. If the scenario name is "Existing", the ApplyPluto method will be called, and metrics will be calculated on the basis of the attributes of the site's MapPLUTO lots only. When the scenario name is "No Action," UDTools will first check to see if a Proposed Building is present on the site. If so, metrics will be calculated for the Proposed Building using ApplyModel; if not, ApplyPluto will be used instead. The ApplyModel method will be called in all other cases.