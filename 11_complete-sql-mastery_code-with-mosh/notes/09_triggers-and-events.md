# Triggers & Events

## Trigger

-   Triggers is a block of SQL code that automatically gets executed before or after an insert, update or delete statement.

```sql
DELIMITER $$

CREATE TRIGGER payments_after_insert
	AFTER INSERT ON payments
	FOR EACH ROW
BEGIN
	UPDATE invoices
	SET payment_total = payment_total + NEW.amount
	WHERE invoice_id = NEW.invoice_id;
END $$

DELIMITER ;
```

```sql
SHOW TRIGGERS; -- show all triggers
```

```sql
DROP TRIGGER IF EXISTS payments_after_insert; -- delete trigger
```

## Events

-   Event is a task (or block of SQL code) that gets executed according to a schedule

```sql
SHOW VARIABLES; -- show all mysql system variables
SHOW VARIABLES LIKE 'event%'; -- show all system variables start with event word

SET GLOBAL event_scheduler = ON; -- on event scheduler of mysql
SET GLOBAL event_scheduler = OFF; -- off event scheduler of mysql
```

```sql
DELIMITER $$

CREATE EVENT yearly_delete_stale_audit_rows
ON SCHEDULE EVERY 1 YEAR 
STARTS '2019-01-01'
ENDS '2029-01-01'
DO BEGIN 
	-- code here
END $$

DELIMITER ;
```

```sql
SHOW EVENTS; -- showing events
```
