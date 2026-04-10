# TigerGraph

> Distributed commercial property graph database with TigerVector HNSW integration targeting trillion-edge enterprise workloads.

| | |
|---|---|
| **Website** | [tigergraph.com](https://www.tigergraph.com) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | GSQL |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted, managed cloud |

## Overview

TigerGraph is a distributed Label Property Graph database aimed at trillion-edge enterprise workloads in financial services, healthcare, and cybersecurity. TigerVector, integrated in TigerGraph v4.2 (December 2024), adds first-class vector embeddings as graph node attributes with HNSW indexing. A SIGMOD 2025 paper (arXiv:2501.11216) documents the design and benchmarks, reporting comparable or higher performance than Milvus on hybrid workloads and significant gains over Neo4j and Amazon Neptune for vector queries.

Filtered vector search, multiple embeddings per node, and vector search on graph patterns are all documented. GSQL is the proprietary query language. A Community Edition was announced in March 2025 with significant compute and storage allowances alongside the existing Enterprise and Cloud offerings.

## Vector strategy — Native

TigerGraph 4.2 release notes document hybrid vector search with native vector attributes and ANN indexing via TigerVector. Vector embeddings are stored as graph node attributes, HNSW indexes are used for approximate nearest-neighbour retrieval, and results can be filtered or extended through GSQL graph pattern matching in the same query. This is a first-class engine capability, not a connector or extension.

## Best fit

- Large-scale operational property graphs where vector search must be co-located with graph traversal
- Enterprise deployments in financial services, healthcare, or cybersecurity requiring distributed scale
- GraphRAG pipelines on large graphs where vector retrieval speed is critical
- Teams already using GSQL who want integrated vector without a separate service

## Considerations

- Firmly commercial; production use requires a TigerGraph Enterprise or Cloud agreement
- GSQL is a proprietary language with no open standard equivalent; switching cost is significant
- Community Edition has compute and storage limits not suitable for all production scenarios
- Ecosystem and third-party tooling are smaller than Neo4j

## Sources

- [TigerGraph Server v4.2 release notes](https://docs.tigergraph.com/tigergraph-server/4.2/release-notes/)
