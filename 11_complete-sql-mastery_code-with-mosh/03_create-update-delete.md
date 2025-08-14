# create, update, delete (cud)

## create

### insert into

```sql
use sql_store;

INSERT INTO customers
		VALUES(DEFAULT, "Jhon", "Smith", '2002-11-26', NULL, "address 1", "city 1", "CA", DEFAULT);
```

### specify columns

```sql
use sql_store;

INSERT INTO customers (first_name, last_name, birth_date, address, city, state)
		VALUES("Jhon", "Smith", '2002-11-26', "address 1", "city 1", "CA");
```

### insert multiple rows

```sql
use sql_store;

INSERT INTO shippers (name)
		VALUES("Shippers 1"), ("Shippers 2"), ("Shippers 3");
```

### insert multiple tables / insert hierarchical rows

```sql
use sql_store;

INSERT INTO orders (customer_id, order_date, statusj)
		VALUES(1, "2019-01-02", 1);
INSERT INTO order_items (product_id, order_id, quantity, unit_price)
		VALUES(1, LAST_INSERT_ID(), 1, 2.95), (1, LAST_INSERT_ID(), 1, 3.95)
```

### creating copy of data of a table

```sql
CREATE TABLE orders_archived AS
SELECT
	*
FROM
	orders;
```

```sql
INSERT INTO orders_archived
SELECT
	*
FROM
	orders
WHERE
	order_date < "2019-01-01";
```

## update

### update single row

```sql
USE sql_invoicing;

UPDATE
	invoices
SET
	payment_total = 10,
	payment_date = "2019-03-01"
WHERE
	invoice_id = 1;
```

## delete

```sql
USE sql_invoicing;

DELETE FROM invoices
WHERE invoice_id = 1;
```
