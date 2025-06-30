--@block
DELETE FROM products
WHERE id = 4;

--@block
DELETE FROM products
WHERE id = 11
RETURNING *;

--@block
DELETE FROM products
WHERE inventory = 0
RETURNING *;

--@block
SELECT * FROM products;
