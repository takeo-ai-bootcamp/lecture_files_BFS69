# Objects

Example of an object

```javascript
let obj = {
  name: "Yogesh Bhattarai",
};
```

# Datatype

# String - string , char

### Strings in JavaScript

Strings are sequences of characters used to represent text. In JavaScript, they are a primitive data type. You can create strings using:

- Single quotes (`'...'`)
- Double quotes (`"..."`)
- Template literals (backticks - `` `...` ``)

### Defining Strings

```js
let singleQuote = "Hello, World!";
let doubleQuote = "Hello, World!";
let templateLiteral = `Hello, World!`;
```

All three ways are valid, but template literals offer extra features, like multi-line strings and interpolation.

### String Interpolation

Template literals allow you to embed variables and expressions directly into strings using `${...}`:

```js
let name = "Yogesh";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Yogesh!
```

You can also perform calculations or call functions inside the placeholders:

```js
let a = 5;
let b = 10;
console.log(`Sum: ${a + b}`); // Output: Sum: 15
```

### Multi-line Strings

Using backticks, you can write multi-line strings easily:

```js
let multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);
```

Output:

```
This is line 1
This is line 2
This is line 3
```

If you use single or double quotes, you have to use `\n` for new lines:

```js
let multiLineOld = "This is line 1\nThis is line 2\nThis is line 3";
```

### String Properties

1. **`length`** - Returns the number of characters in a string.
   ```js
   let text = "Hello, World!";
   console.log(text.length); // Output: 13
   ```
### String Methods

JavaScript provides many built-in methods for manipulating strings:

1. **`toUpperCase()`** - Converts the string to uppercase.

   ```js
   console.log(text.toUpperCase()); // Output: HELLO, WORLD!
   ```

2. **`toLowerCase()`** - Converts the string to lowercase.

   ```js
   console.log(text.toLowerCase()); // Output: hello, world!
   ```

3. **`indexOf()`** - Finds the first occurrence of a substring.

   ```js
   console.log(text.indexOf("World")); // Output: 7
   ```

4. **`includes()`** - Checks if a substring exists in a string.

   ```js
   console.log(text.includes("World")); // Output: true
   ```

5. **`startsWith()` and `endsWith()`** - Checks if a string starts or ends with a given substring.

   ```js
   console.log(text.startsWith("Hello")); // Output: true
   console.log(text.endsWith("!")); // Output: true
   ```

6. **`slice(start, end)`** - Extracts a part of the string.

   ```js
   console.log(text.slice(7, 12)); // Output: World
   ```

7. **`substring(start, end)`** - Similar to `slice()` but doesn't accept negative indices.

   ```js
   console.log(text.substring(7, 12)); // Output: World
   ```

8. **`replace(old, new)`** - Replaces a substring with another substring.

   ```js
   let newText = text.replace("World", "JavaScript");
   console.log(newText); // Output: Hello, JavaScript!
   ```

   > **Note:** `replace()` only replaces the first occurrence. Use `replaceAll()` to replace all occurrences:

   ```js
   let repeatedText = "Hello World, World!";
   console.log(repeatedText.replaceAll("World", "JS"));
   // Output: Hello JS, JS!
   ```

9. **`split(delimiter)`** - Splits the string into an array using a delimiter.

   ```js
   let words = text.split(" ");
   console.log(words); // Output: ["Hello,", "World!"]
   ```

10. **`trim()`** - Removes whitespace from both ends of the string.
    ```js
    let messy = "   Hello World!   ";
    console.log(messy.trim()); // Output: Hello World!
    ```

### String Concatenation

You can combine strings using the `+` operator or template literals:

```js
let firstName = "Yogesh";
let lastName = "Sharma";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Yogesh Sharma

// Using template literals
let fullNameTemplate = `${firstName} ${lastName}`;
console.log(fullNameTemplate); // Output: Yogesh Sharma
```

### Escape Characters

Special characters can be escaped using a backslash (`\`):

- `\'` - Single quote
- `\"` - Double quote
- `\\` - Backslash
- `\n` - New line
- `\t` - Tab

Example:

```js
let escapedString = 'He said, "JavaScript is awesome!"';
console.log(escapedString); // Output: He said, "JavaScript is awesome!"
```


### String Immutability

Strings are **immutable** in JavaScript, which means once created, they cannot be changed. Any method that seems to modify a string actually creates and returns a new string.

```js
let greeting = "Hello";
greeting.toUpperCase();
console.log(greeting); // Output: Hello (unchanged)

greeting = greeting.toUpperCase();
console.log(greeting); // Output: HELLO (now changed because we reassigned it)
```

- Strings can be defined using single quotes, double quotes, or backticks (template literals).
- They are immutable, meaning methods return new strings instead of modifying the original.
- JavaScript provides numerous methods for string manipulation.
- Template literals allow for easy interpolation and multi-line strings.

You can learn more about strings from [MDN - Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).


# Number - integer , float, double

### Numbers in JavaScript  

In JavaScript, numbers are a primitive data type used for mathematical operations and calculations. JavaScript has only one type of number, which can be an integer or a floating-point value (decimal).  

Examples:  

```js
let integer = 42;
let float = 3.14;
let negative = -7;
let exponential = 1.2e5; // 1.2 * 10^5 = 120000
```
### Types of Numbers  

1. **Integers** – Whole numbers (positive, negative, or zero).  
    ```js
    let num1 = 10;
    let num2 = -5;
    let num3 = 0;
    ```

2. **Floating-Point Numbers** – Numbers with decimal points.  
    ```js
    let pi = 3.14;
    let price = 99.99;
    ```

3. **Exponentials** – Numbers written in exponential notation.  
    ```js
    let bigNumber = 2.5e6; // 2.5 * 10^6 = 2500000
    let smallNumber = 3.1e-4; // 3.1 * 10^-4 = 0.00031
    ```

### Arithmetic Operations  

JavaScript supports the following arithmetic operators:  

```js
let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (Remainder): 1
console.log(a ** b); // Exponentiation: 1000
```

### Special Numeric Values  

1. **Infinity** - A value greater than any other number.  
    ```js
    console.log(1 / 0); // Output: Infinity
    console.log(-1 / 0); // Output: -Infinity
    ```

2. **NaN (Not-a-Number)** - A result of an invalid number operation.  
    ```js
    console.log(0 / 0); // Output: NaN
    console.log("hello" * 2); // Output: NaN
    console.log(NaN + 5); // Output: NaN
    ```

### Checking for NaN and Finite Numbers  

- **`isNaN(value)`** – Checks if a value is NaN.  
- **`isFinite(value)`** – Checks if a value is a finite number (not NaN, Infinity, or -Infinity).  

```js
console.log(isNaN(NaN)); // Output: true
console.log(isNaN("Hello")); // Output: true

console.log(isFinite(10)); // Output: true
console.log(isFinite(Infinity)); // Output: false
console.log(isFinite(NaN)); // Output: false
```

### Number Methods  

JavaScript provides several methods to work with numbers:  

1. **`Number()`** – Converts a value to a number.  
    ```js
    console.log(Number("123")); // Output: 123
    console.log(Number("12.34")); // Output: 12.34
    console.log(Number("Hello")); // Output: NaN
    ```

2. **`parseInt()`** – Converts a string to an integer.  
    ```js
    console.log(parseInt("42")); // Output: 42
    console.log(parseInt("42px")); // Output: 42
    console.log(parseInt("px42")); // Output: NaN
    ```

3. **`parseFloat()`** – Converts a string to a floating-point number.  
    ```js
    console.log(parseFloat("3.14")); // Output: 3.14
    console.log(parseFloat("3.14px")); // Output: 3.14
    ```

4. **`toFixed()`** – Formats a number with a fixed number of decimal places.  
    ```js
    let num = 3.14159;
    console.log(num.toFixed(2)); // Output: 3.14
    console.log(num.toFixed(4)); // Output: 3.1416
    ```

5. **`toString()`** – Converts a number to a string.  
    ```js
    let num = 42;
    console.log(num.toString()); // Output: "42"
    ```

### Math Object  

JavaScript provides a built-in `Math` object for advanced mathematical operations. Some useful methods include:  

1. **`Math.round()`** – Rounds to the nearest integer.  
    ```js
    console.log(Math.round(4.5)); // Output: 5
    console.log(Math.round(4.4)); // Output: 4
    ```

2. **`Math.ceil()`** – Rounds up to the next integer.  
    ```js
    console.log(Math.ceil(4.1)); // Output: 5
    ```

3. **`Math.floor()`** – Rounds down to the previous integer.  
    ```js
    console.log(Math.floor(4.9)); // Output: 4
    ```

4. **`Math.abs()`** – Returns the absolute value.  
    ```js
    console.log(Math.abs(-42)); // Output: 42
    ```

5. **`Math.min()` and `Math.max()`** – Returns the smallest or largest value.  
    ```js
    console.log(Math.min(1, 2, 3)); // Output: 1
    console.log(Math.max(1, 2, 3)); // Output: 3
    ```

6. **`Math.random()`** – Returns a random number between 0 and 1.  
    ```js
    console.log(Math.random()); // Output: 0.123456 (Example)
    ```

    You can generate a random number within a specific range like this:  
    ```js
    // Random number between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    ```

### Type Coercion with Numbers  

JavaScript automatically converts values in certain scenarios:  

```js
console.log("5" - 2); // Output: 3 (String "5" is converted to number 5)
console.log("5" + 2); // Output: "52" (Number 2 is converted to string "2")
console.log(true + 1); // Output: 2 (true is converted to 1)
```

- Subtraction, multiplication, and division trigger numeric conversion.  
- Addition concatenates strings if one operand is a string.  
### BigInt  

JavaScript also supports a special numeric type called **BigInt** for representing integers larger than `Number.MAX_SAFE_INTEGER`:  

```js
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); // Output: 123456789012345678901234567890n
console.log(typeof bigNumber); // Output: bigint
```

You cannot mix BigInt with regular numbers. Doing so will result in an error:  

```js
let num = 10;
let bigNum = 12345678901234567890n;

// console.log(num + bigNum); // Error: Cannot mix BigInt and other types
To perform operations, you must explicitly convert them:  

```js
console.log(BigInt(num) + bigNum); // Output: 12345678901234567900n
``` 

- Numbers in JavaScript can be integers, floating-point, or exponentials.  
- Special numeric values include `Infinity`, `-Infinity`, and `NaN`.  
- JavaScript provides built-in methods and the `Math` object for complex calculations.  
- BigInt is used for very large integers.  

You can learn more about numbers from [MDN - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number).  



# Boolean - Flag datatype

### Boolean in JavaScript  

A **Boolean** is a primitive data type in JavaScript that can only have one of two values:  
- `true`  
- `false`  

Booleans are commonly used in conditions, comparisons, and logical operations. They are also known as **flag data types** because they can represent one of two states (like a switch: on or off).  

### Defining a Boolean  

You can define a boolean like this:  

```js
let isOnline = true;
let isLoggedIn = false;
```

### Boolean as a Result of Comparisons  

Booleans are often the result of comparisons. JavaScript provides several comparison operators:  

- `===` – Strict equality (checks value and type)  
- `!==` – Strict inequality  
- `>` – Greater than  
- `<` – Less than  
- `>=` – Greater than or equal to  
- `<=` – Less than or equal to  

Examples:  

```js
let a = 10;
let b = 20;

console.log(a === b); // Output: false
console.log(a !== b); // Output: true
console.log(a > b); // Output: false
console.log(a < b); // Output: true
console.log(a >= 10); // Output: true
console.log(b <= 15); // Output: false
```

### Boolean Conversion  

JavaScript automatically converts values to booleans in certain contexts, such as in conditions (`if`, `while`, etc.).  

**Falsy values** in JavaScript include:  
- `0`  
- `""` (empty string)  
- `null`  
- `undefined`  
- `NaN`  
- `false`  

All other values are considered **truthy**, including:  
- Non-zero numbers (`-1`, `1`, `3.14`, etc.)  
- Non-empty strings (`"hello"`)  
- Arrays (`[]`)  
- Objects (`{}`)  

Example:  

```js
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false
console.log(Boolean(false)); // Output: false

console.log(Boolean(42)); // Output: true
console.log(Boolean("hello")); // Output: true
console.log(Boolean([])); // Output: true
console.log(Boolean({})); // Output: true
```

You can explicitly convert a value to a boolean using `Boolean()` or the double negation (`!!`) trick:  

```js
let num = 5;
console.log(Boolean(num)); // Output: true
console.log(!!num); // Output: true
```

### Logical Operators  

JavaScript provides logical operators to work with booleans:  

1. **`&&` (AND)** – Returns `true` if both operands are `true`.  
    ```js
    console.log(true && true); // Output: true
    console.log(true && false); // Output: false
    ```

2. **`||` (OR)** – Returns `true` if at least one operand is `true`.  
    ```js
    console.log(true || false); // Output: true
    console.log(false || false); // Output: false
    ```

3. **`!` (NOT)** – Inverts the value.  
    ```js
    console.log(!true); // Output: false
    console.log(!false); // Output: true
    ```

### Short-Circuiting  

Logical operators use **short-circuit evaluation**:  
- `&&` returns the first falsy value or the last value if all are truthy.  
- `||` returns the first truthy value or the last value if all are falsy.  

Examples:  

```js
console.log(0 && "Hello"); // Output: 0 (0 is falsy)
console.log(42 && "Hello"); // Output: "Hello" (both are truthy)

console.log(null || "Default"); // Output: "Default" (null is falsy)
console.log("Value" || "Default"); // Output: "Value" (first truthy value)
```

This behavior is useful for setting default values:  

```js
let user;
let name = user || "Guest";
console.log(name); // Output: "Guest"
```

### Conditional Statements with Boolean  

Booleans are typically used in conditional statements:  

```js
let isMember = true;

if (isMember) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}
```

Example with comparison:  

```js
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

### Boolean Methods and Object  

While `true` and `false` are primitives, you can also create a Boolean object using `new Boolean()`, but this is **not recommended**:  

```js
let isActive = new Boolean(false);
console.log(isActive); // Output: [Boolean: false]
console.log(typeof isActive); // Output: object
```

Boolean objects are always **truthy** even if they contain `false`, leading to unexpected behavior:  

```js
if (new Boolean(false)) {
    console.log("This will run!"); // Output: This will run!
}
```

Instead, always use the primitive form (`true` or `false`).   

- Booleans can be either `true` or `false`.  
- They are often the result of comparisons or logical operations.  
- JavaScript performs automatic type conversion in conditions.  
- Use `Boolean()` or `!!` for explicit conversion.  
- Avoid using the `Boolean` object as it can lead to unexpected behavior.  

You can learn more about booleans from [MDN - Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean).  


# Classes - Custom Objects

Alright, let’s continue!

---

### Classes - Custom Objects

Classes are blueprints for creating objects. They allow you to define the properties and methods that the objects created from them will have. In JavaScript, classes are essentially special functions, but they provide a more structured and cleaner way to create objects compared to traditional constructor functions.

Here's how you define a class:

```javascript
class Student {
  // The constructor is called when a new object is created
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Method to display student details
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }

  // Method to promote the student to the next grade
  promote() {
    this.grade++;
    console.log(`${this.name} has been promoted to grade ${this.grade}`);
  }
}
```

---

### Creating an Instance of a Class

You can create an object (also called an instance) from a class using the `new` keyword:

```javascript
let student1 = new Student("Yogesh", 20, 12);
let student2 = new Student("Varsha", 19, 11);
```

---

### Accessing Properties and Methods

You can access the properties and methods of an instance using the dot (`.`) notation:

```javascript
student1.displayInfo(); // Output: Name: Yogesh, Age: 20, Grade: 12
student2.displayInfo(); // Output: Name: Varsha, Age: 19, Grade: 11

student1.promote(); // Output: Yogesh has been promoted to grade 13
student1.displayInfo(); // Output: Name: Yogesh, Age: 20, Grade: 13
```

---

### Getters and Setters

You can also define **getters** and **setters** to control access to an object's properties:

```javascript
class Student {
  constructor(name, age, grade) {
    this._name = name;
    this._age = age;
    this._grade = grade;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }
}

let student3 = new Student("Kalyan", 21, 12);
console.log(student3.name); // Output: Kalyan

student3.name = "Biswas"; // Using setter to change the name
console.log(student3.name); // Output: Biswas
```

---

### Inheritance

Classes can **inherit** from other classes using the `extends` keyword, which allows you to reuse properties and methods:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // Calls the constructor of the parent class
    this.subject = subject;
  }

  display() {
    super.display();
    console.log(`Subject: ${this.subject}`);
  }
}

let teacher1 = new Teacher("Manish", 30, "Mathematics");
teacher1.display();
/* Output:
Name: Manish, Age: 30
Subject: Mathematics
*/
```

In this example:

- `Teacher` **inherits** from `Person`.
- The `super()` method is used to call the parent class's constructor.
- `display()` is overridden in `Teacher`, but it also uses `super.display()` to call the parent's method.

---

### Why Use Classes?

1. **Organized Structure**: Classes group related properties and methods, making the code more organized.
2. **Reusability**: Inheritance allows you to reuse and extend existing functionality.
3. **Encapsulation**: Classes help in encapsulating data, maintaining a cleaner and safer codebase.

# Arrays - Array string , array number


### Arrays in JavaScript  

An **array** is a data structure that stores a collection of elements. In JavaScript, arrays can hold any type of data, including numbers, strings, objects, other arrays (multi-dimensional arrays), or even a mix of different data types.  

Examples:  

```js
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
let mixed = [42, "Hello", true, null];
let nestedArray = [[1, 2], [3, 4]];
```

### Creating Arrays  

1. **Using Array Literals (Recommended)**  
    ```js
    let colors = ["Red", "Green", "Blue"];
    ```

2. **Using the `new Array()` Constructor**  
    ```js
    let scores = new Array(10, 20, 30);
    let emptyArray = new Array(5); // Creates an array of length 5 with empty slots
    ```

### Accessing Array Elements  

You can access array elements using **index numbers**. Indexes start at `0`:  

```js
let animals = ["Dog", "Cat", "Elephant"];
console.log(animals[0]); // Output: Dog
console.log(animals[2]); // Output: Elephant
```

You can also modify array elements:  

```js
animals[1] = "Tiger";
console.log(animals); // Output: ["Dog", "Tiger", "Elephant"]
```

### Array Properties  

- **`length`** – Returns the number of elements in an array:  
    ```js
    let cities = ["New York", "London", "Tokyo"];
    console.log(cities.length); // Output: 3
    ```
    It also updates dynamically when elements are added or removed.  

### Array Methods  

JavaScript provides several built-in methods for arrays:  

#### Adding and Removing Elements  

1. **`push()`** – Adds one or more elements to the end of an array:  
    ```js
    let numbers = [1, 2, 3];
    numbers.push(4, 5);
    console.log(numbers); // Output: [1, 2, 3, 4, 5]
    ```

2. **`pop()`** – Removes the last element:  
    ```js
    numbers.pop();
    console.log(numbers); // Output: [1, 2, 3, 4]
    ```

3. **`unshift()`** – Adds elements to the beginning:  
    ```js
    numbers.unshift(0);
    console.log(numbers); // Output: [0, 1, 2, 3, 4]
    ```

4. **`shift()`** – Removes the first element:  
    ```js
    numbers.shift();
    console.log(numbers); // Output: [1, 2, 3, 4]
    ```

#### Modifying and Copying Arrays  

1. **`splice()`** – Adds or removes elements from any position:  
    ```js
    let fruits = ["Apple", "Banana", "Cherry"];
    fruits.splice(1, 1, "Mango", "Pineapple"); 
    console.log(fruits); // Output: ["Apple", "Mango", "Pineapple", "Cherry"]
    ```

    - `splice(start, deleteCount, item1, item2, ...)`  
    - In the example above, it starts at index `1`, removes `1` element (`"Banana"`), and adds `"Mango"` and `"Pineapple"`.  

2. **`slice()`** – Returns a shallow copy of a portion of the array:  
    ```js
    let numbers = [1, 2, 3, 4, 5];
    let subArray = numbers.slice(1, 4);
    console.log(subArray); // Output: [2, 3, 4]
    ```
    - `slice(start, end)` – End index is not included.  

3. **`concat()`** – Joins two or more arrays:  
    ```js
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let combined = arr1.concat(arr2);
    console.log(combined); // Output: [1, 2, 3, 4]
    ```

#### Searching and Checking Arrays  

1. **`indexOf()`** – Returns the first index of a value or `-1` if not found:  
    ```js
    let colors = ["Red", "Green", "Blue", "Green"];
    console.log(colors.indexOf("Green")); // Output: 1
    ```

2. **`lastIndexOf()`** – Returns the last index of a value:  
    ```js
    console.log(colors.lastIndexOf("Green")); // Output: 3
    ```

3. **`includes()`** – Checks if an array contains a value:  
    ```js
    console.log(colors.includes("Blue")); // Output: true
    console.log(colors.includes("Yellow")); // Output: false
    ```

#### Iterating Over Arrays  

1. **`forEach()`** – Executes a function for each element:  
    ```js
    let numbers = [1, 2, 3];
    numbers.forEach((num) => {
        console.log(num * 2); 
    });
    // Output: 2, 4, 6
    ```

2. **`map()`** – Creates a new array by applying a function to each element:  
    ```js
    let doubled = numbers.map(num => num * 2);
    console.log(doubled); // Output: [2, 4, 6]
    ```

3. **`filter()`** – Creates a new array with elements that pass a condition:  
    ```js
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // Output: [2]
    ```

4. **`reduce()`** – Reduces the array to a single value:  
    ```js
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // Output: 6
    ```

#### Sorting and Reversing  

1. **`sort()`** – Sorts the array (modifies the original array):  
    ```js
    let names = ["John", "Jane", "Adam", "Eve"];
    names.sort();
    console.log(names); // Output: ["Adam", "Eve", "Jane", "John"]
    ```

    For numbers, you need to provide a comparison function:  
    ```js
    let numbers = [10, 5, 20, 15];
    numbers.sort((a, b) => a - b); // Ascending order
    console.log(numbers); // Output: [5, 10, 15, 20]
    ```

2. **`reverse()`** – Reverses the array order:  
    ```js
    numbers.reverse();
    console.log(numbers); // Output: [20, 15, 10, 5]
    ```

### Multi-dimensional Arrays  

Arrays can contain other arrays, making them multi-dimensional:  

```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6
```

### Array and Reference Behavior  

In JavaScript, arrays are reference types. This means that if you assign an array to another variable, they both point to the same array in memory:  

```js
let original = [1, 2, 3];
let copy = original;
copy.push(4);

console.log(original); // Output: [1, 2, 3, 4]
console.log(copy); // Output: [1, 2, 3, 4]
```

To **clone** an array, use:  
```js
let clone = [...original]; // Spread operator
let anotherClone = original.slice(); // Using slice()
```


- Arrays are versatile and can store multiple data types.  
- JavaScript provides many built-in methods to manipulate arrays.  
- Arrays are reference types, so be careful when copying them.  

You can learn more about arrays from [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).  

