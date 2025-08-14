# Transactions and Concurrency

## Transactions

- ACID Properties of Transactions
    - Atomicity
    - Consistency
    - Isolation
    - Durability

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

- Lost Updates
- Dirty Reads
- Non-repeating Reads
- Phantom Reads

## Isolation Levels

- Read Committed
- Repeatable Read
- Serializable

## Read Uncommitted

```sql

USE sql_store;

SET TRANSACTION ISOLATION LAVEL READ UNCOMMITTED;

SELECT points FROM customers WHERE customer_id = 1;
```

```sql
USE sql_store;

START TRANSACTION;

UPDATE customers
SET points = points + 20
WHERE customer_id =  1;

COMMIT;
```

## Read Committed

```

USE sql_store;

SET TRANSACTION ISOLATION LAVEL READ COMMITTED;

SELECT points FROM customers WHERE customer_id = 1;
```

```sql
USE sql_store;

START TRANSACTION;

UPDATE customers
SET points = points + 20
WHERE customer_id =  1;

COMMIT;
```

## Repeatable Read (Default in MySQL)

```sql
USE sql_store;

SET TRANSACTION ISOLATION LAVEL REPEATABLE READ;

SELECT points FROM customers WHERE customer_id = 1;
```

```sql
USE sql_store;

START TRANSACTION;

UPDATE customers
SET points = points + 20
WHERE customer_id =  1;

COMMIT;
```
