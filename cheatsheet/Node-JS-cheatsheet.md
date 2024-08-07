Here's a concise Node.js cheatsheet covering essential commands, modules, and concepts for building server-side applications with Node.js:

### **Basic Commands**

- **Initialize a New Project:**
  ```bash
  mkdir my-project
  cd my-project
  npm init -y
  ```

- **Install a Package:**
  ```bash
  npm install package-name
  ```

- **Install a Package Globally:**
  ```bash
  npm install -g package-name
  ```

- **Uninstall a Package:**
  ```bash
  npm uninstall package-name
  ```

- **Update Packages:**
  ```bash
  npm update
  ```

- **List Installed Packages:**
  ```bash
  npm list
  ```

### **Creating a Basic Server**

- **Create a Simple HTTP Server:**
  ```js
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  });

  server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
  });
  ```

### **Modules**

- **Importing Modules:**
  ```js
  const fs = require('fs');        // File System
  const path = require('path');    // Path utilities
  const os = require('os');        // Operating system info
  const http = require('http');    // HTTP server
  ```

- **Exporting a Module:**
  ```js
  // myModule.js
  module.exports = {
    greet: function(name) {
      return `Hello, ${name}!`;
    }
  };
  ```

- **Using a Custom Module:**
  ```js
  const myModule = require('./myModule');
  console.log(myModule.greet('Alice'));
  ```

### **File System (fs) Module**

- **Read File Asynchronously:**
  ```js
  const fs = require('fs');

  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  ```

- **Write File Asynchronously:**
  ```js
  const fs = require('fs');

  fs.writeFile('file.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
  });
  ```

- **Read File Synchronously:**
  ```js
  const fs = require('fs');

  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
  ```

- **Write File Synchronously:**
  ```js
  const fs = require('fs');

  fs.writeFileSync('file.txt', 'Hello, World!');
  ```

### **Path (path) Module**

- **Join Paths:**
  ```js
  const path = require('path');
  const filePath = path.join(__dirname, 'file.txt');
  console.log(filePath);
  ```

- **Get Directory Name:**
  ```js
  const path = require('path');
  const dirName = path.dirname('/path/to/file.txt');
  console.log(dirName);
  ```

- **Get Base Name:**
  ```js
  const path = require('path');
  const baseName = path.basename('/path/to/file.txt');
  console.log(baseName);
  ```

### **OS (os) Module**

- **Get Operating System Information:**
  ```js
  const os = require('os');

  console.log(os.platform());   // Platform
  console.log(os.arch());       // Architecture
  console.log(os.cpus());       // CPU info
  console.log(os.freemem());   // Free memory
  console.log(os.totalmem());  // Total memory
  ```

### **Event Emitter**

- **Using Event Emitter:**
  ```js
  const EventEmitter = require('events');
  const myEmitter = new EventEmitter();

  myEmitter.on('event', () => {
    console.log('An event occurred!');
  });

  myEmitter.emit('event');
  ```

### **Streams**

- **Read Stream:**
  ```js
  const fs = require('fs');
  const readStream = fs.createReadStream('file.txt');

  readStream.on('data', (chunk) => {
    console.log('New chunk received:', chunk);
  });

  readStream.on('end', () => {
    console.log('No more data.');
  });
  ```

- **Write Stream:**
  ```js
  const fs = require('fs');
  const writeStream = fs.createWriteStream('file.txt');

  writeStream.write('Hello, World!\n');
  writeStream.end();
  ```

### **Express.js**

- **Basic Express Server:**
  ```js
  const express = require('express');
  const app = express();
  const port = 3000;

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  ```

- **Middleware:**
  ```js
  app.use((req, res, next) => {
    console.log('Middleware executed');
    next(); // Pass control to the next handler
  });
  ```

- **Routing:**
  ```js
  app.get('/about', (req, res) => {
    res.send('About Page');
  });

  app.post('/submit', (req, res) => {
    res.send('Form submitted');
  });
  ```

- **Static Files:**
  ```js
  app.use(express.static('public')); // Serve files from 'public' directory
  ```

### **Environment Variables**

- **Access Environment Variables:**
  ```js
  const dbHost = process.env.DB_HOST || 'localhost';
  console.log(dbHost);
  ```

- **Using `.env` Files with `dotenv`:**
  ```bash
  npm install dotenv
  ```

  ```js
  require('dotenv').config();

  const dbHost = process.env.DB_HOST;
  console.log(dbHost);
  ```

- **`.env` File Example:**
  ```
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=password
  ```

### **Asynchronous Programming**

- **Using Promises:**
  ```js
  const fs = require('fs').promises;

  fs.readFile('file.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));
  ```

- **Using Async/Await:**
  ```js
  const fs = require('fs').promises;

  const readFile = async () => {
    try {
      const data = await fs.readFile('file.txt', 'utf8');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  readFile();
  ```

### **Error Handling**

- **Try/Catch Block:**
  ```js
  try {
    // Code that may throw an error
    const data = JSON.parse('invalid JSON');
  } catch (error) {
    console.error('Error:', error.message);
  }
  ```

### **Debugging**

- **Using Console Logging:**
  ```js
  console.log('Debug message:', variable);
  ```

- **Using Debugger:**
  ```js
  debugger;
  ```

  Then run your script with:
  ```bash
  node inspect your-script.js
  ```

### **NPM Scripts**

- **Add Scripts in `package.json`:**
  ```json
  "scripts": {
    "start": "node app.js",
    "test": "mocha"
  }
  ```

- **Run Scripts:**
  ```bash
  npm run start
  npm test
  ```

This cheatsheet covers the basics of working with Node.js, including key commands, common modules, and typical tasks. For more advanced topics, consult the [official Node.js documentation](https://nodejs.org/en/docs/).