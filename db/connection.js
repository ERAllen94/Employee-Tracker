const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
user: "root",

password: "Corinthians10:13",
database: "employees_db"
});

connection.contact(function (err) {
    if (err) throw err;
})

module.exports = connection;