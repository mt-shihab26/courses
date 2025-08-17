# Securing database

## Creating a user

```sql
CREATE USER shihab IDENTIFIED BY '1234';
```

## Listing users;

```sql
SELECT * FROM mysql.user;
```

## Drop a user;

```sql
DROP USER shihab;
```

## Changing passwords

```sql
SET PASSWORD FOR shihab = "2611";
```

for changing password for current user

```sql
SET PASSWORD FOR = "2611";
```

## Granting Privileges

```sql
CRATE USER moon_app IDENTIFIED BY '1234';
```

for application

```sql
GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE
ON sql_store.*
TO moon_app;
```

for admin on specific database

```sql
GRANT ALL
ON sql_store.*
TO moon_app;
```

for admin on all database

```sql
GRANT ALL
ON *.*
TO moon_app;
```

## Viewing Privileges

```sql
SHOW GRANT FOR shihab;
```
