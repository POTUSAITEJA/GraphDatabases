# Gel (formerly EdgeDB)

> Graph-relational object database built on PostgreSQL with first-class EdgeQL, vector search, and a managed cloud offering.

| | |
|---|---|
| **Website** | [geldata.com](https://www.geldata.com) |
| **Model** | Specialized |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | EdgeQL / GraphQL / SQL (read-only) |
| **Vector strategy** | **Integrated** |
| **HA** | Replication via Postgres backend |
| **Deployment** | Self-hosted, Docker, or Gel Cloud |

## Overview

Gel is the current name for the database project previously known as EdgeDB, rebranded in 2025. It is built on top of PostgreSQL but exposes a higher-level data model based on objects with typed, bidirectional links. Those links form a navigable graph that is queried with EdgeQL, a composable query language inspired by GraphQL and SQL.

Gel is neither a classical RDF store nor a traditional property-graph engine. Its graph-relational model treats object links as first-class navigable references, making graph traversal natural without being limited to a pure graph schema. It is catalogued under specialized to reflect that distinct position. HA is provided through standard PostgreSQL replication, and Gel Cloud is a managed offering for teams that prefer not to operate PostgreSQL directly.

## Vector strategy — Integrated

Gel ships an official `ext::pgvector` extension that exposes ANN search from EdgeQL over its graph-relational object model. Because Gel is built on PostgreSQL, this extension plugs into the underlying storage and exposes vector operations alongside object traversal in a single query. Vector columns and similarity search are available as first-class features without a separate system.

## Best fit

- Application backends that want a strongly typed graph-like object model with migrations, schemas, and permissions
- Teams already using PostgreSQL who want a higher-level query surface with graph traversal
- Products that need vector search alongside relational and graph-style queries in one platform
- Organizations preferring a managed cloud option (Gel Cloud) backed by PostgreSQL

## Considerations

- Graph traversal is through object links, not arbitrary edges; does not replace a true graph engine for heavy multi-hop analytics
- EdgeQL has a learning curve for teams accustomed to SQL or Cypher
- The rebrand from EdgeDB to Gel in 2025 can make older documentation and community resources confusing
- Gel Cloud is a managed offering, introducing vendor dependency for that deployment path

## Sources

- [Gel Documentation](https://docs.geldata.com/)
- [EdgeDB is now Gel](https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future)
