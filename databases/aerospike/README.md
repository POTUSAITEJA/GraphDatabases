# Aerospike Graph

> A commercial Gremlin-based graph service on the Aerospike platform, with vector search available as a separate product line.

| | |
|---|---|
| **Website** | [aerospike.com/docs/graph/quick-start](https://aerospike.com/docs/graph/quick-start) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | Gremlin |
| **Vector strategy** | **Paired** |
| **HA** | Yes |
| **Deployment** | Self-hosted |

## Overview

Aerospike Graph is a label property graph service built on the Aerospike platform, exposing a Gremlin query interface. It is designed for operational graph workloads within Aerospike-centric architectures. The product leverages Aerospike's underlying distributed storage and HA capabilities.

Aerospike Vector Search is a separate product surface in current public documentation. The graph and vector offerings share the broader Aerospike platform but are not a single integrated engine. A deployment that needs both graph traversal and vector similarity must operate and manage them as distinct components.

## Vector strategy — Paired

Aerospike Graph and Aerospike Vector Search are distinct product surfaces in current public documentation. They are not a single native graph-plus-vector engine. This makes the classification `paired` rather than `native`. Use this entry when evaluating an Aerospike-centered architecture where separate graph and vector services are acceptable; do not assume that Aerospike Graph provides built-in vector indexing.

## Best fit

- Aerospike-centric operational graphs where the platform is already standardized
- Workloads that can accept separate graph and vector services within the same infrastructure
- High-throughput operational use cases that benefit from Aerospike's storage engine

## Considerations

- Commercial license; enterprise sales cycle and support contracts apply
- Graph and vector are separate products; integration requires application-layer coordination
- Gremlin is the only supported query interface; no Cypher or SPARQL
- Self-hosted only in current documentation; no first-party managed cloud for the graph product

## Sources

- [Aerospike Graph quick start](https://aerospike.com/docs/graph/quick-start)
- [Aerospike Graph management summary](https://aerospike.com/docs/graph/manage/summary/)
- [Aerospike Vector Search quick start](https://aerospike.com/docs/vector/quick-start)
