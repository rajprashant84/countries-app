# REST Countries Single-Page Web Application

This is a single-page web application built with React that interacts with the REST Countries API (https://restcountries.com/). The application allows users to view a list of countries and their details, search for countries by name, language, or currency, and mark countries as their favorites. The favorites are persisted using local storage.

## Features
1. **View Countries**: Display a list of countries with their name, flag, and basic information like population, language(s), and currency/currencies.
2. **Search**: Search for countries by name, language, or currency without triggering a page reload.
3. **Favorites**: Mark countries as favorites and view the list of favorite countries.
4. **Pagination**: Pagination for the list of countries.
5. **Sorting**: Sorting options for the list of countries.
6. **Filtering**: Filter countries based on various criteria like language or currency.
7. **Responsive Design**: The application is responsive and works well on different screen sizes.
8. **Error Handling**: Handles API failures and invalid requests gracefully.


## Libraries Used
- **React**: A JavaScript library for building user interfaces.
- **Ag-Grid**: A feature-rich data grid providing sorting, pagination, and filtering functionalities.
- **Axios**: A promise-based HTTP client for making requests to the REST Countries API.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Context API**: For state management across the application.
- **React Hooks**: For managing state and side effects in functional components.
- **React Testing Library**: For testing React components.


## Installation

### Prerequisites
- Node.js and npm should be installed on your machine. You can download them from [here](https://nodejs.org/).

### Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/rest-countries-app.git
    cd countries-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```

    The application will run on `http://localhost:3000`.

## Running Tests
To run tests, use the following command:
```bash
npm test
 ```

## Project Structure

### Atomic Design

This project follows the Atomic Design methodology by Brad Frost, which helps in creating a scalable and maintainable component structure. The components are divided into five levels: Atoms, Molecules, Organisms, Templates, and Pages.

#### Atoms
Atoms are the basic building blocks of the application. They are simple, self-contained components that can be reused throughout the application.

#### Molecules
Molecules are composed of multiple atoms working together as a unit. They handle more complex functionality by combining atoms.


#### Organisms
Organisms are relatively complex UI components composed of groups of molecules and/or atoms. They form distinct sections of the interface.



#### Templates
Templates define the layout and structure of a page. They do not contain any real content themselves but rather arrange organisms and molecules.

#### Pages
Pages are specific instances of templates filled with real content. They represent the final output that the end-users see.


## Usage of Context and Hooks

This project uses the Context API and custom hooks to manage global state and side effects efficiently.


## API Services

The application interacts with the REST Countries API using a service file that handles all API requests.


## Types

TypeScript interfaces and types are defined in a separate file to ensure type safety across the application.


## Styles

Global and component-specific styles are organized under the styles directory.





## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
