import java.sql.*;



public class MYSQL {

    public static void main(String[] args) {
        
        String sql = "select first_name from person";

        String url = "jdbc:mysql://localhost:3306/person";
        String username = "root";
        String password = "MyNewPass";

        try
        {
        Connection con = DriverManager.getConnection(url,username,password);
        System.out.println("connected !!!");
        con.close();
        }catch(SQLException e){
            e.printStackTrace();
        }
    
    
    }

}