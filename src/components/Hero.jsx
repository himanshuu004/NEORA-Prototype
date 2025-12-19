import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Slider from './Slider';

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-[787px]:min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 max-[787px]:bg-transparent">
      <Navbar />
      
      {/* Slider Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Slider />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 md:bg-black/40 z-[5] pointer-events-none"></div>

        {/* Mobile: Buttons Over Carousel - Positioned within slider bounds */}
        <motion.div 
          className="max-[787px]:flex hidden absolute bottom-0 left-0 right-0 z-20 items-end justify-center pb-4 sm:pb-6 px-4 pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-full max-w-md flex flex-col gap-2.5 sm:gap-3 pointer-events-auto">
            {/* Book Session Button - Glassmorphism Style */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Link 
                to="/book-session" 
                className="group relative block w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-[2px] backdrop-blur-xl"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600/95 to-indigo-600/95 px-5 sm:px-6 py-3.5 sm:py-4 backdrop-blur-md transition-all duration-300 group-hover:from-blue-500/95 group-hover:to-indigo-500/95">
                  <span className="relative z-10 text-sm sm:text-base font-bold text-white tracking-wide">
                    Book Session
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-2xl shadow-[0_8px_32px_0_rgba(59,130,246,0.5)] group-hover:shadow-[0_12px_40px_0_rgba(59,130,246,0.6)] transition-shadow duration-300"></div>
                </div>
              </Link>
            </motion.div>

            {/* Contact Us Button - Modern Glass Style */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Link 
                to="/contact" 
                className="group relative block w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-[2px] transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-white/95 backdrop-blur-md px-5 sm:px-6 py-3.5 sm:py-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.3)]">
                  <span className="relative z-10 text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
                    Contact Us
                  </span>
                  <div className="absolute inset-0 rounded-2xl shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] group-hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.4)] transition-shadow duration-300"></div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Desktop: Overlay Content */}
        <div className="min-[787px]:flex hidden absolute inset-0 items-center justify-center z-20">
          <motion.div 
            className="text-center px-4 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Speech Therapy & Audiology Clinic
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 md:mb-8 drop-shadow-lg px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your trusted partner for better communication and hearing health
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/book-session" 
                  className="block bg-white text-blue-600 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:bg-blue-50 transition-all duration-300 min-h-[48px] flex items-center justify-center"
                >
                  Book Session
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="block bg-blue-600/90 backdrop-blur-sm text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:bg-blue-700 transition-all duration-300 border-2 border-white/50 min-h-[48px] flex items-center justify-center"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

