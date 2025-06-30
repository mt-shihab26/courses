--@block
UPDATE products
SET name = 'updated keyboard',
    price = 40
WHERE id = 8;

--@block
UPDATE products
SET name = 'updated keyboard again',
    price = 40
WHERE id = 8
RETURNING *;


--@block
UPDATE products
SET is_sale = false
WHERE price >= 15
RETURNING *;
