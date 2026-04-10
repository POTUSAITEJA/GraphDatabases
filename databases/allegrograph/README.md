# AllegroGraph

> Long-running commercial RDF store with explicit graph-plus-vector positioning and ACID-compliant VectorStore.

| | |
|---|---|
| **Website** | [allegrograph.com](https://allegrograph.com) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | SPARQL 1.1 / Prolog |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted |

## Overview

AllegroGraph is a multi-modal platform combining graph (RDF), vector, and document (JSON-LD) storage in a single engine. It was the first triplestore to load one trillion RDF triples (2011) and introduced native vector storage in version 8.2, enabling repositories to serve as both vector databases and triple stores with vector similarity filtered by standard triple patterns.

The engine is built in Common Lisp and C by Franz Inc. (founded 2004). SPARQL 1.1 is the primary query language alongside Prolog. Reasoning capabilities include OWL 2 RL, RDFS, and SHACL. Horizontal sharding is available via FedShard and multi-master replication is supported. The platform also exposes LLM integration and RAG features including a ChatStream interface.

## Vector strategy — Native

VectorStore is documented as a native AllegroGraph feature, available since version 8.2. Vector storage is ACID-compliant and co-located with the RDF store, allowing vector similarity queries to be filtered by triple patterns in the same operation. This is the primary architectural differentiator versus using a separate vector engine alongside an RDF store.

## Best fit

- Commercial RDF deployments requiring reasoning, vector search, and document storage in one platform
- Enterprise use cases where HIPAA-grade security (Triple Attribute Security) is required
- Graph-plus-vector RAG pipelines where SPARQL graph context must filter vector retrieval
- Organizations that accept a Common Lisp runtime dependency

## Considerations

- Closed source; not available under any open-source license
- Free edition has functional limitations; production use requires a commercial agreement
- Common Lisp codebase represents a specialized skill set for operations and debugging
- Commercial sales cycle required for licensing

## Sources

- [AllegroGraph VectorStore documentation](https://franz.com/agraph/support/documentation/vector-dbs-and-rag.html)
- [AllegroGraph website](https://allegrograph.com)
