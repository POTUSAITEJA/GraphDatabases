# HyperGraphDB

> An embedded Java hypergraph store where edges connect arbitrary numbers of nodes, included as the reference hypergraph anchor.

| | |
|---|---|
| **Website** | [hypergraphdb.org](https://www.hypergraphdb.org) |
| **Model** | Specialized |
| **Status** | Legacy |
| **License** | LGPL-3.0 (copyleft) |
| **Query** | Java API |
| **Vector strategy** | **None** |
| **HA** | None |
| **Deployment** | Embedded Java library |

## Overview

HyperGraphDB is an embedded Java database built around a hypergraph data model. Unlike classical graphs where an edge connects exactly two nodes, a HyperGraphDB edge can connect any number of nodes. This makes it a natural fit for domains where relationships are genuinely n-ary, such as natural language processing, knowledge representation, and some scientific modelling problems.

It is catalogued here as the reference open-source hypergraph store and a useful anchor point when the question of whether a true hyperedge model is needed arises. Activity has slowed significantly since around 2017 and there is no active release cadence; new production systems would usually select a more actively maintained alternative.

## Vector strategy — None

There is no documented vector search capability. HyperGraphDB predates the modern vector database era and has not added native vector indexing. Teams that need vector search alongside a hypergraph model would need to pair HyperGraphDB with a separate vector service and integrate at the application layer.

## Best fit

- Research projects that specifically require a true hyperedge model
- Legacy Java systems already built on HyperGraphDB
- Reference material for teams evaluating whether they actually need a hypergraph model

## Considerations

- Embedded Java library only; no network protocol or multi-language clients
- Low maintenance activity since approximately 2017; evaluate carefully before adopting for new work
- LGPL-3.0 copyleft license; review implications for your distribution model
- No vector search, no reasoning layer, no SPARQL or Cypher query surface

## Sources

- [HyperGraphDB website](https://www.hypergraphdb.org)
- [HyperGraphDB GitHub](https://github.com/hypergraphdb/hypergraphdb)
