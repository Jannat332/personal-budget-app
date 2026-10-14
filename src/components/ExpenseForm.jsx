import React, { useState } from 'react';

export const CATEGORIES = [
  { name: 'Housing', color: '#3b82f6' },
  { name: 'Food', color: '#10b981' },
  { name: 'Transport', color: '#f59e0b' },
  { name: 'Utilities', color: '#8b5cf6' },
  { name: 'Entertainment', color: '#ec4899' },
  { name: 'Health', color: '#06b6d4' }
];

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!title.trim() || isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid title and positive amount.');
      return;
    }

    onAddExpense({
      id: 'exp_' + Date.now(),
      title: title.trim(),
      amount: parsedAmount,
      category,
      date
    });

    setTitle('');
    setAmount('');
  };

  return (
    <div className="card">
      <div className="card-title" style={{ marginBottom: '14px' }}>Add New Expense</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Expense Title</label>
          <input
            id="title"
            className="form-input"
            type="text"
            placeholder="e.g. S-Market Groceries"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount (€)</label>
          <input
            id="amount"
            className="form-input"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            className="form-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-primary">Record Expense</button>
      </form>
    </div>
  );
}
