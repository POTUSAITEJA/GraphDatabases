# Tarantool Graph DB

> Commercial graph-vector database product from Tarantool, currently marketed but with shallow public technical documentation.

| | |
|---|---|
| **Website** | [tarantool.io](https://www.tarantool.io/en/solutions/vector-database/) |
| **Model** | Label Property Graph |
| **Status** | Emerging |
| **License** | Commercial (commercial) |
| **Query** | openCypher / APIs |
| **Vector strategy** | **Native** |
| **HA** | Claimed |
| **Deployment** | Self-hosted |

## Overview

Tarantool markets a graph-vector database product combining property graph and vector search capabilities. Tarantool is an established in-memory data platform with a long production history in transactional workloads; the graph-vector offering is a newer product direction built on that platform.

Current public material describes the graph-vector combination as a product direction but the technical documentation depth is not at the level of more mature native-vector graph engines. Production references for the combined graph-vector use case are not yet publicly visible.

## Vector strategy — Native

Tarantool's product marketing positions the graph-vector database as a native combined offering. However, the public material still reads as early-stage product collateral rather than mature technical documentation with implementation details, index configuration options, or benchmark results. The native classification reflects the vendor's stated architecture, not independently verified documentation of an ANN implementation.

## Best fit

- Teams specifically evaluating Tarantool's graph-vector product direction within an existing Tarantool environment
- Organizations that already operate Tarantool for transactional workloads and want to extend into graph-vector capabilities
- Watch-list evaluation while public documentation and production references mature

## Considerations

- Commercial license; pricing and support terms require direct engagement with Tarantool
- Public technical documentation is currently shallow; verify current state directly with the vendor before planning a deployment
- HA is claimed but not fully described in public documentation; validate architecture for your availability requirements
- Keep in an emerging evaluation bucket until public docs and production references deepen

## Sources

- [Tarantool vector database solution page](https://www.tarantool.io/en/solutions/vector-database/)
