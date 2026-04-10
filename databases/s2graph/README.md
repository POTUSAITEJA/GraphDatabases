# Apache S2Graph

> Distributed OLTP graph database built on Apache HBase, implementing Apache TinkerPop. Currently in Apache Incubation with light community activity.

| | |
|---|---|
| **Website** | [s2graph.apache.org](https://s2graph.apache.org) |
| **Model** | Label Property Graph |
| **Status** | Legacy |
| **License** | Apache 2.0 (permissive) |
| **Query** | Gremlin / REST |
| **Vector strategy** | **None** |
| **HA** | Inherits HBase distribution and replication |
| **Deployment** | Self-hosted on an Apache HBase cluster |

## Overview

Apache S2Graph is a distributed OLTP graph database built on top of Apache HBase. It is an implementation of the Apache TinkerPop interfaces, which gives it a Gremlin query surface and access to the broader TinkerPop ecosystem. The project includes a core library, a REST server, Spark jobs for bulk loading, and Spark jobs for OLAP-style analytics.

S2Graph entered the Apache Incubator in 2015. Community activity has been light in recent years; board minutes describe periods of "very quiet" engagement, and the project has not yet graduated to top-level Apache project status. It is included here as a legacy reference for HBase-backed graph deployments.

## Vector strategy — None

No native vector index. S2Graph predates the modern vector-database era and the project's energy went into HBase scaling rather than similarity search.

## Best fit

- Historical reference for HBase-backed graph deployments
- Migration planning for teams running existing S2Graph installations
- Background reading on how TinkerPop has been layered on big-data storage engines

## Considerations

- Still in Apache Incubation; light community activity
- Tied to specific HBase versions (tested on 0.98 through 1.2)
- No native vector support
- Operationally complex — requires running and maintaining HBase

## Sources

- [Apache S2Graph](https://s2graph.apache.org)
- [S2Graph GitHub repository](https://github.com/apache/incubator-s2graph)
