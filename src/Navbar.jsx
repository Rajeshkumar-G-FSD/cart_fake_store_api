import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartItemsCount }) {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500">
      <Link to="/" className="text-white text-lg font-semibold">
        My Store
      </Link>
      <Link to="/cart" className="text-white">
        Cart Items: <span className="font-bold">{cartItemsCount}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
