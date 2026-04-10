# TuGraph

> Open-source property graph and graph-computing platform with GQL and openCypher support, without native vector search.

| | |
|---|---|
| **Website** | [tugraph-db.readthedocs.io](https://tugraph-db.readthedocs.io) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Apache 2.0 (permissive) |
| **Query** | openCypher / GQL / REST / Procedures |
| **Vector strategy** | **None** |
| **HA** | Yes |
| **Deployment** | Self-hosted |

## Overview

TuGraph is an open-source property graph database and graph-computing platform. It covers LPG storage, ACID transactions, stored procedures, and both GQL and openCypher as query languages. It is documented as a graph database plus graph-computing platform rather than a query layer only, meaning it supports graph analytics workloads alongside transactional queries.

High availability is supported in the self-hosted deployment model. The project is actively documented and maintained. TuGraph was missing from earlier catalog versions despite being a real and actively documented property-graph system.

## Vector strategy — None

Current public TuGraph documentation describes property-graph storage, GQL, openCypher, transactions, and stored procedures, but does not document native vector search capability. Applications requiring vector search alongside TuGraph would need to pair it with an external vector engine.

## Best fit

- Property graph workloads that require GQL or openCypher under a permissive open-source license
- Graph-computing and analytical workloads where stored procedures extend the query surface
- Deployments where Apache 2.0 licensing and self-hosted operation are requirements

## Considerations

- No native vector search; external pairing required for similarity workloads
- Self-hosted only; no managed cloud option documented
- Ecosystem and third-party tooling are smaller than Neo4j
- Adoption is concentrated in specific regional communities; international documentation coverage varies

## Sources

- [TuGraph quick start documentation](https://tugraph-db.readthedocs.io/en/v4.3.0/3.quick-start/1.preparation.html)
- [TuGraph GQL introduction](https://tugraph-db.readthedocs.io/en/v4.0.1/5.developer-manual/6.interface/1.query/2.gql/1.intro.html)
