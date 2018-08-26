-- reference GREATBAY Activity

-- The products table should have each of the following columns:
-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)

-- Populate this database with around 10 different products. 
-- (i.e. Insert "mock" data rows into this database and table).

DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

-- product table --
CREATE TABLE products(
    item_id INT (11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT default 0 NOT NULL,
    PRIMARY KEY (item_id)
);

-- mock data --
SELECT * FROM products; 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nixon 10', 'Watches', 400.00, 50),
        ('Nike AirMaxx', 'Shoes', 189.99, 30),
        ('iPhone X', 'Phones', 999.99, 20),
        ('Fossil Q', 'Watches', 199.99, 20),
        ('Apple Watch 4', 'Watches', 499.00, 0),
        ('Galaxy Note 9', 'Phones', 899.99, 10),
        ('Yeezy Boosts', 'Shoes', 10.45, 322),
        ('Red Dead 2', 'Video Games', 59.99, 25),
        ('Smash Bros Ultimate', 'Video Games', 59.99, 19),
        ('Limited Hoodie', 'Clothing', 89.12, 1);



