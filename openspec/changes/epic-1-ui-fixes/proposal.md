## Why

We need to apply comprehensive UI refinements to the Epic 1 features (Dashboard, Partnership Management, and Formation) to perfectly align the application with the latest visual mockups. These fixes ensure data accuracy, proper layout spacing, and correct navigational linking before moving forward to Epic 2.

## What Changes

- **Dashboard**: Update the four main metric cards to track Active Partnerships, Assigned Families, Unvisited Families, and Zones. Remove the redundant "Dashboard" text from the header.
- **Partnership List**: Add overlapping avatar icons for companions, color-code zone tags, increase bottom margin above the navigation bar, and add the missing "Formación" navigation button.
- **Partnership Detail**: Redesign the checklist to show family avatars and addresses. Replace generic checklists with four specific items: *Lectura de Escrituras, Oración, Noche de Hogar, and Asistencia al Templo*. Add a family-specific notes section.
- **Formation View**: Enforce a mobile-only layout structure, deferring the complex desktop web interface to Epic 4.

## Capabilities

### New Capabilities

### Modified Capabilities
- `dashboard-summary`: Update metric data requirements and layout structure.
- `partnership-management`: Add companion avatars, zone color tags, specific 4-item checklist requirements, and family notes.
- `formation-view`: Specify mobile-only layout constraints.

## Impact

- **UI Components**: Modifications to `MetricCard`, `PartnershipList`, `PartnershipDetail`, and `FormationView`.
- **Mock Data**: Updates to `mockDashboard.ts` and partnership mock data to support avatars, addresses, and the specific 4-item checklist.
