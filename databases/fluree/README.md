# Fluree

> Semantic JSON-LD knowledge-graph platform with GraphRAG and AI positioning, but no clearly documented general-purpose ANN vector subsystem.

| | |
|---|---|
| **Website** | [flur.ee](https://flur.ee) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Commercial plus open components (source-available) |
| **Query** | JSON-LD query / SPARQL / GraphQL |
| **Vector strategy** | **Unclear** |
| **HA** | Yes |
| **Deployment** | Self-hosted, managed cloud |

## Overview

Fluree is a semantic platform built around a JSON-LD/RDF data model, supporting queries through its own JSON-LD query language, SPARQL, and GraphQL. It positions itself for semantic AI, GraphRAG, and knowledge-graph workflows, and offers both self-hosted and managed cloud deployment options with HA.

Fluree includes full-text search and advanced querying capabilities documented in its developer reference. The platform markets semantic and AI-augmented use cases, but current public technical documentation does not expose a clearly documented general-purpose ANN vector subsystem comparable to engines with explicit vector indexes.

## Vector strategy — Unclear

Fluree clearly positions itself for GraphRAG and semantic AI, but current public technical documentation does not expose a general-purpose ANN vector subsystem. Full-text search is documented, and semantic search capabilities are part of the product marketing, but the implementation details of any vector index are not made explicit in public documentation. The unclear classification reflects that AI and semantic-search claims exist without a clearly documented vector implementation verifiable from public sources.

## Best fit

- Semantic layer and JSON-LD knowledge-graph workflows where the data model alignment matters
- GraphQL and SPARQL query patterns over RDF-grounded data
- Teams that need HA and managed cloud options with a semantic data platform
- Organizations evaluating Fluree specifically for its JSON-LD data model and versioning capabilities

## Considerations

- Vector capability, if any, is not clearly documented in public technical materials; verify current state directly with Fluree before planning vector workloads
- License combines commercial and open components; review the specific terms for the capabilities you need
- The project's vector strategy may have evolved beyond what current public documentation describes; direct vendor engagement is advised
- Previous catalog revisions overstated vector specifics relative to what current public docs support

## Sources

- [Fluree website](https://flur.ee/)
- [Full-text search reference](https://developers.flur.ee/docs/reference/full-text-search/)
- [Advanced querying features](https://developers.flur.ee/docs/reference/querying/advanced-features/)
