# AtomicServer

> Reference implementation of the Atomic Data specification: a type-safe, RDF-inspired graph database with JSON ergonomics, built in Rust.

| | |
|---|---|
| **Website** | [atomicserver.eu](https://atomicserver.eu) |
| **Model** | Specialized |
| **Status** | Emerging |
| **License** | MIT (permissive) |
| **Query** | REST / Atomic queries |
| **Vector strategy** | **None** |
| **HA** | Single-node (sled-backed storage) |
| **Deployment** | Self-hosted, single binary |

## Overview

AtomicServer is the reference implementation of the Atomic Data specification, a data model that combines RDF-style typed links, JSON compatibility, and runtime type safety. Every resource has a URL, a declared schema, and typed properties, which makes the data layer feel like a lightweight linked-data graph while still being easy to work with from JavaScript and TypeScript clients.

The server is written in Rust, backed by the sled key-value store, and ships as a single small binary. It also doubles as a headless CMS with a built-in table editor, full-text search, and client SDKs for JavaScript, React, Svelte, and Rust.

## Vector strategy — None

No native vector index is documented. AtomicServer focuses on typed, linked data rather than similarity search. Applications that need vector search alongside an Atomic Data store would pair it with a separate vector engine at the application layer.

## Best fit

- Headless CMS and real-time collaborative data applications
- Projects that want a type-safe, RDF-inspired graph without the ceremony of a full SPARQL stack
- Small-to-medium deployments where a single-binary store is operationally attractive
- Front-end teams that prefer JSON-compatible resources over classical RDF serialisations

## Considerations

- Single-node storage; not aimed at distributed deployments
- No SPARQL surface — queries go through the REST API and Atomic queries
- Emerging project status; ecosystem and tooling are still growing
- No vector search

## Sources

- [Atomic Data documentation](https://docs.atomicdata.dev/)
- [AtomicServer GitHub repository](https://github.com/atomicdata-dev/atomic-server)
