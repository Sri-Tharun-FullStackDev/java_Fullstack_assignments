Here's a concise JDBC (Java Database Connectivity) cheatsheet covering essential concepts, commands, and operations for working with relational databases in Java:

### **JDBC Basics**

- **JDBC Overview:**
  JDBC is an API that enables Java applications to interact with databases. It allows for executing SQL queries, retrieving results, and managing database transactions.

### **Basic JDBC Setup**

1. **Add JDBC Driver:**
   Include the JDBC driver JAR file in your project. For example, MySQL driver JAR: `mysql-connector-java-x.x.x.jar`.

2. **Load JDBC Driver:**
   ```java
   Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL example
   ```

3. **Establish Connection:**
   ```java
   String url = "jdbc:mysql://localhost:3306/mydatabase";
   String user = "root";
   String password = "password";

   Connection conn = DriverManager.getConnection(url, user, password);
   ```

### **Executing SQL Queries**

1. **Create Statement:**
   ```java
   Statement stmt = conn.createStatement();
   ```

2. **Execute Query:**
   ```java
   String sql = "SELECT * FROM employees";
   ResultSet rs = stmt.executeQuery(sql);
   ```

3. **Execute Update:**
   ```java
   String sql = "INSERT INTO employees (name, position) VALUES ('Alice', 'Developer')";
   int rowsAffected = stmt.executeUpdate(sql);
   ```

4. **PreparedStatement (for parameterized queries):**
   ```java
   String sql = "INSERT INTO employees (name, position) VALUES (?, ?)";
   PreparedStatement pstmt = conn.prepareStatement(sql);
   pstmt.setString(1, "Bob");
   pstmt.setString(2, "Manager");
   int rowsAffected = pstmt.executeUpdate();
   ```

### **Processing Results**

1. **Iterate Through ResultSet:**
   ```java
   while (rs.next()) {
       int id = rs.getInt("id");
       String name = rs.getString("name");
       String position = rs.getString("position");
       System.out.println(id + ", " + name + ", " + position);
   }
   ```

2. **Retrieve Data by Column Index:**
   ```java
   int id = rs.getInt(1); // Get the first column
   String name = rs.getString(2); // Get the second column
   ```

3. **Retrieve Data by Column Name:**
   ```java
   String name = rs.getString("name"); // Column name
   ```

### **Transaction Management**

1. **Disable Auto-Commit:**
   ```java
   conn.setAutoCommit(false);
   ```

2. **Commit Transaction:**
   ```java
   conn.commit();
   ```

3. **Rollback Transaction:**
   ```java
   conn.rollback();
   ```

4. **Enable Auto-Commit:**
   ```java
   conn.setAutoCommit(true);
   ```

### **Closing Resources**

1. **Close ResultSet:**
   ```java
   if (rs != null) {
       rs.close();
   }
   ```

2. **Close Statement:**
   ```java
   if (stmt != null) {
       stmt.close();
   }
   ```

3. **Close Connection:**
   ```java
   if (conn != null) {
       conn.close();
   }
   ```

### **Exception Handling**

1. **Handling SQL Exceptions:**
   ```java
   try {
       // Database operations
   } catch (SQLException e) {
       e.printStackTrace();
   } finally {
       // Close resources
   }
   ```

### **Common JDBC Operations**

1. **Create Database:**
   ```java
   String sql = "CREATE DATABASE mydatabase";
   Statement stmt = conn.createStatement();
   stmt.executeUpdate(sql);
   ```

2. **Drop Table:**
   ```java
   String sql = "DROP TABLE employees";
   Statement stmt = conn.createStatement();
   stmt.executeUpdate(sql);
   ```

3. **Alter Table:**
   ```java
   String sql = "ALTER TABLE employees ADD COLUMN email VARCHAR(255)";
   Statement stmt = conn.createStatement();
   stmt.executeUpdate(sql);
   ```

4. **Delete Data:**
   ```java
   String sql = "DELETE FROM employees WHERE id = ?";
   PreparedStatement pstmt = conn.prepareStatement(sql);
   pstmt.setInt(1, 1);
   int rowsAffected = pstmt.executeUpdate();
   ```

### **JDBC URL Formats**

- **MySQL:**
  ```java
  jdbc:mysql://hostname:port/database
  ```

- **PostgreSQL:**
  ```java
  jdbc:postgresql://hostname:port/database
  ```

- **Oracle:**
  ```java
  jdbc:oracle:thin:@hostname:port:SID
  ```

- **SQL Server:**
  ```java
  jdbc:sqlserver://hostname:port;databaseName=database
  ```

### **JDBC Best Practices**

- **Use Prepared Statements** to prevent SQL injection attacks and improve performance.
- **Always Close Resources** in a `finally` block or use try-with-resources to ensure resources are closed automatically.
- **Handle SQL Exceptions** properly to provide meaningful error messages and maintain application stability.

This cheatsheet provides a quick reference for common JDBC operations and best practices. For more detailed information, consult the [official JDBC documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/).