Here's a concise HTML cheatsheet covering the most commonly used elements and attributes:

### Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### Document Metadata
```html
<!DOCTYPE html>                <!-- Document type declaration -->
<html lang="en">               <!-- Language attribute -->
<head>
    <meta charset="UTF-8">     <!-- Character set -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive viewport -->
    <title>Title of the document</title> <!-- Title in browser tab -->
    <link rel="stylesheet" href="styles.css"> <!-- External CSS file -->
</head>
```

### Text Elements
```html
<h1>Heading 1</h1>    <!-- Largest heading -->
<h2>Heading 2</h2>    <!-- Second largest heading -->
<h3>Heading 3</h3>    <!-- Third largest heading -->
<h4>Heading 4</h4>    <!-- Fourth largest heading -->
<h5>Heading 5</h5>    <!-- Fifth largest heading -->
<h6>Heading 6</h6>    <!-- Smallest heading -->
<p>Paragraph of text</p>
<b>Bold text</b>
<strong>Strongly emphasized text</strong>
<i>Italic text</i>
<em>Emphasized text</em>
<mark>Marked text</mark>
<small>Small text</small>
<u>Underlined text</u>
<s>Strikethrough text</s>
<blockquote>Block quotation</blockquote>
<pre>Preformatted text</pre>
<code>Inline code</code>
```

### Links and Images
```html
<a href="https://www.example.com">Link to example.com</a>
<a href="mailto:example@example.com">Send an email</a>
<a href="tel:+1234567890">Call a phone number</a>
<img src="image.jpg" alt="Description of image">
```

### Lists
```html
<!-- Unordered list -->
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>

<!-- Ordered list -->
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ol>

<!-- Description list -->
<dl>
    <dt>Term 1</dt>
    <dd>Description 1</dd>
    <dt>Term 2</dt>
    <dd>Description 2</dd>
</dl>
```

### Tables
```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
        <tr>
            <td>Data 3</td>
            <td>Data 4</td>
        </tr>
    </tbody>
</table>
```

### Forms
```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="1" max="100">
    
    <input type="submit" value="Submit">
</form>
```

### Multimedia
```html
<!-- Image -->
<img src="image.jpg" alt="Description of image">

<!-- Video -->
<video controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

### Semantic Elements
```html
<header>Header content</header>
<nav>Navigation links</nav>
<main>Main content area</main>
<article>Article content</article>
<section>Section content</section>
<aside>Aside content</aside>
<footer>Footer content</footer>
```

### Inline vs Block Elements
- **Block Elements**: `<div>`, `<p>`, `<h1> - <h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<section>`, `<article>`, etc.
- **Inline Elements**: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<b>`, `<i>`, `<code>`, etc.

This cheat sheet covers the basics and should serve as a handy reference for HTML. For more detailed information, you can always refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML).