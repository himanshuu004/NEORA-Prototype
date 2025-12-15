import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent",
      image: "👩",
      text: "The team at NEORA has been incredibly supportive. My child's speech has improved significantly since starting therapy here. The therapists are patient, understanding, and truly care about our progress.",
      rating: 5
    },
    {
      name: "John D.",
      role: "Patient",
      image: "👨",
      text: "Professional, caring, and effective. I highly recommend their audiology services to anyone in need. The hearing aid fitting process was smooth, and the follow-up care has been exceptional.",
      rating: 5
    },
    {
      name: "Emily R.",
      role: "Parent",
      image: "👩",
      text: "Our experience with NEORA has been outstanding. The speech therapy sessions are engaging for my son, and we've seen remarkable progress in just a few months. Thank you for everything!",
      rating: 5
    },
    {
      name: "Michael T.",
      role: "Patient",
      image: "👨",
      text: "After my stroke, I was struggling with communication. The team at NEORA helped me regain my confidence and communication skills. I'm grateful for their expertise and compassion.",
      rating: 5
    },
    {
      name: "Lisa K.",
      role: "Parent",
      image: "👩",
      text: "The pediatric services at NEORA are excellent. They work closely with us and my daughter's school to ensure continuity of care. The therapists are knowledgeable and create a fun, supportive environment.",
      rating: 5
    },
    {
      name: "David P.",
      role: "Patient",
      image: "👨",
      text: "I've been using their telehealth services, and it's been incredibly convenient. The quality of care is just as good as in-person sessions. Highly recommend for busy schedules!",
      rating: 5
    }
  ];

  return (
    <div>
      <div className="relative min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Testimonials
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hear from our patients and their families
          </p>
        </div>
      </div>

      <Section title="What Our Patients Say" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Join Our Success Stories">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-8 leading-relaxed">
              Join hundreds of satisfied patients who have improved their communication 
              and hearing with NEORA's expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890" 
                className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Book Your Session
              </a>
              <a 
                href="mailto:contact@neora.com" 
                className="bg-blue-700/50 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 border-2 border-white/50"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Testimonials;

