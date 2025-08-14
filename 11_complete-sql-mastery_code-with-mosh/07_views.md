# View 

## Creating View

```sql
USE sql_invoicing;

CREATE VIEW sales_by_client AS
SELECT c.client_id, c.name, SUM(invoice_total) AS total_sales
FROM clients c 
JOIN invoices i USING (client_id)
GROUP BY client_id, name;

SELECT * FROM sales_by_client;
```

## Alter or Dropping View

```sql
DROP VIEW sales_by_client;
```

```sql
USE sql_invoicing;

CREATE OR REPLACE VIEW sales_by_client AS
SELECT c.client_id, c.name, SUM(invoice_total) AS sales
FROM clients c 
JOIN invoices i USING (client_id)
GROUP BY client_id, name;

```

```sql
SELECT * FROM sales_by_client;
```

## Upgrable View

```sql
USE sql_invoicing;

CREATE OR REPLACE VIEW invoices_with_balance AS
SELECT
	invoice_id,
	number,
	client_id,
	invoice_total,
	payment_total,
	invoice_total - payment_total AS balance,
	invoice_date,
	due_date,
	payment_date
FROM
	invoices
WHERE (
	invoice_total - payment_total) > 0
```

```sql
DELETE FROM invoices_with_balance
WHERE invoice_id = 1;
```

```sql
UPDATE
	invoices_with_balance
SET
	due_date = DATE_ADD(due_date, INTERVAL 2 DAY)
WHERE
	invoice_id = 1;
```
