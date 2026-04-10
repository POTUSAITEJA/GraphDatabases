# Blazegraph

> Legacy Java RDF triple store that powered Wikidata; no longer actively maintained and not recommended for new deployments.

| | |
|---|---|
| **Website** | [github.com/blazegraph/database](https://github.com/blazegraph/database) |
| **Model** | RDF / SPARQL-native |
| **Status** | Legacy |
| **License** | GPL v2 (copyleft) |
| **Query** | SPARQL 1.1 |
| **Vector strategy** | **None** |
| **HA** | Historical |
| **Deployment** | Self-hosted |

## Overview

Blazegraph is an open-source RDF triple store that historically powered the Wikidata Query Service. The project is no longer under active development. The Wikimedia Foundation has been evaluating replacements, with QLever among the candidates, for several years.

This entry is included for historical and migration-planning context only. Blazegraph should not be selected for new production deployments. Existing deployments remain functional and the Wikidata Query Service continues to operate on it during the transition period.

Blazegraph supports RDF 1.1, full SPARQL 1.1, and named graphs. It is the most-cited example of a "we need to migrate off this" RDF deployment in the Semantic Web community, and migration paths from Blazegraph are a common reason teams evaluate this catalog.

## Vector strategy — None

No native vector search is documented. Blazegraph has no vector index capability. Applications requiring vector similarity search would need to replace or augment Blazegraph with a separate store entirely.

## Best fit

- Legacy migration planning for teams running existing Blazegraph deployments
- Historical reference for understanding the Wikidata Query Service architecture
- Comparison baseline when evaluating replacement RDF stores (QLever, Jena, Virtuoso)

## Considerations

- Not actively maintained; no new features or security patches expected
- GPL v2 license has copyleft implications for proprietary applications
- HA was available historically but is not a consideration for new deployments
- Listing preserves the historical lineage so readers can compare candidate replacements

## Sources

- [Blazegraph GitHub](https://github.com/blazegraph/database)
