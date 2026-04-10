# Ultipa

> Commercial distributed property graph database with native HNSW vector search targeting billion-plus scale enterprise workloads.

| | |
|---|---|
| **Website** | [ultipa.com](https://www.ultipa.com) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | GQL / Ultipa APIs |
| **Vector strategy** | **Native** |
| **HA** | Yes |
| **Deployment** | Embedded, self-hosted, managed cloud |

## Overview

Ultipa is a distributed graph database with native vector capabilities designed for enterprises needing billion-plus scale with integrated embeddings. The data model supports vertices and edges with property types that include native vector fields, and the query language (ULTIPA QL, a proprietary SQL-like DSL) allows vector similarity search to be combined with graph traversal in a single query.

The engine is distributed with configurable sharding and replication. High availability is supported with sub-second failover detection. A managed cloud offering targets primarily Asia-Pacific regions. Python, Java, and Go SDKs are available. The product has strong adoption in financial services, e-commerce, and social network platforms in the Asia-Pacific region.

## Vector strategy — Native

Ultipa documents vector indexes and vector query procedures natively in the graph engine. Vectors are stored as vertex or edge properties, indexed with HNSW supporting cosine, Euclidean, and dot-product distance metrics. Vector similarity queries can be chained with graph traversal steps in ULTIPA QL to express patterns such as "find nodes semantically similar to this embedding, then traverse their neighbors by edge type." This is documented as a core product capability.

## Best fit

- High-scale property graph workloads with strong AI and vector search requirements
- Recommendation engines combining user-product graphs with embedding similarity
- Fraud detection and social network applications at billion-plus edge scale
- Enterprises in Asia-Pacific already using the Ultipa ecosystem

## Considerations

- Commercial license; requires an enterprise agreement for production use
- ULTIPA QL is a proprietary language with no open standard equivalent
- Smaller ecosystem and fewer third-party integrations compared to Neo4j
- Public evidence of capabilities is primarily vendor-supplied documentation and announcements
- Managed cloud availability is concentrated in Asia-Pacific regions

## Sources

- [Ultipa vector index documentation](https://www.ultipa.com/docs/gql/vector-index)
- [Ultipa product page](https://www.ultipa.com/product/ultipa-graph)
- [Ultipa vector search announcement](https://www.ultipa.com/article/technical/ultipa-now-supports-vector-search)
