# System Architecture - Personal Budget App

## Overview
`personal-budget-app` is a responsive, client-side single page application built with React 18. It manages personal income and expenses with real-time category aggregation, monthly filtering, dynamic spending breakdown, and browser `localStorage` persistence.

## Component Hierarchy

```
 +-----------------------------------------------------------+
 |                          App.jsx                          |
 |            (Global State: expenses, filter, month)        |
 +-----------------------------------------------------------+
          |                      |                   |
          v                      v                   v
 +------------------+   +------------------+  +-------------+
 |   SummaryCards   |   |   ExpenseForm    |  | CategoryBar |
 | Total / Spent /  |   | Amount, Category |  | Visual % of |
 | Remaining Budget |   | Date, Notes      |  | Category    |
 +------------------+   +------------------+  +-------------+
                                 |
                                 v
                        +------------------+
                        |   ExpenseList    |
                        | Filterable Table |
                        | Delete / Search  |
                        +------------------+
```

## State Architecture
1. **Unidirectional Data Flow**: State is centralized in `App.jsx` and passed down as explicit props.
2. **Local Persistence**: State automatically synchronizes to `localStorage["personal_budget_expenses_v1"]` on every mutation.
3. **Derived Metrics**: Total spending, remaining budget, and category percentages are computed dynamically using standard JavaScript array reducers (`useMemo` pattern) without redundant state flags.
