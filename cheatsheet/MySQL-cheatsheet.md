Here's a comprehensive MySQL cheatsheet covering essential SQL commands, syntax, and operations for managing databases and performing queries:

### **Basic Commands**

- **Connect to MySQL:**
  ```bash
  mysql -u username -p
  ```

- **Show Databases:**
  ```sql
  SHOW DATABASES;
  ```

- **Create Database:**
  ```sql
  CREATE DATABASE my_database;
  ```

- **Use Database:**
  ```sql
  USE my_database;
  ```

- **Drop Database:**
  ```sql
  DROP DATABASE my_database;
  ```

### **Tables**

- **Show Tables:**
  ```sql
  SHOW TABLES;
  ```

- **Create Table:**
  ```sql
  CREATE TABLE my_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Describe Table Structure:**
  ```sql
  DESCRIBE my_table;
  ```

- **Drop Table:**
  ```sql
  DROP TABLE my_table;
  ```

### **CRUD Operations**

- **Insert Data:**
  ```sql
  INSERT INTO my_table (name) VALUES ('John Doe');
  ```

- **Insert Multiple Rows:**
  ```sql
  INSERT INTO my_table (name) VALUES ('Alice'), ('Bob');
  ```

- **Select Data:**
  ```sql
  SELECT * FROM my_table;
  SELECT id, name FROM my_table WHERE id = 1;
  ```

- **Update Data:**
  ```sql
  UPDATE my_table SET name = 'Jane Doe' WHERE id = 1;
  ```

- **Delete Data:**
  ```sql
  DELETE FROM my_table WHERE id = 1;
  ```

- **Truncate Table:**
  ```sql
  TRUNCATE TABLE my_table;
  ```

### **Query Clauses**

- **WHERE Clause:**
  ```sql
  SELECT * FROM my_table WHERE name = 'John Doe';
  ```

- **ORDER BY Clause:**
  ```sql
  SELECT * FROM my_table ORDER BY name ASC;
  SELECT * FROM my_table ORDER BY name DESC;
  ```

- **LIMIT Clause:**
  ```sql
  SELECT * FROM my_table LIMIT 10;
  SELECT * FROM my_table LIMIT 5 OFFSET 10;
  ```

- **GROUP BY Clause:**
  ```sql
  SELECT COUNT(*), name FROM my_table GROUP BY name;
  ```

- **HAVING Clause:**
  ```sql
  SELECT name, COUNT(*) FROM my_table GROUP BY name HAVING COUNT(*) > 1;
  ```

### **Joins**

- **INNER JOIN:**
  ```sql
  SELECT a.id, a.name, b.order_date
  FROM customers a
  INNER JOIN orders b ON a.id = b.customer_id;
  ```

- **LEFT JOIN:**
  ```sql
  SELECT a.id, a.name, b.order_date
  FROM customers a
  LEFT JOIN orders b ON a.id = b.customer_id;
  ```

- **RIGHT JOIN:**
  ```sql
  SELECT a.id, a.name, b.order_date
  FROM customers a
  RIGHT JOIN orders b ON a.id = b.customer_id;
  ```

- **FULL JOIN (Simulated):**
  ```sql
  SELECT a.id, a.name, b.order_date
  FROM customers a
  LEFT JOIN orders b ON a.id = b.customer_id
  UNION
  SELECT a.id, a.name, b.order_date
  FROM customers a
  RIGHT JOIN orders b ON a.id = b.customer_id;
  ```

### **Indexes**

- **Create Index:**
  ```sql
  CREATE INDEX idx_name ON my_table (name);
  ```

- **Drop Index:**
  ```sql
  DROP INDEX idx_name ON my_table;
  ```

### **Constraints**

- **Add Primary Key:**
  ```sql
  ALTER TABLE my_table ADD PRIMARY KEY (id);
  ```

- **Add Foreign Key:**
  ```sql
  ALTER TABLE orders
  ADD CONSTRAINT fk_customer
  FOREIGN KEY (customer_id) REFERENCES customers(id);
  ```

- **Add Unique Constraint:**
  ```sql
  ALTER TABLE my_table ADD CONSTRAINT unique_name UNIQUE (name);
  ```

- **Drop Foreign Key:**
  ```sql
  ALTER TABLE orders DROP FOREIGN KEY fk_customer;
  ```

- **Drop Primary Key:**
  ```sql
  ALTER TABLE my_table DROP PRIMARY KEY;
  ```

### **Data Types**

- **Common Data Types:**
  ```sql
  INT       -- Integer
  VARCHAR(255) -- Variable-length string
  TEXT      -- Long text
  DATE      -- Date (YYYY-MM-DD)
  DATETIME  -- Date and time (YYYY-MM-DD HH:MM:SS)
  TIMESTAMP -- Timestamp
  FLOAT     -- Floating-point number
  BOOLEAN   -- True/False
  ```

### **Functions and Aggregates**

- **String Functions:**
  ```sql
  SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
  SELECT LENGTH(name) FROM my_table;
  SELECT UPPER(name) FROM my_table;
  ```

- **Numeric Functions:**
  ```sql
  SELECT ROUND(price, 2) FROM products;
  SELECT CEILING(price) FROM products;
  SELECT FLOOR(price) FROM products;
  ```

- **Date Functions:**
  ```sql
  SELECT CURDATE(); -- Current date
  SELECT NOW();    -- Current date and time
  SELECT DATE_ADD(CURDATE(), INTERVAL 7 DAY); -- Add 7 days
  SELECT DATE_SUB(CURDATE(), INTERVAL 1 MONTH); -- Subtract 1 month
  ```

- **Aggregate Functions:**
  ```sql
  SELECT COUNT(*) FROM my_table;
  SELECT AVG(price) FROM products;
  SELECT SUM(sales) FROM orders;
  SELECT MIN(price), MAX(price) FROM products;
  ```

### **Transactions**

- **Begin Transaction:**
  ```sql
  START TRANSACTION;
  ```

- **Commit Transaction:**
  ```sql
  COMMIT;
  ```

- **Rollback Transaction:**
  ```sql
  ROLLBACK;
  ```

### **Backup and Restore**

- **Backup Database:**
  ```bash
  mysqldump -u username -p my_database > backup.sql
  ```

- **Restore Database:**
  ```bash
  mysql -u username -p my_database < backup.sql
  ```

### **User Management**

- **Create User:**
  ```sql
  CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
  ```

- **Grant Privileges:**
  ```sql
  GRANT ALL PRIVILEGES ON my_database.* TO 'username'@'localhost';
  ```

- **Flush Privileges:**
  ```sql
  FLUSH PRIVILEGES;
  ```

- **Drop User:**
  ```sql
  DROP USER 'username'@'localhost';
  ```

### **Views**

- **Create View:**
  ```sql
  CREATE VIEW my_view AS
  SELECT name, email FROM users WHERE active = 1;
  ```

- **Drop View:**
  ```sql
  DROP VIEW my_view;
  ```

### **Stored Procedures and Functions**

- **Create Stored Procedure:**
  ```sql
  DELIMITER //

  CREATE PROCEDURE GetUserById(IN userId INT)
  BEGIN
    SELECT * FROM users WHERE id = userId;
  END //

  DELIMITER ;
  ```

- **Call Stored Procedure:**
  ```sql
  CALL GetUserById(1);
  ```

- **Create Function:**
  ```sql
  DELIMITER //

  CREATE FUNCTION GetUserCount() RETURNS INT
  BEGIN
    DECLARE userCount INT;
    SELECT COUNT(*) INTO userCount FROM users;
    RETURN userCount;
  END //

  DELIMITER ;
  ```

- **Call Function:**
  ```sql
  SELECT GetUserCount();
  ```

This cheatsheet provides a quick reference to common MySQL operations and features. For more detailed information, consult the [official MySQL documentation](https://dev.mysql.com/doc/).