# Transactions and Concurrency

## Transactions

- ACID Properties
    -  Atomicity
    -  Consistency
    -  Isolation
    -  Durability

```sql
use sql_store;

START TRANSACTION;

INSERT INTO orders(customer_id, order_date, status)
VALUES (1, '2019-01-01', 1);

INSERT INTO order_items
VALUES (LAST_INSERT_ID(), 1, 1, 1);

COMMIT;
```

```sql
ROLLBACK; -- to manullay rollback transaction 
```

```sql
SHOW VARIABLES LIKE 'autocommit'; -- auto commint on insert, update, delete operations
```

## Concurrency problems

- Loast Updates
- Dirty Reads
- Non-repeating Reads
- Phantom Reads

