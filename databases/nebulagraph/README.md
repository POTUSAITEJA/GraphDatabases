# NebulaGraph

> A distributed label property graph database built for trillion-edge scale, with native vector search in Enterprise editions.

| | |
|---|---|
| **Website** | [nebula-graph.io](https://www.nebula-graph.io) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Apache 2.0 Community / commercial Enterprise (open-core) |
| **Query** | nGQL / openCypher |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted, managed cloud |

## Overview

NebulaGraph is a distributed, horizontally scalable LPG database originally built for trillion-edge social and financial graphs. It uses nGQL as its primary query language and also supports openCypher. The architecture is designed for native distribution with built-in sharding, HA, and ACID guarantees.

NebulaGraph Enterprise v5.1 embedded native vector search in 2025. NebulaGraph Enterprise v5.2 (November 2025) added a hybrid retrieval engine that combines graph traversals, vector similarity, and full-text search in a single nGQL query without requiring external systems. A managed cloud offering, NebulaGraph Cloud, is also available.

## Vector strategy — Native

NebulaGraph documents native vector search in Enterprise and newer cloud offerings. Vector indexing is not present in the Apache 2.0 Community Edition; it is part of the commercial Enterprise product line. The v5.2 hybrid retrieval engine allows nGQL queries to incorporate vector similarity alongside graph traversal and full-text filters in a single statement. The native classification here reflects Enterprise and cloud documentation, not community-only deployments.

## Best fit

- Distributed LPG at large scale, particularly in enterprise deployments
- Workloads that require hybrid graph plus vector plus full-text retrieval in one query
- Social graph, financial graph, and recommendation workloads at trillion-edge scale
- Organizations that can adopt the open-core licensing model

## Considerations

- Native vector indexing is an Enterprise feature; the Apache 2.0 Community Edition does not include it
- Open-core model means key differentiating features require a commercial license
- Deployment and operations complexity is higher than single-node alternatives due to the distributed architecture
- Verify which edition and version is in scope before planning a deployment

## Sources

- [NebulaGraph v5.1 vector search announcement](https://www.nebula-graph.io/posts/NebulaGraph_v5.1_Embeds_Vector_Search)
- [NebulaGraph Cloud latest version](https://www.nebula-graph.io/posts/NebulaGraph_Cloud_Latest_Version)
