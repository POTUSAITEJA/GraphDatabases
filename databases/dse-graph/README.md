# DataStax Enterprise Graph

> Enterprise property graph engine built on top of Apache Cassandra as part of DataStax Enterprise, queried with Gremlin.

| | |
|---|---|
| **Website** | [datastax.com/products/datastax-graph](https://www.datastax.com/products/datastax-graph) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | Commercial |
| **Query** | Gremlin / CQL |
| **Vector strategy** | **None** |
| **HA** | Cassandra-native multi-datacenter replication |
| **Deployment** | Self-hosted DataStax Enterprise cluster |

## Overview

DataStax Enterprise Graph, usually abbreviated as DSE Graph, is the property graph layer inside DataStax Enterprise. It stores graph data in Apache Cassandra tables and exposes Gremlin as the primary query language, letting teams use Cassandra's distributed storage, linear scale-out, and multi-datacenter replication for graph workloads that need continuous availability.

From DSE 6.8 onward the classic DSE Graph engine and the newer DataStax Graph engine share the same product surface. Both target the same use case: running production graph workloads on top of Cassandra without operating a separate graph database.

## Vector strategy — None

No vector capability is documented inside the DSE Graph engine itself. DataStax ships vector search as a distinct product line (Astra DB and related Cassandra vector features) rather than as a graph engine feature, so applications that need vector search alongside DSE Graph typically pair it with a separate DataStax product or an external vector engine.

## Best fit

- Enterprise graph workloads that already depend on Apache Cassandra for distributed storage
- Multi-datacenter deployments that require continuous availability and linear scale-out
- Teams that want Gremlin over a Cassandra-backed storage layer with a commercial support contract

## Considerations

- Commercial-only licensing and enterprise procurement cycle
- No native vector support in the graph engine
- Gremlin-only query surface; no native Cypher or SPARQL
- Tied to the DataStax Enterprise release train and support model

## Sources

- [DataStax Graph documentation](https://docs.datastax.com/en/dse/6.9/graph/graph-contents.html)
- [DataStax Enterprise Graph product page](https://www.datastax.com/products/datastax-graph)
