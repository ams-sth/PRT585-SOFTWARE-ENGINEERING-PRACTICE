# RecurringExpenses

A template used to periodically generate `Expenses` rows.

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| ID | uuid | No | PK | |
| GroupID | uuid | No | FK → Groups.ID | |
| PayerID | uuid | No | FK → Users.ID | |
| Name | varchar | No | | |
| Notes | text | Yes | | |
| Amount | decimal(10,2) | No | | |
| SplitType | enum(Equal, Unequal, Percentage) | No | | |
| OccurrenceType | enum(Weekly, Monthly, Interval) | No | | |
| OccurrenceValue | int | No | | Interpreted per `OccurrenceType`: day-of-week (Weekly), day-of-month (Monthly), or interval in days. |
| StartDate | date | No | | Defaults to current date. |
| EndDate | date | Yes | | Null value for no end date. |
| NextRunDate | date | No | | **Derived/cache.** The next date the scheduler should generate an expense from this template. |

## Business rules

- `NextRunDate` is denormalized scheduling state, updated by the recurrence worker in the same transaction as expense generation. Colocated on this table, same justification pattern as `Balances`.

## Rejected / not modeled

- A separate run-history/job-log table — each generated `Expenses` row already constitutes the history; no additional table needed.
