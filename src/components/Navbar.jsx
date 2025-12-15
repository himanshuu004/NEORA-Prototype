import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo/neora_logo.png" 
              alt="NEORA Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/sessions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sessions
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Testimonials
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

