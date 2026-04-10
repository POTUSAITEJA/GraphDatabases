# AgensGraph

> A PostgreSQL-based multi-model database combining relational and graph processing with openCypher and SQL query interfaces.

| | |
|---|---|
| **Website** | [bitnineglobal.com](https://www.bitnineglobal.com) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Commercial community download / enterprise (source-available) |
| **Query** | openCypher / SQL |
| **Vector strategy** | **None** |
| **HA** | PostgreSQL dependent |
| **Deployment** | Self-hosted |

## Overview

AgensGraph is a multi-model database from Bitnine Global that extends PostgreSQL with graph processing capabilities. It supports both openCypher for graph queries and SQL for relational queries, allowing mixed workloads in a single engine. The product inherits PostgreSQL's storage, transaction, and HA semantics.

AgensGraph is catalogued here as one of the established PostgreSQL-plus-graph products in the label property graph landscape. It is relevant for teams that need graph capabilities alongside relational data while remaining on a PostgreSQL-compatible stack.

## Vector strategy — None

Current public AgensGraph materials focus on PostgreSQL plus graph processing. There is no documented native vector subsystem in AgensGraph. Teams that require vector search alongside graph and relational queries would need to pair AgensGraph with a separate vector service, or evaluate whether pgvector within a standard PostgreSQL deployment better fits the combined requirement.

## Best fit

- PostgreSQL-compatible graph workloads using a Bitnine stack
- Mixed relational and graph queries where SQL and openCypher are both needed
- Organizations with existing PostgreSQL expertise that want to add graph capabilities

## Considerations

- Source-available licensing; review community vs. enterprise terms before adopting
- No native vector search; requires a separate service for similarity workloads
- HA depends on PostgreSQL replication mechanisms, not a proprietary cluster layer
- Evaluate active maintenance and community activity before committing to a new deployment

## Sources

- [Bitnine Global website](https://www.bitnineglobal.com/)
- [AgensGraph download](https://www.bitnineglobal.com/download)
