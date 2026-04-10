# SurrealDB

> A multi-model database unifying documents, graphs, and vectors in a single ACID engine with its own query language.

| | |
|---|---|
| **Website** | [surrealdb.com/docs/surrealdb](https://surrealdb.com/docs/surrealdb) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | BSL 1.1 (source-available) |
| **Query** | SurrealQL / GraphQL |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Embedded, self-hosted, managed cloud |

## Overview

SurrealDB is a multi-model database written in Rust that unifies document, graph, vector, and time-series storage in a single ACID-compliant engine. It uses SurrealQL, its own query language, rather than SPARQL or Cypher. Graph relationships are expressed using RELATE syntax with multi-hop traversal support.

SurrealDB is included in this catalog as a reference point for teams whose primary requirement is graph plus vector without strict RDF or SPARQL compliance. It does not support OWL reasoning, SHACL validation, or SPARQL federation. The BSL 1.1 license is not OSI-approved open source; it converts to Apache 2.0 after four years.

## Vector strategy — Native

SurrealDB documents brute-force and HNSW vector search natively inside SurrealQL. Embeddings are stored as node properties and queried alongside graph traversals and document filters in a single statement. This is one of the cleaner multi-model vector stories in current public documentation, with vector as a first-class part of the query language rather than an external connector or paired service.

## Best fit

- Unified application database where graph and vector are needed in a single query language
- Teams that do not require RDF, SPARQL, or semantic web standards
- Projects that want embedded, self-hosted, or managed cloud deployment flexibility
- Rust-native deployments that benefit from SurrealDB's language choice

## Considerations

- Not an RDF or SPARQL database; does not satisfy semantic web requirements
- BSL 1.1 is not OSI-approved open source; review license terms before adopting in commercial products
- Cannot perform OWL reasoning, SHACL validation, or SPARQL federation
- Multi-model scope means maturity varies across the document, graph, and vector surfaces

## Sources

- [SurrealDB vector search reference](https://surrealdb.com/docs/surrealdb/reference-guide/vector-search)
- [SurrealDB documentation](https://surrealdb.com/docs/surrealdb)
