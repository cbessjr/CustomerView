//NPM Dependency list
var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");

//Database connection
var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nothing5#####",
    database: "bamazon"

});


connection.connect(function (error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (error, response) {
        if (error) throw error;
        //   console.log(response);

        // console.log(connection.state);

        return (getBamazonProducts(response));
        connection.end();

        // console.log(connection.state);
    });
}


// Function to display all of the products available for sale in a table
var getBamazonProducts = function (products) {
    console.log("Welcome valued Customer. We are bAmazon! Please view our list of products and pricesHere are all of the products, their costs");
    for (var i = 0; i < products.length; i++) {
        var productsResults = "\r\n" +
            "ItemID: " + products[i].item_id + "\r\n" +
            "Product Description: " + products[i].product_name + "\r\n" +
            // "Department: " + products[i].department_name+"\r\n"+
            "Price: $ " + products[i].price;
        // "Current Stock: " + products[i].stock_quantity;
        console.log(productsResults);
    }
    // userSelectID();
    itemPurchase();
}


function itemPurchase() {
    inquirer
        .prompt([
            {
                name: "choice",
                type: "input",
                message: "Please enter the item_id you would like to purchase:"
            },
            {
                name: "quantity",
                type: "input",
                message: "please enter the quantity of the item would like to purchase:"

            }
        ])
        .then(function (answer) {
            if (answer.choice < 13) {

                var choice = answer.choice;
                var quantity = answer.quantity;

                // console.log(choice);
                // console.log(quantity);

                var selectQuery = "SELECT product_name, stock_quantity FROM products WHERE item_id=?"
                connection.query(selectQuery, [choice], function (error, response) {
                    // console.log(response);
                    var productSQL = response[0].product_name;
                    var quantitySQL = response[0].stock_quantity;
                    // console.log(quantitySQL);

                    if (quantitySQL > quantity) {
                        quantitySQL = quantitySQL - quantity;

                        var updateQuery = "UPDATE products SET stock_quantity=? WHERE item_id=?"

                        connection.query(updateQuery, [quantitySQL, choice], function (error, response) {
                            console.log("Purchase made successfully");
                            console.log("You have purhased " + quantity + " " + productSQL + "s");
                            // itemPurchase();
                        })
                    } else {
                        console.log("We are sorry. There are not enough " + productSQL + "s in our inventory to meet your request, at this time.")
                        // itemPurchase();
                    }
                })

            }
            else {
                console.log("Please enter only the item_ids listed!!!!");
                itemPurchase();
            }


        })

}

