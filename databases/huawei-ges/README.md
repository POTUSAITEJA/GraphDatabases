# Huawei Graph Engine Service

> Huawei Cloud's fully managed distributed graph database, powered by the in-house EYWA kernel and supporting Apache TinkerPop Gremlin and Cypher.

| | |
|---|---|
| **Website** | [huaweicloud.com/intl/en-us/product/ges.html](https://www.huaweicloud.com/intl/en-us/product/ges.html) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial |
| **Query** | Gremlin / Cypher |
| **Vector strategy** | **None** |
| **HA** | Managed distributed cluster |
| **Deployment** | Huawei Cloud managed service |

## Overview

Graph Engine Service (GES) is Huawei Cloud's fully managed, distributed graph database. It is powered by the Huawei-developed EYWA graph kernel and is designed to store, query, and analyze massive graph data with tens of billions of vertices and hundreds of billions of edges.

GES exposes both Apache TinkerPop Gremlin (version 3.4) and a Cypher query surface, along with REST APIs for graph operations, metrics, and algorithms. It is listed as an official Apache TinkerPop provider.

## Vector strategy — None

No native vector index is documented in GES. Huawei Cloud exposes vector search through separate services rather than inside the graph engine, so applications that need vector similarity alongside GES graph traversal pair it with a different Huawei Cloud component at the application layer.

## Best fit

- Huawei Cloud workloads that need a fully managed distributed property graph
- Social graph, recommendation, and anti-fraud use cases at tens-of-billions-of-vertices scale
- Teams standardised on Huawei Cloud infrastructure

## Considerations

- Commercial-only, tied to Huawei Cloud usage and regions
- Availability depends on the Huawei Cloud region
- No native vector capability inside the graph engine
- Supports Gremlin 3.4 — verify version compatibility with existing TinkerPop tooling

## Sources

- [Graph Engine Service product page](https://www.huaweicloud.com/intl/en-us/product/ges.html)
- [Huawei GES service overview](https://support.huaweicloud.com/intl/en-us/productdesc-ges/ges_04_0001.html)
