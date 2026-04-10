# Dydra

> Versioned cloud RDF store with SPARQL 1.1, GraphQL, and Linked Data Platform support, operated as a managed service by Datagraph.

| | |
|---|---|
| **Website** | [dydra.com](https://dydra.com) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Commercial |
| **Query** | SPARQL 1.1 / GraphQL / Linked Data Platform |
| **Vector strategy** | **None** |
| **HA** | Managed cloud (recent work integrates the RonDB distributed backend) |
| **Deployment** | Managed cloud service operated by Datagraph |

## Overview

Dydra is a cloud-based RDF graph database. Its distinguishing feature is versioning: Dydra does not just store the current state of the graph, it retains previous store states as fully addressable, versioned snapshots. Every SPARQL query can target a specific revision, and changes can be streamed incrementally to subscribers through MQTT with a revision window. The project describes this as "a Git for graphs".

The service speaks SPARQL 1.1, the SPARQL 1.1 Graph Store HTTP Protocol, GraphQL, and the Linked Data Platform. Recent 2025 work between Datagraph and Hopsworks layers Dydra on top of RonDB so that it can scale horizontally toward trillion-triple deployments while keeping the versioned, temporal query model.

## Vector strategy — None

No native vector index is documented. Dydra focuses on versioned RDF and SPARQL rather than similarity search. Applications that need vector search alongside a Dydra store would pair it with a separate vector engine at the application layer.

## Best fit

- Cloud-native RDF applications that need versioned, time-travelable SPARQL stores
- Auditable knowledge graphs where historical state is a first-class query dimension
- Streaming or eventing use cases where incremental revision deltas are useful

## Considerations

- Managed cloud only; no self-hosted distribution
- Commercial service; pricing and SLAs are negotiated with Datagraph
- No native vector capability
- The distributed RonDB-backed path is recent and worth evaluating against current production requirements

## Sources

- [Dydra documentation](https://docs.dydra.com/dydra)
- [Dydra SPARQL documentation](https://docs.dydra.com/sparql)
