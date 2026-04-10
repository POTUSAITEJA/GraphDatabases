# Oxigraph

> Embeddable Rust RDF engine with SPARQL 1.1 support, permissively licensed and WASM-capable.

| | |
|---|---|
| **Website** | [github.com/oxigraph/oxigraph](https://github.com/oxigraph/oxigraph) |
| **Model** | RDF / SPARQL-native |
| **Status** | Emerging |
| **License** | MIT / Apache 2.0 (permissive) |
| **Query** | SPARQL 1.1 / SPARQL 1.2 drafts |
| **Vector strategy** | **None** |
| **HA** | No |
| **Deployment** | Embedded library, self-hosted server, WASM |

## Overview

Oxigraph is a Rust-based SPARQL graph database designed to be embeddable. It is increasingly a platform and library ecosystem rather than just a standalone store, with bindings for Python (pyoxigraph), R (roxigraph), JavaScript (WASM), and an rdflib-compatible store (oxrdflib). It serves as the foundation for OxiRS.

The project supports RDF 1.1, RDF 1.2 draft features (behind a feature flag), RDF-star, near-complete SPARQL 1.1, and SPARQL federation. It uses RocksDB as its storage backend and provides ACID/MVCC guarantees. The project's own README notes that SPARQL query evaluation has not been fully optimized, and oxrdflib warns that the storage format may change between releases.

Known production deployments include Wikibase, NaasAI, RelationLabs (Substrate blockchain), ACE IoT Solutions, and GovDirectory.

## Vector strategy — None

No vector index is documented in the core Oxigraph project. Applications requiring vector similarity search alongside RDF triples would need to pair Oxigraph with a separate vector store. No hybrid query interface is available out of the box.

## Best fit

- Embeddable RDF workloads written in Rust, Python, R, or JavaScript
- Lightweight SPARQL-compatible RDF stores for applications and services
- WASM environments requiring in-browser or edge RDF processing
- Projects requiring a permissively licensed RDF library with no copyleft obligations

## Considerations

- Project README states SPARQL query evaluation has not been optimized yet; treat performance characteristics as subject to change
- oxrdflib warns that the storage format may change between releases and that transaction support is not fully implemented
- Still better treated as emerging infrastructure rather than a fully mature production store
- No reasoning (OWL, RDFS, SHACL) is included in the core engine

## Sources

- [Oxigraph GitHub](https://github.com/oxigraph/oxigraph)
- [Pyoxigraph Documentation](https://pyoxigraph.readthedocs.io/)
