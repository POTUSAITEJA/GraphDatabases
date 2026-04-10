# ArangoDB

> Multi-model database combining graph traversals, documents, and native vector indexes in a single AQL query surface.

| | |
|---|---|
| **Website** | [arangodb.com](https://arangodb.com) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | ArangoDB Community License / commercial Enterprise (source-available) |
| **Query** | AQL |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted, ArangoGraph managed cloud |

## Overview

ArangoDB is a multi-model database supporting graph, document, and key-value data in a single engine with a unified query language (AQL). Starting with version 3.12, the platform documents native vector indexes alongside graph traversal capabilities, making it possible to combine similarity search with graph queries in the same AQL statement.

The platform is suited for teams that want graphs, search, documents, and vectors without running separate systems. ArangoGraph is the managed cloud offering. High availability is supported in both self-hosted and managed deployment modes.

The community edition is released under the ArangoDB Community License, which is not a permissive open-source license. Evaluate the license terms carefully before deployment; commercial Enterprise licensing is available for additional features and support.

## Vector strategy — Native

ArangoDB 3.12 documents native vector indexes that combine with graph traversals in AQL queries. The vector index is a first-class index type within the platform, allowing similarity search to be expressed alongside graph and document operations in a single query. Source documentation covers the HTTP API for vector indexes and the AQL graph traversal interface.

## Best fit

- Teams that want graphs, search, documents, and vectors in one query model
- Applications requiring graph traversal combined with vector similarity in a single query
- Organizations preferring a managed cloud option (ArangoGraph) with the same engine
- Multi-model workloads where running separate graph and vector stores adds operational overhead

## Considerations

- The ArangoDB Community License is not a permissive open-source license; read it carefully before building products on the community edition
- Commercial Enterprise licensing is required for full feature access and support
- Source-available model means the codebase is inspectable but redistribution rights are restricted
- Managed cloud (ArangoGraph) introduces a vendor dependency for teams using that deployment path

## Sources

- [ArangoDB Vector Index HTTP API](https://docs.arangodb.com/3.12/develop/http-api/indexes/vector/)
- [ArangoDB Graph Traversal with AQL](https://docs.arangodb.com/3.12/get-started/start-using-aql/graphs/)
- [ArangoDB Features Overview](https://docs.arangodb.com/3.13/about-arangodb/features/)
