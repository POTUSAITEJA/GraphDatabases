# IBM Db2 Graph

> Virtual property graph overlay that lets Apache TinkerPop Gremlin queries run against existing IBM Db2 relational tables.

| | |
|---|---|
| **Website** | [ibm.com/docs/en/db2/11.5?topic=da-db2-graph](https://www.ibm.com/docs/en/db2/11.5?topic=da-db2-graph) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Commercial |
| **Query** | Gremlin |
| **Vector strategy** | **None** |
| **HA** | Db2-native HADR and pureScale |
| **Deployment** | Included with IBM Db2 (self-hosted or Cloud Pak for Data) |

## Overview

IBM Db2 Graph exposes an Apache TinkerPop Gremlin query surface over existing Db2 relational tables. Instead of materializing a separate graph store, it uses a Graph overlay file that maps each row in a table to either a vertex or an edge. Gremlin queries are then transformed into optimized SQL statements and executed against Db2 over a JDBC connection.

The main value is integration: organisations that already store their core data in Db2 can run graph traversals and TinkerPop-compatible analytics against that data without migrating it. Db2 Graph is a listed Apache TinkerPop provider and ships as part of the IBM Db2 family, including inside Cloud Pak for Data.

## Vector strategy — None

There is no native vector index in the Db2 Graph layer itself. Since the graph is a virtual overlay on relational tables, any vector capability would have to come from Db2's own data types or from a sibling IBM product — neither of which is exposed inside the Graph layer's documentation as a first-class feature.

## Best fit

- Organizations already on IBM Db2 that want graph traversals over existing relational data
- Teams that need standard TinkerPop tooling without running a separate graph engine
- Workloads where the graph view is a secondary lens on canonical relational data

## Considerations

- The graph is virtual; query performance depends on Db2's SQL optimizer and the underlying schema
- Requires an IBM Db2 licence and the Db2 Graph feature
- Gremlin-only query surface; no Cypher or SPARQL
- No native vector support

## Sources

- [IBM Db2 Graph overview](https://www.ibm.com/docs/en/db2/11.5?topic=da-db2-graph)
- [Db2 Graph on Cloud Pak for Data](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.0?topic=applications-db2-graph)
