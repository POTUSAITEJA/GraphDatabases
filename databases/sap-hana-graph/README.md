# SAP HANA Graph

> SAP HANA's native property graph engine, supporting openCypher and the GraphScript domain-specific language alongside SAP HANA's vector engine.

| | |
|---|---|
| **Website** | [help.sap.com/docs/hana-cloud-database](https://help.sap.com/docs/hana-cloud-database/sap-hana-cloud-sap-hana-database-property-graph-engine-reference/) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Commercial |
| **Query** | openCypher / GraphScript / SQL |
| **Vector strategy** | **Integrated** |
| **HA** | SAP HANA system replication and scale-out |
| **Deployment** | SAP HANA Cloud (managed) or self-hosted SAP HANA |

## Overview

SAP HANA Graph is a native property graph engine integrated into SAP HANA core functionality. It allows graph operations to run directly against data stored in an SAP HANA database without moving the data to a separate engine, and it supports two query surfaces: openCypher for declarative pattern matching and GraphScript, a domain-specific language for implementing complex graph algorithms inside the database.

In SAP HANA Cloud, the graph engine sits alongside SAP HANA's vector engine, which adds first-class vector data types and similarity search to the same database. The two share the same SQL session, the same security model, and the same operational tooling, which is the main argument for SAP HANA Graph as a converged option.

## Vector strategy — Integrated

SAP HANA Cloud exposes a dedicated vector engine in the same database as the property graph engine. Because vector columns and graph data live inside the same SAP HANA instance, a single SQL session can run an openCypher pattern match and combine it with vector similarity search without leaving the database. The vector engine is not part of the graph engine itself, which is why the strategy is classified as integrated rather than native.

## Best fit

- Organizations already standardised on SAP HANA that need property-graph analytics
- Workloads that combine graph traversal with vector similarity in the same SQL session
- Enterprises that require SAP-managed HA, backup, and security around graph data

## Considerations

- Commercial-only; tied to SAP HANA licensing
- openCypher is the pattern-matching surface, GraphScript is for algorithmic work — both have their own learning curves
- Vector lives in a sibling engine inside SAP HANA, not inside the graph engine itself
- Best fit for SAP-centric stacks; less attractive as a standalone graph database

## Sources

- [SAP HANA openCypher cheat sheet](https://help.sap.com/docs/hana-cloud-database/sap-hana-cloud-sap-hana-database-property-graph-engine-reference/appendix-d-opencypher-cheat-sheet)
- [SAP HANA Graph tutorials](https://developers.sap.com/group.hana-aa-graph-overview.html)
