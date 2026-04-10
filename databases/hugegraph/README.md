# Apache HugeGraph

> Apache-licensed property graph engine for 100B+ edge workloads, with GraphRAG tooling through a separate AI layer.

| | |
|---|---|
| **Website** | [hugegraph.apache.org](https://hugegraph.apache.org) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | Gremlin / Cypher / REST |
| **Vector strategy** | **Paired** |
| **HA** | Yes |
| **Deployment** | Self-hosted |

## Overview

Apache HugeGraph is a full-stack graph system covering OLTP storage, graph computing, and graph AI. Originally developed at Baidu and donated to the Apache Incubator, it is now an Apache top-level project. It supports more than 100 billion edges and exposes both Gremlin and a Cypher subset alongside a REST API. Multiple storage backends are supported including HBase, Cassandra, MySQL, and RocksDB.

Vector search and GraphRAG capabilities are provided through the HugeGraph-AI and HugeGraph-LLM components, which are separate modules rather than part of the core OLTP engine. These components add a GraphRAG retrieval layer with pluggable embedding models, configurable distance thresholds, and top-K retrieval.

## Vector strategy — Paired

GraphRAG and embedding workflows are documented through HugeGraph-AI and HugeGraph-LLM rather than the OLTP core database. Vector indexing is not currently part of the core server. Teams using HugeGraph for vector-augmented retrieval adopt a paired architecture where the AI toolkit handles embeddings and similarity search while the core engine handles graph storage and traversal.

## Best fit

- Large-scale Gremlin workloads at 100B+ edge scale with multiple backend options
- Apache ecosystem teams that need a top-level Apache-licensed graph engine
- GraphRAG workflows that tolerate a paired AI toolkit rather than a native vector index
- Environments where HBase, Cassandra, or RocksDB are already in the stack

## Considerations

- Vector indexing is not in the core server; the AI toolkit is a separate deployment concern
- Cypher support is a subset, not full compatibility; verify specific Cypher features before depending on them
- Pluggable storage backend means operational complexity scales with the backend chosen
- Do not equate the HugeGraph-AI toolkit with a native vector index in the core OLTP engine

## Sources

- [HugeGraph project page](https://hugegraph.apache.org/docs/)
- [HugeGraph-AI quick start](https://hugegraph.apache.org/docs/quickstart/hugegraph-ai/)
- [HugeGraph-LLM docs](https://hugegraph.apache.org/docs/quickstart/hugegraph-ai/hugegraph-llm/)
