# Apache AGE

> PostgreSQL extension that adds openCypher graph queries alongside SQL and pgvector similarity search in the same database.

| | |
|---|---|
| **Website** | [age.apache.org/overview/](https://age.apache.org/overview/) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | openCypher / SQL |
| **Vector strategy** | **Paired** |
| **HA** | PostgreSQL dependent |
| **Deployment** | Self-hosted, managed PostgreSQL variants |

## Overview

Apache AGE (A Graph Extension) turns PostgreSQL into a hybrid relational and graph database. It implements an openCypher subset on top of PostgreSQL tables, so the same connection can run SQL, openCypher, and, when paired with the pgvector extension, vector similarity search inside the same transaction.

Because AGE lives inside PostgreSQL, it inherits the full PostgreSQL operational toolchain: ACID guarantees, PITR backups, standard replication, and HA stacks such as Patroni and CloudNativePG. Azure Database for PostgreSQL ships AGE as a managed extension, enabling managed cloud deployments. The project supports PostgreSQL versions 11 through 18.

## Vector strategy — Paired

The practical vector pattern is AGE plus PostgreSQL's pgvector extension running in the same database instance. AGE does not ship a built-in vector index. The standard production architecture places graph storage and Cypher queries in AGE, vector storage and ANN search (HNSW or IVFFlat) in pgvector, and relational data, transactions, authentication, and backups in PostgreSQL. Because both extensions share the same PostgreSQL instance, graph traversal results and vector similarity results can be joined in a single SQL query.

This is an architectural pairing, not a built-in AGE feature. The operational benefit is running one PostgreSQL instance instead of separate graph and vector systems.

## Best fit

- PostgreSQL shops adding graph queries without leaving the Postgres ecosystem
- Applications that need graph traversal and vector similarity search in the same query
- Teams already operating PostgreSQL HA stacks who want graph capability without additional infrastructure
- Workloads where relational, graph, and vector data need transactional consistency

## Considerations

- The Cypher implementation is a subset of openCypher; verify required language features against the AGE compatibility matrix before committing
- Performance is bounded by PostgreSQL's row-store architecture; not designed for trillion-edge analytical workloads
- Vector capability depends on pgvector being installed and maintained as a separate extension
- Two extensions in one engine simplifies operations compared to a dedicated graph DB plus a dedicated vector DB

## Sources

- [Apache AGE project page](https://age.apache.org/overview/)
- [pgvector GitHub](https://github.com/pgvector/pgvector)
