Certainly! Here’s a handy Bootstrap cheatsheet that covers essential classes and components for Bootstrap 5. 

### **Grid System**

- **Container:**
  ```html
  <div class="container">...</div>      <!-- Fixed-width container -->
  <div class="container-fluid">...</div> <!-- Full-width container -->
  ```

- **Rows and Columns:**
  ```html
  <div class="row">
    <div class="col">...</div>               <!-- Automatically sized column -->
    <div class="col-6">...</div>             <!-- Column with fixed width (1/2) -->
    <div class="col-md-4">...</div>          <!-- Column with responsive size -->
  </div>
  ```

- **Column Sizing:**
  ```html
  <div class="row">
    <div class="col-12">...</div>           <!-- Full-width column -->
    <div class="col-6">...</div>            <!-- 50% width column -->
    <div class="col-4">...</div>            <!-- 33.33% width column -->
    <div class="col-3">...</div>            <!-- 25% width column -->
  </div>
  ```

- **Responsive Grid:**
  ```html
  <div class="row">
    <div class="col-sm-4">...</div>        <!-- Small devices (≥576px) -->
    <div class="col-md-6">...</div>        <!-- Medium devices (≥768px) -->
    <div class="col-lg-3">...</div>        <!-- Large devices (≥992px) -->
  </div>
  ```

### **Typography**

- **Headings:**
  ```html
  <h1 class="display-1">Heading 1</h1>
  <h2 class="display-2">Heading 2</h2>
  <h3 class="display-3">Heading 3</h3>
  <h4 class="display-4">Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  ```

- **Text Alignment:**
  ```html
  <p class="text-start">Left aligned text</p>
  <p class="text-center">Center aligned text</p>
  <p class="text-end">Right aligned text</p>
  ```

- **Text Colors:**
  ```html
  <p class="text-primary">Primary color text</p>
  <p class="text-secondary">Secondary color text</p>
  <p class="text-success">Success color text</p>
  <p class="text-danger">Danger color text</p>
  <p class="text-warning">Warning color text</p>
  <p class="text-info">Info color text</p>
  <p class="text-light bg-dark">Light color text on dark background</p>
  <p class="text-dark">Dark color text</p>
  ```

- **Font Weight:**
  ```html
  <p class="fw-light">Light weight text</p>
  <p class="fw-normal">Normal weight text</p>
  <p class="fw-bold">Bold weight text</p>
  ```

- **Text Transformation:**
  ```html
  <p class="text-uppercase">Uppercase text</p>
  <p class="text-lowercase">Lowercase text</p>
  <p class="text-capitalize">Capitalized text</p>
  ```

### **Buttons**

- **Button Types:**
  ```html
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-secondary">Secondary Button</button>
  <button class="btn btn-success">Success Button</button>
  <button class="btn btn-danger">Danger Button</button>
  <button class="btn btn-warning">Warning Button</button>
  <button class="btn btn-info">Info Button</button>
  <button class="btn btn-light">Light Button</button>
  <button class="btn btn-dark">Dark Button</button>
  <button class="btn btn-link">Link Button</button>
  ```

- **Button Sizes:**
  ```html
  <button class="btn btn-primary btn-lg">Large Button</button>
  <button class="btn btn-primary">Default Button</button>
  <button class="btn btn-primary btn-sm">Small Button</button>
  ```

### **Forms**

- **Form Layout:**
  ```html
  <form>
    <div class="mb-3">
      <label for="exampleInput" class="form-label">Label</label>
      <input type="text" class="form-control" id="exampleInput" placeholder="Enter text">
    </div>
    <div class="mb-3">
      <label for="exampleSelect" class="form-label">Select</label>
      <select class="form-select" id="exampleSelect">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck">
      <label class="form-check-label" for="exampleCheck">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  ```

- **Form Controls:**
  ```html
  <input type="text" class="form-control" placeholder="Text input">
  <input type="password" class="form-control" placeholder="Password input">
  <input type="email" class="form-control" placeholder="Email input">
  <textarea class="form-control" rows="3" placeholder="Textarea"></textarea>
  ```

### **Tables**

- **Basic Table:**
  ```html
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Header</th>
        <th>Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
  ```

- **Table Variants:**
  ```html
  <table class="table table-striped">...</table>   <!-- Striped rows -->
  <table class="table table-bordered">...</table>   <!-- Bordered table -->
  <table class="table table-hover">...</table>      <!-- Hover effect -->
  <table class="table table-sm">...</table>         <!-- Smaller table -->
  ```

### **Alerts**

- **Basic Alert:**
  ```html
  <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
  ```

- **Alert Variants:**
  ```html
  <div class="alert alert-secondary">...</div>
  <div class="alert alert-success">...</div>
  <div class="alert alert-danger">...</div>
  <div class="alert alert-warning">...</div>
  <div class="alert alert-info">...</div>
  <div class="alert alert-light">...</div>
  <div class="alert alert-dark">...</div>
  ```

### **Cards**

- **Basic Card:**
  ```html
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  ```

### **Navbar**

- **Basic Navbar:**
  ```html
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </nav>
  ```

### **Modals**

- **Basic Modal:**
  ```html
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content