//watch this 1.5s https://youtu.be/ByhtOgF6uYM?si=SOFWtcrxGEk81Ld6 
// In JavaScript, the execution context and call stack are core concepts that explain how JavaScript code runs and how functions are executed in the correct order.

// Call Stack
// The call stack is a data structure that records where we are in the program. When a function is called, it is added (or "pushed") to the top of the call stack. Once the function completes execution, it is removed (or "popped") from the stack, and the interpreter resumes executing the code from the last point in the stack.

// How the Call Stack Works:
// When the JavaScript engine starts executing your code, it creates a global execution context and pushes it to the call stack.
// Each time a function is called, a new execution context is created and pushed to the stack.
// When a function finishes, its execution context is popped from the stack.
// If a function calls another function, the first one stays in the stack until the second one finishes.
sql
Copy code
|          |
|          |
| Global   |    //<- Global context at the bottom
------------ 
//After first() is called:

sql
Copy code
|          |
| first()  |    //<- first() added to the call stack
| Global   |
------------ 
//Inside first(), second() is called:

scss
Copy code
|          |
| second() |   // <- second() added to the stack
| first()  |
| Global   |
------------ 
//Inside second(), //third() is called:

scss
Copy code
| third()  |   // <- third() added to the stack
| second() |
| first()  |
| Global   |
------------ 
//third() //finishes and is removed from the stack:

scss
Copy code
|          |
| second() |    //<- third() is popped off after finishing
| first()  |
| Global   |
------------ 
second() //finishes and is removed from the stack:

scss
Copy code
|          |
| first()  |    //<- second() is popped off after finishing
| Global   |
------------ 
//first() finishes and is removed from the stack:

sql
Copy code
|          |
| Global   |    //<- first() is popped off after finishing
------------ 

//The call stack ensures that functions are executed in the correct order, following the "last-in, first-out" (LIFO) principle.