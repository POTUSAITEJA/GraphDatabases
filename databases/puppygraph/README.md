# PuppyGraph

> Zero-ETL graph query engine that virtualizes Gremlin and openCypher over relational and lakehouse sources without a separate graph store.

| | |
|---|---|
| **Website** | [puppygraph.com](https://www.puppygraph.com) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | Gremlin / openCypher |
| **Vector strategy** | **Paired** |
| **HA** | Yes |
| **Deployment** | Self-hosted, cloud marketplace images |

## Overview

PuppyGraph is not a graph storage engine. It is a zero-ETL graph query engine that maps existing relational and lakehouse data into a virtual graph at query time. It connects to PostgreSQL, Snowflake, BigQuery, Apache Iceberg, Apache Hudi, Microsoft OneLake, and other sources, builds a graph schema from JSON, and executes Gremlin and openCypher queries against the underlying tables without copying data.

This is an architecturally distinct approach to graph analytics: it asks whether a separate graph database is needed at all, and provides a query layer rather than a storage layer. Vendor-reported numbers include 10-hop neighbour queries in 2.26 seconds across billions of edges on a 4-node cluster; these are vendor benchmarks and should be validated with a proof-of-concept on the target workload.

## Vector strategy — Paired

PuppyGraph virtualizes graph queries over external stores; vector behavior is delegated to those underlying systems. There is no storage layer to index, so native vector indexing does not apply. Vector capability is available when the underlying source supports it (for example, pgvector inside PostgreSQL or native vector functions in Snowflake and BigQuery). The paired classification reflects that graph traversal and vector search operate in coordinated but architecturally separate layers.

## Best fit

- Zero-ETL graph analytics over warehouse or lakehouse data where data movement is unacceptable
- Teams evaluating whether a dedicated graph store is needed before committing to one
- Hybrid GraphRAG architectures where the lakehouse already holds embeddings
- Organizations that want graph query capability over Snowflake, BigQuery, or Iceberg without a migration project

## Considerations

- Commercial license; a free Developer Edition is available but production use requires a commercial agreement
- No graph storage of its own; all data must remain accessible in supported external sources
- Vector capability depends entirely on what the underlying source supports; verify per-source before planning vector workflows
- Vendor benchmark numbers should be independently validated on representative workloads before use in planning

## Sources

- [PuppyGraph documentation](https://docs.puppygraph.com/)
- [PuppyGraph querying reference](https://docs.puppygraph.com/querying/)
- [Cypher query language reference](https://docs.puppygraph.com/reference/cypher-query-language/)
