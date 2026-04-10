# Azure Cosmos DB for Gremlin

> A managed Azure graph service using Apache TinkerPop/Gremlin, where vector search lives in a separate sibling Cosmos API.

| | |
|---|---|
| **Website** | [learn.microsoft.com/azure/cosmos-db/gremlin/](https://learn.microsoft.com/azure/cosmos-db/gremlin/) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial managed service (commercial) |
| **Query** | Gremlin |
| **Vector strategy** | **Sibling** |
| **HA** | Managed |
| **Deployment** | Azure managed service |

## Overview

Azure Cosmos DB exposes multiple APIs over a shared distributed storage layer; the Gremlin API is the LPG / Apache TinkerPop-compatible interface. It provides global distribution, elastic scaling via Request Units (RU/s), multi-region writes, and fully managed operations. It is commonly used for GraphRAG patterns where graph traversal complements LLM retrieval.

The Gremlin API and the NoSQL API are distinct surfaces within Cosmos DB's multi-API architecture. Vector indexing was introduced in the NoSQL API and the MongoDB vCore API, not in the Gremlin API. Production patterns that need both graph traversal and vector search therefore pair the Gremlin API with a sibling Cosmos DB account or container that hosts vector embeddings, joined at the application layer.

## Vector strategy — Sibling

Cosmos DB vector indexing is documented for the NoSQL API, not for the Gremlin API itself. There is no native vector index inside the Gremlin API surface. Teams that need vector search alongside Gremlin traversals must provision a separate Cosmos DB for NoSQL or MongoDB vCore cluster and join the results in application code. This is a design trade-off of Cosmos DB's multi-API architecture, not a gap that is expected to be resolved within the Gremlin API boundary.

## Best fit

- Managed Gremlin workloads on Azure where vector search can live in a sibling Cosmos API
- Graph traversal scenarios that are already inside the Azure ecosystem
- GraphRAG patterns where graph and vector are joined at the application layer
- Workloads that require managed global distribution and elastic scale

## Considerations

- Vector search is not available in the Gremlin API; a sibling Cosmos account is required for vector workloads
- Gremlin API is a distinct product surface from Cosmos DB for NoSQL; they are not interchangeable
- Commercial managed service with Azure pricing model; cost scales with RU/s provisioning
- Vendor lock-in to the Azure platform and Cosmos DB-specific behavior

## Sources

- [Azure Cosmos DB for Gremlin overview](https://learn.microsoft.com/en-us/azure/cosmos-db/gremlin/overview)
- [Azure Cosmos DB vector search](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search)
