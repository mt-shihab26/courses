--@block
INSERT INTO products (name, price, is_sale, inventory)
VALUES ('toilet paper', 4, true, 1000);

--@block
INSERT INTO products (name, price, is_sale, inventory)
VALUES ('toilet paper', 4, true, 1000)
RETURNING *;

--@block
INSERT INTO products (name, price, is_sale, inventory)
VALUES ('toilet paper', 4, true, 1000)
RETURNING name;
--@block
INSERT INTO products (name, price)
VALUES ('TV BLUE', 100),
    ('TV RED', 200),
    ('TV YELLOW', 50);