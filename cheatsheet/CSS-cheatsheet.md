Sure, here's a compact CSS cheatsheet covering some of the most commonly used properties and values:

### **Selectors**
- `*` : Selects all elements
- `element` : Selects all elements of a specific type (e.g., `p`)
- `#id` : Selects the element with a specific `id`
- `.class` : Selects all elements with a specific `class`
- `element.class` : Selects elements of a specific type with a specific `class`
- `element, element` : Selects multiple elements (e.g., `h1, h2`)
- `element element` : Selects descendants (e.g., `div p`)
- `element > element` : Selects direct children (e.g., `ul > li`)
- `element + element` : Selects adjacent sibling (e.g., `h1 + p`)
- `element ~ element` : Selects general sibling (e.g., `h1 ~ p`)

### **Colors**
- `color: #HEX` : Hex color (e.g., `#FF5733`)
- `color: rgb(255, 87, 51)` : RGB color
- `color: rgba(255, 87, 51, 0.8)` : RGBA color with opacity
- `color: hsl(9, 100%, 60%)` : HSL color
- `color: hsla(9, 100%, 60%, 0.8)` : HSLA color with opacity
- `color: rgb(255, 87, 51)` : RGB color

### **Text**
- `font-family: 'Font Name', sans-serif;` : Specifies font
- `font-size: 16px;` : Font size
- `font-weight: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;` : Font weight
- `font-style: normal | italic | oblique;` : Font style
- `text-align: left | center | right | justify;` : Text alignment
- `text-transform: uppercase | lowercase | capitalize | none;` : Text transformation
- `line-height: 1.5;` : Line height
- `letter-spacing: 0.5px;` : Letter spacing
- `word-spacing: 2px;` : Word spacing
- `text-decoration: none | underline | overline | line-through;` : Text decoration

### **Box Model**
- `width: 100px;` : Width
- `height: 100px;` : Height
- `padding: 10px;` : Padding
- `padding-top: 10px;` : Padding top
- `padding-right: 10px;` : Padding right
- `padding-bottom: 10px;` : Padding bottom
- `padding-left: 10px;` : Padding left
- `margin: 10px;` : Margin
- `margin-top: 10px;` : Margin top
- `margin-right: 10px;` : Margin right
- `margin-bottom: 10px;` : Margin bottom
- `margin-left: 10px;` : Margin left
- `border: 1px solid black;` : Border (width style color)
- `border-width: 1px;` : Border width
- `border-style: solid | dotted | dashed | double | groove | ridge | inset | outset;` : Border style
- `border-color: black;` : Border color
- `box-sizing: content-box | border-box;` : Box-sizing model

### **Background**
- `background-color: #FFF;` : Background color
- `background-image: url('image.jpg');` : Background image
- `background-size: cover | contain | 100px 100px;` : Background size
- `background-repeat: no-repeat | repeat | repeat-x | repeat-y;` : Background repeat
- `background-position: top left | center center | 50% 50%;` : Background position

### **Positioning**
- `position: static | relative | absolute | fixed | sticky;` : Position type
- `top: 10px;` : Distance from top
- `right: 10px;` : Distance from right
- `bottom: 10px;` : Distance from bottom
- `left: 10px;` : Distance from left
- `z-index: 10;` : Stack order

### **Flexbox**
- `display: flex;` : Enable flexbox
- `flex-direction: row | column | row-reverse | column-reverse;` : Flex direction
- `flex-wrap: nowrap | wrap | wrap-reverse;` : Flex wrap
- `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;` : Alignment along the main axis
- `align-items: flex-start | flex-end | center | baseline | stretch;` : Alignment along the cross axis
- `align-content: flex-start | flex-end | center | space-between | space-around | stretch;` : Alignment of flex lines
- `align-self: auto | flex-start | flex-end | center | baseline | stretch;` : Alignment of individual flex items

### **Grid**
- `display: grid;` : Enable grid layout
- `grid-template-columns: 1fr 1fr;` : Defines columns
- `grid-template-rows: 1fr 1fr;` : Defines rows
- `grid-gap: 10px;` : Gap between grid items
- `grid-column: 1 / span 2;` : Column span
- `grid-row: 1 / span 2;` : Row span

### **Transitions**
- `transition: property duration timing-function delay;` : Transition shorthand
  - Example: `transition: all 0.3s ease-in-out;`
- `transition-property: all | property;` : Properties to transition
- `transition-duration: 0.3s;` : Duration of the transition
- `transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out;` : Timing function
- `transition-delay: 0s;` : Delay before transition starts

### **Transforms**
- `transform: rotate(45deg) scale(1.5);` : Apply transformation
- `transform-origin: center;` : Origin of transformation
- `transform: translate(10px, 20px);` : Move element
- `transform: rotate(45deg);` : Rotate element
- `transform: scale(1.5);` : Scale element

### **Flexbox & Grid**

- **Flexbox:**
  - `display: flex;` : Turn element into a flex container
  - `flex-direction: row | column;` : Align items horizontally or vertically
  - `justify-content: center | space-between | space-around;` : Align items along the main axis
  - `align-items: center | stretch;` : Align items along the cross axis

- **Grid:**
  - `display: grid;` : Turn element into a grid container
  - `grid-template-columns: repeat(3, 1fr);` : Define columns
  - `grid-template-rows: auto;` : Define rows
  - `grid-gap: 10px;` : Gap between grid items

This cheatsheet provides a quick reference to some of the fundamental CSS properties and values. For more detailed and advanced use cases, exploring the official CSS specifications or documentation would be beneficial.

Here's a comprehensive CSS cheatsheet that includes the most commonly used properties, selectors, and concepts:

### Basic Syntax
```css
selector {
    property: value;
}
```

### Selectors
```css
/* Basic Selectors */
element {}              /* Selects all elements of the given type */
#id {}                  /* Selects the element with the given id */
.class {}               /* Selects all elements with the given class */

/* Attribute Selectors */
[element] {}            /* Selects elements with the given attribute */
[element=value] {}      /* Selects elements with the attribute equal to value */
[element^=value] {}     /* Selects elements with attribute starting with value */
[element$=value] {}     /* Selects elements with attribute ending with value */

/* Combinators */
element1 element2 {}    /* Selects all element2 inside element1 */
element1 > element2 {}  /* Selects direct children of element1 */
element1 + element2 {}  /* Selects the next sibling of element1 */
element1 ~ element2 {}  /* Selects all siblings of element1 */

/* Pseudo-classes */
element:hover {}        /* Selects elements on mouse hover */
element:active {}       /* Selects active elements */
element:focus {}        /* Selects focused elements */
element:first-child {}  /* Selects the first child of its parent */
element:last-child {}   /* Selects the last child of its parent */
element:nth-child(n) {} /* Selects the nth child of its parent */

/* Pseudo-elements */
element::before {}      /* Inserts content before element */
element::after {}       /* Inserts content after element */
element::first-letter {}/* Selects the first letter of the element */
element::first-line {}  /* Selects the first line of the element */
```

### Box Model
```css
element {
    width: 100px;       /* Width of the content area */
    height: 100px;      /* Height of the content area */
    padding: 10px;      /* Space inside the element, around the content */
    border: 1px solid #000; /* Border around the padding */
    margin: 20px;       /* Space outside the element, around the border */
    box-sizing: border-box; /* Includes padding and border in the element's width and height */
}
```

### Display and Positioning
```css
element {
    display: block;     /* Default display for block elements */
    display: inline;    /* Default display for inline elements */
    display: flex;      /* Flex container */
    display: grid;      /* Grid container */

    position: static;   /* Default positioning */
    position: relative; /* Position relative to its normal position */
    position: absolute; /* Position relative to the nearest positioned ancestor */
    position: fixed;    /* Position relative to the viewport */
    position: sticky;   /* Position based on the user's scroll position */

    top: 10px;          /* Offset from the top edge */
    right: 10px;        /* Offset from the right edge */
    bottom: 10px;       /* Offset from the bottom edge */
    left: 10px;         /* Offset from the left edge */

    z-index: 10;        /* Stack order of the element */
}
```

### Flexbox
```css
.container {
    display: flex;          /* Defines a flex container */
    flex-direction: row;    /* Horizontal direction (row | row-reverse | column | column-reverse) */
    justify-content: flex-start; /* Alignment along the main axis (flex-start | flex-end | center | space-between | space-around) */
    align-items: flex-start;     /* Alignment along the cross axis (flex-start | flex-end | center | baseline | stretch) */
}

.item {
    flex: 1;                /* Defines how the flex item will grow relative to others */
    align-self: flex-start; /* Override the align-items value for the individual item */
}
```

### Grid Layout
```css
.container {
    display: grid;          /* Defines a grid container */
    grid-template-columns: repeat(3, 1fr); /* Defines the columns of the grid */
    grid-template-rows: auto; /* Defines the rows of the grid */
    gap: 10px;              /* Gap between grid items */
}

.item {
    grid-column: 1 / 3;     /* Span multiple columns */
    grid-row: 2 / 4;        /* Span multiple rows */
}
```

### Typography
```css
element {
    font-family: 'Arial', sans-serif; /* Font family */
    font-size: 16px;       /* Font size */
    font-weight: bold;     /* Font weight (normal | bold | bolder | lighter | 100-900) */
    font-style: italic;    /* Font style (normal | italic | oblique) */
    text-align: center;    /* Text alignment (left | right | center | justify) */
    text-decoration: underline; /* Text decoration (none | underline | overline | line-through) */
    line-height: 1.5;      /* Line height */
    letter-spacing: 1px;   /* Space between letters */
    color: #333;           /* Text color */
}
```

### Colors and Backgrounds
```css
element {
    color: #333;           /* Text color */
    background-color: #f0f0f0; /* Background color */
    background-image: url('image.jpg'); /* Background image */
    background-repeat: no-repeat; /* Background repeat (repeat | repeat-x | repeat-y | no-repeat) */
    background-size: cover; /* Background size (auto | cover | contain) */
    background-position: center; /* Background position */
    opacity: 0.8;          /* Opacity */
}
```

### Borders and Shadows
```css
element {
    border: 1px solid #000; /* Border shorthand */
    border-width: 1px;      /* Border width */
    border-style: solid;    /* Border style (none | solid | dotted | dashed | double) */
    border-color: #000;     /* Border color */
    border-radius: 10px;    /* Rounded corners */

    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Box shadow */
}
```

### Transitions and Animations
```css
element {
    transition: all 0.3s ease-in-out; /* Transition shorthand */
}

@keyframes example {
    0% { transform: translateX(0); }
    100% { transform: translateX(100px); }
}

element {
    animation: example 2s infinite; /* Animation shorthand */
}
```

### Media Queries
```css
@media (max-width: 600px) {
    element {
        font-size: 14px;   /* Responsive styles */
    }
}
```

This CSS cheatsheet covers the basics and some advanced topics to get you started with styling web pages effectively. For more detailed information, refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS).