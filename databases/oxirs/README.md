# OxiRS

> A Rust-native modular RDF platform wrapping Oxigraph, claiming vector search and clustering in a pre-1.0 release.

| | |
|---|---|
| **Website** | [github.com/cool-japan/oxirs](https://github.com/cool-japan/oxirs) |
| **Model** | RDF / SPARQL-native |
| **Status** | Emerging |
| **License** | Apache 2.0 (permissive) |
| **Query** | SPARQL / GraphQL |
| **Vector strategy** | **Native** |
| **HA** | Claimed |
| **Deployment** | Self-hosted |

## Overview

OxiRS is a Rust-native modular platform positioning itself as a Jena/Fuseki replacement. It wraps Oxigraph's core RDF engine and adds separate crates for vector search (oxirs-vec), SHACL validation, OWL reasoning, GeoSPARQL, Raft-based clustering, and GraphQL endpoints.

The project is at v0.2.x and its feature scope is exceptionally broad for that maturity level. The following capabilities are documented in the project README but have not been independently verified through third-party benchmarks, production case studies, or external documentation: complete SPARQL 1.2 implementation, production-grade storage, Raft-based clustering, SHACL Core and SHACL-SPARQL validation, OWL/SWRL reasoning, and industrial validation. Independent verification is recommended before adoption.

## Vector strategy — Native

The project documents vector support through its own oxirs-vec crate. This constitutes a native classification in that vector indexing is part of the stated product surface rather than delegated to an external connector. However, the public evidence for this capability is self-reported at the time of this writing. Treat the native vector claim with caution until independent benchmarks or production deployments are documented.

## Best fit

- Experimental Rust semantic stack where language-level safety and performance matter
- Teams evaluating a modern Rust-based replacement for Java-centric RDF tooling
- Research contexts comfortable operating on pre-1.0 software

## Considerations

- v0.2.x maturity; extremely broad feature claims for this stage should be verified independently
- HA clustering is claimed (Raft-based) but not independently confirmed
- No production case studies or third-party benchmarks found at time of writing
- Apache 2.0 license is permissive, but dependency on an emerging project carries adoption risk

## Sources

- [OxiRS GitHub](https://github.com/cool-japan/oxirs)
