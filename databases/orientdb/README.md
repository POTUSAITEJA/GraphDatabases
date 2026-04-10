# OrientDB

> Community-maintained multi-model database with graph, document, key-value, and full-text in one SQL-extended engine.

| | |
|---|---|
| **Website** | [orientdb.dev](https://orientdb.dev) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | SQL / Gremlin |
| **Vector strategy** | **None** |
| **HA** | Yes |
| **Deployment** | Self-hosted |

## Overview

OrientDB is a multi-model DBMS supporting graph, document, key-value, full-text, and geospatial data in one engine, with full ACID transactions and SQL syntax extended for graph traversal. After SAP's stewardship, the project is now community-maintained and continues to ship quarterly patch releases through 2026 (3.2.x stable), with ongoing work on distributed topology, the Studio UI, and the storage and query engine.

The platform supports TinkerPop 3.8 (Gremlin), schema-full, schema-less, and mixed schema modes, embedded operation, and distributed multi-master HA. Query languages are SQL-extended for graph traversal and Gremlin for TinkerPop compatibility.

If a vector-equipped successor with shared lineage is needed, ArcadeDB is a conceptual fork of OrientDB and includes vector capabilities.

## Vector strategy — None

Current public OrientDB documentation does not document a native vector engine. No vector index type is available in the current release. Teams requiring vector similarity search alongside OrientDB's multi-model data would need to pair it with a separate dedicated vector store.

## Best fit

- General-purpose multi-model graph and document workloads
- Applications requiring graph traversal with SQL-familiar syntax
- Teams needing schema flexibility (schema-full, schema-less, or mixed) in one store
- Embedded graph and document storage in JVM-based applications

## Considerations

- Less differentiated than newer multi-model graph systems with native vector support
- Community-maintained after SAP's stewardship; roadmap depends on community contribution
- No native vector search; requires external pairing for similarity workloads
- Apache 2.0 license is permissive, but evaluate long-term maintenance trajectory for production use

## Sources

- [OrientDB website](https://orientdb.dev)
- [OrientDB GitHub](https://github.com/orientechnologies/orientdb)
