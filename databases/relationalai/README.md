# RelationalAI

> Commercial relational knowledge graph management system built around Rel, a Datalog-inspired declarative language, delivered as a Snowflake co-processor.

| | |
|---|---|
| **Website** | [relational.ai](https://relational.ai) |
| **Model** | Specialized |
| **Status** | Production |
| **License** | Commercial |
| **Query** | Rel (Datalog-based) |
| **Vector strategy** | **Unclear** |
| **HA** | Snowflake-native managed service |
| **Deployment** | Managed co-processor on Snowflake (Snowflake Marketplace) |

## Overview

RelationalAI is a commercial knowledge graph management system designed around a single declarative language called Rel. Rel is rooted in Datalog with fewer restrictions than textbook Datalog or SQL recursive CTEs, and it is the query and modelling surface for what RelationalAI calls relational knowledge graphs.

The platform is delivered as a co-processor to Snowflake and is available through the Snowflake Marketplace. It exposes a Python library for application access and ships Rel-written libraries for graph analytics and other tasks.

## Vector strategy — Unclear

Public documentation focuses on relational knowledge graphs, Datalog-style recursion, and integration with Snowflake. Vector indexing and similarity search are not currently the headline capability in publicly available materials, so the catalog marks the strategy as unclear rather than asserting either presence or absence.

## Best fit

- Enterprises already standardised on Snowflake that want a declarative knowledge graph layer
- Use cases that benefit from Datalog-style recursion and a single declarative language for modelling and querying
- Decision intelligence applications that combine symbolic reasoning with relational data

## Considerations

- Commercial-only; pricing and access tied to Snowflake usage
- Rel is a learning curve for teams used to SQL or Cypher
- Vector capability not clearly exposed in public docs
- Currently coupled to Snowflake as the primary deployment surface

## Sources

- [RelationalAI](https://www.relational.ai/)
- [Relational knowledge graphs documentation](https://docs.relational.ai/rel/concepts/relational-knowledge-graphs)
