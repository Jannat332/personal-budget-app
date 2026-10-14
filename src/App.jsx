import React, { useState, useEffect } from 'react';
import SummaryCards from './components/SummaryCards';
import ExpenseForm from './components/ExpenseForm';
import CategoryBreakdown from './components/CategoryBreakdown';
import ExpenseList from './components/ExpenseList';

const STORAGE_KEY = 'personal_budget_expenses_v1';

const INITIAL_EXPENSES = [
  { id: 'exp_1', title: 'Apartment Rent (Espoo)', amount: 680.00, category: 'Housing', date: '2026-10-01' },
  { id: 'exp_2', title: 'HSL Monthly Transit Pass', amount: 65.30, category: 'Transport', date: '2026-10-03' },
  { id: 'exp_3', title: 'K-Citymarket Groceries', amount: 84.20, category: 'Food', date: '2026-10-08' },
  { id: 'exp_4', title: 'Elisa Home Broadband', amount: 29.90, category: 'Utilities', date: '2026-10-10' }
];

export default function App() {
  const [monthlyBudget, setMonthlyBudget] = useState(1200.00);
  const [expenses, setExpenses] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_EXPENSES;
    } catch {
      return INITIAL_EXPENSES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (err) {
      console.warn('Could not persist to localStorage:', err);
    }
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container">
      <header>
        <h1>Personal Budget & Expense Tracker</h1>
        <p>Monitor your monthly spending, track categories, and stay on budget.</p>
      </header>

      <SummaryCards monthlyBudget={monthlyBudget} totalSpent={totalSpent} />

      <main className="layout-grid">
        <aside>
          <ExpenseForm onAddExpense={handleAddExpense} />
          <CategoryBreakdown expenses={expenses} />
        </aside>

        <section>
          <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        </section>
      </main>
    </div>
  );
}
