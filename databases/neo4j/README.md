# Neo4j

> The most widely deployed label property graph database, with Lucene-backed HNSW vector indexes and a first-class VECTOR type in Cypher.

| | |
|---|---|
| **Website** | [neo4j.com](https://neo4j.com) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | GPL v3 Community / commercial Enterprise (open-core) |
| **Query** | Cypher / GQL |
| **Vector strategy** | **Native** |
| **HA** | Enterprise / Aura |
| **Deployment** | Self-hosted, Aura managed |

## Overview

Neo4j is the most widely deployed Label Property Graph database. Vector indexing is integrated into the engine: Lucene-backed HNSW provides approximate nearest-neighbour search, and as of release 2025.10 vectors are stored as a first-class `VECTOR` property type with Cypher 25 syntax, including the `SEARCH` clause and `ai.text.embed()` helper functions.

The Community Edition is GPL v3 and runs as a single instance. Enterprise adds causal clustering, hot backups, monitoring, and the native VECTOR data type. A managed cloud offering (Aura) is available for teams that prefer not to operate the database. Neo4j has the largest ecosystem of LPG tooling, drivers, and learning resources of any property graph database.

## Vector strategy — Native

Lucene-backed HNSW vector indexes are documented and have been available for several releases. The first-class `VECTOR` property type, introduced in server 2025.10 Enterprise, represents a deeper integration: vectors are stored as a native Cypher data type rather than solely as index metadata. HNSW parameters (M, efConstruction) are tunable. Hybrid graph-plus-vector queries are supported within a single Cypher statement.

## Best fit

- Cypher-centric OLTP graph workloads requiring the broadest ecosystem of drivers and tooling
- Enterprise GraphRAG pipelines where vector retrieval and graph traversal must be combined
- Teams adopting GQL (ISO/IEC 39075) as a future standard
- Cloud-managed deployments via Aura without self-hosted infrastructure

## Considerations

- Community Edition is GPL v3 and single-instance; clustering, hot backups, and monitoring are Enterprise-only
- The first-class VECTOR type requires server 2025.10+ Enterprise; earlier releases have vector indexes but not the native type
- Enterprise licensing has specific terms; review the commercial agreement for production deployments
- GPL v3 has implications for software that embeds or distributes Neo4j Community Edition

## Sources

- [Neo4j vector indexes -- Cypher Manual](https://neo4j.com/docs/cypher-manual/current/indexes/semantic-indexes/vector-indexes/)
- [Neo4j VECTOR data type -- Go driver manual](https://neo4j.com/docs/go-manual/current/data-types/)
