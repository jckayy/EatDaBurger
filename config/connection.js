// Set up MySQL connection.
var mysql = require("mysql");
var connection; 

if('mysql://ysn4jb6kn70ulx1b:b579sqdl8fh6sq1f@l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ppxakkr4dswyzm2e'){
  connection = mysql.createConnection ('mysql://ysn4jb6kn70ulx1b:b579sqdl8fh6sq1f@l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ppxakkr4dswyzm2e');
  }
else {

  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
  });
};



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

connection.query("SELECT * FROM burgers", function(err, result) {

  console.log("Connection setup, here is the list of all records in the DB...")
  console.log(result);


});