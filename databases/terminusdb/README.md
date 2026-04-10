# TerminusDB + VectorLink

> Git-for-data document graph database with a separately paired HNSW vector sidecar, not a single integrated engine.

| | |
|---|---|
| **Website** | [terminusdb.org](https://terminusdb.org) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | WOQL / GraphQL |
| **Vector strategy** | **Paired** |
| **HA** | Limited |
| **Deployment** | Self-hosted |

## Overview

TerminusDB is an open-source document graph database built on a JSON-LD/RDF data model with a "git-for-data" architecture supporting branch, merge, diff, and time-travel operations. It does not support SPARQL; queries use GraphQL and WOQL (a datalog variant). Maintainership transferred to DFRNT in 2025.

VectorLink is an officially paired Rust HNSW-based semantic indexer that runs as a separate HTTP service alongside TerminusDB. It provides commit-aware indexing that aligns with TerminusDB's versioning model. Together they form a hybrid stack rather than a single-engine graph-plus-vector database.

## Vector strategy — Paired

VectorLink is a separate sidecar service communicating over HTTP; it is not embedded in the TerminusDB engine. It requires an external embedding API (such as an OpenAI key) for generating embeddings. The pairing is officially documented and designed to complement TerminusDB's versioned data model, but vector search is architecturally distinct from the core graph engine.

## Best fit

- Versioned knowledge-graph workflows where branch, merge, and time-travel semantics are essential
- Teams that accept a sidecar vector service rather than a single-engine solution
- Document and JSON-LD-centric workloads with GraphQL query patterns
- Projects where Apache 2.0 licensing across both graph and vector components is required

## Considerations

- Does not support SPARQL; queries use GraphQL and WOQL only
- VectorLink requires an external embedding API key, adding a third-party dependency and potential cost
- Sidecar architecture is a reasonable hybrid but not a native integrated solution
- Maintainership transferred to DFRNT in 2025; evaluate long-term project trajectory accordingly
- HA is limited; evaluate carefully for high-availability production requirements

## Sources

- [TerminusDB](https://terminusdb.org)
- [VectorLink GitHub](https://github.com/terminusdb-labs/vectorlink)
