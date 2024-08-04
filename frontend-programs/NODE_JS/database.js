import mysql from "mysql"; 

// Create a connection to the database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MyNewPass',
  
});

// Connect to the database
con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + con.threadId);
}); 

// Perform a query
con.query('CREATE DATABASE sriTharun' , (error, results) => {
  if (error) throw error;
  console.log('The DATABASE Created');
});
 
con.query('SHOW DATABASES' , (error, results) => {
  if (error) throw error;
  console.log('The List of databases', results);
});

con.query('USE sriTharun' , (error, results) => {
  if (error) throw error;
  console.log('selected the created database');
});

const createTable = `CREATE TABLE Students(
  id int,
  name varchar(50),
  address text,
  grades  varchar(50),
  phone varchar(10)
)`;

con.query(createTable , (error, results) => {
  if (error) throw error;
  console.log('The table is created');
});

con.query('INSERT INTO Students (id,name,address,grades,phone) VALUES (123,"sri tharun","home","95","9566816373")' , (error, results) => {
  if (error) throw error;
  console.log('one element inserted in table');
});

con.query('SELECT * FROM Students' , (error, results) => {
  if (error) throw error;
  console.log('view the inserted element',results);
});


con.query('DROP DATABASE sriTharun' , (error, results) => {
  if (error) throw error;
  console.log('The DATABASE is deleted');
});

con.query('show databases' , (error, results) => {
  if (error) throw error;
  console.log('The List of databases', results);
});

con.end();
