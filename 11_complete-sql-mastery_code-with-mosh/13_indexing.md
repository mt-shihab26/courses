# Indexing

- Design indexes based on on your queries, not your tables

## Creating Indexes

To see type of query

```sql
EXPLAIN SELECT customer_id FROM customers WHERE state = "ca"
```

create index

```sql
CREATE INDEX idx_state ON customers (state);
```

```sql
EXPLAIN SELECT customer_id FROM customers WHERE points > 1000;

CREATE INDEX idx_points ON customers (points);
```

## Viewing Indexes

```sql
SHOW INDEXES IN customers;
```

- Primary is a also index. It's called clustered index. A table only can have 1 clustered index.

```sql
ANALYZE TABLE customers;
```

```sql
SHOW INDEXES IN orders;
```

- Foreign key is also index.

## Prefix Indexes

```sql

SELECT
	COUNT(DISTINCT LEFT(first_name, 1)),
	COUNT(DISTINCT LEFT(first_name, 6)),
	COUNT(DISTINCT LEFT(first_name, 10))
FROM customers;


CREATE INDEX idx_first_name ON customers (first_name(6));
```

## Full-text indexes

```sql
CREATE FULLTEXT INDEX idx_title_body ON posts (title, body);
```

```sql
SELECT *
FROM   posts
WHERE  MATCH (title, body) AGAINST ('react redux');
```

```sql
SELECT *, MATCH (title, body) AGAINST ('react redux')
FROM   posts
WHERE  MATCH (title, body) AGAINST ('react redux');
```

Boolean mode

```sql
SELECT *, MATCH (title, body) AGAINST ('react redux')
FROM   posts
WHERE  MATCH (title, body) AGAINST ('react -redux' IN BOOLEAN MODE);
```

```sql
SELECT *, MATCH (title, body) AGAINST ('react redux')
FROM   posts
WHERE  MATCH (title, body) AGAINST ('react -redux +form' IN BOOLEAN MODE);
```

```sql
SELECT *, MATCH (title, body) AGAINST ('react redux')
FROM   posts
WHERE  MATCH (title, body) AGAINST ('"handling a form"' IN BOOLEAN MODE);

```

## Composite Indexes

```sql
USE sql_store;

SHOW INDEXES IN customers;

EXPLAIN SELECT customer_id FROM customers
WHERE state = 'CA' AND points > 1000;

CREATE INDEX idx_state_points ON customers (state, points);


```

## Orders of columns on Composite Indexes

- Put the most frequently used columns first
- Put the columns with higher cardinality first

## Use Indexes for Sorting

```
SHOW STATUS LIKE 'last_query_cost'
```
