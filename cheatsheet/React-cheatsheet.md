Here’s a concise React cheatsheet covering essential concepts, syntax, and commonly used features in React:

### **Basic Setup**

- **Creating a New Project:**
  ```bash
  npx create-react-app my-app
  cd my-app
  npm start
  ```

### **Components**

- **Function Component:**
  ```jsx
  import React from 'react';

  const MyComponent = (props) => {
    return <h1>Hello, {props.name}!</h1>;
  };

  export default MyComponent;
  ```

- **Class Component:**
  ```jsx
  import React, { Component } from 'react';

  class MyComponent extends Component {
    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }

  export default MyComponent;
  ```

### **JSX**

- **Rendering Elements:**
  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

- **Embedding Expressions:**
  ```jsx
  const name = 'Alice';
  const element = <h1>Hello, {name}!</h1>;
  ```

- **Attributes:**
  ```jsx
  const element = <img src="image.jpg" alt="Description" />;
  ```

- **Children:**
  ```jsx
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
    </div>
  );
  ```

### **Props**

- **Passing Props:**
  ```jsx
  <MyComponent name="Alice" age={25} />
  ```

- **Default Props:**
  ```jsx
  MyComponent.defaultProps = {
    name: 'Default Name',
  };
  ```

- **Prop Types:**
  ```jsx
  import PropTypes from 'prop-types';

  MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  };
  ```

### **State**

- **Using State in Functional Components (with Hooks):**
  ```jsx
  import React, { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  };

  export default Counter;
  ```

- **Using State in Class Components:**
  ```jsx
  import React, { Component } from 'react';

  class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={this.increment}>Click me</button>
        </div>
      );
    }
  }

  export default Counter;
  ```

### **Event Handling**

- **Handling Events:**
  ```jsx
  const handleClick = () => {
    alert('Button clicked!');
  };

  <button onClick={handleClick}>Click me</button>
  ```

- **Preventing Default Behavior:**
  ```jsx
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
  </form>
  ```

### **Conditional Rendering**

- **Using If Statements:**
  ```jsx
  const element = isLoggedIn ? <LogoutButton /> : <LoginButton />;
  ```

- **Using Inline If with Logical && Operator:**
  ```jsx
  {messages.length > 0 && <Notification messages={messages} />}
  ```

- **Using Ternary Operator:**
  ```jsx
  {isLoggedIn ? <LogoutButton /> : <LoginButton />}
  ```

### **Lists and Keys**

- **Rendering Lists:**
  ```jsx
  const items = ['Apple', 'Banana', 'Cherry'];
  const listItems = items.map((item, index) => <li key={index}>{item}</li>);

  return <ul>{listItems}</ul>;
  ```

### **Forms**

- **Controlled Components:**
  ```jsx
  const Form = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <p>{value}</p>
      </form>
    );
  };
  ```

### **Hooks**

- **useEffect Hook:**
  ```jsx
  import React, { useState, useEffect } from 'react';

  const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  };

  export default Example;
  ```

- **Custom Hooks:**
  ```jsx
  import { useState, useEffect } from 'react';

  const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    });

    useEffect(() => {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error(error);
      }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
  };

  export default useLocalStorage;
  ```

### **Context API**

- **Creating Context:**
  ```jsx
  import React, { createContext, useContext, useState } from 'react';

  const MyContext = createContext();

  const MyProvider = ({ children }) => {
    const [value, setValue] = useState('default');

    return (
      <MyContext.Provider value={{ value, setValue }}>
        {children}
      </MyContext.Provider>
    );
  };

  const MyComponent = () => {
    const { value, setValue } = useContext(MyContext);

    return (
      <div>
        <p>{value}</p>
        <button onClick={() => setValue('new value')}>Change Value</button>
      </div>
    );
  };

  export { MyProvider, MyComponent };
  ```

### **React Router**

- **Basic Setup:**
  ```bash
  npm install react-router-dom
  ```

- **Basic Routing:**
  ```jsx
  import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

  const App = () => (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );

  const Home = () => <h2>Home</h2>;
  const About = () => <h2>About</h2>;

  export default App;
  ```

### **Lifecycle Methods (Class Components)**

- **Common Lifecycle Methods:**
  ```jsx
  componentDidMount() {
    // Called after the component is mounted
  }

  componentDidUpdate(prevProps, prevState) {
    // Called after updates are made
  }

  componentWillUnmount() {
    // Cleanup before unmounting
  }
  ```

### **Error Boundaries**

- **Basic Error Boundary:**
  ```jsx
  import React, { Component } from 'react';

  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.error('Error caught in ErrorBoundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
    }
  }

  export default ErrorBoundary;
  ```

This cheatsheet offers a quick overview of React’s core concepts, syntax, and features. For more advanced topics and best practices, consider consulting the [official React documentation](https://reactjs.org/docs/getting-started.html).