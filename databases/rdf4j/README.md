# Eclipse RDF4J

> Open-source Java framework for RDF and SPARQL 1.1 with bundled Native Store and Memory Store implementations under a pluggable SAIL architecture.

| | |
|---|---|
| **Website** | [rdf4j.org](https://rdf4j.org) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | EDL 1.0 / EPL 2.0 (permissive) |
| **Query** | SPARQL 1.1 / SeRQL |
| **Vector strategy** | **None** |
| **HA** | Single-node stores; clustering depends on the SAIL backend |
| **Deployment** | Embedded Java library, standalone RDF4J Server, or Workbench |

## Overview

Eclipse RDF4J, formerly known as OpenRDF Sesame, is an open-source Java framework for working with RDF data. It is maintained under the Eclipse Foundation and provides a stable SPARQL 1.1 implementation along with a pluggable storage layer called SAIL (Storage and Inference Layer).

RDF4J ships two first-party stores: a Native Store that persists triples on disk, and a Memory Store that keeps everything in main memory with optional disk persistence on shutdown. Beyond those, the SAIL interface allows third-party stores (including GraphDB, Virtuoso, and Oracle RDF) to plug in behind the same RDF4J API, so applications can swap backends without rewriting their query or data-access code.

## Vector strategy — None

No native vector index is documented inside RDF4J's built-in stores. Applications that need vector search alongside RDF4J typically either swap the SAIL backend for one that exposes vector features (such as GraphDB, which exposes vector indexes through an RDF4J adapter), or pair the RDF4J store with an external vector engine at the application layer.

## Best fit

- Java applications that need an embeddable SPARQL 1.1 store
- Teams building a framework around RDF with a pluggable storage backend
- Research and prototyping with the Native Store or Memory Store
- Standardised access to heterogeneous RDF stores via the RDF4J API

## Considerations

- The built-in stores are single-node; clustering is left to the SAIL backend
- No built-in vector search
- Java-only client ecosystem; non-JVM clients typically speak SPARQL over HTTP via RDF4J Server
- EDL 1.0 and EPL 2.0 are permissive enough for most use cases but worth reviewing alongside other Eclipse dependencies

## Sources

- [Eclipse RDF4J home](https://rdf4j.org/about/)
- [Eclipse RDF4J project page](https://projects.eclipse.org/projects/technology.rdf4j)
