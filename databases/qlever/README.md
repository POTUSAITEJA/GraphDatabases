# QLever

> Open-source RDF engine that delivers SPARQL 1.1 at trillion-triple scale on a single commodity machine.

| | |
|---|---|
| **Website** | [github.com/ad-freiburg/qlever](https://github.com/ad-freiburg/qlever) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | SPARQL 1.1 |
| **Vector strategy** | **None** |
| **HA** | No native cluster |
| **Deployment** | Self-hosted, single-node |

## Overview

QLever (pronounced "clever") is an open-source RDF graph database and SPARQL engine designed for high-performance querying of very large datasets on single commodity machines. It achieved full SPARQL 1.1 compliance in June 2025 and has demonstrated indexing and querying datasets exceeding one trillion triples on a single PC.

The engine originates from the University of Freiburg Algorithms and Data Structures Group and is implemented in C++. It supports GeoSPARQL with spatial joins, integrated full-text search, SPARQL Federation via the SERVICE keyword, and SPARQL Update. Production endpoints include DBLP, UniProt (94 billion triples), and public demos on Wikidata, OpenStreetMap, and PubChem.

QLever has been benchmarked against Virtuoso, Blazegraph, GraphDB, Stardog, Jena, and Oxigraph, and has demonstrated the fastest query performance among tested open-source SPARQL engines on the DBLP dataset (ISWC 2025 Sparqloscope benchmark).

## Vector strategy — None

No native vector index is documented in QLever. The engine is designed as a high-throughput SPARQL processor; vector similarity search is out of scope for the core engine. There is evidence of early work on dense-vector functions, but no released feature exists at time of writing. Applications requiring vector search must pair QLever with an external vector engine.

## Best fit

- High-performance open-source SPARQL on very large RDF datasets
- Single-machine deployments that need to exceed one trillion triples
- Public knowledge-graph endpoints (DBLP, Wikidata, UniProt-scale)
- Projects that need GeoSPARQL with spatial joins and integrated full-text search

## Considerations

- Single-machine architecture means no built-in horizontal scaling or high availability
- Academic origin; community support and staffing differ from enterprise-backed products
- No native vector search; requires pairing with an external vector database
- C++ codebase may limit the contributor pool compared to Java or Rust projects

## Sources

- [GitHub Repository](https://github.com/ad-freiburg/qlever)
- [QLever performance evaluation and comparison to other SPARQL engines](https://github.com/ad-freiburg/qlever/wiki/QLever-performance-evaluation-and-comparison-to-other-SPARQL-engines)
