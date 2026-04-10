# HGraphDB

> TinkerPop 3 client layer that turns Apache HBase into a graph database, with integration points for Apache Giraph and Spark GraphFrames.

| | |
|---|---|
| **Website** | [github.com/rayokota/hgraphdb](https://github.com/rayokota/hgraphdb) |
| **Model** | Label Property Graph |
| **Status** | Legacy |
| **License** | Apache 2.0 (permissive) |
| **Query** | Gremlin |
| **Vector strategy** | **None** |
| **HA** | Inherits HBase distribution and replication |
| **Deployment** | Client library on top of an Apache HBase cluster |

## Overview

HGraphDB is a client-side library that exposes Apache HBase as a TinkerPop 3 graph database. Created by Robert Yokota, it implements the Apache TinkerPop 3 interfaces directly on top of HBase, supports user-supplied IDs for vertices and edges, and accepts both string and numeric identifiers.

The main value of HGraphDB is access to the broader TinkerPop ecosystem from an HBase-backed graph: the Gremlin query language, the Gremlin Console, Apache Giraph for batch graph processing through `HBaseVertexInputFormat` and `HBaseEdgeInputFormat`, and Spark GraphFrames analytics via the Spark-on-HBase Connector.

## Vector strategy — None

No native vector index. HGraphDB is a thin TinkerPop layer over HBase and has no separate vector storage path.

## Best fit

- Organizations already running HBase that need a TinkerPop 3 graph layer
- Workloads that benefit from Giraph or Spark GraphFrames integration on top of an HBase-backed graph
- Historical reference for HBase-backed graph deployments

## Considerations

- Tied to specific HBase versions (HGraphDB 2.2.2 for HBase 1.x, 3.0.0 for HBase 2.x)
- Operationally complex — requires running and maintaining an HBase cluster
- Project is mature but moves slowly; treat as legacy for new deployments
- No native vector capability

## Sources

- [HGraphDB GitHub repository](https://github.com/rayokota/hgraphdb)
- [HGraphDB introduction blog post](https://blogs.apache.org/hbase/entry/hgraphdb_hbase_as_a_tinkerpop)
