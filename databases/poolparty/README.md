# PoolParty Semantic Suite

> Commercial enterprise semantic suite from the Semantic Web Company, built around SKOS for taxonomy, ontology, and knowledge graph management.

| | |
|---|---|
| **Website** | [poolparty.biz](https://www.poolparty.biz) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Commercial |
| **Query** | SPARQL 1.1 / SKOS / REST |
| **Vector strategy** | **None** |
| **HA** | Deployment-dependent |
| **Deployment** | Self-hosted or private cloud suite |

## Overview

PoolParty is a commercial semantic suite developed by the Semantic Web Company in Vienna, one of the early commercial pioneers of the W3C Semantic Web standards. The platform is built around SKOS and SKOS-XL — W3C standards for controlled vocabularies, taxonomies, and thesauri — and uses them as the foundation for enterprise knowledge graphs.

The Thesaurus Server lets users build and extend SKOS thesauri with additional RDF schemas, and the Semantic Integrator pulls those knowledge graphs into enterprise content platforms (CMSs, wikis, search) through SPARQL endpoints and APIs. PoolParty supports semantic search applications backed entirely by an RDF graph store.

## Vector strategy — None

No native vector index is exposed at the store level. PoolParty's strength is taxonomy management and SKOS-based knowledge graphs rather than similarity search. Applications that need vector capabilities pair PoolParty with a separate vector engine at the application layer.

## Best fit

- Enterprise taxonomy and controlled vocabulary management
- SKOS-based knowledge graphs with semantic search applications
- Organizations that need W3C standards compliance and integration with enterprise content systems

## Considerations

- Commercial-only with enterprise sales and support cycles
- Centred on SKOS — best fit when the data model is taxonomy-shaped
- No native vector capability
- Multi-product suite; the right product mix depends on the use case

## Sources

- [PoolParty Semantic Integrator](https://www.poolparty.biz/semantic-integrator)
- [PoolParty Semantic Suite on Wikipedia](https://en.wikipedia.org/wiki/PoolParty_Semantic_Suite)
