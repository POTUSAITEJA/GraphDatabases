# RDFox

> High-performance in-memory RDF store with materialised Datalog reasoning and SPARQL 1.1 support.

| | |
|---|---|
| **Website** | [oxfordsemantic.tech/rdfox](https://www.oxfordsemantic.tech/rdfox) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | SPARQL 1.1 / Datalog |
| **Vector strategy** | **Unclear** |
| **HA** | Yes |
| **Deployment** | Self-hosted, embeddable |

## Overview

RDFox is a high-performance, in-memory RDF triple store with persistent storage, developed at the University of Oxford and now maintained by Oxford Semantic Technologies (acquired by Samsung in 2024). Its primary differentiator is materialised Datalog reasoning: rules and ontologies are evaluated at load and update time so query latency stays low.

The platform supports RDF 1.1, RDF-star, named graphs, full SPARQL 1.1 query and update, SPARQL federation, GeoSPARQL, OWL 2 RL, RDFS, SHACL, and Datalog rules. The in-memory architecture delivers fast, predictable query performance, with persistence supported for durability. Library-mode embedding is available alongside standalone server deployment.

Free tiers exist for academic use and evaluation; commercial deployments require a vendor license.

## Vector strategy — Unclear

Current public documentation clearly covers RDF, SPARQL, and reasoning capabilities. A general-purpose vector index feature is not clearly exposed in the publicly verifiable technical documentation. The existing README noted a vector index in recent releases, but this cannot be confirmed against current public docs. Do not classify RDFox as a confirmed vector database without version-specific vendor evidence; verify the specific feature set and ANN algorithm against the version under evaluation.

## Best fit

- High-performance in-memory RDF and rules-based reasoning workloads
- Applications requiring OWL 2 RL or Datalog materialisation for low-latency inference
- Embedded or library-mode RDF deployments requiring a C++ engine
- Academic and research applications (free tier available)

## Considerations

- Commercial licensing; free tiers limited to academic use and evaluation
- In-memory architecture is fast but RAM-bound; plan capacity accordingly
- Acquired by Samsung in 2024; long-term roadmap is shaped by new ownership
- Vector capability status is unclear from public documentation; verify with vendor before relying on it

## Sources

- [RDFox Documentation](https://docs.oxfordsemantic.tech/)
- [RDFox product page](https://www.oxfordsemantic.tech/rdfox)
