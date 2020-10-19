const sqlite3 = require('sqlite3').verbose();

 
const db = new sqlite3.Database('./db/employee.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the employee database.');
});

module.exports = db;

// * To initiate the MySQL command line, type: `mysql -u root -p` in your command line and then your MySQL password. Be sure your MySQL Server is running!

// * To execute the `schema.sql` file, type into the MySQL command line: `source schema.sql`

// * To check if everything was done correctly, type `show databases;` and `show tables;` in the MySQL command line. Don't forget the semicolon!

// * To exit the MySQL command line, type `quit;` or `exit;`