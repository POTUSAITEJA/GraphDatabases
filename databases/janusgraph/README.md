# JanusGraph

> Distributed Apache-licensed property graph over pluggable storage backends, with no native vector index in the current stable release.

| | |
|---|---|
| **Website** | [janusgraph.org](https://janusgraph.org) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | Gremlin |
| **Vector strategy** | **None** |
| **HA** | Backend dependent |
| **Deployment** | Self-hosted |

## Overview

JanusGraph is a distributed Apache-licensed graph database that runs on top of pluggable storage backends (Apache Cassandra, ScyllaDB, HBase, BerkeleyDB, Google Bigtable) and pluggable indexing backends (Elasticsearch, Solr, Lucene). It is the open-source successor to the Titan project and is governed under the Linux Foundation.

HA and replication are inherited from the storage backend rather than managed natively by JanusGraph itself. Scale to hundreds of billions of edges is achievable with appropriately configured backends. The project is actively maintained with releases tracked through the Linux Foundation governance model.

## Vector strategy — None

Current public JanusGraph documentation emphasizes graph traversal and search backend integration, not a native ANN vector index. Vector similarity through dense vector fields in Elasticsearch or OpenSearch is technically possible at the indexing backend layer, but there is no first-class Gremlin syntax or documented JanusGraph API for vector search. Native vector support is discussed in the JanusGraph issue tracker but is not part of any stable release as of current documentation.

## Best fit

- Distributed Gremlin workloads where an existing backend infrastructure (Cassandra, HBase, Bigtable) is already in place
- Workloads that need a graph layer on top of existing backend infrastructure without a graph-specific storage migration
- Teams that need Linux Foundation-governed, Apache-licensed graph software
- Large-scale graph analytics where backend-level distributed scaling is the primary requirement

## Considerations

- No native vector index; vector workloads require an external store joined at the application layer
- HA and replication depend entirely on the storage backend configuration, not JanusGraph itself
- Pluggable backend model adds operational complexity; selecting and tuning the right backend is part of the deployment burden
- Gremlin is the only supported query language; no SPARQL or Cypher support

## Sources

- [JanusGraph project page](https://janusgraph.org/)
- [JanusGraph documentation](https://docs.janusgraph.org/)
