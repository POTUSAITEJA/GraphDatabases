# Grafeo

> Rust-native multi-model graph database supporting six query languages with HNSW-based vector search built in.

| | |
|---|---|
| **Website** | [grafeo.dev](https://grafeo.dev) |
| **Model** | Multi-model |
| **Status** | Emerging |
| **License** | Apache 2.0 (permissive) |
| **Query** | GQL / Cypher / Gremlin / SPARQL |
| **Vector strategy** | **Native** |
| **HA** | Not clearly documented |
| **Deployment** | Embedded / self-hosted |

## Overview

Grafeo is a Rust graph database supporting both Labeled Property Graph and RDF data models across six query languages: GQL, Cypher, Gremlin, GraphQL, SPARQL, and SQL/PGQ. It is designed to be embeddable with zero external dependencies and exposes language bindings for Python (PyO3), Node.js (napi-rs), Go (CGO), C (FFI), C# (.NET), Dart, and WebAssembly.

The project's center of gravity is LPG. RDF and SPARQL are documented as supported, but the depth of SPARQL 1.1 compliance, OWL reasoning, and SHACL support has not been independently verified from public documentation alone.

## Vector strategy — Native

Grafeo documents native HNSW-based vector search with scalar, binary, and product quantization options. Hybrid queries combining text (BM25 full-text) and vector search using reciprocal rank fusion (RRF) are described in the product documentation. Vector search operates in the same engine as graph traversal, not as a separate service.

The public SPARQL depth and production evidence are still limited given the v0.x release cadence, so the overall status is classified as emerging rather than production-ready.

## Best fit

- Polyglot graph R&D where multiple query languages are needed in one engine
- Embedded graph-plus-vector applications without an external service dependency
- Teams evaluating HNSW-based hybrid retrieval inside a graph database
- API experimentation across GQL, Cypher, and Gremlin workloads

## Considerations

- v0.x release cadence means APIs and behavior may change between releases
- SPARQL compliance depth is not fully documented; verify specific SPARQL features before depending on them
- High-availability and clustering capabilities are not clearly described in public documentation
- Production evidence is limited; not recommended for critical workloads without a proof-of-concept phase

## Sources

- [Grafeo website](https://grafeo.dev)
