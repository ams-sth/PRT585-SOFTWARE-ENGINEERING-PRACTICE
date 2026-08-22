# Cross-cutting notes (for report writing)

## Denormalized fields introduced, with justification

| Field | Table | Type | Why |
|---|---|---|---|
| NetAmount (whole table) | Balances | Cache | Avoid full-ledger recomputation on every balance read |
| NextRunDate | RecurringExpenses | Cache | Avoid recomputing "is this template due" on every scheduler tick |
| Name, Amount | Activities | Snapshot | Preserve historical state after source record deletion/edit |

**Cache vs. snapshot:** a cache mirrors current state and must be kept in sync as the source changes (e.g. `Balances`). A snapshot deliberately freezes a moment in time and must *not* be updated even when the source later changes (e.g. `Activities.Name`/`Amount`). Different failure modes, different maintenance obligations — worth distinguishing explicitly rather than treating all denormalization as one category.

## Columns/tables considered and explicitly rejected, with reasoning

| Candidate | Why rejected |
|---|---|
| RecurringExpenseID FK on Expenses | No FR reads/displays it; provenance handled via Notes instead |
| ExpenseAttachments (separate table) | SRS supports one attachment per expense, not many — 1:1, not 1:M |
| Settlements.CreatorID (separate from PayerID) | Creator is always the payer by corrected scope decision |
| Activities.TransactionID | No FR requires drill-through or grouping by source record |
| Users/GroupMembers audit timestamps | Not requested by any FR |
