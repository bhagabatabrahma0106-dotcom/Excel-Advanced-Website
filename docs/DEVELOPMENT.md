# Development and quality assurance

## Commands
- `npm ci`: install exact dependencies from the committed lockfile
- `npm run dev`: local Vite development server
- `npm run lint`: ESLint verification
- `npm run build`: TypeScript and Vite production bundle
- `npm run preview`: preview the compiled static site

## Architecture
`src/App.tsx` composes Sidebar, Hero, OverviewTable and seven section components. CSS is in `src/index.css` and `src/App.css`. This is a client-only educational site.

## Manual QA checklist
1. Verify the sidebar anchors take users to the correct sections.
2. Check text contrast, mobile layouts and table overflow.
3. Ensure all mockups are clearly presented as illustrations, not live Excel.
4. Check instructions against actual Excel versions and accessibility labels.
5. Verify external links and reference timestamps where applicable.
6. Run `npm ci && npm run lint && npm run build`.

## Change policy
Keep instructional edits separate from framework upgrades. Do not invent course completion, certification or usage data. There is no production deployment configuration in this repository.
