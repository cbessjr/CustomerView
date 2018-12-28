-- Create the bamazon database and the products table

DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT (10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR (100),
  price DECIMAL (10, 2),
  stock_quantity INT (10)
);



-- Select statement to view the products table in the bamazon database

Use bamazon;

SELECT * FROM products;



-- Insert statement to create data for the products table in the bamazon database


Use bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
values (' Banana', 'Produce', .25, 1000),
			('Apple', 'Produce', .25, 500),
            ('Chair', 'Furniture', 25.00, 100),
            ('Couch', 'Furniture', 300.00, 50);

