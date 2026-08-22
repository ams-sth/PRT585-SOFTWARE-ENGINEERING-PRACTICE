# GroupMembers

Associative table resolving the many-to-many relationship between Users and Groups.

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| GroupID | uuid | No | PK, FK → Groups.ID | |
| UserID | uuid | No | PK, FK → Users.ID | |

## Rejected / not modeled

- `JoinedAt` timestamp: no FR/UC requires displaying or filtering on join date.
