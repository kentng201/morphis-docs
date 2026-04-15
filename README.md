# @morphis/docs

Official Morphis documentation site built with Nextra.

## Development

1. Install dependencies:

   bun install

2. Start the dev server:

   bun run dev

3. Open http://localhost:3000

## Search

The docs search uses Nextra's Pagefind integration.

- `bun run build` now generates the search index into `public/_pagefind` during `postbuild`.
- built docs search works after `bun run build && bun run start`.
- local dev can use the last generated index, so run `bun run build` once after docs content changes if search results look stale while using `bun run dev`.
