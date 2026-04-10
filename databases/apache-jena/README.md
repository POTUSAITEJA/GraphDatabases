# Apache Jena / Fuseki

> The most widely adopted open-source RDF framework for Java, covering triplestores, SPARQL, and reasoning.

| | |
|---|---|
| **Website** | [jena.apache.org](https://jena.apache.org) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | SPARQL 1.1 |
| **Vector strategy** | **None** |
| **HA** | Depends on external replication pattern |
| **Deployment** | Self-hosted |

## Overview

Apache Jena is the longest-standing open-source Semantic Web framework for Java. TDB2 is the recommended persistent backend, offering serializable transactions via MVCC/copy-on-write semantics. Fuseki provides a SPARQL HTTP server that exposes TDB2 (or any Jena model) as a standards-compliant SPARQL endpoint.

Jena supports the full SPARQL 1.1 stack including Update, Federation, and full-text search via a Lucene integration. It ships built-in reasoners for OWL and RDFS, and integrates with external reasoners such as Pellet and HermiT. SHACL validation and a rule engine are also included. The project's breadth of documentation, community integrations, and tooling make it the reference implementation for most Semantic Web workflows.

JVM memory tuning is required for large datasets; the recommended practice is to allow the OS file cache to absorb hot triples. HA clustering depends on external tooling such as rdf-delta or Kafka-based replication rather than a built-in cluster manager.

## Vector strategy — None

Jena and Fuseki have no native ANN vector index. Similarity search is not part of the SPARQL 1.1 feature set and has not been added as an extension in the core project. Teams that need vector search alongside RDF must pair Jena with an external vector service and join results at the application layer or via SPARQL SERVICE federation.

## Best fit

- Standards-heavy RDF projects that require full SPARQL 1.1 compliance
- Java ecosystem integrations where a mature, well-documented library is preferred
- OWL and RDFS reasoning workflows using built-in or pluggable reasoners
- Semantic Web research and educational use

## Considerations

- Broadest RDF ecosystem — most tutorials, integrations, and community support in the catalog
- JVM memory tuning is needed for large datasets; leverage OS file cache for performance
- No native vector search; pair with an external vector service for similarity queries
- HA requires external replication tooling; not built in

## Sources

- [Fuseki documentation](https://jena.apache.org/documentation/fuseki2/)
- [TDB2 documentation](https://jena.apache.org/documentation/tdb2/)
