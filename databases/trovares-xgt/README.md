# Trovares xGT (Rocketgraph)

> High-performance in-memory property graph engine for single-user analytic workloads on very large graphs.

| | |
|---|---|
| **Website** | [rocketgraph.com](https://rocketgraph.com) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial |
| **Query** | Python API / openCypher |
| **Vector strategy** | **None** |
| **HA** | Single-user in-memory engine |
| **Deployment** | Self-hosted on large-memory servers |

## Overview

xGT is a property graph analytics engine built for single-user workloads on very large in-memory graphs. It is developed by Trovares, now branded as Rocketgraph, a Seattle-based company founded in 2014 to commercialise parallel graph work originally done for the US Department of Defense and Pacific Northwest National Laboratory.

The product targets data scientists and analysts who need fast iteration on large graphs, with a Python-first interface and openCypher query support. Public benchmarks compare xGT performance against Neo4j on common analytic workloads.

## Vector strategy — None

No native vector index is documented. xGT focuses on analytic query throughput on large in-memory property graphs rather than similarity search. Applications that need vector capabilities pair xGT with a separate vector engine at the application layer.

## Best fit

- Single-user analytic graph workloads on very large in-memory graphs
- Data science workflows that need fast iteration with a Python-first API
- Federal and research deployments where high-throughput graph analytics matter more than multi-tenant OLTP

## Considerations

- Single-user engine; not designed for multi-tenant OLTP
- Commercial-only licensing
- Memory-bound — graph size is limited by available RAM
- No native vector capability

## Sources

- [Rocketgraph documentation](https://docs.trovares.com/)
- [Rocketgraph](https://rocketgraph.com/)
