# Data Types

## MySQL Data Types Category

- String Types
- Numeric Types
- Date & Time Types
- Blob Types
- Spatial Types

## String Types

- CHAR(x) -> fixed length string
- VARCHAR(x) -> variable length string, max: 65,535 characters (~64KB)
    - VARCHAR(50) -> for short strings
    - VARCHAR(255) -> for medium-length strings (most common)
    - VARCHAR(255) -> for medium-length strings (most common)
- MEDIUMTEXT -> max: 16MB
- LONGTEXT -> max: 4GB
- TINYTEXT -> max: 255 characters, just 1 byte
- TEXT -> max: 64KB

Bytes: 1 byte -> English, 2 bytes -> EU, Middle-Eastern, 3 bytes -> Asian Languages

## Numeric Types

- TINYINT -> 1 bite, [-128, 127]
- UNSIGNED TINYINT -> 1 bite, [0, 255]
- SMALLINT -> 2 bites, [-32K, 32K]
- MEDIUMINT -> 3 bites, [-8M, 8M]
- INT -> 4 bites, [-2B, 2B]
- BIGINT -> 8 bites, [-9Z, 9Z]

Zerofill -> INT(4) <- here 4 is display digit like, number will be formatted 0011

- DECIMAL(p, s)
    - DECIMAL(9, 2) will be store: 1234567.89
    - has alias names, DEC, NUMERIC, FIXED
- FLOAT -> 4 bytes
- DOUBLE -> 8 bytes

## Date & Time Types

- DATE -> just date without time
- TIME -> just time without data
- DATETIME -> 8 bites
- TIMESTAMP -> 4 bites (up to 2038)
- YEAR -> just 4 digits year

## Blob Types

- TINYBLOB -> 255 bites
- BLOB -> 65KB
- MEDIUMBLOB -> 16MB
- LONGBLOB -> 4GB

## Spatial Types

- BOOLEAN -> 1 bite
    - Actually it is TINYINT
    - TRUE internally is 1
    - FALSE internally is 0
- ENUM(...) ->
    - only allowed spacific values
    - other similer type is SET(...)
        - we have set multiple values
- JSON

add json data

```sql
UPDATE products

-- SET properties = '
-- {
--     "dimentions" : [1, 2, 3],
--     "weight" : 10
-- }
-- '

SET properties = JSON_OBJECT(
    'dimentions', JSON_ARRAY(1, 2, 3),
    'weight', 10,
)

WHERE product_id = 1
```

select json data

```sql
-- SELECT product_id, JSON_EXTRACT(properties, "$.weight")
-- SELECT product_id, properties -> "$.weight"
SELECT product_id, properties -> "$.dimentions[0]"
FROM products
WHERE product_id = 1;
```

update json data

```sql
UPDATE products

SET properties = JSON_SET(
    properties,
    '$.weight', 10,
    '$.age', 22
)

WHERE product_id = 1
```

remove json data

```sql
UPDATE products

SET properties = JSON_REMOVE(
    properties,
    "$.age"
)

WHERE product_id = 1
```
