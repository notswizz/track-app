import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center">
        <li className="mr-6">
          <Link href="/" passHref>
            <span className="text-white hover:text-gray-300 cursor-pointer">Home</span>
          </Link>
        </li>
        {/* Add other navigation links here if needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
