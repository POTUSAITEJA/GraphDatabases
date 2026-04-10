# Contributing

## Ground rules

This repository is meant to stay useful under scrutiny. Contributions should improve accuracy, scope clarity, or benchmark usefulness.

## Canonical source

All active catalog data lives in:

- [`databases/databases.json`](databases/databases.json)

Supporting narrative lives in:

- `databases/<id>/README.md`

Do not add a second copy of the benchmark catalog in the UI.

## What counts as a good change

- adding a missing in-scope graph system
- correcting a model or vector classification
- tightening an overstated claim
- improving benchmark methodology or hosting reliability

## Source requirements

Use primary sources wherever possible:

- official documentation
- official product pages
- official release notes
- official source repositories

If the public docs are not strong enough for a firm claim:

- downgrade the claim
- mark the row as `unclear`
- explain the caveat in `notes`

## Edit flow

1. Update the row in `databases/databases.json`.
2. Add or update `databases/<id>/README.md`.
3. Run `npm run validate`.
4. Run `npm run lint`.
5. Run `npm run build`.

## Scope guidance

Keep the active benchmark focused on graph systems that matter for production evaluation:

- RDF stores
- property graph databases
- multi-model graph platforms
- specialized graph-adjacent engines that are commonly evaluated alongside graph databases

Avoid inflating scope with:

- pure graph compute frameworks
- orchestration-only tools
- vague AI wrappers with no database core

## Writing guidance

- prefer precise language over broad praise
- distinguish `native` from `integrated`, `paired`, `sibling`, and `unclear`
- avoid ranking language unless it is backed by reproducible public evidence
- note whether a feature is community-wide or enterprise-only

## Pull requests

A strong PR includes:

- what changed
- why the old version was incomplete or wrong
- which official sources support the correction
