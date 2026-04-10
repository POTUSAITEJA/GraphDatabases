<div align="center">

# Graph Database Resource Catalog

### The curated, primary-source reference for graph databases, RDF triple stores, property graph systems, and vector-capable graph engines.

**A comprehensive comparison of 54 graph databases — Neo4j, Apache Jena, Stardog, ArangoDB, Memgraph, TigerGraph, Dgraph, Virtuoso, GraphDB, Amazon Neptune, Oracle Graph, Google Spanner Graph, and more — with explicit vector-search classification for every entry.**

<p>
  <a href="#license"><img alt="License" src="https://img.shields.io/badge/License-MIT-34d399?style=for-the-badge"></a>
</p>

<p>
  <img alt="Entries" src="https://img.shields.io/badge/Entries-54-60a5fa?style=flat-square">
  <img alt="RDF" src="https://img.shields.io/badge/RDF-13-60a5fa?style=flat-square">
  <img alt="LPG" src="https://img.shields.io/badge/LPG-19-fb923c?style=flat-square">
  <img alt="Multi-model" src="https://img.shields.io/badge/Multi--model-15-22d3ee?style=flat-square">
  <img alt="Specialized" src="https://img.shields.io/badge/Specialized-7-c084fc?style=flat-square">
  <img alt="Native vector" src="https://img.shields.io/badge/Native%20vector-21-34d399?style=flat-square">
</p>

<p>
  <b><a href="https://potusaiteja.github.io/GraphDatabases/">→ Open the live catalog</a></b>
  &nbsp;·&nbsp;
  <a href="#quick-start">Quick start</a>
  &nbsp;·&nbsp;
  <a href="#contributing">Contribute</a>
  &nbsp;·&nbsp;
  <a href="databases/databases.json">Data</a>
</p>

</div>

---

## About

The **Graph Database Resource Catalog** is a curated, primary-source reference for every graph database, RDF triple store, SPARQL engine, label property graph database, multi-model engine, and graph-plus-vector system worth considering for production use. It answers one question honestly:

> **Which graph databases actually support vector search, and how?**

Every one of the 54 entries is anchored to official documentation, product pages, or source repositories. The catalog distinguishes native vector support from connector-based, paired-extension, and sibling-service patterns — and where the public docs are ambiguous, the entry is marked `unclear` instead of being inflated.

**Topics covered:** graph database · RDF database · SPARQL · property graph · label property graph · LPG · knowledge graph · semantic graph · triple store · Cypher · Gremlin · GQL · SQL/PGQ · Datalog · vector search · HNSW · GraphRAG · multi-model database · graph analytics · graph OLTP · graph OLAP · knowledge graph engineering · semantic web

**Databases in the catalog include:** Neo4j, Apache Jena, Fuseki, Virtuoso, Stardog, GraphDB, Amazon Neptune, RDFox, MarkLogic, Oxigraph, QLever, Blazegraph, TerminusDB, SurrealDB, ArangoDB, ArcadeDB, Memgraph, TigerGraph, Dgraph, JanusGraph, NebulaGraph, Apache HugeGraph, Apache AGE, OrientDB, TypeDB, Azure Cosmos DB for Gremlin, PuppyGraph, Kuzu, Ultipa, FalkorDB, Aerospike Graph, Tarantool Graph DB, TuGraph, AgensGraph, Fluree, RedisGraph, CozoDB, Oracle Graph, Google Spanner Graph, Gel (formerly EdgeDB), Datomic, HyperGraphDB, AnzoGraph DB, Weaviate, Cayley, DataStax Enterprise Graph, Eclipse RDF4J, AtomicServer, HelixDB, Dydra, and more.

## What makes it different

- **One canonical dataset.** Everything — the live UI, the per-database profiles, the validation pipeline — reads from [`databases/databases.json`](databases/databases.json). There is no second copy to drift out of sync.
- **A real vector-strategy taxonomy.** Six explicit categories (`native`, `integrated`, `paired`, `sibling`, `none`, `unclear`) instead of a single boolean that hides nuance.
- **Primary-source discipline.** If a claim does not survive a trip to the official docs, it gets downgraded — not argued up.
- **Scope clarity.** Model (`rdf` / `property` / `multi` / `specialized`), maturity (`production` / `emerging` / `legacy`), and vector strategy are separate fields instead of collapsed into an arbitrary tier letter.

## Vector strategy taxonomy

| Strategy | Meaning |
|---|---|
| **Native** | Vector indexing and query are documented in the same engine |
| **Integrated** | Vector capability depends on an integrated search subsystem or connector |
| **Paired** | The documented pattern pairs the graph engine with an extension, toolkit, or sibling component |
| **Sibling** | A separate managed service or API in the same vendor platform provides vector search |
| **None** | No documented vector capability in the graph engine |
| **Unclear** | AI or semantic-search claims exist, but current public docs do not expose a clear general-purpose vector implementation |

## Catalog at a glance

<table>
<tr>
<td valign="top" width="50%">

**By model**

- **13** RDF / SPARQL-native stores
- **19** Label property graph databases
- **15** Multi-model systems with a real graph layer
- **7** Specialized graph-adjacent systems

</td>
<td valign="top" width="50%">

**By vector strategy**

- **21** Native (in-engine)
- **4** Integrated
- **5** Paired
- **2** Sibling-service
- **19** None
- **3** Unclear

</td>
</tr>
</table>

## Highlights

- [**Neo4j**](databases/neo4j/README.md) — LPG, native HNSW inside Cypher
- [**ArangoDB**](databases/arangodb/README.md) — multi-model with native vector indexes in AQL since 3.12
- [**SurrealDB**](databases/surrealdb/README.md) — multi-model with `DEFINE INDEX ... HNSW` in SurrealQL
- [**CozoDB**](databases/cozo/README.md) — Datalog + native HNSW, relational-graph-vector in one engine
- [**Oracle Graph**](databases/oracle-graph/README.md) — dual RDF + LPG inside Oracle Database 23ai with AI Vector Search
- [**Google Spanner Graph**](databases/spanner-graph/README.md) — ISO GQL with ScaNN-backed ANN
- [**Stardog**](databases/stardog/README.md) — commercial RDF with in-engine vector search
- [**Dgraph**](databases/dgraph/README.md) — native `float32vector` and HNSW indexes in DQL

Full list in [`databases/databases.json`](databases/databases.json) and the [live catalog](https://potusaiteja.github.io/GraphDatabases/).

## Quick start

```bash
git clone https://github.com/POTUSAITEJA/GraphDatabases.git
cd GraphDatabases
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Everyday commands

```bash
npm run dev        # start the local dev server
npm run validate   # validate the catalog and required docs
npm run lint       # lint source and scripts
npm run build      # validate + build the static site
npm run preview    # preview the built site
npm run check      # validate + lint + build
```

## Tech stack

| Layer | Choice |
|---|---|
| Data | A single `databases/databases.json` with a JSON-schema-style validator |
| UI | React 18 + Vite, single self-contained `src/App.jsx` |
| Typography | IBM Plex Sans + Instrument Serif + JetBrains Mono |
| Hosting | Static build, deploys to GitHub Pages via Actions |
| Validation | Node script (`scripts/validate-data.mjs`) enforcing required fields, enums, HTTPS URLs, and profile README presence |

## Repository layout

```text
databases/
  databases.json          Canonical dataset (single source of truth)
  <id>/README.md          Per-database profile and primary-source notes
src/
  App.jsx                 Single-file React UI
  main.jsx                React entry point
scripts/
  validate-data.mjs       Catalog validator
.github/
  workflows/              Validation + Pages deploy
  ISSUE_TEMPLATE/         Correction and new-database templates
index.html                HTML shell with fonts and base styles
```

## Contributing

**All contributions are welcome.** Whether you're a database maintainer correcting an overstated claim, an engineer who evaluated one of these systems in production, or someone who noticed a database missing entirely — please open an issue or a pull request.

### What counts as a good contribution

<table>
<tr>
<td valign="top" width="50%">

**Additions**

- A graph database that belongs in scope but isn't listed
- A new primary-source URL for an existing entry
- A missing query interface or deployment option

</td>
<td valign="top" width="50%">

**Corrections**

- A vector-strategy label that no longer matches current docs
- An overstated claim without primary-source backing
- A status update (`emerging` → `production`, new version, etc.)

</td>
</tr>
</table>

### How to contribute

1. **Open an issue first** for anything larger than a typo — it lets us agree on scope before you spend time. Use the [correction](.github/ISSUE_TEMPLATE/correction.md) or [new database](.github/ISSUE_TEMPLATE/new-database.md) template.
2. **Fork and branch** from `main`.
3. **Edit the data:**
   - Update the row in [`databases/databases.json`](databases/databases.json)
   - Add or update the profile at `databases/<id>/README.md`
4. **Verify locally:**
   ```bash
   npm run check
   ```
   (This runs validate + lint + build — all three must pass.)
5. **Open a pull request.** Describe what changed, why the previous state was incomplete or wrong, and link the primary sources that back the correction.

### Source requirements

Primary sources only, wherever possible:

**Accepted:** official documentation, official product pages, official release notes, official source repositories.

**Not accepted:** marketing blogs without technical detail, third-party reviews.

If the public docs are not strong enough for a firm claim, **downgrade the claim** rather than inflating it. The catalog earns its usefulness by being conservative where the evidence is thin.

### Adding a new database

A new entry must include:

| Field | Required |
|---|---|
| `id` | Lowercase, dash-separated slug (used as directory name) |
| `name` | Display name |
| `model` | `rdf` / `property` / `multi` / `specialized` |
| `status` | `production` / `emerging` / `legacy` |
| `license` + `license_type` | Human label + taxonomy value |
| `website` | HTTPS URL |
| `query_interfaces` | Non-empty array |
| `vector_strategy` + `vector_summary` | Taxonomy value + one-sentence justification |
| `ha`, `deployment`, `best_fit`, `notes` | Short factual strings |
| `source_urls` | At least one HTTPS primary-source URL |
| `profile` | Path to `databases/<id>/README.md` (must exist) |

The validator enforces all of the above. See any existing entry in [`databases/databases.json`](databases/databases.json) for the exact shape.

### Reporting inaccuracies

If you work on, maintain, or have production experience with one of the listed systems and something looks wrong, please file an issue — we'd rather correct an overstated or outdated entry than leave it in place.

## Related documents

- [CONTRIBUTING.md](CONTRIBUTING.md) — short-form contribution guide
- [DISCLAIMER.md](DISCLAIMER.md) — scope, limits, and intent

## License

Released under the [MIT License](LICENSE). The underlying facts about each product belong to the respective vendors and projects.

## Acknowledgements

Thanks to the maintainers of every database in the catalog — and to anyone who has ever filed a correction issue on a technical reference like this one. Independent, primary-source catalogs only stay useful when people who know the systems best take the time to push back.

---

<div align="center">
<sub>Built as a primary-source reference, not a leaderboard. If something is wrong, <a href="https://github.com/POTUSAITEJA/GraphDatabases/issues/new/choose">tell us</a>.</sub>
</div>
