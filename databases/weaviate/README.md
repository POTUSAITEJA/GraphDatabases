# Weaviate

> Open-source vector database with a typed cross-reference graph model and GraphQL, REST, and gRPC query surfaces.

| | |
|---|---|
| **Website** | [weaviate.io](https://weaviate.io) |
| **Model** | Specialized |
| **Status** | Production |
| **License** | BSD-3-Clause (permissive) |
| **Query** | GraphQL / REST / gRPC |
| **Vector strategy** | **Native** |
| **HA** | Sharding and replication across cluster nodes |
| **Deployment** | Self-hosted, Docker, Kubernetes, or Weaviate Cloud |

## Overview

Weaviate is a cloud-native, open-source database built around vector embeddings. Every object has typed properties and can hold typed cross-references to other objects, which gives the data layer a navigable graph shape on top of its vector-first storage. Queries are expressed primarily through a GraphQL surface that supports both similarity search and structured filtering.

It is catalogued here under `specialized` because it is neither a classical label property graph engine nor an RDF store — the graph dimension comes from schema-defined cross-references rather than arbitrary edges with properties.

## Vector strategy — Native

Weaviate is a vector database first. HNSW indexes are built directly into the storage engine, and vector similarity search is a primary query operation rather than a bolt-on feature. Because cross-references live alongside vector columns in the same object, a single GraphQL query can combine nearest-neighbour search, structured filtering, and reference traversal without leaving the engine.

## Best fit

- Vector-first knowledge graphs with GraphQL access
- Retrieval pipelines that need similarity search plus schema-defined object links
- Teams that want a single system for hybrid keyword, vector, and reference queries
- Managed-cloud deployments via Weaviate Cloud without self-hosting

## Considerations

- The graph model is schema-defined cross-references, not arbitrary LPG or RDF edges
- GraphQL is the primary query surface; developers expecting Cypher, SPARQL, or Gremlin should evaluate the fit
- BSD-3-Clause permits commercial use; cluster mode and tuning are documented through operational guides

## Sources

- [Weaviate GitHub repository](https://github.com/weaviate/weaviate)
- [Weaviate documentation](https://docs.weaviate.io/weaviate)
