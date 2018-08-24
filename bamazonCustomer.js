/*
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.
*/
var mysql = require("mysql");
var inquirer = require("inquirer");

//establish connection 
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazonDB"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    startShop();
  });

/*Start - Running this application will first display all of the items available for sale. 
  Include the ids, names, and prices of products for sale.*/

function startShop() {
  connection.query("SELECT * FROM bamazonDB.products", function (err,results){
    if (err) throw err;
    console.log(" ")
    console.log("==============*BAMAZON*=============")
    console.log(" ")
    console.log("--------PRODUCTS-------")

    //display results in readable format 
    for(var i = 0; i< results.length; i++){
      console.log("ID: " + results[i].item_id + "|" + "Product: " + results[i].product_name + "|" 
      + "Department: " + results[i].department_name + "|" + "Price: " + results[i].price + "|" 
      + "Available: " + results[i].stock_quantity);
    }  

// The app should then prompt users with two messages...  
// The first should ask them the ID of the product they would like to buy.

      inquirer
        .prompt([{
          name: "askId",
          type: "input",
          message: "What is the [ID] of the product you would like to buy?",
          //make sure id is valid
          validate: (function(value) {
            if(isNaN(value) === false){
              return true;
            }
            else {
              return false;
            }
          }
          )},
// The second message should ask how many units of the product they would like to buy.
        {
          name:"quantity",
          type: "input",
          message: "How many would you like to buy?",
          validate: (function (value) {
            if(isNaN(value) === false){
              return true;
            }
            else {
              return false;
            }
          })
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.        
        }]).then(function(answer){
          connection.query("SELECT * FROM bamazonDB.products WHERE item_id=" + answer.quantity, function(err,results){
            if (answer.quantity <= results) {
              for (var i = 0; i < results.length; i++) {
                console.log("Thank You For Your Order of: " + results[i].product_name);
                console.log("Your Total is: " + "$"+results[i].price);
              }
            }
            else {
                console.log("Sorry, we only have " + results[i].quantity + " in stock");
              }
            }
          )}
        )}
      )};
  





// Once the update goes through, show the customer the total cost of their purchase.