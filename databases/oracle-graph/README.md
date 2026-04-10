# Oracle Graph

> Oracle Database's unified graph layer combining property graph and RDF in one engine with co-located AI Vector Search.

| | |
|---|---|
| **Website** | [oracle.com/database/graph/](https://www.oracle.com/database/graph/) |
| **Model** | Multi-model |
| **Status** | Production |
| **License** | Commercial (commercial) |
| **Query** | PGQL / SPARQL 1.1 / SQL/PGQ / Gremlin |
| **Vector strategy** | **Integrated** |
| **HA** | Enterprise RAC and Data Guard |
| **Deployment** | Oracle Database 23ai (self-hosted, cloud, or 23ai Free) |

## Overview

Oracle Graph is the unified graph layer inside Oracle Database. It exposes two graph models over a shared storage engine: a property graph queried with PGQL and the ISO standard SQL/PGQ, and an RDF graph queried with SPARQL 1.1 with W3C semantics support.

Historically these were shipped as two separate layers (Oracle Spatial and Graph, Oracle RDF Semantic Graph). In Oracle Database 23ai they are jointly branded as Oracle Graph and sit inside the converged database alongside relational, JSON, spatial, and AI Vector Search. A free tier is available via Oracle Database 23ai Free.

## Vector strategy — Integrated

Oracle Database 23ai introduced AI Vector Search as a first-class feature with its own `VECTOR` column type and HNSW plus IVF indexes. Because graph tables and vector columns live in the same database, a single SQL or PGQL statement can traverse a graph and filter by vector similarity without leaving the engine. Oracle Database 23ai bundles AI Vector Search alongside PGQL and RDF, so graph traversals and vector similarity can be composed in a single query. The vector feature is not inside the graph engine itself, but it is inside the same product boundary, which makes this an integrated classification rather than native.

## Best fit

- Enterprise workloads that need dual RDF and property graph with native vector search in the same engine
- Customers already standardized on Oracle Database who want graph and vector without a second system
- Workloads that need both RDF and property graph side by side
- Mixed OLTP and analytics workloads where strong isolation, backup, and HA are required

## Considerations

- Licensing is tied to Oracle Database editions; verify which features are included in your specific edition
- PGQL and SQL/PGQ are not yet as widespread in developer tooling as Cypher or SPARQL
- Vector search lives in the broader database, not the graph engine itself — the internal boundary matters if your architecture requires tight graph-vector coupling
- Commercial license; enterprise procurement and support cycles apply

## Sources

- [Oracle property graph documentation](https://docs.oracle.com/en/database/oracle/property-graph/)
- [Oracle Graph product page](https://www.oracle.com/database/graph/)
