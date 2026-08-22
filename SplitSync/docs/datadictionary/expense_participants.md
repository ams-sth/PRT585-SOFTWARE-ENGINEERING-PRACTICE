# ExpenseParticipants

Which group members owe a share of a given expense. Populated for all split types, including Equal.

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| ExpenseID | uuid | No | PK, FK → Expenses.ID | |
| UserID | uuid | No | PK, FK → Users.ID | |

## Business rules

- For `SplitType = Equal`, per-member amounts are computed at read time from `Amount` and participant count, not stored. The payer absorbing a rounding remainder is a pure function of `Amount`, `PayerID`, and participant count.
