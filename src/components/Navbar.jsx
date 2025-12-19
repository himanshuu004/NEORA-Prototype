import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/about', label: 'About', icon: 'ℹ️' },
    { to: '/services', label: 'Services', icon: '🩺' },
    { to: '/sessions', label: 'Sessions', icon: '📅' },
    { to: '/testimonials', label: 'Testimonials', icon: '⭐' },
    { to: '/gallery', label: 'Gallery', icon: '📸' },
    { to: '/contact', label: 'Contact', icon: '📞' },
    { to: '/book-session', label: 'Book Session', icon: '📝', protected: true },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="flex items-center group transition-all duration-300"
              onClick={closeMenu}
            >
              <img 
                src="/logo/neora_logo.png" 
                alt="NEORA Logo" 
                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-xl"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.filter(link => !link.protected).map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  className="text-base lg:text-lg xl:text-xl text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2 px-1 min-h-[44px] flex items-center"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
            {/* Book Session Link - Only for signed in users */}
            <SignedIn>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navLinks.filter(link => !link.protected).length * 0.1 }}
              >
                <Link
                  to="/book-session"
                  className="text-base lg:text-lg xl:text-xl text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2 px-1 min-h-[44px] flex items-center"
                >
                  Book Session
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            </SignedIn>
          </div>

          {/* User Button / Login Button - Desktop */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="px-5 lg:px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg min-h-[44px] flex items-center"
                >
                  Sign In
                </Link>
              </motion.div>
            </SignedOut>
          </div>

          {/* Mobile: Login Button & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <SignedOut>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg min-h-[40px] flex items-center"
                >
                  Sign In
                </Link>
              </motion.div>
            </SignedOut>
            <motion.button
              onClick={toggleMenu}
              className="p-2.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 z-50 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.9 }}
            >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg 
                  key="close"
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg 
                  key="menu"
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-80 max-w-[85vw] bg-white shadow-xl z-50 md:hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <img 
                  src="/logo/neora_logo.png" 
                  alt="NEORA Logo" 
                  className="h-8 w-auto"
                />
                <h3 className="text-sm font-semibold text-gray-800">Menu</h3>
              </div>
              <motion.button
                onClick={closeMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close menu"
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Mobile Navigation Links - Simple Menu Bar */}
            <div className="flex-1 overflow-y-auto py-3 px-3">
              <nav className="space-y-1">
                {/* All Public Navigation Links */}
                {navLinks
                  .filter(link => !link.protected)
                  .map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        to={link.to}
                        onClick={closeMenu}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 min-h-[44px]"
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="flex-1">{link.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                
                {/* Protected Link - Book Session (Only for signed in users) */}
                <SignedIn>
                  {navLinks
                    .filter(link => link.protected)
                    .map((link, index) => (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (navLinks.filter(l => !l.protected).length + index) * 0.05, duration: 0.2 }}
                      >
                        <Link
                          to={link.to}
                          onClick={closeMenu}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 min-h-[44px]"
                        >
                          <span className="text-lg">{link.icon}</span>
                          <span className="flex-1">{link.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                </SignedIn>
              </nav>
            </div>

            {/* Mobile Auth Section */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <SignedIn>
                <div className="flex items-center justify-center py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
              <SignedOut>
                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="block w-full px-4 py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 min-h-[44px] flex items-center justify-center"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="block w-full px-4 py-2 text-center text-xs font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 min-h-[40px] flex items-center justify-center"
                  >
                    Create Account
                  </Link>
                </div>
              </SignedOut>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;