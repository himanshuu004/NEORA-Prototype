import Navbar from './Navbar';
import Slider from './Slider';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Book Session Button - Mobile (above slider) */}
      <div className="md:hidden container mx-auto px-4 pt-28 pb-6 flex justify-center">
        <a 
          href="tel:+1234567890" 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Book Session
        </a>
      </div>

      {/* Slider - Full screen on desktop, 60% on mobile */}
      <div className="relative w-full">
        <Slider />
        
        {/* Overlay Content - Desktop */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center">
          <div className="text-center z-20 px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Speech Therapy & Audiology Clinic
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 drop-shadow-lg">
              Your trusted partner for better communication and hearing health
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="tel:+1234567890" 
                className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Book Session
              </a>
              <a 
                href="mailto:contact@neora.com" 
                className="bg-blue-600/90 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 border-2 border-white/50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/40 z-[5]"></div>
      </div>
    </section>
  );
};

export default Hero;

