import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-5 pb-2 flex flex-wrap sm:justify-betwean justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="poppins text-2xl font-bold py-1 px-2 text-gray-600 dark:text-gray-200">
          Triginta 
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="p-2 text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "☀️" : "🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
}
