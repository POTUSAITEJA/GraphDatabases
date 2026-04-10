# Raphtory

> In-memory vectorised temporal graph engine in Rust with Python and GraphQL APIs, focused on time-travel and dynamic-graph analytics.

| | |
|---|---|
| **Website** | [pometry.com](https://www.pometry.com) |
| **Model** | Specialized |
| **Status** | Emerging |
| **License** | GPL-3.0 (copyleft) |
| **Query** | Python API / GraphQL |
| **Vector strategy** | **None** |
| **HA** | Single-node embedded or server (out-of-memory scaling via subscription) |
| **Deployment** | Embedded Rust/Python library or standalone GraphQL server |

## Overview

Raphtory is a scalable temporal graph analytics database written in Rust with Python bindings on top. It is developed by Pometry and emphasises time-travel queries, multilayer modelling, and analytics that go beyond simple pattern matching — automatic risk detection, dynamic scoring, temporal motifs, full-text search, and so on.

Raphtory can run embedded as a library or as a standalone server with a GraphQL API and a built-in UI for exploring graphs visually. A subscription tier adds out-of-memory (on-disk) scaling without changing the API.

## Vector strategy — None

No general-purpose vector index is documented. Raphtory's focus is temporal analytics — time-travel, multilayer graphs, and dynamic-graph algorithms — rather than similarity search. Applications that need vector search alongside Raphtory pair it with a separate vector engine at the application layer.

## Best fit

- Temporal graph analytics with time-travel queries
- Multilayer graphs with dynamic scoring and motif detection
- Risk and fraud workloads that need to reason about graph state over time
- Embedded analytics in Python and Rust pipelines

## Considerations

- GPL-3.0 has implications for distribution and embedding
- Single-node by default; large-scale on-disk operation requires the commercial subscription
- Emerging project; ecosystem is smaller than mature graph databases
- No native vector capability

## Sources

- [Raphtory GitHub repository](https://github.com/Pometry/Raphtory)
- [Pometry documentation](https://docs.pometry.com/)
