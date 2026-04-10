# Ontotext GraphDB

> An enterprise RDF triplestore with industry-leading OWL reasoning and connector-based vector search via Elasticsearch or OpenSearch.

| | |
|---|---|
| **Website** | [graphdb.ontotext.com](https://graphdb.ontotext.com) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | SPARQL 1.1 |
| **Vector strategy** | **Integrated** |
| **HA** | Yes |
| **Deployment** | Self-hosted, managed by partners |

## Overview

GraphDB is an enterprise RDF triplestore built on RDF4J, known primarily for its OWL reasoning capabilities at scale. It supports full SPARQL 1.1 including Update and Federation, and offers RDFS and SHACL validation alongside an OWL reasoning layer that is considered industry-leading for production RDF workloads.

Vector search is supported through Elasticsearch and OpenSearch connectors. These connectors synchronize GraphDB data into a linked search index and allow embedding queries to be composed inside SPARQL. High availability is provided via Raft-based clustering. The Free edition requires a license request and has concurrency limits; the Enterprise edition is priced per server CPU core.

## Vector strategy — Integrated

Vector search in GraphDB is delivered through the Elasticsearch or OpenSearch connector layer, not as an in-engine ANN index. The connector synchronizes triples into an external search cluster and exposes similarity queries through a SPARQL extension. An embedding model configuration interface and a RAG Chat feature in the Workbench are also available. This is an integrated pattern: vector capability exists within the documented product boundary but depends on an external Elasticsearch or OpenSearch instance that must be provisioned separately.

## Best fit

- Reasoning-heavy RDF workloads where OWL and RDFS inference at scale is the primary requirement
- Enterprise deployments where connector-based vector search alongside SPARQL is acceptable
- Organizations that already operate Elasticsearch or OpenSearch infrastructure
- Workloads requiring Raft-based clustering and multi-region HA

## Considerations

- Vector search requires a separately provisioned and maintained Elasticsearch or OpenSearch instance
- Free edition requires a license request; query concurrency is limited
- Enterprise license is per-server-CPU-core; evaluate cost at scale
- Commercial license means procurement and support cycles apply

## Sources

- [GraphDB embedding model configuration](https://graphdb.ontotext.com/documentation/11.3/embedding-model-configuration.html)
- [GraphDB documentation](https://graphdb.ontotext.com/documentation/11.3/)
