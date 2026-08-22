# RecurringExpenseParticipants / RecurringExpenseSplitValues

Same shape and purpose as `ExpenseParticipants` / `ExpenseSplitValues`, scoped to the template rather than a generated instance.

| Table | Columns |
|---|---|
| RecurringExpenseParticipants | RecurringExpenseID (PK, FK), UserID (PK, FK) |
| RecurringExpenseSplitValues | RecurringExpenseID (PK, FK), UserID (PK, FK), Value decimal(10,2) |
