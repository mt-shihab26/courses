## Numeric functions

-   ROUND():
    -   `SELECT (ROUND(1.23))`
    -   `SELECT (ROUND(1.7345, 2))`
-   TRUNCATE():
    -   `SELECT (TRUNCATE(1.7345, 2))`
-   CEILING():
    -   `SELECT (CEILING(5.7))`
-   FLOOR():
    -   `SELECT (FLOOR(5.7))`
-   ABS():
    -   `SELECT (ABS(-5.2))`
-   RAND():
    -   `SELECT (RAND())`

## String functions

```sql
SELECT (LENGTH("shihab"));
SELECT (UPPER("shihab"));
SELECT (LOWER("Shihab"));
SELECT (LTRIM("  Shihab  "));
SELECT (RTRIM("  Shihab  "));
SELECT (TRIM("  Shihab  "));
SELECT (LEFT("Shihab", 3));
SELECT (RIGHT("Shihab", 3));
SELECT (SUBSTRING("Shihab", 2, 3));
SELECT (LOCATE("i", "Shihab"));
SELECT (REPLACE("Kindergarten", "garten", "garden"));
SELECT (CONCAT("first ", "last"))
```

## Date functions

```sql
SELECT NOW();
SELECT CURDATE();
SELECT CURTIME();
SELECT YEAR(NOW());
SELECT MONTH(NOW());
SELECT DAY(NOW());
SELECT HOUR(NOW());
SELECT MINUTE(NOW());
SELECT SECOND(NOW());
SELECT DAYNAME(NOW());
SELECT MONTHNAME(NOW());
SELECT EXTRACT(DAY FROM NOW());
SELECT EXTRACT(YEAR FROM NOW());
```

## Format date and time

-   MySQL represent date as string `2024-05-28` -> `YEAR-MONTH-DAY`

```sql
SELECT DATE_FORMAT(NOW(), "%y %Y %m %M %d"); -- 24 2024 05 May 07
SELECT TIME_FORMAT(NOW(), "%H:%i %p"); -- 01:37 AM
```

## Calculating date and time

```sql
SELECT DATE_ADD(NOW(), INTERVAL 1 DAY); -- 2024-05-08 01:39:16
SELECT DATE_ADD(NOW(), INTERVAL 1 YEAR); -- 2025-05-07 01:39:45
SELECT DATE_ADD(NOW(), INTERVAL -1 YEAR); -- 2023-05-07 01:40:12
SELECT DATE_SUB(NOW(), INTERVAL 1 YEAR); -- 2023-05-07 01:40:12
SELECT DATEDIFF("2019-01-05", "2019-01-01") -- 4
SELECT DATEDIFF("2019-01-01", "2019-01-05") -- -4
SELECT TIME_TO_SEC("09:00"); -- 32400
SELECT TIME_TO_SEC("09:00") - TIME_TO_SEC("09:02"); -- -120
```

## IFNULL & COALESCE functions

```sql
use sql_store;

SELECT
	order_id,
	IFNULL(shipper_id, "Not assigned") AS shipper
FROM
	orders;
```

```sql
use sql_store;

SELECT
	order_id,
	COALESCE(shipper_id, comments, "Not assigned") AS shipper
FROM
	orders;
```

## IF function

```sql
use sql_store;

SELECT
	order_id,
	order_date,
	IF(YEAR(order_date) = YEAR(NOW()), "Active", "Archived") as "status"
FROM
	orders;
```

## Case operator

```sql
use sql_store;

SELECT
	order_id,
	order_date,
	CASE
		WHEN YEAR(order_date) = YEAR(NOW()) THEN "Active"
		WHEN YEAR(order_date) = YEAR(NOW()) - 1 THEN "Last Year"
		WHEN YEAR(order_date) < YEAR(NOW()) - 1 THEN "Archived"
		ELSE "FUTURE"
	END AS category
FROM
	orders;
```
