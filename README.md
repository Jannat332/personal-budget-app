# Personal Budget & Expense Tracker (React 18)

A clean, responsive web application built with React to record daily expenses, track monthly budgets, and visualize spending categories in real time.

---

## Features
- **Real-Time Budget Tracking**: Automatically calculates total spending and remaining balance against your monthly budget.
- **Category Visualization**: Dynamic percentage progress bars broken down by category (Housing, Food, Transport, Utilities, Entertainment, Health).
- **Search & Category Filtering**: Instantly search expenses by title or filter by specific categories.
- **Browser Persistence**: Automatically persists expenses to browser `localStorage` so data is never lost on refresh.
- **Zero-Setup Quickstart**: Works right out of the box—simply double-click `index.html` in any browser, or run via standard Vite toolchain!

---

## Project Structure
```
03-personal-budget-app/
├── index.html                   # Standalone, runnable HTML with React 18
├── src/
│   ├── App.jsx                  # Root state management & layout
│   ├── styles.css               # Clean dark-mode stylesheet & grid layout
│   └── components/
│       ├── SummaryCards.jsx     # Budget, Spent, and Remaining balance cards
│       ├── ExpenseForm.jsx      # Input form with validation
│       ├── CategoryBreakdown.jsx# Category percentage progress bars
│       └── ExpenseList.jsx      # Filterable history table with delete actions
├── package.json                 # Optional Vite / npm configuration
├── arch.md                      # System architecture & component tree
├── pwd.md                       # Product requirements & workflows
├── design.md                    # Data structures & component specifications
├── memory.md                    # Key architectural decisions & rationale
├── rules.md                     # Engineering standards & React guidelines
└── bug-report.md                # Testing logs & resolved edge cases
```

---

## Quickstart

### Method 1: Instant Browser Execution (Zero Install)
Simply open `index.html` directly in Google Chrome, Brave, Firefox, or Edge. No `node` or `npm` installation required!

### Method 2: Standard Vite Dev Server
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

---

## License
MIT License.
