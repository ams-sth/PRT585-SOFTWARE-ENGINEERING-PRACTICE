# Groups

A spending group.

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| ID | uuid | No | PK | |
| Name | varchar | No | | User-provided group name. |
| CreatorID | uuid | No | FK → Users.ID | The member who created the group. |

## Business rules

- Any authenticated user may create a group (no separate role/permission entity — single user class, RBAC enforced at the implementation layer via `CreatorID` comparison).
- Group deletion removes all associated data regardless of unpaid balances.
