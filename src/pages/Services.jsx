import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: "🎤",
      title: "Speech Therapy",
      description: "Comprehensive speech and language assessment and therapy for children and adults. We address articulation, language disorders, fluency, and voice concerns.",
      features: ["Articulation Therapy", "Language Development", "Voice Therapy", "Fluency Training"]
    },
    {
      icon: "👂",
      title: "Audiology Services",
      description: "Complete hearing evaluations, hearing aid fittings, and auditory rehabilitation services. We help you hear better and live better.",
      features: ["Hearing Assessments", "Hearing Aid Fitting", "Tinnitus Management", "Auditory Training"]
    },
    {
      icon: "💬",
      title: "Language Therapy",
      description: "Specialized language therapy for children and adults with communication challenges. Personalized programs for optimal results.",
      features: ["Child Language Therapy", "Adult Language Therapy", "AAC Support", "Social Communication"]
    },
    {
      icon: "🧠",
      title: "Cognitive Therapy",
      description: "Evidence-based cognitive-communication therapy to help individuals regain and improve cognitive skills after injury or illness.",
      features: ["Memory Training", "Attention Therapy", "Problem-Solving Skills", "Executive Function"]
    },
    {
      icon: "👶",
      title: "Pediatric Services",
      description: "Specialized care for children from infancy through adolescence. Early intervention and family-centered approaches.",
      features: ["Early Intervention", "Child Development", "Parent Training", "School Collaboration"]
    },
    {
      icon: "📞",
      title: "Telehealth Services",
      description: "Convenient online therapy sessions from the comfort of your home. Same quality care, accessible from anywhere.",
      features: ["Virtual Sessions", "Flexible Scheduling", "Remote Assessments", "Home Programs"]
    }
  ];

  return (
    <div>
      <div className="relative min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive care for all your speech and hearing needs
          </p>
        </div>
      </div>

      <Section title="What We Offer" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 sm:p-6">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:scale-105 text-sm sm:text-base min-h-[44px]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why Choose Us">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Certified and experienced professionals dedicated to your success
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                Customized treatment plans tailored to your unique needs and goals
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Evidence-based approaches that deliver measurable improvements
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Services;

