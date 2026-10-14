# Project Workflow & Requirements (PWD) - Personal Budget App

## 1. Problem Statement
Managing personal finances across multiple bank accounts and cash purchases can lead to unintentional overspending. A clean, zero-friction web application allows users to record daily expenses in under 5 seconds, visualize category distribution, and maintain control of their monthly budget.

## 2. Functional Requirements
- **FR-1 Record Expense**: Form capturing Title, Amount (€), Category (Housing, Food, Transport, Utilities, Entertainment, Health), Date, and optional note.
- **FR-2 Real-Time Summary**: Display Total Monthly Budget, Total Spent, and Remaining Balance with dynamic color warning (Green -> Yellow -> Red if over budget).
- **FR-3 Category Breakdown**: Visual percentage progress bars showing where money is allocated.
- **FR-4 Filter & Search**: Instant text filtering by expense title and dropdown category selection.
- **FR-5 Local Persistence**: Automatically saves to browser `localStorage` so data survives page refreshes.
- **FR-6 Delete & Clear**: Remove individual entries or clear all data with confirmation.

## 3. Non-Functional Requirements
- **Mobile Responsive**: Fully usable on mobile viewports (375px) through desktop (1920px).
- **Performance**: Instant UI interactions with zero perceptible lag (< 16ms render loop).
- **No External State Monoliths**: Pure React hooks (`useState`, `useEffect`, `useMemo`). No heavy Redux or MobX overhead needed for this scope (KISS principle).
