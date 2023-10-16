### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  - Then and catch calls can be chained to asynchronous functions to handle the resolved and rejected result respectively.

  - Async and await keywords can be used to wait for the return of an asynchronous call inside an asynchronous function.

  - Try and catch can be used to handle the resolution and rejection of asynchronous functions.


- What is a Promise?

  - A Promise is a JS object that is returned in an async function to represents a pending state that will be resolved or rejected later.


- What are the differences between an async function and a regular function?

  - An async function always returns a Promise and is taken out of the flow of the program to be handled by the browser in the background. 

  - A regular function in JS runs synchronously on a single thread and runs with priority if it is currently running or in the call stack.


- What is the difference between Node.js and Express.js?

  - Node.js is the environment that Javascript runs in other than in a browser. It has some subtle differences in its JS implementation from browser JS such as a global variable called global and no support for DOM objects.

  - Express.js is a web framework that provides the ability to create a server and routes easily and quickly in Node.js. It implements of the idea of using a series of middleware functions to abstract and build components of a web server.


- What is the error-first callback pattern?

  - The error-first callback pattern describes a callback function where error is the first parameter and any other parameters follow after. The error-first callback pattern is used in many Node.js libraries.


- What is middleware?

  - Middleware is software that runs inbetween processes. Express.js applications are essentially a series of middleware functions. They are able to execute any code, change or end the request-response cycle, and call the next middleware function to execute. There are several different types of middleware that can be interweaved through the flow of an application such as error handling and external middlewares. 


- What does the `next` function do?

  - The next function is called from within a middleware function and passes control to the next callable middleware function. The next callable middleware function may be route handler if it is valid to call, a nested middleware function, or a some generic middleware function. It depends on the order that middleware functions are defined in the code. 

  - If the next function is called with an argument, the argument is treated as an error and the next call will be a function with 4 parameters defined.

  - If a middleware function does not call its next function, the application will hang and become stuck.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  - Errors handling is unclear or not implemented. Since each call is awaited and there is no error handler for each of the calls, if the call to elie fails, an error will be thrown and the calls to joel and matt will not execute. If an error is thrown while calling matt, then the entire function throws an error and the previously resolved calls to elie and joel are tossed aside.

  - The calls are sequential, one after the other, and the result is just returned without any other logic. The calls therefore can be made in parallel by removing the await keyword. The promises can be bundled into a Promise group such as Promise.all, Promise.race, or Promise.allSettled.

  - The function can be refactored by passing an array of users as a parameter. The function can then iterate through the list of users, interpolate each user into the url, remove the multiple references to each user, reducing the code, making it more reusable, and optimize memory storage.
  
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
