# Datomic

> Immutable entity-attribute-value store with first-class time-travel queries and Datalog, made free of licensing fees in 2023.

| | |
|---|---|
| **Website** | [datomic.com](https://www.datomic.com) |
| **Model** | Specialized |
| **Status** | Production |
| **License** | Apache 2.0 (binaries) (source-available) |
| **Query** | Datalog / Pull API / Entity API |
| **Vector strategy** | **None** |
| **HA** | Datomic Cloud on AWS or Datomic Pro with external storage |
| **Deployment** | Self-hosted (Datomic Pro) or managed on AWS (Datomic Cloud) |

## Overview

Datomic is an immutable, time-aware database built around an entity-attribute-value (EAV) data model. Every fact is stored with a transaction timestamp, so the database supports true time-travel queries: querying the state of an entity at any past point in time is a first-class operation.

It is not a classical RDF store, but the EAV triple shape and Datalog query language place it in the knowledge-graph and semantic-data neighborhood, which is why it is catalogued here under `specialized`. Datomic Pro binaries were released under Apache 2.0 and made free of licensing fees in April 2023 by Nubank. The source code is not published, so the license family is marked source-available. Facts are immutable; nothing is ever deleted, only superseded. Reads are performed on the peer or ion process rather than through a central server.

## Vector strategy — None

No native vector index is documented in Datomic. Datomic is an immutable entity-attribute-value store queried with Datalog. Applications that need vector search typically pair Datomic with an external vector engine.

## Best fit

- Domains where auditability and time-travel are more valuable than write throughput
- Systems where business facts are naturally append-only
- Clojure-heavy stacks where Datomic's programming model is idiomatic
- Immutable entity-attribute-value knowledge bases requiring point-in-time queries

## Considerations

- Source code is not published; only the binaries are under Apache 2.0
- Datalog is unfamiliar to most SQL and Cypher developers
- Write throughput and storage layout differ significantly from traditional databases
- No native vector search; requires pairing with an external vector engine for similarity workloads

## Sources

- [Datomic documentation](https://docs.datomic.com/)
- [Datomic is free -- Datomic blog](https://blog.datomic.com/2023/04/datomic-is-free.html)
