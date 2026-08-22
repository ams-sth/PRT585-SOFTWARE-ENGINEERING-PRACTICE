# ExpenseSplitValues

Per-member split values, only populated when the split requires an explicit value.

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| ExpenseID | uuid | No | PK, FK → Expenses.ID | |
| UserID | uuid | No | PK, FK → Users.ID | |
| Value | decimal(10,2) | No | | Interpreted per `Expenses.SplitType`: an amount owed when `Unequal`, a percentage when `Percentage` |

## Business rules

- A single generic `Value` column (NOT separate `Amount`/`Percentage` columns) was chosen for consistency with the `SplitType` discriminator pattern used elsewhere, and to avoid a nullable-column pair where only one is ever populated.
- Never used/inserted for `Equal` SplitType.
