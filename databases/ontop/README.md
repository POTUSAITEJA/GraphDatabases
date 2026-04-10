# Ontop

> Open-source virtual knowledge graph system that translates SPARQL queries into SQL against an existing relational database at runtime.

| | |
|---|---|
| **Website** | [ontop-vkg.org](https://ontop-vkg.org) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | SPARQL 1.1 |
| **Vector strategy** | **None** |
| **HA** | Inherits availability from the backing relational database |
| **Deployment** | Self-hosted SPARQL endpoint over an existing relational database |

## Overview

Ontop is a virtual knowledge graph (VKG) system that exposes a relational database as a virtual RDF graph. Instead of materialising triples, Ontop translates SPARQL queries into SQL at runtime so that all data stays in the source relational store. The pattern is known as Ontology-Based Data Access, or OBDA.

Mappings between the relational schema and the RDF view are declared in either the W3C R2RML format or Ontop's own native OBDA format. Ontop supports the majority of SPARQL 1.1 features, including aggregation and GeoSPARQL functions, and can be deployed as a SPARQL endpoint that fronts an existing database.

## Vector strategy — None

No native vector index. Ontop's job is to translate SPARQL into SQL, not to add new index types beyond what the underlying relational database provides. Applications that need vector search alongside an Ontop deployment would either rely on the backing database's own vector capability or pair Ontop with a separate vector engine.

## Best fit

- Organizations that want to expose existing relational data as RDF without copying or transforming it
- Deployments that need SPARQL access without committing to a materialised triple store
- Knowledge graph projects that already have authoritative relational data and need an ontological view on top

## Considerations

- Query performance depends on the underlying relational database and the quality of the mappings
- The virtual nature means it is not suited for write-heavy RDF workloads
- No native vector index inside Ontop itself
- Apache 2.0; commercial support is available through Ontopic

## Sources

- [Ontop GitHub repository](https://github.com/ontop/ontop)
- [Ontop guide](https://ontop-vkg.org/guide/)
