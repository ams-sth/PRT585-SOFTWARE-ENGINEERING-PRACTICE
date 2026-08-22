# Settlements

A manually recorded record of a payment made to settle part of a balance between two members. Does not process actual payment.

| Column | Type | Null? | Key | Description |
|---|---|---|---|---|
| ID | uuid | No | PK | |
| GroupID | uuid | No | FK → Groups.ID | |
| PayerID | uuid | No | FK → Users.ID | Member who is payer and creator of the record. |
| RecipientID | uuid | No | FK → Users.ID | The member who received payment. Must differ from `PayerID`. |
| Amount | decimal(10,2) | No | | Must be greater than zero. |
| SettlementDate | date | No | | |

## Business rules

- The creator of a settlement is always its payer.

## Rejected

- Separate `CreatorID`, same information as `PayerID`