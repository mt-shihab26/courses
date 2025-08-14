# 02. Retrieving Data From a Single Table

# select statement

```sql
SELECT *
FROM customers
-- WHERE customer_id = 1
ORDER BY first_name
```

# select clause

## select all column

```sql
SELECT *
FROM customers;
```

## select specific column

```sql
SELECT
	first_name,
    last_name,
    points
FROM customers;
```

## arithmetic operation on select clause

```sql
SELECT
    points,
    points + 10,
    points - 10,
    points * 10,
    points / 10,
    points % 10,
    points + 10 * 100,
    (points + 10) * 100
FROM customers;
```

## alias of column name

```sql
SELECT
	points,
    (points + 10) * 100 AS discount_factor,
    (points + 10) * 100 AS 'discount factor',
    (points + 10) * 100 AS "discount factor"
FROM customers;
```

## getting distinct field

```sql
SELECT DISTINCT state
FROM customers;
```

exercise: Return all the products with name, price, and new price (price \* 1.1)

```sql
SELECT
    name,
    unit_price,
    unit_price * 1.1 as "new price"
FROM products
```

# where clause

```sql
SELECT *
FROM customers
WHERE points > 3000
```

## comparison operator in sql

```sql
>  -- grater then
>= -- grater then and equal
<  -- less then
<= -- less then and equal
=  -- equal
!= -- not equal
<> -- not equal
```

## example with comparison operator in where clause

```sql
SELECT *
FROM customers
WHERE state = 'VA';
```

or

```sql
SELECT *
FROM customers
WHERE state = 'va';
```

above two sql state are equal;

## comparing date type in mysql

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01'; -- year-month-date
```

exercise: get the orders placed in this year

```sql
SELECT *
FROM orders
WHERE order_date >= '2017-01-01';
```

## logical and, or, not operator

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01' AND points > 100
```

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01' OR points > 100
```

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01' OR (points > 100 AND state = 'VA')

-- logical operator precedence
-- AND
-- OR
-- NOT
```

```sql
SELECT *
FROM customers
WHERE NOT (birth_date > '1990-01-01' OR points > 1000);
```

or

```sql
SELECT *
FROM customers
WHERE (birth_date <= '1990-01-01' AND points <= 1000);
```

above two sql state are equal;

exercise: from the order_items table, get the items for order #6 where the total price is greater then 30

```sql
SELECT *
FROM order_items
WHERE order_id = 6 AND unit_price * quantity >= 30
```

## IN Operator

```sql
SELECT *
FROM `customers`
WHERE state = "VA" OR state = "GA" OR state = "FL";
```

using IN Operator

```sql
SELECT *
FROM `customers`
WHERE state IN ("VA", "GA", "FL");
```

if we want reverse result

```sql
SELECT *
FROM `customers`
WHERE state NOT IN ("VA", "GA", "FL");
```

exercise: return 'products' with 'quantity_in_stock' equal to 49, 38, 72

```sql
SELECT *
FROM `products`
WHERE quantity_in_stock IN (49, 38, 72);
```

## BETWEEN Operator

```sql
SELECT *
FROM customers
WHERE 1000 <= points AND points <= 3000
```

using BETWEEN Operator

```sql
SELECT *
FROM customers
WHERE points BETWEEN 1000 AND 3000;
```

exercise: return customers born between 1/1/1990 and 1/1/2000

```sql
SELECT *
FROM customers
WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01';
```

## LITE Operator

```sql
SELECT *
FROM customers
WHERE last_name LIKE '%b%';
```

```sql
SELECT *
FROM customers
WHERE last_name LIKE '_____y';
```

`%` - for any number of characters
`_` - for single character

exercise 1: get the customers whose addresses contain TRAIL or AVENUE

```sql
SELECT *
FROM customers
WHERE
    address LIKE '%trail%' OR
    address LIKE '%avenue%';
```

exercise 2: get the customers whose phone numbers end with 9

```sql
SELECT *
FROM customers
WHERE phone LIKE '%9';
```

reverse

```sql
SELECT *
FROM customers
WHERE phone NOT LIKE '%9';
```

## REGEXP Operator

```sql
SELECT *
FROM customers
WHERE last_name REGEXP '[a-h]e';
```

-   `^` - beginning
-   `$` - end
-   `|` - logical or
-   `[abcd]e` - match characters with e
-   `[a-f]e` - match range of characters

Exercise: Get the customers whose

First names are ELKA or AMBUR

```sql
SELECT *
FROM `customers`
WHERE first_name REGEXP 'ELKA|AMBUR';
```

Last names end with EY or ON

```sql
SELECT *
FROM `customers`
WHERE last_name REGEXP 'EY$|ON$';
```

Last names start with MY or contains SE

```sql
SELECT *
FROM `customers`
WHERE last_name REGEXP '^MY|SE';
```

Last names contains B followed by R or U

```sql
SELECT *
FROM `customers`
WHERE last_name REGEXP 'b[ru]';
```

## NULL Values

```sql
SELECT *
FROM `customers`
WHERE phone IS NULL;
```

```sql
SELECT *
FROM `customers`
WHERE phone IS NOT NULL;
```

Exercise: Get the orders that are not shipped

```sql
SELECT *
FROM `orders`
WHERE shipper_id IS NULL;
```

# order by clause

```sql
SELECT *
FROM customers
ORDER BY first_name;
```

```sql
SELECT *
FROM customers
ORDER BY first_name DESC;
```

```sql
SELECT *
FROM customers
ORDER BY state, first_name;
```

```sql
SELECT *
FROM customers
ORDER BY state DESC, first_name;
```

Exercise:

```sql
SELECT order_id, product_id, quantity, unit_price
FROM `order_items`
WHERE order_id = 2
ORDER BY quantity * unit_price DESC;
```

```sql
SELECT order_id, product_id, quantity, unit_price, quantity * unit_price AS total_price
FROM `order_items`
WHERE order_id = 2
ORDER BY total_price DESC;
```

# limit clause

```sql
SELECT *
FROM `customers`
LIMIT 3;
```

```sql
-- page 1: 1 - 3
-- page 2: 4 - 6
-- page 3: 7 - 9

SELECT *
FROM customers
LIMIT 6, 3
```

Exercise: Get the top three loyal customers

```sql
SELECT *
FROM `customers`
ORDER BY points DESC
LIMIT 3;
```
