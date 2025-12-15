import { useState } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // All images from public/images folder
  const images = [
    '/images/005c7ff0-5885-426a-9a03-f846973c7987.JPG',
    '/images/2296b393-0309-42ba-b6cc-405569f55368.JPG',
    '/images/46d06ad3-baa1-4ea7-bdcb-37cff039943c.JPG',
    '/images/494bd119-204d-4c5f-9b19-29fb0ae98677.JPG',
    '/images/5bfe9bd1-6666-4281-8420-072ba3d40132.JPG',
    '/images/79ab4111-df96-4bd8-806d-929e963fc0b2.JPG',
    '/images/d3263e16-976f-4a9f-8842-a2e3b75dadf3.JPG',
    '/images/e3adc225-888a-426e-9deb-70bc753adbc8.JPG',
    '/images/e57a6dc9-497e-44bd-9064-cef0b60fd708.JPG',
    '/images/IMG_2647.JPEG',
    '/images/IMG_2650 2.JPEG',
    '/images/IMG_2650.JPEG',
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="relative min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our clinic and see the welcoming environment we've created
          </p>
        </div>
      </div>

      <Section title="Our Gallery" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">View Full Size</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full size gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

