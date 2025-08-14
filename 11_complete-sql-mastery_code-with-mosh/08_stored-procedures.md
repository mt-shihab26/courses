# Stored Procedures

- Store procedures store and organize SQL codes
- Faster execution
- Data security

## Create Store Procedure Functions

```sql
CREATE PROCEDURE get_clients()
BEGIN
	SELECT * FROM clients;
END
```

## Create Store Procedure Functions

```sql
DROP PROCEDURE get_clients;
```

```sql
DROP PROCEDURE IF EXISTS get_clients;
```

## Parameter Of Store Procedure

```sql
CREATE PROCEDURE get_clients_by_state(state CHAR(2))
BEGIN
	SELECT * FROM clients c WHERE c.state = state;
END
```

```sql
CALL get_clients_by_state ('CA');
```

## Parameter validation

```sql
CREATE PROCEDURE `make_payment`(
	invoice_id INT,
	payment_amount DECIMAl(9, 2),
	payment_date DATE
)
BEGIN
	if payment_amount <= 0 THEN 
		SIGNAL SQLSTATE '22003' 
		SET MESSAGE_TEXT = "Invalid payment amount";
	END IF;

	UPDATE 
		invoices i
	SET 
		i.payment_total = payment_amount,
		i.payment_date = payment_date
	WHERE 
		i.invoice_id = invoice_id;
END
```

```sql
CALL make_payment (2, -100, '2024-01-01');
```

## Output parameter

```
CREATE PROCEDURE `get_unpaid_invoices_for_client`(
	client_id INT,
	OUT invoices_count INT,
	OUT invoices_total DECIMAL(9, 2)
)
BEGIN 
	SELECT 
		COUNT(*), SUM(invoice_total) 
			INTO invoices_count, invoices_total
	FROM 
		invoices i
	WHERE 
		i.client_id = client_id AND payment_total = 0;
END
```

```sql
SET @invoices_count = 0;
SET @invoices_total = 0;

CALL get_unpaid_invoices_for_client (3, @invoices_count, @invoices_total);

SELECT @invoices_count, @invoices_total;
```

## Variables

```sql
DELIMITER //

CREATE PROCEDURE `get_unpaid_invoices_for_client`(
    IN client_id INT,
    OUT invoices_count INT,
    OUT invoices_total DECIMAL(9, 2)
)
BEGIN
    -- Local variable
    DECLARE local_invoices_count INT DEFAULT 0;
    DECLARE local_invoices_total DECIMAL(9, 2) DEFAULT 0.00;

    SELECT 
        COUNT(*), SUM(invoice_total)
    INTO 
        local_invoices_count, local_invoices_total
    FROM 
        invoices i
    WHERE 
        i.client_id = client_id AND payment_total = 0;

    SET invoices_count = local_invoices_count;
    SET invoices_total = local_invoices_total;
END //

DELIMITER ;
```

```sql
-- Session variable
SET @invoices_count = 0;
SET @invoices_total = 0;

CALL get_unpaid_invoices_for_client (3, @invoices_count, @invoices_total);

SELECT @invoices_count, @invoices_total;
```

## Functions

```
CREATE FUNCTION `get_risk_factor_for_client`(
	client_id INT
) RETURNS int
    READS SQL DATA
BEGIN

   RETURN 1; 
END
```
