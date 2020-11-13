import React from "react";
import { FcComboChart } from "react-icons/fc";

function Header() {
  return (
    <header className="bg-gray-800 p-3 flex space-x-2 items-center">
      <FcComboChart className="-mt-2" size={20} />
      <h2 className="text-gray-100">SimpleKPI</h2>
    </header>
  );
}

export default Header;
