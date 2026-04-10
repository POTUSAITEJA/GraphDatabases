# FalkorDB

> GraphBLAS-backed Cypher graph database with native HNSW vector indexes, and the active successor to RedisGraph.

| | |
|---|---|
| **Website** | [falkordb.com](https://www.falkordb.com) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | SSPL v1 (source-available) |
| **Query** | Cypher / Bolt procedures |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted, managed options |

## Overview

FalkorDB is a high-performance Cypher graph database that uses GraphBLAS sparse adjacency matrices for graph representation. It is the active successor to RedisGraph, which reached end-of-life in February 2025; FalkorDB publishes an explicit migration guide for RedisGraph users.

Native vector indexing was introduced in FalkorDB 4.0. Vector indexes are supported on both nodes and relationships, with distance metrics covering cosine and Euclidean. Hybrid graph-plus-vector queries can be expressed directly in Cypher.

## Vector strategy — Native

Vector indexes are documented for both nodes and relationships, with HNSW parameters exposed at index creation time. Vector search operates inside the same Cypher query as graph traversal, making FalkorDB a single-engine option for GraphRAG and knowledge-graph-for-LLM workloads without requiring a separate vector service.

## Best fit

- Fast graph-plus-vector workloads where both graph traversal and ANN search are needed in Cypher
- GraphRAG and LLM-augmented applications that need tight graph-vector integration
- Teams migrating from RedisGraph who want a supported successor path
- Workloads requiring HNSW-based vector indexes on both nodes and relationships

## Considerations

- SSPL v1 is source-available, not OSI-approved open source; if you offer FalkorDB as a managed service to third parties, the license requires releasing the surrounding service stack or negotiating a commercial license
- Internal use and most closed-source applications are unrestricted under SSPL
- Evaluate the managed service options if self-hosting operational overhead is a concern
- RedisGraph EOL means migration from that engine is time-sensitive for teams still running it

## Sources

- [FalkorDB vector index documentation](https://docs.falkordb.com/cypher/indexing/vector-index)
- [FalkorDB website](https://www.falkordb.com)
