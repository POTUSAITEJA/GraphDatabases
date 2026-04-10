# SutraDB

> Preview-stage RDF-star triplestore that stores vector embeddings as native RDF triples and queries them in SPARQL.

| | |
|---|---|
| **Website** | [sutradb.org](https://sutradb.org) |
| **Model** | RDF / SPARQL-native |
| **Status** | Emerging |
| **License** | Apache 2.0 (permissive) |
| **Query** | SPARQL 1.1 superset |
| **Vector strategy** | **Native** |
| **HA** | No |
| **Deployment** | Embedded / self-hosted |

## Overview

SutraDB is an RDF-star triplestore with native HNSW vector indexing implemented in Rust. It is the only known open-source RDF store where vector embeddings are stored as first-class RDF triples and indexed by HNSW, enabling graph traversal and vector similarity in a single SPARQL query via `VECTOR_SIMILAR()` and `VECTOR_SCORE()` extensions.

The engine supports RDF 1.2 / RDF-star, named graphs and quads, and operates serverless (SQLite-like, no daemon required), making it suitable for embedded deployments. The architecture document is labeled Draft v0.3 and the project is in Developer Preview. No independent benchmarks, production deployments, or third-party case studies have been identified.

## Vector strategy — Native

Embeddings are stored in RDF and indexed natively with an HNSW-style vector index. The SPARQL query surface is extended with `VECTOR_SIMILAR()` and `VECTOR_SCORE()` functions, allowing vector similarity to be combined with standard triple patterns in a single query. This is the architectural approach; maturity is preview-stage and the implementation details should be verified against current documentation before adoption.

## Best fit

- Early RDF plus vector experiments in one query model
- Research prototyping that requires the RDF data model with vector proximity search in SPARQL
- Embedded single-process deployments where no separate vector engine is acceptable

## Considerations

- Project is in Developer Preview (architecture document Draft v0.3); not suitable for production use
- No independently verified benchmarks or published case studies
- No high availability or clustering support
- Ecosystem tooling and community are minimal at this stage

## Sources

- [SutraDB website](https://sutradb.org)
