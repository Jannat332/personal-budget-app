import React from 'react';

export default function SummaryCards({ monthlyBudget, totalSpent }) {
  const remaining = monthlyBudget - totalSpent;
  const isOverBudget = remaining < 0;

  return (
    <section className="summary-grid" aria-label="Financial Summary">
      <div className="card">
        <div className="card-title">Monthly Budget</div>
        <div className="card-value blue">€{monthlyBudget.toFixed(2)}</div>
      </div>
      <div className="card">
        <div className="card-title">Total Spent</div>
        <div className="card-value">€{totalSpent.toFixed(2)}</div>
      </div>
      <div className="card">
        <div className="card-title">Remaining Balance</div>
        <div className={`card-value ${isOverBudget ? 'rose' : 'green'}`}>
          €{remaining.toFixed(2)}
        </div>
      </div>
    </section>
  );
}
