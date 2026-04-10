# TopBraid EDG

> Commercial enterprise data governance platform from TopQuadrant, built on RDF knowledge graphs with SHACL, SPARQL, and GraphQL access.

| | |
|---|---|
| **Website** | [topquadrant.com/topbraid-edg/](https://www.topquadrant.com/topbraid-edg/) |
| **Model** | RDF / SPARQL-native |
| **Status** | Production |
| **License** | Commercial |
| **Query** | SPARQL / SHACL / GraphQL |
| **Vector strategy** | **None** |
| **HA** | Deployment-dependent |
| **Deployment** | Self-hosted or private cloud |

## Overview

TopBraid Enterprise Data Governance (EDG) is TopQuadrant's flagship platform for enterprise data governance. The core of EDG is a knowledge graph backed by RDF: business glossaries, data sources, ontologies, reference data, applications, and policies are all represented as connected nodes and relationships, and SHACL is used to validate and constrain that graph.

EDG exposes SPARQL and GraphQL endpoints, automatically generates GraphQL schemas from the underlying SHACL shapes, and supports W3C standards (RDF, OWL, SPARQL, SHACL) throughout. It is one of the most established commercial RDF-based data governance platforms.

## Vector strategy — None

No native vector index is exposed at the store level. TopBraid EDG focuses on RDF knowledge graphs, SHACL validation, and governed access via SPARQL or GraphQL. Applications that need vector capabilities pair the platform with a separate vector engine at the application layer.

## Best fit

- Enterprise data governance, business glossaries, and reference data management
- Organizations that need W3C standards compliance with SHACL validation
- Knowledge graph applications that benefit from SHACL-derived GraphQL schemas

## Considerations

- Commercial-only with enterprise procurement cycles
- Built around W3C standards — teams unfamiliar with RDF, OWL, and SHACL will face a learning curve
- No native vector capability
- Best fit when governance and standards compliance matter more than raw query performance

## Sources

- [TopBraid EDG product page](https://www.topquadrant.com/topbraid-edg/)
- [TopBraid EDG documentation](https://www.topquadrant.com/doc/latest/introduction/index.html)
