Here's a comprehensive Spring Boot cheatsheet covering essential commands, annotations, and configurations:

### Basic Setup
1. **Creating a Spring Boot Application**
   ```bash
   # Using Spring Initializr (online)
   https://start.spring.io/

   # Using Spring Boot CLI
   spring init --dependencies=web,data-jpa,h2 my-project
   ```

2. **Project Structure**
   ```
   my-project/
   ├── src/
   │   ├── main/
   │   │   ├── java/
   │   │   │   └── com/example/demo/
   │   │   │       └── DemoApplication.java
   │   │   └── resources/
   │   │       ├── application.properties
   │   │       └── static/
   │   │       └── templates/
   │   └── test/
   │       ├── java/
   │       │   └── com/example/demo/
   │       │       └── DemoApplicationTests.java
   └── build.gradle or pom.xml
   ```

### Annotations

#### Core Annotations
```java
@SpringBootApplication               // Main application class
@Component                           // Generic stereotype for any Spring-managed component
@Service                             // Service layer class
@Repository                          // DAO (Data Access Object) class
@Controller                          // Web MVC controller
@RestController                      // REST API controller (combines @Controller and @ResponseBody)
@RequestMapping("/path")             // Map web requests to specific handler classes/methods
@GetMapping("/path")                 // Handle HTTP GET requests
@PostMapping("/path")                // Handle HTTP POST requests
@PutMapping("/path")                 // Handle HTTP PUT requests
@DeleteMapping("/path")              // Handle HTTP DELETE requests
```

#### Dependency Injection
```java
@Autowired                           // Automatically inject the dependency
@Qualifier("beanName")               // Specify which bean to inject when multiple options are available
```

#### Configuration
```java
@Value("${property.name}")           // Inject a property from application.properties
@Configuration                       // Indicates that the class contains Spring bean definitions
@Bean                                // Define a bean
@Profile("profileName")              // Specify the profile under which the bean should be created
```

#### JPA and Database
```java
@Entity                              // Define a JPA entity
@Table(name = "table_name")          // Specify the table name in the database
@Id                                  // Define the primary key
@GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generate the primary key value
@Column(name = "column_name")        // Specify the column name in the database
```

### Configuration

#### application.properties / application.yml
```properties
# Server Configuration
server.port=8080

# Data Source Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/db_name
spring.datasource.username=root
spring.datasource.password=root

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
```

### Common Application Properties
```yaml
# application.yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/db_name
    username: root
    password: root
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL5Dialect
```

### Creating REST APIs
1. **Controller Example**
   ```java
   @RestController
   @RequestMapping("/api")
   public class ApiController {

       @GetMapping("/hello")
       public String sayHello() {
           return "Hello, World!";
       }

       @PostMapping("/data")
       public Data createData(@RequestBody Data data) {
           // Logic to save data
           return data;
       }
   }
   ```

2. **Service Example**
   ```java
   @Service
   public class DataService {

       @Autowired
       private DataRepository dataRepository;

       public Data saveData(Data data) {
           return dataRepository.save(data);
       }
   }
   ```

3. **Repository Example**
   ```java
   @Repository
   public interface DataRepository extends JpaRepository<Data, Long> {
   }
   ```

### Database Integration
1. **Entity Example**
   ```java
   @Entity
   public class Data {
       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private Long id;

       @Column(name = "name")
       private String name;

       // Getters and Setters
   }
   ```

### Running the Application
```bash
# Using Maven
mvn spring-boot:run

# Using Gradle
./gradlew bootRun

# Using JAR file
java -jar target/my-project-0.0.1-SNAPSHOT.jar
```

### Testing
1. **Test Class Example**
   ```java
   @SpringBootTest
   public class DemoApplicationTests {

       @Test
       public void contextLoads() {
       }
   }
   ```

2. **MockMVC Example**
   ```java
   @RunWith(SpringRunner.class)
   @SpringBootTest
   @AutoConfigureMockMvc
   public class ApiControllerTest {

       @Autowired
       private MockMvc mockMvc;

       @Test
       public void shouldReturnDefaultMessage() throws Exception {
           this.mockMvc.perform(get("/api/hello"))
               .andExpect(status().isOk())
               .andExpect(content().string("Hello, World!"));
       }
   }
   ```

### Useful Commands
```bash
# Generate project with Spring Initializr
curl https://start.spring.io/starter.zip -d dependencies=web,data-jpa,h2 -d baseDir=my-project -o my-project.zip

# Create a new Spring Boot project using Spring Boot CLI
spring init --dependencies=web,data-jpa,h2 my-project

# Run Spring Boot application
mvn spring-boot:run
./gradlew bootRun

# Build the project
mvn clean install
./gradlew build
```

This Spring Boot cheatsheet provides a quick reference to essential commands, annotations, and configurations. For more detailed information, you can refer to the [Spring Boot Reference Guide](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/).