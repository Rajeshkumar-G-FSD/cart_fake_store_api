import React from "react";

function Navbar({ cartItemsCount, onCartClick }) {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500">
      <div className="text-white text-lg font-semibold">My Store</div>
      <div className="flex items-center">
        <button
          onClick={onCartClick}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Cart ({cartItemsCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
