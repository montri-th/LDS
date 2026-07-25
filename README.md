# Landometer Design System v0.8.7 — Adoption Preview

This repository publishes the completed static version of the Claude Design artifact reviewed on 25 July 2026.

## Retained from Claude

- strong editorial hierarchy and generous composition;
- one commanding cultural invitation;
- role-based, copyable Build Card recipes;
- visible Baseline / Assisted comparisons;
- concise progressive disclosure;
- a clear cross-team handoff story.

## Completed from Landometer project context

- the approved public horizontal logo replaces the identity placeholder;
- an approved Landometer team photograph replaces the empty image slot;
- the role workbench covers Marketing, Product, Design, Engineering, Data / Evidence, and QA;
- the unsupported `2.4×` flood claim is removed;
- the CityMETER comparison is explicitly labelled `synthetic fixture · modelled · source_limited`;
- shared Landometer methodology and product-specific evidence/capability are separated;
- cross-city or cross-product comparison is allowed only under compatible schema, release, boundary, time, unit, and method;
- the Claude Canvas runtime and inline-style mass are replaced with semantic HTML, modular CSS, and vanilla JavaScript.

## Evidence boundary

The CityMETER specimen is a synthetic teaching fixture. It is not a current result and does not represent a real city, customer, property, or site. It cannot support a real decision.

The team photograph supports identity and culture; it is not product-outcome evidence.

## Public assets

The page references exact existing public assets in `montri-th/Landometer` rather than duplicating protected binaries:

- `deployment/assets/images/landometer-logo-banner.png`
- `deployment/assets/images/team-hero.jpg`
- the six v0.8.7 font faces under `deployment/assets/fonts/`

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Release boundary

- public, source-limited, noindex;
- no analytics, account, business-object save, share, or external effect;
- theme/language preferences and active role are local interface state;
- full artifact-level v0.8.7 conformance remains subject to owner/manual gates recorded in `qa/browser-smoke.json`.
