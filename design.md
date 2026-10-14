# Software Design Specification - Personal Budget App

## Data Models

```javascript
// Expense Item Object
{
  id: "exp_1729000000000",
  title: "Groceries at Prisma",
  amount: 48.50,
  category: "Food", // Housing, Food, Transport, Utilities, Entertainment, Health
  date: "2026-10-14",
  note: "Weekly groceries and milk"
}
```

## Supported Categories & Visual Tokens
| Category | Accent Color | Description |
|---|---|---|
| `Housing` | `#3b82f6` (Blue) | Rent, mortgage, condo fees |
| `Food` | `#10b981` (Emerald) | Groceries, restaurants, coffee |
| `Transport` | `#f59e0b` (Amber) | HSL public transit, bus, gas |
| `Utilities` | `#8b5cf6` (Purple) | Electricity, internet, phone |
| `Entertainment`| `#ec4899` (Pink) | Movies, gym, hobbies, travel |
| `Health` | `#06b6d4` (Cyan) | Pharmacy, doctor, dental |

## Key Component Contracts
```jsx
// ExpenseForm.jsx
<ExpenseForm onAddExpense={(newExpense) => void} />

// SummaryCards.jsx
<SummaryCards totalBudget={number} totalSpent={number} remaining={number} />

// CategoryBreakdown.jsx
<CategoryBreakdown expenses={Array<Expense>} />

// ExpenseList.jsx
<ExpenseList 
  expenses={Array<Expense>} 
  onDelete={(id) => void} 
  selectedCategory={string}
  onSelectCategory={(cat) => void}
  searchQuery={string}
  onSearchChange={(q) => void}
/>
```
