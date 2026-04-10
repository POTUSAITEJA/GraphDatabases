# Stardog

> Commercial semantic AI platform combining RDF knowledge graph, data virtualization, and integrated vector search.

| | |
|---|---|
| **Website** | [stardog.com](https://www.stardog.com) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | SPARQL 1.1 / GraphQL |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Self-hosted, managed options via partners |

## Overview

Stardog is a commercial Semantic AI Platform combining a knowledge graph, data virtualization, and integrated vector search. As of version 10 (2024.1), semantic search stores vector embeddings directly in the built-in full-text search index, replacing the older external txtai-based approach.

The platform supports RDF 1.1, RDF-star, full SPARQL 1.1 including federation and GeoSPARQL, OWL 2/RDFS/SHACL reasoning, and ICV (integrity constraint validation). A distinctive capability is data virtualization, which allows SPARQL federation across JDBC/ODBC sources without data movement. The BARQ vectorized query execution engine is documented in the academic literature.

High availability is provided via ZooKeeper with a three-node minimum cluster configuration. The free tier does not include HA, backups, or the full connector set.

## Vector strategy — Native

Vector search is documented inside the same Stardog stack and query surface. As of version 10, vector embeddings are stored within the built-in full-text search index and are queryable via a SPARQL service form. Precomputed vector support is available, and GPU hardware is recommended for semantic search indexing performance. Vector embeddings reside in Java heap during indexing, which can increase memory requirements.

## Best fit

- Enterprise RDF, reasoning, and GraphRAG in one platform
- Teams requiring OWL 2 reasoning combined with vector similarity search
- Knowledge graph applications needing data virtualization across heterogeneous sources
- Organizations that need HA clustering with a commercial support contract

## Considerations

- Commercial licensing; the free tier excludes HA, backups, and the full connector set
- GPU hardware recommended for semantic search indexing performance
- Vector embeddings in Java heap during indexing increase memory requirements
- Enterprise sales cycle applies for full-feature access

## Sources

- [Stardog Semantic Search Docs](https://docs.stardog.com/query-stardog/semantic-search)
- [Stardog Full-Text Search Docs](https://docs.stardog.com/query-stardog/full-text-search)
