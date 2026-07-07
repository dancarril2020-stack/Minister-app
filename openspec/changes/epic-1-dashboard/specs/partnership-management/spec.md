## ADDED Requirements

### Requirement: Partnership Board Listing
The system SHALL display a list of all ministering partnerships with their current progress percentages.

#### Scenario: Filtering by zone
- **WHEN** user selects a specific geographic zone from the filter
- **THEN** the list updates to show only partnerships within that zone

### Requirement: Interactive Checklist
The system SHALL provide a detailed view for each partnership containing an interactive checklist.

#### Scenario: Toggling a checklist item
- **WHEN** user clicks a checklist item
- **THEN** the item state toggles between completed and pending, updating the overall progress

### Requirement: Partnership Notes
The system SHALL provide a text area in the detailed view for administrators to add and view notes regarding the partnership.

#### Scenario: Adding a note
- **WHEN** user types into the notes section and saves
- **THEN** the system displays the updated notes for that specific partnership
