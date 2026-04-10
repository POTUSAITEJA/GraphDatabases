# AnzoGraph DB

> Massively parallel in-memory SPARQL engine for enterprise knowledge-graph analytics, with no currently documented general-purpose vector index.

| | |
|---|---|
| **Website** | [cambridgesemantics.com/anzograph](https://www.cambridgesemantics.com/anzograph/) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | SPARQL 1.1 / openCypher |
| **Vector strategy** | **Unclear** |
| **HA** | Massively parallel in-memory cluster |
| **Deployment** | Self-hosted, Kubernetes, or Cambridge Semantics Anzo platform |

## Overview

AnzoGraph DB is a massively parallel, in-memory SPARQL engine from Cambridge Semantics. It is designed for analytic knowledge-graph workloads at scale: large joins, deep path queries, BI-style aggregations, and OWL reasoning over RDF datasets that do not fit comfortably in a single-node SPARQL store. It supports openCypher in addition to SPARQL.

AnzoGraph DB is most commonly deployed as the query engine inside Anzo, Cambridge Semantics' broader enterprise semantic-layer platform, but it is a distinct database product. Following Altair's acquisition of Cambridge Semantics, the engine is also marketed as part of Altair Graph Studio.

## Vector strategy — Unclear

Public documentation covers large-scale SPARQL analytics, reasoning, and BI integration. A general-purpose vector index is not currently documented in public materials. The catalog marks the vector strategy as unclear rather than asserting a capability that cannot be verified from public sources. Vendors should be contacted directly for the current state of any vector capabilities.

## Best fit

- Enterprise MPP SPARQL analytics and knowledge-graph workloads requiring parallel query execution
- Workloads where analytic query shape (large joins, aggregations, path queries) matters more than write throughput
- Organizations using the broader Anzo semantic-layer platform from Cambridge Semantics
- Large-scale OWL reasoning over RDF datasets

## Considerations

- Commercial licensing and enterprise sales cycle; pricing requires direct vendor engagement
- In-memory MPP means infrastructure cost scales directly with dataset size
- Vector capability, if any, is not documented in current public materials; verify with the vendor before planning vector workloads
- Also marketed as Altair Graph Studio following the Altair acquisition; evaluate branding and support continuity

## Sources

- [AnzoGraph documentation](https://docs.cambridgesemantics.com/anzograph/)
- [Cambridge Semantics AnzoGraph product page](https://www.cambridgesemantics.com/anzograph/)
