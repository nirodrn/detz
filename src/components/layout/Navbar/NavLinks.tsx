import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const NavLinks = ({ isMobile, onClose }: NavLinksProps) => {
  const navItems = [
    { path: '/studios', label: 'Studios' },
    { path: '/software', label: 'Software' },
    { path: '/electrical', label: 'Electrical' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Careers' },
  ];

  const linkClass = isMobile
    ? "block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    : "text-gray-700 hover:text-blue-600 transition-colors";

  const handleContactClick = () => {
    window.open('https://wa.me/94713979029', '_blank');
    if (onClose) onClose();
  };

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={linkClass}
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
      <button
        className={
          isMobile
            ? "block px-3 py-2 rounded-md text-center bg-blue-600 text-white hover:bg-blue-700"
            : "bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        }
        onClick={handleContactClick}
      >
        Contact Us
      </button>
    </>
  );
};

export default NavLinks;
