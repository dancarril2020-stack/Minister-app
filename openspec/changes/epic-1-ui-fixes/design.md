## Context
We are refining the UI components built in Epic 1 to match the final mockups exactly (as specified in proposal.md). The changes are mostly presentation, hardcoded mock data structural changes, and CSS styling tweaks.

## Goals / Non-Goals
**Goals:**
- Perfectly match the dashboard metric cards to the UI spec.
- Enhance the Partnership List with avatars, tag colors, and correct margins.
- Refactor the Partnership Detail checklist into the exact 4-item structure.

**Non-Goals:**
- Do not implement the interactive drag-and-drop Leaflet map for the Formation view (that is reserved for Epic 4).

## Decisions
- **Avatars**: We will use a standard avatar overlap technique (negative margin) for the companion pairs in the PartnershipList.
- **Zone Colors**: We will map zone names to distinct Tailwind background colors (e.g., bg-blue-100 for Norte, bg-green-100 for Sur).
- **Checklist Structure**: We will update the mockDashboard.ts (or relevant mock data) to include the new 4 specific boolean items for each family, and update PartnershipDetail to render them explicitly.

## Risks / Trade-offs
- **Risk**: Touching the bottom margin on PartnershipList might cause scrolling issues on very small screens. -> **Mitigation**: Add a fixed padding-bottom to the main list container (e.g., pb-24) to ensure the floating pill nav never covers content.
