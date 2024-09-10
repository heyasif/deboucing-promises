# Real-time Search with Debouncing and Promises

## Demo

Live Demo: [Real-time Search Demo](https://deboucing-promises.vercel.app/)

## Overview

This project demonstrates a real-time search functionality using JavaScript with debouncing and promises. The app simulates API calls and dynamically displays search results based on user input.

## Features

- **Real-time Search**: Provides instant search results as the user types.
- **Debouncing**: Reduces the number of API calls by delaying the function execution until the user has stopped typing.
- **Simulated API Call**: Uses promises to simulate a delayed API response.
- **DOM Manipulation**: Dynamically updates the DOM to display the search results.

## Folder Structure

```
|-- index.html
|-- app.js
```

## Technologies Used

- HTML
- CSS (for basic styling)
- JavaScript (ES6 features like Promises and arrow functions)

## Getting Started

### Prerequisites

To run this project, you only need a modern web browser.

### Running the Project

1. Clone or download this repository to your local machine.
2. Open `index.html` in any web browser.
3. Start typing in the search input to see the real-time search in action.

## How It Works

1. **Search Input Field**: The user types into the input field, triggering a search.
2. **Debounce Function**: Ensures that API calls are only made when the user has stopped typing for at least 500 milliseconds.
3. **Simulated API Call**: A promise-based function simulates an API request with a 1-second delay and returns search results based on the input.
4. **Display Results**: The results are displayed dynamically below the input field using DOM manipulation.

## Script Loading with Defer

In the HTML, the `app.js` script is loaded with the `defer` attribute. This ensures that the script runs only after the HTML is completely parsed. The difference between `async` and `defer` is:

- **async**: The script is downloaded and executed as soon as possible, potentially blocking the parsing of the HTML.
- **defer**: The script is downloaded but executed only after the entire HTML document has been parsed.

## License

This project is open-source and available under the [MIT License](LICENSE).
