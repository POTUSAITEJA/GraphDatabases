# Memgraph

> An in-memory label property graph database with production-ready HNSW vector indexes on both nodes and edges.

| | |
|---|---|
| **Website** | [memgraph.com](https://memgraph.com) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | BSL 1.1 (source-available) |
| **Query** | Cypher / GQL |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted |

## Overview

Memgraph is an in-memory Label Property Graph database with on-disk persistence, focused on real-time analytics and streaming workloads. It supports Cypher and GQL query interfaces and integrates with streaming platforms including Kafka and Pulsar. ACID compliance and HA are both supported.

Vector search is built on USearch, a high-performance C++ HNSW implementation, and has been production-ready since v3.2 (no experimental flags required). Memgraph 3.4 extended vector indexes to edges in addition to nodes, enabling similarity search over relationship embeddings. This is a differentiator for recommendation systems and interaction-heavy workloads where the edge itself carries semantic meaning.

## Vector strategy — Native

Official releases document HNSW-style vector indexes for both nodes and relationships. The index is backed by USearch and supports scalar quantization configurable via `scalar_kind`. Concurrent writes are supported through internal locking. Indexes survive restarts. Published benchmarks from the Memgraph blog report approximately 66-76% lower RAM for equivalent workloads (1M nodes x 1024 dimensions) compared to the previous index generation.

## Best fit

- Real-time graph analytics where low-latency in-memory traversal is required
- Workloads that need vector search on both nodes and edges in the same query
- Recommendation and fraud detection systems where edge embeddings carry semantic weight
- Streaming graph ingestion via Kafka or Pulsar

## Considerations

- BSL 1.1 is not OSI-approved open source; review license terms before adopting in commercial products
- In-memory architecture means dataset size is bounded by available RAM (disk persistence is a safety net, not a primary storage tier)
- Self-hosted only; no managed cloud offering
- Relationship vector indexing (v3.4+) is a newer feature; validate against your specific use case

## Sources

- [Memgraph 3.4 release announcement](https://memgraph.com/blog/memgraph-3-4-release-announcement)
- [Memgraph documentation](https://memgraph.com/docs)
