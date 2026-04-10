# IndraDB

> Rust-native graph database inspired by Facebook's TAO, available as an embeddable library, a gRPC server, and a CLI.

| | |
|---|---|
| **Website** | [indradb.github.io](https://indradb.github.io) |
| **Model** | Label Property Graph |
| **Status** | Production |
| **License** | MPL-2.0 (permissive / weak copyleft) |
| **Query** | gRPC / Rust library / CLI |
| **Vector strategy** | **None** |
| **HA** | Pluggable datastores (in-memory, sled, RocksDB, PostgreSQL) |
| **Deployment** | Embedded Rust library, standalone server, or CLI |

## Overview

IndraDB is a directed, typed graph database written in Rust. Its design is heavily inspired by TAO, Facebook's graph datastore, and it emphasises simplicity of implementation and query semantics over feature breadth. The same codebase ships as an embeddable Rust library, a standalone gRPC server with cross-language client support, and a command-line interface.

The storage layer is pluggable. By default, IndraDB starts an in-memory datastore for fast iteration; for persistent or larger workloads, sled, RocksDB, and PostgreSQL backends are available. Cross-language access happens through gRPC, which lets non-Rust clients consume the same graph from Python or other languages.

## Vector strategy — None

No native vector index is documented. IndraDB focuses on directed, typed graphs with JSON properties and indexed property queries. Applications that need vector search alongside an IndraDB graph would pair it with a separate vector engine at the application layer.

## Best fit

- Embedded property-graph workloads in Rust applications
- Cross-language graph workloads where gRPC is the natural integration surface
- Projects that want a small, focused engine inspired by Facebook's TAO design

## Considerations

- Smaller ecosystem than mature LPG engines
- Storage characteristics depend on which pluggable backend is selected
- MPL-2.0 is permissive enough for most use cases but introduces weak copyleft obligations
- No native vector capability

## Sources

- [IndraDB GitHub repository](https://github.com/indradb/indradb)
- [IndraDB project site](https://indradb.github.io)
