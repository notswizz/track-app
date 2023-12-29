import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
        <Link href="/" passHref>
  <span style={{ cursor: 'pointer' }}>Home</span>
</Link>


        </li>
        {/* Add other navigation links here if needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
