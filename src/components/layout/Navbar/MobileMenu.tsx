import React from 'react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavLinks isMobile onClose={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;