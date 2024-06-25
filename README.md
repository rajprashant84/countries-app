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

## Installation

### Prerequisites
- Node.js and npm should be installed on your machine. You can download them from [here](https://nodejs.org/).

### Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/rest-countries-app.git
    cd rest-countries-app
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

## Project Structure

src/
|-- components/
| |-- atoms/
| | |-- Button/
| | | |-- Button.tsx
| | | |-- Button.css
| | |-- Input/
| | | |-- Input.tsx
| | | |-- Input.css
| |-- molecules/
| | |-- CountryCard/
| | | |-- CountryCard.tsx
| | | |-- CountryCard.css
| | |-- SearchBar/
| | | |-- SearchBar.tsx
| | | |-- SearchBar.css
| |
| |-- organisms/
| | |-- CountryList/
| | | |-- CountryList.tsx
| | | |-- CountryList.css
| | |-- Favorites/
| | | |-- Favorites.tsx
| | | |-- Favorites.css
| |
| |-- templates/
| | |-- CountryModal/
| | | |-- CountryModal.tsx
| | | |-- CountryModal.css
| |
| |-- pages/
| |-- Home.tsx
|
|-- contexts/
| |-- CountriesContext.tsx
|
|-- hooks/
| |-- useCountries.ts
|
|-- services/
| |-- api.ts
|
|-- types/
| |-- types.ts
|
|-- styles/
| |-- App.css
| |-- Modal.css
|
|-- App.tsx
|-- index.tsx
|-- setupTests.ts

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
