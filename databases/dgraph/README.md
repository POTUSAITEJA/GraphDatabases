# Dgraph

> A distributed Apache 2.0 graph database with native float32vector and HNSW indexes queryable through DQL and GraphQL.

| | |
|---|---|
| **Website** | [dgraph.io](https://dgraph.io) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | DQL / GraphQL |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted, managed by partners |

## Overview

Dgraph is a distributed, sharded graph database written in Go, with native GraphQL and DQL query interfaces. It was acquired by Hypermode in 2024. Dgraph v24 introduced the `float32vector` data type and an `hnsw` index, exposing similarity search through the `similar_to()` function in DQL. Vectors are stored as ordinary node properties and multiple embeddings per node are supported.

Hypermode positions Dgraph with a "Graph-and-Vector" (GAV) framing where graph and vector are both first-class primary indexes, not a graph layered on a vector store or vice versa. HA is provided through Raft replication. Native sharding is built into the architecture.

## Vector strategy — Native

Dgraph documents `float32vector` plus HNSW indexes in DQL. Distance metrics include cosine, Euclidean, and dot product. Vectors are stored as node properties alongside other attribute types. Hybrid queries that combine graph traversal with vector similarity are supported in a single DQL statement. This is clear first-class vector support in current official documentation.

## Best fit

- Distributed graph plus vector workloads where a single Apache 2.0 engine is preferred
- GraphQL-friendly workflows that need graph traversal and vector similarity in one API
- Teams that want native HNSW-indexed similarity without an external vector service
- Workloads requiring multiple embeddings per node

## Considerations

- Distributed architecture adds operational complexity relative to single-node alternatives
- Maintainer changed to Hypermode in 2024; evaluate long-term roadmap continuity
- DQL is a proprietary query language; Cypher or SPARQL familiarity does not transfer directly
- Managed hosting options depend on third-party partners rather than a first-party cloud service

## Sources

- [Dgraph vector similarity search documentation](https://docs.dgraph.io/learn/howto/similarity-search/)
