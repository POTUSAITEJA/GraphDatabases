# MarkLogic

> Enterprise multi-model database that unifies documents, RDF triples, and vector embeddings in a single ACID-transactional engine.

| | |
|---|---|
| **Website** | [progress.com/marklogic](https://www.progress.com/marklogic) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | SPARQL 1.1 / SQL / XQuery / JavaScript |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted |

## Overview

MarkLogic is an enterprise multi-model database that stores documents (XML, JSON), RDF triples, and vector embeddings in a single ACID-transactional engine. SPARQL 1.1 has been a first-class query language since version 7. Vector embeddings and ANN-style similarity search were added in MarkLogic 11+ (2024), accessible through the CTS and Optic query APIs alongside full-text and structured document filters.

Acquired by Progress Software in 2023, MarkLogic is implemented in C++. It supports high availability, clustering, Docker, and Kubernetes. Cross-model joins between triples and documents are a core design feature, making it suitable for scenarios where RDF metadata, document content, and vector embeddings must be queried together.

## Vector strategy — Native

MarkLogic documents built-in vector search alongside graph, search, and document features. Vector embeddings are stored natively and indexed for ANN-style similarity search. Hybrid queries combine vector similarity with full-text search and structured document or triple filters through the Optic and CTS query interfaces. The feature is available in MarkLogic 11+.

## Best fit

- Enterprise multi-model deployments that need graph, search, documents, and vector in one platform
- Organizations requiring cross-model joins between RDF triples and document content
- Regulated industries where a single, ACID-compliant platform reduces integration surface
- Environments already invested in XQuery or the Optic API

## Considerations

- Proprietary licensing model; requires a Progress sales engagement for production use
- Heavier operationally than single-purpose RDF stores
- SPARQL is one of several query languages exposed alongside CTS, Optic, and XQuery
- Multi-model depth means a steeper onboarding curve compared to purpose-built graph engines

## Sources

- [MarkLogic vector search documentation](https://www.progress.com/marklogic/server/features/vector-search)
- [MarkLogic Semantics documentation](https://docs.progress.com/bundle/marklogic-server-develop-12/page/topics/semantics.html)
