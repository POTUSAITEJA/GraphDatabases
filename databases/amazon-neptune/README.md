# Amazon Neptune

> AWS fully managed graph database covering RDF and property graph, with vector search in a sibling analytics engine.

| | |
|---|---|
| **Website** | [aws.amazon.com/neptune](https://aws.amazon.com/neptune/) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Commercial managed service (commercial) |
| **Query** | SPARQL 1.1 / Gremlin / openCypher |
| **Vector strategy** | **Sibling** |
| **HA** | Managed |
| **Deployment** | AWS managed service |

## Overview

Amazon Neptune is AWS's fully managed graph database supporting two graph models in a single service: RDF with SPARQL 1.1, and property graphs with Gremlin and openCypher. It offers full SPARQL 1.1 query and update, named graphs, SPARQL federation, and OpenSearch-backed full-text search. High availability is managed through Multi-AZ deployment with read replicas and cluster endpoints.

In 2023 AWS introduced Neptune Analytics, an in-memory analytics engine that adds a vector index for similarity search. Neptune Analytics integrates with Neptune Database for RDF and property graph workloads, but operates as a distinct engine rather than a capability embedded in the core database.

## Vector strategy — Sibling

Vector search is exposed through Neptune Analytics rather than the core Neptune database engine. Hybrid graph-plus-vector queries are supported by linking Neptune Analytics to Neptune Database, but vector queries are issued through Neptune Analytics APIs rather than embedded in SPARQL or Gremlin. This is a sibling-service architecture: both engines share the same AWS platform but are not a single-engine experience.

## Best fit

- Managed RDF and property graph workloads on AWS where operational overhead is a primary concern
- Applications that already operate within the AWS ecosystem and need adjacent graph analytics
- Workloads needing both SPARQL and Gremlin/openCypher access to the same underlying data
- Teams that can tolerate separate-engine vector search in exchange for fully managed operations

## Considerations

- AWS lock-in by design; Neptune is only available as a managed AWS service
- Vector search lives in Neptune Analytics, a separate engine from Neptune Database; not a single-engine experience
- Pricing is consumption-based (instance hours, storage, I/O); can scale unexpectedly under high query load
- RDF-star is not currently available in Neptune

## Sources

- [Amazon Neptune product page](https://aws.amazon.com/neptune/)
- [Neptune Analytics documentation](https://docs.aws.amazon.com/neptune-analytics/)
- [SPARQL support documentation](https://docs.aws.amazon.com/neptune/latest/userguide/sparql.html)
