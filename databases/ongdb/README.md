# ONgDB

> Community-maintained fork of Neo4j Enterprise 3.4 continued as a fully open-source native graph database under the Graph Foundation.

| | |
|---|---|
| **Website** | [graphfoundation.org/ongdb/](https://graphfoundation.org/ongdb/) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | GPL-3.0 Community / AGPL-3.0 Enterprise |
| **Query** | Cypher |
| **Vector strategy** | **None** |
| **HA** | Causal clustering (inherited from Neo4j Enterprise 3.4) |
| **Deployment** | Self-hosted |

## Overview

ONgDB stands for Open Native Graph Database. It is an independent fork of Neo4j Enterprise Edition 3.4.0-rc02 maintained by the Graph Foundation, an independent non-profit, after Neo4j Inc's shift to an open-core licensing model for newer releases.

It continues development of the Neo4j Enterprise codebase under GPL-3.0 for Community distributions and AGPL-3.0 for Enterprise distributions. The Graph Foundation and ONgDB are not affiliated with Neo4j, Inc. or Neo4j Sweden AB.

## Vector strategy — None

No native vector index is documented. ONgDB is forked from Neo4j Enterprise 3.4, which predates the HNSW vector work in upstream Neo4j 5.x. Applications that need vector search alongside ONgDB would need to pair it with a separate vector engine at the application layer.

## Best fit

- Teams that want a fully open-source continuation of Neo4j Enterprise features
- Organizations affected by the Neo4j open-core split who need clustering, hot backups, and monitoring without a commercial licence
- Historical deployments that need a drop-in continuation path from Neo4j Enterprise 3.4

## Considerations

- Based on the Neo4j 3.4 branch; features added to Neo4j 4.x and 5.x are not present
- AGPL-3.0 Enterprise licence has implications for SaaS distribution
- Community-driven release cadence is slower than upstream Neo4j
- No native vector support

## Sources

- [ONgDB on the Graph Foundation site](https://graphfoundation.org/ongdb/)
- [ONgDB GitHub repository](https://github.com/graphfoundation/ongdb)
