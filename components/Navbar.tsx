"use client";

import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-border">
      <div className="wrapper py-8 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400 transition">
            MyPortfolio
          </a>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-gray-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400 transition">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            className="text-gray-400 hover:text-white focus:outline-none"
            onClick={() => alert("Mobile menu toggle logic can be added!")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
