# take-easy

[![npm version](https://badge.fury.io/js/take-easy.svg)](https://www.npmjs.com/package/take-easy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A utility package for managing asynchronous callbacks with a relaxed and easygoing approach.

## Installation

Install the package via npm:

```bash
npm install take-easy
```

## Usage

```javascript
const takeEasy = require('take-easy');

// Create a relaxed callback function
const callback = takeEasy(async () => {
  // Perform asynchronous operations here
  await someAsyncOperation();
});

// Call the callback (will be executed in a controlled manner)
callback().then(result => {
  // Handle the result
  console.log(result);
});

// You can call the callback multiple times, it will be managed appropriately
callback();
callback();
callback();
```

The take-easy package provides a utility function that allows you to create a relaxed callback function. Inside the callback function, you can perform asynchronous operations using the async/await syntax or Promises.

To create a relaxed callback, simply import the take-easy module and pass an asynchronous function as the callback argument. The resulting callback function will execute the provided asynchronous function in a controlled manner.

You can call the callback function multiple times, and it will manage the execution appropriately. Each call will be queued and executed one by one, ensuring that the maximum number of parallel calls is respected.

Make sure to replace someAsyncOperation() with your actual asynchronous operation or logic.

## Options

The `takeEasy` function accepts an optional second argument to specify the maximum number of parallel calls allowed:

```javascript
const callback = takeEasy(async () => {
  // Asynchronous operations
}, 2); // Allow a maximum of 2 parallel calls
```

## License

This package is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
