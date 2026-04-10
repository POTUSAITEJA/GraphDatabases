# Kuzu

> Archived embedded analytical property graph with native vector and BM25 full-text search; kept as a legacy migration reference.

| | |
|---|---|
| **Website** | [github.com/kuzudb/kuzu](https://github.com/kuzudb/kuzu) |
| **Model** | Label Property Graph |
| **Status** | Legacy |
| **License** | MIT (permissive) |
| **Query** | Cypher |
| **Vector strategy** | **Native** |
| **HA** | No |
| **Deployment** | Embedded |

## Overview

Kuzu was an embedded analytical graph database designed along the same architectural philosophy as DuckDB (columnar, analytical, embedded), with native vector search and BM25 full-text search built into the engine. The repository was archived by the maintainers on October 10, 2025 and is now read-only.

Version 0.8.0 added Kuzu-WASM for in-browser graph analytics and the FTS extension. Version 0.10.0 was the final feature release before archival. The MIT license permits forking; a community fork named bighorn is maintained by Kineviz.

This entry is included for historical and migration-planning context. New deployments should evaluate active alternatives such as DuckDB-PGQ, Memgraph, or ArcadeDB depending on the workload shape.

## Vector strategy — Native

Kuzu shipped native vector and full-text extensions before the repository was archived. The final release supported a native vector index, a BM25 FTS extension, hybrid graph plus vector plus full-text queries, and embedded and WASM deployment. These capabilities are preserved in the archived codebase and the MIT license permits forks.

## Best fit

- Historical reference for embedded analytical property graph architecture
- Migration planning for teams running existing Kuzu deployments
- Baseline for evaluating active embedded graph alternatives

## Considerations

- Repository is archived and read-only as of October 10, 2025; no new features or security patches
- Not suitable for new production deployments
- The MIT license permits forking, but community fork maintenance is not guaranteed
- Existing Kuzu deployments still run; plan migration to an actively maintained alternative

## Sources

- [Kuzu GitHub (archived)](https://github.com/kuzudb/kuzu)
