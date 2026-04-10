# CozoDB

> Embeddable multi-model database with Datalog queries, native HNSW vector indexes, and graph traversal in a single query surface.

| | |
|---|---|
| **Website** | [cozodb.org](https://www.cozodb.org) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | MPL-2.0 (permissive) |
| **Query** | CozoScript (Datalog) |
| **Vector strategy** | **Native** |
| **HA** | Embedded or single-node server |
| **Deployment** | Embedded library, single-node server, or browser via WASM |

## Overview

CozoDB is a general-purpose, transactional, embeddable database with a Datalog query surface. It stores data as relations but exposes first-class graph traversal through recursive Datalog rules, and it ships with native HNSW vector indexes that can be combined with graph queries in a single CozoScript statement.

It can run embedded as a library, as a standalone server, or in the browser via WebAssembly. The on-disk engine is pluggable (RocksDB, SQLite, or in-memory).

## Vector strategy — Native

HNSW vector indexes are a first-class index type in CozoScript and can be combined with Datalog graph traversals in a single query. Vector support is not bolted on: HNSW indexes are declared inline (`::hnsw create`) and queried through the standard Datalog surface, so a single rule can walk a graph and filter by vector similarity in one pass. This is unusually tight integration for an open-source graph store.

## Best fit

- Embedded knowledge-graph applications that want one query language for graph, relational, and vector workloads
- Research and prototyping where a Datalog-native surface is preferred over SPARQL or Cypher
- Local-first or edge deployments where a single-binary store with vector search is useful

## Considerations

- Datalog has a steeper learning curve than Cypher or SPARQL
- Cluster mode is not the target deployment; CozoDB is designed around embedded and single-node use
- Ecosystem tooling is smaller than mature LPG or RDF stores

## Sources

- [CozoDB GitHub repository](https://github.com/cozodb/cozo)
- [CozoDB vector search documentation](https://docs.cozodb.org/en/latest/vector.html)
