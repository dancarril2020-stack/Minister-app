## Context

The Ministering Web App has been scaffolded with React, Vite, and Tailwind CSS. The foundational base (Epic 1) needs to introduce the top and bottom navigation bars, the general summary dashboard, and partnership management views. 

## Goals / Non-Goals

**Goals:**
- Implement the primary routing structure for the PWA.
- Create reusable Tailwind CSS components for glassmorphism cards, lists, and the bottom navigation.
- Use mock data for the dashboard metrics and partnerships to allow UI development independently of the backend.

**Non-Goals:**
- Connecting to the Azure Functions backend or Cosmos DB (this is part of Epic 2).
- Implementing actual JWT Authentication flows (Epic 3).

## Decisions

- **Routing:** Use `react-router-dom` for client-side routing to manage the Navigation states (Dashboard, Formation, Map, Menu).
- **State Management:** For Epic 1, React local state (`useState`, `useContext`) will be sufficient since we are dealing with mock data and UI states.
- **Icons:** Use `lucide-react` for consistent, lightweight, and customizable SVG icons across the navigation and dashboards.

## Risks / Trade-offs

- **Risk:** Building UI without backend integration might require rework later when actual data schemas are defined.
  - **Mitigation:** Define clear TypeScript interfaces for the mock data that align with the expected CosmosDB document schema.
