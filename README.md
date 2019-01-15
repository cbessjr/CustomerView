# CustomerView


## Overview
CustomerView is a Node.js app connected to a MySQL database designed for customer purchases. The Node application uses NPM packages installed to enhance Node.


## Running the application
### 1. Install Node

- NPM (Node Package Manager) (https://docs.npmjs.com/getting-started/installing-node)


### 2. Install mySQL

- mySQL (https://dev.mysql.com/downloads/installer/)


### 3. Install NPM Packages

  Install the packages from the terminal in the folder the application was cloned.

- MYSQL(https://www.npmjs.com/package/mysql)
- Inquirer (https://www.npmjs.com/package/inquirer)
- Prompt (https://www.npmjs.com/package/prompt)


### 4. Clone the application

  Clone the application from the following location... (https://github.com/cbessjr/CustomerView)
  
### 5. SQL Schema and Seed

- Run the schema (found in schema.sql) to create the database
- Run the seeds (found in seeds.sql) to populate the database
   
 
### 6. SQL Connection Update
 
  Once the application has been cloned, access the bamazonCustomer.js to update the user and password options in the code.     This is a neccessary step to allow the 
 
 
### 7. Using the Application
 
  Once the application is loaded a list of the items (in the database) for purchase are printed to the screen. This app then   requests for the user to enter the following data:

1. Enter the item_id for the product they wish to purchase<br>
2. Enter the quantity of the product they with the purchase<br>

  The application will then report if the requested quantity exists in the database for purchase. If the quantity is not       available, the application will report this to the user. Then request a new item and quantity for purchase. If the           quantity exists, the application will report a successful purchase to the user which includes the item name, quantity, and   total price. The database will be updated by subtracting the purchase the stock_quantity.  
  
  
  ### Screenshots
  
 - See the Screenshot for CustomerView.docx in the file listings.
  
  ### Future Updates
  
  - Additional error handling for null values and null returns
  - Command list to limit the user input to avoid typos
  - npm package to allow a cleaner menu display of the mySQL database of items for purchase
