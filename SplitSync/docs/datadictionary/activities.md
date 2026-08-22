# Activities

Append-only log of expense/settlement create, edit, and delete events, feeding the group activity list (UC-09).

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| ID | uuid | No | PK | |
| GroupID | uuid | No | FK → Groups.ID | |
| ActorID | uuid | No | FK → Users.ID | The member who performed the action. |
| TransactionType | enum(Expense, Settlement) | No | | |
| ActionType | enum(Create, Edit, Delete) | No | | |
| OccurredAt | timestamp | No | | System generated at event time. |
| OtherPartyID | uuid | Yes | FK → Users.ID | Populated for Settlement events only, holding recipient's ID. |
| Name | varchar | Yes | | **Snapshot.** Populated for Expense events only, captured from the source record at event time. |
| Amount | decimal(10,2) | No | | **Snapshot.** Captured at event time from the source record. |
| TransactionID | uuid | No | | Logical reference to the source Expenses.ID or Settlements.ID (per TransactionType). NOT a DB-enforced FK. |

## Business rules

- `Amount` reflects the full transaction amount, not the viewing member's individual share of a split expense. A member with only a $12 share of a $45 dinner will see the event logged as $45.
- `TransactionID` is not enforced as an FK to avoid cascade deletion issue.