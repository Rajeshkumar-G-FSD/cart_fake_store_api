import React, { useEffect, useState } from "react";

// Navbar component that displays the count of items in the cart
function Navbar({ cartItemsCount, openModal }) {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500">
      <div className="text-white text-lg font-semibold">My Store</div>
      <button onClick={openModal} className="text-white">
        Cart Items: <span className="font-bold">{cartItemsCount}</span>
      </button>
    </nav>
  );
}

// Modal component
function Modal({ isOpen, onClose, cart, removeCart, total }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 lg:w-1/3">
        <h2 className="mb-4 text-xl font-bold">Shopping Cart</h2>
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-600">Rs.{item.price}</p>
              </div>
              <button
                onClick={() => removeCart(item, index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="pt-4 mt-8 border-t">
          <div className="flex items-center justify-between">
            <span className="font-bold">Total:</span>
            <span className="font-bold">Rs.{total}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function App() {
  // State variables
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch product data from the API
  const fetchProducts = async () => {
    const productsData = await fetch("https://fakestoreapi.com/products");
    const productResponse = await productsData.json();
    setProducts(productResponse);
  };

  // Add a product to the cart
  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (isProductInCart) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
    setTotal(total + parseInt(product.price));
  };

  // Remove a product from the cart
  const removeCart = (item, index) => {
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - parseInt(item.price));
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Include the Navbar component with cart items count */}
      <Navbar cartItemsCount={cart.length} openModal={openModal} />
      <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
        <div className="w-full  p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {products.map((product, index) => {
              return (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <img
                    className="object-cover w-full h-48 rounded-md"
                    src={`${product.image}`}
                    alt={product.title}
                  />
                  <div className="mt-4">
                    <h3
                      className="text-lg font-semibold"
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-600">Rs.{product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      
      </div>
      {/* Include the Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} cart={cart} removeCart={removeCart} total={total} />
    </>
  );
}

export default App;
