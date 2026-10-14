# Testing & Bug Report - Personal Budget App

## Test Execution Summary
- **Target**: Functional React 18 UI components, event handlers, and data flows.
- **Scope**: Expense creation, deletion, search/category filtering, dynamic calculations, `localStorage` persistence.
- **Result**: All 6 Functional Requirements Verified.

## Issues Identified & Fixed During Development

### Bug #1: Corrupted `localStorage` Parsing Crash
- **Severity**: High
- **Symptom**: If a browser session had invalid JSON in `localStorage["personal_budget_expenses_v1"]`, the entire app threw an uncaught `SyntaxError` and rendered a blank screen.
- **Root Cause**: Direct `JSON.parse(localStorage.getItem(STORAGE_KEY))` without error handling.
- **Fix**: Wrapped the state initialization and setter functions in a `try/catch` block with seamless fallback to `INITIAL_EXPENSES`.

### Bug #2: Divide-by-Zero in Category Percentage Calculation
- **Severity**: Medium
- **Symptom**: Deleting all expenses caused the category progress calculation to evaluate `spent / total` where `total = 0`, producing `NaN%` and breaking CSS width rendering.
- **Fix**: Added safe guard: `const percentage = total > 0 ? (spent / total) * 100 : 0;`.

### Bug #3: Negative and Zero Amount Form Submissions
- **Severity**: Low
- **Symptom**: Submitting `-50` artificially inflated the remaining balance like an income deposit.
- **Fix**: Added HTML5 `min="0.01"` and validation guard `if (isNaN(parsedAmount) || parsedAmount <= 0) alert(...)` to block invalid amounts.

### Bug #4: Case-Sensitive Title Search
- **Severity**: Low
- **Symptom**: Searching "groceries" missed "K-Citymarket Groceries".
- **Fix**: Standardized search string comparison using `.toLowerCase()`.
