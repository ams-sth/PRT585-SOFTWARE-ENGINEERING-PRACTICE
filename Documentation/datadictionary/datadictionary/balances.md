# Balances

Materialized net balance between each pair of members within a group.

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| GroupID | uuid | No | PK, FK → Groups.ID | |
| UserLowID | uuid | No | PK, FK → Users.ID | The member with the lower `ID` value in the pair (canonical ordering). |
| UserHighID | uuid | No | PK, FK → Users.ID | The member with the higher `ID` value in the pair. |
| NetAmount | decimal(10,2) | No | | Signed. Positive = `UserHighID` owes `UserLowID`; negative = the reverse; zero = settled. |

## Business rules

- **Derived/cache data**, computed from `Expenses` + `ExpenseSplitValues` + `Settlements`. Introduced to avoid full-ledger recalculation on every balance read as transaction volume grows.
- Canonical ordering (`UserLowID < UserHighID`, enforced at the application layer whenever a row is written) to guarantee exactly one row per pair per group.
- Maintained via **atomic delta update** (`NetAmount = NetAmount + @delta`, e.g. SQL `ON CONFLICT ... DO UPDATE` or EF Core `ExecuteUpdateAsync`), to avoid lost-update races under concurrent writes. Always updated within the same DB transaction as the source `Expenses`/`Settlements` write.