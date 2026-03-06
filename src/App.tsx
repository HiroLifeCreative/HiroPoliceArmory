/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Toggle menu with F4 key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F4') {
        e.preventDefault(); // Prevent browser search
        setIsMenuOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Main Admin Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <AdminPanel 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
