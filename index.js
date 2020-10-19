const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require(".");
const { inherits } = require("util");
require("console.table");
const mysql = require('mysql2');
const inquirer = require("inquirer");

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Corinthians10:13",
    database: "employees_db",
    port: 3306
});

connection.connect(function (err) {
    if (err) throw err;

    console.log('connected as id ' + connection.threadId);
    init();
})

//inherits();

function init() {
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log(logoText);
    loadMainPrompts();
}

// View all roles
function loadMainPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
                "Add Employee",
                "Add Role",
                "Add Department"
                    
            ]
        }

    ]).then(data => {
        console.log('datay data', data)
        if(data.choice === "View All Roles") {
            connection.query('SELECT * FROM role', function(err, res) {
                if (err) throw err;
                console.log(res);
                connection.end();
              });
              console.log('role eyo',data)
            } else if(data.choice === "View All Employees") {
            connection.query('SELECT * FROM employee', function(err, res) {
                if (err) throw err;
                console.log(res);
                connection.end();
                });
                console.log('employee eyo',data)
            } else if(data.choice === 'View All Departments'){
            connection.query('SELECT * FROM department', function(err, res) {
                if (err) throw err;
                console.log(res);
                connection.end();
                });
                console.log('department eyo',data)
            } else if(data.choice === 'Add Employee') {
               inquirer
               .prompt([
                   {
                       type: 'Input',
                       name: 'first_name',
                       message: 'Enter new employee first name?'
                   },
                   {
                        type: 'Input',
                        name: 'last_name',
                        message: 'Enter new employee last name?'
                   },
                   {
                        type: 'Input',
                        name: 'Department',
                        message: 'Enter department for new employee'
                   },
                   {
                       type: 'input',
                       name: 'role',
                       message: 'Enter role for new employee',
                       list: 'rolechoices'
                   }
                ]) 
                 
                // connection.query(
                //     'INSERT INTO products SET ?', {
                        
                //     }
                // )
            }   else if(data.choice === 'Add Role') {
                inquirer
                .prompt([
                    {
                    type: 'input',
                    name: 'department',
                    message: 'Enter department for new role'
                    },
                    {
                        type: 'input',
                        name: 'role',
                        message: 'Enter new role'
                    }
                ])  
            } else {
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'department',
                    message: 'please add new department'
                }
            ])
        }
    });
}
            
    
    
    
    // Adding Depar
//     tment,Employees,Roles
    
// function addEmployee () {
//     console.log('Add a employee')
//     inquirer
//     .prompt([
//         {
//         type: 'Input',
//         name: 'name',
//         message: 'what is the employee first name?'
//         },
//         {
//             type: 'Input',
//             name: 'name',
//             message: 'what is the employee last name?'
//         },
//         {
//             type: 'list',
//             name: 'roleId',
//             message: 'what is the employee role?',
//             choices: roleChoices
//         }
//     ])
//     .then(function (answer){
//         console.log(answer);
//         var query = `INSERT INTO employee SET ?`
//         connection.query(query,
//           {
//         first_name: answer.first_name,
//         last_name: answer.last_name,
//         role_id: answer.role_Id,
//         department: answer.department
//           },
//           function (err, res) {
//             if (err) throw err;
  
//             console.table(res);
           
//             firstPrompt();
//           });
//       }); 
      
// }

// function addDepartment () {
//     console.log('Add a department')
//     inquirer.prompt([
//         {
//             type: 'Input',
//             name: 'name',
//             message: 'what is the department called?'
//         },
//     ])
//     .then(function (answer){
//         console.log(answer);
//         var query = `INSERT INTO department SET ?`
//         connection.query(query,
//           {
//         name: answer.name,
//           },
//           function (err, res) {
//             if (err) throw err;
  
//             console.table(res);
//             console.log(res.insertedRows + "Inserted successfully!\n");
  
//             firstPrompt();
//           });
//       }); 
// }

// function addRole (){
//     console.log('Add a role')
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'department',
//             message: 'what department is the role in?'
            
//         },
//     {   
//         type: 'input',
//         name: 'role',
//         message: 'what is the new role?'

//     },
//         {
//             type: 'input',
//             name: 'salary',
//             message: 'what is the salary for this role?'
//         }
//     ])
//     .then(function (answer){
//         console.log(answer);
//         var query = `INSERT INTO role SET ?`
//         connection.query(query,
//           {
//         name: answer.name,
//           },
//           function (err, res) {
//             if (err) throw err;
  
//             console.table(res);
//             console.log(res.insertedRows + "Inserted successfully!\n");
  
//             firstPrompt();
//           });
//       }); 
