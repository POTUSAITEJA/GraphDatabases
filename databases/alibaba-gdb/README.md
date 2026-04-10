# Alibaba Cloud Graph Database

> Managed property graph service on Alibaba Cloud with Apache TinkerPop Gremlin and openCypher query surfaces.

| | |
|---|---|
| **Website** | [alibabacloud.com/product/graph-database](https://www.alibabacloud.com/product/graph-database) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial |
| **Query** | Gremlin / openCypher |
| **Vector strategy** | **None** |
| **HA** | Managed multi-AZ deployment |
| **Deployment** | Alibaba Cloud managed service |

## Overview

Alibaba Cloud Graph Database (GDB) is a fully managed, real-time property graph service on Alibaba Cloud. It implements the Apache TinkerPop Gremlin API as the primary query surface and is listed as an official TinkerPop provider, with additional support for openCypher. The service is positioned for workloads that need to store and traverse highly connected datasets without operating a graph database stack.

GDB is part of Alibaba Cloud's broader database portfolio. Integration with DataWorks and other Alibaba Cloud tools is built in, and the service exposes standard Gremlin tooling including the Gremlin Console.

## Vector strategy — None

No native vector capability is documented inside the GDB engine. Alibaba Cloud exposes vector search through separate product lines (Lindorm, AnalyticDB) rather than inside the graph service, so applications that need vector similarity alongside GDB graph traversal pair it with one of those services at the application layer.

## Best fit

- Alibaba Cloud workloads that need a real-time property graph with standard TinkerPop tooling
- Teams running in China or APAC regions where Alibaba Cloud is the primary provider
- Graph workloads that benefit from an operationally managed service

## Considerations

- Commercial-only; pricing tied to Alibaba Cloud usage
- No native vector support; pair with a separate Alibaba Cloud service
- Availability varies by Alibaba Cloud region
- Primarily Gremlin; Cypher-first teams should evaluate the fit

## Sources

- [Alibaba Cloud GDB product page](https://www.alibabacloud.com/product/graph-database)
- [Alibaba Cloud GDB documentation](https://www.alibabacloud.com/help/product/102714.htm)
