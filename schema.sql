-- Check for database with existing name. Be careful not to run this if the
-- databse has already been created.
-- DROP DATABASE IF EXISTS bamazon;


-- Database creation
CREATE database bamazon;

-- Database reference/use for the table creation
USE bamazon;

-- Database table creation
CREATE TABLE products (
  item_id INT (10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR (100),
  price DECIMAL (10, 2),
  stock_quantity INT (10)
);

-- Database display for verification all table columns were created successfully
USE bamazon;
SELECT * FROM products;