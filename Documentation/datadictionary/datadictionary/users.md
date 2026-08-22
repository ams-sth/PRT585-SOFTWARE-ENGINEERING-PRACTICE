# Users

Represents an individual account holder. Authentication is delegated to a third-party IdP (Kinde); this table stores only what the application needs locally.

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| ID | uuid | No | PK | |
| IdPSubjectID | varchar | No | Unique | Identifier returned by the IdP at authentication. |
| Name | varchar | No | | Sourced from IdP API. |
| Email | varchar | No | | Sourced from IdP API. |
| IsDeleted | boolean | No | | Marks the account as deleted. |
| NotificationsEnabled | boolean | No | | Global on/off toggle for daily unpaid-balance email reminders. |

## Business rules

- Account deletion: `Name`/`Email` are overwritten (not nulled) with a placeholder such as "Deleted User".
