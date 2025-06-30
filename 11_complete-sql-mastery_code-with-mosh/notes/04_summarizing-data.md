## Aggregate Functions

```sql
SELECT
	MAX(invoice_total) AS highest,
	MIN(invoice_total) AS lowest,
	AVG(invoice_total) AS average,
	SUM(invoice_total) AS total,
	COUNT(invoice_total) AS number_of_invoices
FROM
	invoices;
```

```sql
SELECT
	MAX(payment_date)
FROM
	invoices;
```

null value is not accountable on aggregate functions

```sql
SELECT
	COUNT(invoice_total) AS number_of_invoices,
	COUNT(payment_date) AS count_of_payments
FROM
	invoices;
```

total records

```sql
SELECT
	COUNT(*) AS total_records
FROM
	invoices;
```

## Group By

```sql
SELECT
	client_id,
	SUM(invoice_total) AS total_sales
FROM
	invoices
GROUP BY
	client_id
ORDER BY
	total_sales DESC
```

```sql
SELECT
	client_id,
	SUM(invoice_total) AS total_sales
FROM
	invoices
WHERE
	invoice_date >= '2019-07-01'
GROUP BY
	client_id
ORDER BY
	total_sales DESC
```

Group by multiple collumns

```sql
SELECT
	date,
	name,
	SUM(amount) AS total_payments
FROM
	payments
JOIN
	payment_methods ON payment_method = payment_methods.payment_method_id
GROUP BY
	date,
	payment_method
ORDER BY
	date
```

Filter data after grouping it

```sql
SELECT
	client_id,
	SUM(invoice_total) AS total_sales
FROM
	invoices
GROUP BY
	client_id
HAVING
	total_sales > 500
```

```sql
SELECT
	client_id,
	SUM(invoice_total) AS total_sales,
	COUNT(*) AS number_of_invoices
FROM
	invoices
GROUP BY
	client_id
HAVING
	total_sales > 500
	AND number_of_invoices > 5
```

Rollup operator

```sql
SELECT
	client_id,
	SUM(invoice_total) AS total_sales
FROM
	invoices
GROUP BY
	client_id WITH ROLLUP
ORDER BY
	total_sales DESC
```
