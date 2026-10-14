# Engineering Rules & Guidelines - Personal Budget App

## 1. Principles
- **KISS**: Favor declarative functional components and built-in array operators (`map`, `filter`, `reduce`) over external utility libraries.
- **DRY**: Color mapping and category definitions reside in a single configuration dictionary (`CATEGORIES`), reused across form inputs, table tags, and progress bars.

## 2. React Best Practices
- Never mutate state directly (always use setter functions with immutable copies: `[...prev, newItem]`).
- Controlled form components with explicit validation (prevent negative or zero amounts).
- Accessible HTML semantics (`<main>`, `<header>`, `<section>`, `<form>`, `<label>`, `<button>`).
- Responsive design via CSS Grid and Flexbox with zero hardcoded pixel widths on parent containers.
