-- Normal Select
--@block
SELECT *
FROM products;
--@block
SELECT name
FROM products;
--@block
SELECT name, price, id
FROM products;



--AS key in SELECT statment
--@block
SELECT id AS products_id
FROM products;



--WHERE keyword
--@block
SELECT *
FROM products
WHERE id = 3;
--@block
SELECT *
FROM products
WHERE inventory = 0;
--@block
SELECT *
FROM products
WHERE name = 'TV';



--Relational Operator 
--@block
SELECT *
FROM products
WHERE price > 80;
--@block
SELECT *
FROM products
WHERE price >= 80;
--@block
SELECT *
FROM products
WHERE price < 80;
--@block
SELECT *
FROM products
WHERE price <= 80;
--@block
SELECT *
FROM products
WHERE inventory != 0;
--@block
SELECT *
FROM products
WHERE inventory <> 0;



-- Logical Operator
--@block
SELECT *
FROM products
WHERE inventory > 0 AND price <= 80;
--@block
SELECT *
FROM products
WHERE price > 100 or price < 20;


-- In operator
--@block
SELECT *
FROM products
WHERE id IN (1, 2, 3);



-- Like operator
--@block
SELECT *
FROM products
WHERE name LIKE 'TV%';
--@block
SELECT *
FROM products
WHERE name ILIKE 'r%';
--@block
SELECT *
FROM products
WHERE name NOT LIKE 'TV%';
--@block
SELECT *
FROM products
WHERE name LIKE '%V%';



-- Ordering
--@block
SELECT name, price, create_on
FROM products
ORDER BY price;
--@block
SELECT name, price, create_on
FROM products
ORDER BY price ASC;
--@block
SELECT name, price, create_on
FROM products
ORDER BY price DESC;

--@block
SELECT *
FROM products
ORDER BY inventory DESC;
--@block
SELECT *
FROM products
ORDER BY inventory DESC, price ASC;
--@block
SELECT *
FROM products
ORDER BY create_on DESC;
--@block
SELECT *
FROM products
WHERE price > 20 
    and inventory != 0
ORDER BY create_on DESC;



-- Limiting and Offset 
--@block
SELECT *
FROM products
LIMIT 5;
--@block
SELECT *
FROM products
WHERE price > 10
LIMIT 2;
--@block
SELECT *
FROM products
ORDER BY id
LIMIT 5
OFFSET 2;
