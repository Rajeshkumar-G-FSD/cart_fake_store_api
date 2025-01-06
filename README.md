# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# My Store

## Description
My Store is a responsive web application built with React and Tailwind CSS that allows users to browse products, add them to a shopping cart, and view the total price. The application fetches product data from the Fake Store API and provides a simple and intuitive shopping experience.

## Features
- Display a list of products with images, titles, and prices.
- Add products to the shopping cart.
- Remove products from the shopping cart.
- Display the total price of items in the cart.
- Responsive design that works well on both desktop and mobile devices.
- Alert message if a product is already added to the cart.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Fake Store API: An API providing fake product data for testing and prototyping.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-store.git
   cd my-store
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
Usage
Open the application in your browser by navigating to http://localhost:3000.

Browse the list of products and add them to your shopping cart by clicking the "Add to Cart" button.

View the shopping cart and the total price of items in the cart.

Code Structure
src/App.js: Main component that fetches products, manages the shopping cart, and renders the product list and shopping cart.

src/Navbar.js: Component that displays the count of items in the cart.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React

Tailwind CSS

Fake Store API
