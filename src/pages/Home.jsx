import Hero from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: "🎤",
      title: "Speech Therapy",
      description: "Comprehensive speech and language assessment and therapy for children and adults.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "👂",
      title: "Audiology Services",
      description: "Hearing evaluations, hearing aid fittings, and auditory rehabilitation services.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "💬",
      title: "Language Therapy",
      description: "Specialized language therapy for children and adults with communication challenges.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div>
      <Hero />

      <Section title="About Us">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Welcome to NEORA, a leading speech therapy and audiology clinic dedicated to 
              helping individuals of all ages improve their communication and hearing abilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our team of experienced professionals is committed to providing personalized 
              care and evidence-based treatments to help you achieve your communication goals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With years of experience and a passion for helping others, we strive to create 
              a welcoming and supportive environment where every patient feels valued and empowered 
              on their journey to better communication.
            </p>
          </div>

          {/* Director Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden mt-12">
            <div className="md:flex">
              <div className="md:w-2/5 p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                <div className="w-full max-w-xs">
                  <img
                    src="/Director/director.png"
                    alt="Clinic Director"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Meet Our Director
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
                  Dr. [Director Name]
                </h4>
                <p className="text-blue-600 font-semibold mb-6">
                  Clinic Director & Lead Speech Therapist
                </p>
                <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    Dr. [Director Name] brings over 15 years of extensive experience in speech therapy 
                    and audiology, with an unwavering passion for helping individuals overcome communication 
                    challenges. She holds a Doctorate in Speech-Language Pathology and is certified in 
                    multiple specialized treatment approaches.
                  </p>
                  <p>
                    Her commitment to excellence and patient-centered care has made NEORA a trusted name 
                    in the community. She believes in creating personalized treatment plans that address 
                    each patient's unique needs while fostering a supportive and encouraging environment.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                    Speech-Language Pathology
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                    Audiology Specialist
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                    15+ Years Experience
                  </span>
                </div>
                <div className="mt-8">
                  <Link 
                    to="/about" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
                  >
                    Learn More About Our Director
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Services" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-8 text-center`}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            View All Services →
          </Link>
        </div>
      </Section>

      <Section title="How Our Sessions Work">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Initial Assessment</h4>
                  <p className="text-gray-700">Understanding your needs and goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Treatment Plan</h4>
                  <p className="text-gray-700">Personalized approach for you</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Regular Sessions</h4>
                  <p className="text-gray-700">Consistent progress tracking</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ongoing Support</h4>
                  <p className="text-gray-700">Continuous care and follow-up</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/sessions"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
              >
                Learn More About Sessions
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="What Our Patients Say" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
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
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              "The team at NEORA has been incredibly supportive. My child's speech has 
              improved significantly since starting therapy here."
            </p>
            <p className="text-gray-800 font-semibold">- Sarah M.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
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
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              "Professional, caring, and effective. I highly recommend their audiology 
              services to anyone in need."
            </p>
            <p className="text-gray-800 font-semibold">- John D.</p>
          </div>
        </div>
        <div className="text-center">
          <Link 
            to="/testimonials" 
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            Read More Testimonials →
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Home;

