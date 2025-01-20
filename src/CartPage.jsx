import React from "react";

function CartPage({ cart, removeCart, updateCartItemQuantity, total }) {
  const discount = 0.10; // 10% discount
  const discountedTotal = Math.round(total - (total * discount));

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 min-h-screen text-white">
      <h2 className="mb-4 text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white text-gray-800 p-4 rounded-lg shadow-md">
              <div>
                <p className="font-medium text-purple-700">{item.title}</p>
                <p className="text-blue-600">Rs.{item.price}</p>
                <p className="text-green-600" title={item.description}>{item.description.substring(0, 30)}...</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateCartItemQuantity(item, index, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateCartItemQuantity(item, index, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeCart(item, index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <div className="pt-4 mt-8 border-t">
            <div className="flex items-center justify-between">
              <span className="font-bold text-yellow-400">Total (before discount):</span>
              <span className="font-bold text-yellow-400">Rs.{total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-red-500">Discount (10%):</span>
              <span className="font-bold text-red-500">-Rs.{(total * discount).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-orange-500">Total (after discount):</span>
              <span className="font-bold text-orange-500">Rs.{discountedTotal}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
