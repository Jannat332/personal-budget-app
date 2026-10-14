# Memory & Decision Log - Personal Budget App

## Context & Key Decisions
- **Decision 1: Direct Component Architecture over Heavy State Management**
  - *Rationale*: A personal budget app does not require Redux Toolkit or Zustand. State lifting to `App.jsx` with standard hooks keeps code clean, readable, and instant to audit during an interview.
- **Decision 2: Dual-Mode Deployment (Direct Browser + Vite Compatible)**
  - *Rationale*: To allow anyone evaluating the repository to either launch it with `npm run dev` OR double-click `index.html` directly in any web browser without needing `npm install`, we provided a self-contained browser runner alongside the modular React source files.
- **Decision 3: ISO Date Strings for Deterministic Sorting**
  - *Rationale*: Storing dates in `YYYY-MM-DD` guarantees native lexical string comparisons (`a.date > b.date`) without needing heavy date libraries like `moment.js` or `date-fns`.
