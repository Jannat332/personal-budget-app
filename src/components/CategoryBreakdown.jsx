import React from 'react';
import { CATEGORIES } from './ExpenseForm';

export default function CategoryBreakdown({ expenses }) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  const categoryTotals = CATEGORIES.map((cat) => {
    const spent = expenses
      .filter((e) => e.category === cat.name)
      .reduce((sum, item) => sum + item.amount, 0);
    const percentage = total > 0 ? (spent / total) * 100 : 0;
    return { ...cat, spent, percentage };
  }).filter((c) => c.spent > 0);

  return (
    <div className="card" style={{ marginTop: '20px' }}>
      <div className="card-title" style={{ marginBottom: '14px' }}>Spending by Category</div>
      {categoryTotals.length === 0 ? (
        <p className="empty-state" style={{ padding: '16px 0' }}>No categorized spending yet.</p>
      ) : (
        categoryTotals.map((cat) => (
          <div key={cat.name} className="progress-item">
            <div className="progress-header">
              <span>{cat.name}</span>
              <span style={{ color: '#cbd5e1' }}>€{cat.spent.toFixed(2)} ({cat.percentage.toFixed(0)}%)</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${cat.percentage}%`,
                  backgroundColor: cat.color
                }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
