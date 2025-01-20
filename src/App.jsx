import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import CartPage from "./CartPage.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchProducts = async () => {
    const productsData = await fetch("https://fakestoreapi.com/products");
    const productResponse = await productsData.json();
    setProducts(productResponse);
  };

  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (isProductInCart) {
      alert("Item already added to the cart");
      return;
    }
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    setTotal((prevTotal) => prevTotal + parseInt(product.price));
  };

  const removeCart = (item, index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
    setTotal((prevTotal) => prevTotal - parseInt(item.price) * item.quantity);
  };

  const updateCartItemQuantity = (item, index, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem, i) => 
        i === index ? { ...cartItem, quantity: newQuantity } : cartItem
      );
      return updatedCart;
    });

    setTotal((prevTotal) => {
      const updatedCart = cart.map((cartItem, i) => 
        i === index ? { ...cartItem, quantity: newQuantity } : cartItem
      );
      return updatedCart.reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <Navbar cartItemsCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList products={products} addToCart={addToCart} />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeCart={removeCart} updateCartItemQuantity={updateCartItemQuantity} total={total} />}
        />
      </Routes>
    </Router>
  );
}

function ProductList({ products, addToCart }) {
  const navigate = useNavigate();
  
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="w-full p-6 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <div key={index} className="p-4 bg-white text-gray-800 rounded-lg shadow-md">
              <img
                className="object-cover w-full h-48 rounded-md"
                src={`${product.image}`}
                alt={product.title}
              />
              <div className="mt-4">
                <h3
                  className="text-lg font-semibold text-purple-700"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.title}
                </h3>
                <p className="text-blue-600">Rs.{product.price}</p>
                <p className="text-green-600 mt-2" title={product.description}>{product.description.substring(0, 30)}...</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
