## 1. Dashboard (Resumen General) Fixes
- [x] 1.1 Update mockDashboard.ts to replace the 4 old metrics with the new data structure (Active Partnerships, Assigned Families, Unvisited Families, and Zones) and verify mock data logs correctly.
- [x] 1.2 Update MetricCard to correctly render the new data structure while preserving the progress bar and trend icons. Verify UI visually matches the mockup.
- [x] 1.3 Remove the word "Dashboard" from the top navigation header and verify it reads correctly on the main screen.
- [x] 1.4 Update UrgentAttentionList to replace the left attention icon with a family photo avatar (or name initials) and verify layout.
- [x] 1.5 Increase the bottom padding/margin (pb-24) on the Dashboard container/list to prevent the floating menu from hiding the last card.

## 2. Partnership List (Tablero de Compañerismos) Fixes
- [ ] 2.1 Update partnership mock data to include companion avatars/initials and verify the object structure.
- [ ] 2.2 Update PartnershipList view to render the overlapping avatars and remove the word "Management" from the header. Verify visually.
- [ ] 2.3 Add Tailwind color mapping to the Zone tags (e.g., bg-blue-100 for Norte, bg-green-100 for Sur) and verify color rendering.
- [ ] 2.4 Add the missing "Formación" navigation button alongside the existing floating action elements and verify it routes correctly.
- [ ] 2.5 Increase the bottom padding/margin (pb-24) on the list container to prevent the floating menu from hiding the last card. Verify scroll bounds.

## 3. Partnership Detail Checklist Fixes
- [ ] 3.1 Update the mock data checklist array for families to use the specific 4 boolean items (Lectura de Escrituras, Oración, Noche de Hogar, Asistencia al Templo).
- [ ] 3.2 Update PartnershipDetail to display the family avatar, name, and address at the top. Verify layout.
- [ ] 3.3 Update PartnershipDetail to render the 4 specific checklist items and the family notes section. Verify checklist interaction.
- [ ] 3.4 Add extra bottom margin above the sticky "Save" button. Verify spacing visually.

## 4. Formation View Fixes
- [ ] 4.1 Update FormationView component to enforce a mobile-only layout container. Verify it renders cleanly on mobile viewports.
