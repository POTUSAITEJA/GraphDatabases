# TypeDB

> Strongly typed knowledge engine with a polymorphic type system and built-in reasoning, catalogued as a specialized reference alongside standard graph databases.

| | |
|---|---|
| **Website** | [typedb.com](https://typedb.com) |
| **Model** | Specialized |
| **Status** | Production |
| **License** | Polyform / MPL by component (source-available) |
| **Query** | TypeQL |
| **Vector strategy** | **None** |
| **HA** | Yes |
| **Deployment** | Self-hosted, TypeDB Cloud |

## Overview

TypeDB is a strongly typed knowledge engine built around a polymorphic type system and native reasoning capabilities. It is not a standard label property graph or an RDF store; teams often encounter it when evaluating graph databases for reasoning-heavy knowledge systems. TypeQL, its query language, is designed to express type-theoretic constraints and inference rules rather than path traversals or triple patterns.

TypeDB is available under Polyform and MPL licenses depending on the component, making it source-available rather than fully open-source. High availability is supported, and TypeDB Cloud provides a managed deployment option. The current public documentation emphasizes schema, reasoning, and type semantics.

## Vector strategy — None

Current public TypeDB documentation does not expose a vector index or vector similarity query capability. The engine's focus is on symbolic reasoning over strongly typed schemas. Applications requiring vector search would need to pair TypeDB with an external vector engine.

## Best fit

- Strongly typed reasoning-heavy knowledge systems where schema correctness and inference matter more than query throughput
- Domains with complex ontologies where a polymorphic type system reduces modeling errors
- Teams that prefer a type-theoretic query language over SPARQL or Cypher

## Considerations

- Not a standard LPG or RDF store; ecosystem tooling and learning resources are smaller
- Polyform / MPL license components require careful review for commercial use cases
- No native vector search; requires an external vector engine for similarity workloads
- Datalog-style reasoning adds power but also operational complexity compared to schema-only stores

## Sources

- [TypeDB documentation overview](https://typedb.com/docs/home/get-started/overview)
- [TypeDB GitHub repository](https://github.com/typedb/typedb)
