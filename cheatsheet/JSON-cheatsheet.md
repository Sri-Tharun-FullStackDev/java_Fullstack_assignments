Here's a JSON cheatsheet to help you understand the structure, syntax, and common operations for working with JSON (JavaScript Object Notation):

### **JSON Basics**

- **JSON Format:**
  JSON is a text format used for data interchange. It is language-independent but uses conventions that are familiar to programmers of the C family of languages.

- **JSON Data Types:**
  - **String:** `"Hello, World!"`
  - **Number:** `123`, `3.14`
  - **Object:** `{"key": "value"}`
  - **Array:** `[1, 2, 3]`
  - **Boolean:** `true`, `false`
  - **Null:** `null`

### **Basic Structure**

- **Object:**
  An unordered collection of key/value pairs. Keys are strings, and values can be any valid JSON data type.
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science"],
    "address": {
      "street": "123 Main St",
      "city": "Anytown"
    }
  }
  ```

- **Array:**
  An ordered list of values. Values can be of any valid JSON data type.
  ```json
  [
    "apple",
    "banana",
    "cherry"
  ]
  ```

### **Common Operations**

- **Parsing JSON (JavaScript):**
  Convert JSON string into a JavaScript object.
  ```js
  const jsonString = '{"name": "John", "age": 30}';
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject.name); // "John"
  ```

- **Stringifying JSON (JavaScript):**
  Convert a JavaScript object into a JSON string.
  ```js
  const jsonObject = { name: "John", age: 30 };
  const jsonString = JSON.stringify(jsonObject);
  console.log(jsonString); // '{"name":"John","age":30}'
  ```

### **JSON Syntax Rules**

- **Keys:**
  - Must be strings enclosed in double quotes (`"`).
  - Example: `"name": "John"`

- **Strings:**
  - Must be enclosed in double quotes (`"`).
  - Escape special characters with a backslash (`\`).
  - Example: `"message": "Hello, \"World\"!"`

- **Numbers:**
  - Can be integers or floating-point.
  - Example: `"age": 30`, `"height": 5.9`

- **Boolean:**
  - `true` or `false`
  - Example: `"isStudent": false`

- **Null:**
  - Represents a null value.
  - Example: `"middleName": null`

- **Arrays:**
  - Ordered list of values.
  - Example: `"numbers": [1, 2, 3]`

- **Objects:**
  - Collection of key/value pairs.
  - Example: `"address": { "city": "Anytown", "zip": "12345" }`

### **JSON Validation**

- **Validate JSON Syntax:**
  Ensure your JSON is correctly formatted. Use tools or online validators (e.g., [JSONLint](https://jsonlint.com/)).

### **JSON Schema**

- **Basic Schema:**
  Define the structure and data types of your JSON data.
  ```json
  {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "age": {
        "type": "integer"
      }
    },
    "required": ["name", "age"]
  }
  ```

### **Handling JSON in Various Languages**

- **JavaScript:**
  ```js
  // Parsing JSON
  const obj = JSON.parse('{"key": "value"}');
  
  // Stringifying JSON
  const str = JSON.stringify({ key: "value" });
  ```

- **Python:**
  ```python
  import json
  
  # Parsing JSON
  obj = json.loads('{"key": "value"}')
  
  # Stringifying JSON
  str = json.dumps({"key": "value"})
  ```

- **Java:**
  ```java
  import com.google.gson.Gson;
  
  Gson gson = new Gson();
  
  // Parsing JSON
  MyObject obj = gson.fromJson(jsonString, MyObject.class);
  
  // Stringifying JSON
  String jsonString = gson.toJson(myObject);
  ```

### **Common Errors**

- **Trailing Commas:**
  JSON does not support trailing commas.
  ```json
  // Incorrect
  {
    "name": "John",
  }

  // Correct
  {
    "name": "John"
  }
  ```

- **Unquoted Keys:**
  Keys must be in double quotes.
  ```json
  // Incorrect
  {
    name: "John"
  }

  // Correct
  {
    "name": "John"
  }
  ```

- **Invalid Characters:**
  Ensure all strings are properly escaped.
  ```json
  // Incorrect
  {
    "message": "Hello, "World"!"
  }

  // Correct
  {
    "message": "Hello, \"World\"!"
  }
  ```

This cheatsheet provides an overview of JSON syntax, operations, and common practices. For more detailed information, refer to the [official JSON specification](https://www.json.org/json-en.html).