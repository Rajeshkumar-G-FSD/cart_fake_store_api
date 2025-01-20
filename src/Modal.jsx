import React from "react";

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

export default Modal;
