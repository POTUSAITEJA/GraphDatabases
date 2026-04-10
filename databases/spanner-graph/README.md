# Google Spanner Graph

> Globally distributed property graph on Cloud Spanner, combining ISO GQL graph queries with ScaNN-backed vector search in one storage layer.

| | |
|---|---|
| **Website** | [cloud.google.com/spanner/docs/graph/overview](https://cloud.google.com/spanner/docs/graph/overview) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | GQL (ISO/IEC 39075) / SQL |
| **Vector strategy** | **Integrated** |
| **HA** | Global, strongly consistent, multi-region |
| **Deployment** | Google Cloud managed service |

## Overview

Spanner Graph is Google Cloud's native graph offering built on top of Cloud Spanner, Google's globally distributed, strongly consistent relational database. It exposes a property graph view over Spanner tables and allows querying that graph with ISO GQL alongside regular SQL.

Because the graph lives inside Spanner, it inherits Spanner's global consistency, multi-region replication, automatic sharding, and transactional guarantees. Spanner Graph is notable as the first hyperscaler graph offering built on the ISO GQL standard (ISO/IEC 39075).

## Vector strategy — Integrated

Spanner exposes graph queries in ISO GQL alongside vector similarity functions (`APPROX_COSINE_DISTANCE`, `APPROX_EUCLIDEAN_DISTANCE`, `APPROX_DOT_PRODUCT`) and ScaNN-backed approximate nearest neighbor indexes in the same distributed SQL engine. Because graph tables and vector columns share the same storage layer, a single query can traverse a graph and perform vector search together without leaving the database.

## Best fit

- Applications that already depend on Spanner and want to add graph analytics without leaving the database
- Globally distributed workloads that require strong consistency across regions
- Teams wanting to adopt the ISO GQL standard rather than a vendor-specific graph query language
- Workloads that need transactional graph and vector operations in one engine

## Considerations

- Pricing scales with Spanner's processing-unit and node model, which can be expensive for small or variable workloads
- Only available as a managed Google Cloud service; no self-hosted deployment option
- GQL tooling and ecosystem are still maturing relative to established graph query languages
- Google Cloud lock-in by design

## Sources

- [Spanner Graph overview](https://cloud.google.com/spanner/docs/graph/overview)
- [Approximate nearest neighbors in Spanner](https://cloud.google.com/spanner/docs/find-approximate-nearest-neighbors)
