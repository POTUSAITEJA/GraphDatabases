# RedisGraph

> Archived Redis module implementing a Cypher-queryable property graph; superseded by FalkorDB.

| | |
|---|---|
| **Website** | [github.com/RedisGraph/RedisGraph](https://github.com/RedisGraph/RedisGraph) |
| **Model** | Label Property Graph |
| **Status** | Legacy |
| **License** | Source available (source-available) |
| **Query** | Cypher |
| **Vector strategy** | **None** |
| **HA** | Historical |
| **Deployment** | Self-hosted |

## Overview

RedisGraph was a Redis module that added a Cypher-queryable property graph engine inside the Redis server. The project is archived and no longer actively maintained. The practical successor within this catalog is FalkorDB, which forked from the RedisGraph codebase and continues active development.

This entry is kept as a historical reference to document the lineage from RedisGraph to FalkorDB and to help teams with existing RedisGraph deployments identify a migration path.

## Vector strategy — None

RedisGraph has no native vector graph search capability. The project is archived with no vector index documented. Teams requiring vector similarity search should evaluate FalkorDB or other active alternatives.

## Best fit

- Legacy migration reference for teams running existing RedisGraph deployments
- Historical documentation of the path toward FalkorDB

## Considerations

- Repository is archived; no new features or security patches
- Source-available license restricts redistribution rights
- HA was available historically but is not a consideration for new deployments
- Migration target within this catalog is FalkorDB

## Sources

- [RedisGraph GitHub (archived)](https://github.com/RedisGraph/RedisGraph)
