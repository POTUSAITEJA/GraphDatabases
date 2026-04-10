# HelixDB

> Rust-native graph-vector database with HelixQL, a strongly-typed compiled query language for graph traversal and vector search in one engine.

| | |
|---|---|
| **Website** | [helix-db.com](https://www.helix-db.com) |
| **Model** | Multi-model |
| **Status** | Emerging |
| **License** | AGPL-3.0 (copyleft) |
| **Query** | HelixQL |
| **Vector strategy** | **Native** |
| **HA** | Single-node (LMDB-backed storage) |
| **Deployment** | Self-hosted; managed service available for selected users |

## Overview

HelixDB is an open-source database built from scratch in Rust that combines graph traversal, vector search, and a strongly-typed compiled query language called HelixQL. It targets AI and retrieval-augmented applications that otherwise have to stitch together a separate graph store, vector store, and application layer.

The engine uses LMDB as its storage backend, which gives it low-latency reads and transactional durability in a single embedded process. HelixQL is compiled and type-checked at development time, which trades a small amount of flexibility for stronger guarantees that queries will execute as written.

## Vector strategy — Native

Vector support is a first-class primitive in HelixQL, not an extension. The same query language that walks the graph can also perform approximate nearest neighbour search, and the two can be composed in a single statement. Because the graph and vector layers share the same storage engine, there is no data duplication or sync step between them.

## Best fit

- RAG pipelines and AI applications that need graph traversal and vector search in one typed query surface
- Embedded deployments where a single-binary engine is operationally attractive
- Teams that prefer a strongly-typed query language over a dynamic one

## Considerations

- AGPL-3.0 has implications for SaaS distribution; review the licence before embedding in a commercial hosted product
- Single-node by design; not a distributed database
- Emerging status — ecosystem, tooling, and driver coverage are smaller than mature engines
- HelixQL is a new language; expect a learning curve relative to Cypher or SPARQL

## Sources

- [HelixDB GitHub repository](https://github.com/HelixDB/helix-db)
- [HelixDB product site](https://www.helix-db.com)
