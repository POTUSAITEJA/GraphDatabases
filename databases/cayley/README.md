# Cayley

> Open-source linked-data graph database inspired by the Google Knowledge Graph, written in Go with pluggable backend stores.

| | |
|---|---|
| **Website** | [cayley.io](https://cayley.io) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | Gizmo (JavaScript DSL) / GraphQL / MQL |
| **Vector strategy** | **None** |
| **HA** | Depends on the chosen backend store |
| **Deployment** | Self-hosted with LevelDB, BoltDB, SQL, PostgreSQL, or MongoDB backends |

## Overview

Cayley is an open-source graph database inspired by the graph engine behind Google's Knowledge Graph, formerly Freebase. It is written in Go and ships with a pluggable backend so the same engine can sit on top of LevelDB, BoltDB, PostgreSQL, SQL databases, or MongoDB depending on the deployment profile.

The project started inside Google, was open sourced in 2014, and is now maintained by the community under the cayleygraph organisation on GitHub. It is typically used for linked-data and RDF-shaped workloads where a lightweight Go-native engine is preferred over a heavier Java stack.

## Vector strategy — None

No native vector index is documented. Cayley predates the modern vector-database era and focuses on linked-data and triple-shaped storage. Applications that need vector search alongside Cayley's graph model would need to pair it with a separate vector engine at the application layer.

## Best fit

- Open-source linked-data projects that want a Go-native engine
- Teams who need to choose a storage backend (embedded key-value vs. existing SQL or NoSQL)
- Research or prototyping with multiple query languages (Gizmo, GraphQL, MQL)
- Small-to-medium linked-data deployments that do not require a full enterprise triple store

## Considerations

- Ecosystem tooling is smaller than mature RDF and LPG stores
- No native vector capability
- HA and durability characteristics depend on the backend chosen
- Active but community-maintained; release cadence is slower than commercial products

## Sources

- [Cayley GitHub repository](https://github.com/cayleygraph/cayley)
- [Cayley project site](https://cayley.io)
