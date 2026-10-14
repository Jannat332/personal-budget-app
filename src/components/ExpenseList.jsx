import React, { useState } from 'react';
import { CATEGORIES } from './ExpenseForm';

export default function ExpenseList({ expenses, onDeleteExpense }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredExpenses = expenses.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (catName) => {
    const found = CATEGORIES.find((c) => c.name === catName);
    return found ? found.color : '#94a3b8';
  };

  return (
    <div className="card">
      <div className="card-title" style={{ marginBottom: '16px' }}>Expense History</div>

      <div className="controls-bar">
        <input
          type="text"
          className="form-input"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select"
          style={{ width: 'auto', minWidth: '150px' }}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="ALL">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      {filteredExpenses.length === 0 ? (
        <div className="empty-state">
          {expenses.length === 0
            ? 'No expenses recorded. Use the form to add your first expense!'
            : 'No expenses matching your search filter.'}
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="expense-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th style={{ textAlign: 'right' }}>Amount</th>
                <th style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((exp) => (
                <tr key={exp.id}>
                  <td style={{ color: '#94a3b8', whiteSpace: 'nowrap' }}>{exp.date}</td>
                  <td style={{ fontWeight: 600 }}>{exp.title}</td>
                  <td>
                    <span
                      className="badge"
                      style={{
                        backgroundColor: `${getCategoryColor(exp.category)}22`,
                        color: getCategoryColor(exp.category)
                      }}
                    >
                      {exp.category}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>
                    €{exp.amount.toFixed(2)}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      className="btn-delete"
                      onClick={() => onDeleteExpense(exp.id)}
                      title="Delete expense"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
