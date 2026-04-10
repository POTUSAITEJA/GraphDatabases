# ArcadeDB

> Apache 2.0 multi-model database supporting graph, document, key-value, full-text, vector, and time-series in one engine with five query languages.

| | |
|---|---|
| **Website** | [arcadedb.com](https://arcadedb.com) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | SQL / openCypher / Gremlin / GraphQL / MongoDB protocol |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Embedded, self-hosted, Kubernetes |

## Overview

ArcadeDB is an Apache 2.0 multi-model database that natively supports graph, document, key-value, full-text, vector, and time-series data in a single JVM engine. It speaks five query languages (SQL, openCypher, Gremlin, GraphQL, MongoDB query protocol), exposes a built-in MCP (Model Context Protocol) server for direct LLM integration, and ships a Studio with an AI assistant. It is implemented in Java and is a conceptual fork of OrientDB.

High availability and replication are supported. The engine runs embedded in-process, as a self-hosted server, or on Kubernetes. A Graph OLAP engine with Compressed Sparse Row encoding was introduced in v26.3.2. The project is actively maintained with stable releases tracked in early 2026.

## Vector strategy — Native

ArcadeDB publicly documents vectors as a first-class built-in model inside the same engine. Vector embeddings are stored natively alongside other data models, a preload API is available for faster cold queries, and hybrid queries combining graph traversal, vector similarity, and full-text search are supported in a single operation. This positions ArcadeDB as a genuinely native multi-model vector store rather than a graph engine paired with an external vector index.

## Best fit

- Polyglot multi-model workloads requiring graph, document, vector, and time-series under a genuinely open license
- Projects that need to query across multiple data models in a single statement
- Embedded JVM deployments where a single binary covers multiple storage concerns
- Teams evaluating LLM integration via MCP without a separate middleware layer

## Considerations

- Younger ecosystem than Neo4j or ArangoDB; fewer third-party integrations and community resources
- Performance claims (2M+ inserts/sec embedded, 10M+ records/sec server mode) are vendor benchmarks; run a representative POC before relying on them
- Multi-model breadth means more surface area to learn and operate
- Graph OLAP speedup claims (up to 462x on analytical workloads) are also vendor-reported

## Sources

- [ArcadeDB website](https://arcadedb.com/)
- [ArcadeDB knowledge graphs](https://arcadedb.com/knowledge-graphs.html)
