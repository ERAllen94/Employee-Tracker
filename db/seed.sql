--seed--
USE employee_db;

INSERT INTO department (name)
VALUES
('Engineer'),
('Baker'),
('Salesman');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 10000, 1),
('Front end', 5000, 2),
('Back end',6000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Bobby', 'Busha', 1, NULL),
('Loser', 'Fool', 3, 2),
('Unemployed', 'Promoted', 2,3);
