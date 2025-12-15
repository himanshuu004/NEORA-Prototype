import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <div className="relative min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Learn more about our clinic and our dedicated team of professionals
          </p>
        </div>
      </div>

      <Section title="About NEORA">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </Section>

      <Section title="Meet Our Director" bgColor="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Director Photo and Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-2xl opacity-30 transform scale-110"></div>
                <img
                  src="/Director/director.png"
                  alt="BASLP Priyanka Rawat - Director & Lead Therapist"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover border-8 border-white shadow-2xl"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">👩‍⚕️</span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                About the Director
              </h3>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              BASLP Priyanka Rawat
            </h4>
            <p className="text-blue-600 font-semibold text-lg md:text-xl mb-2">
              Director & Lead Therapist
            </p>
            <p className="text-indigo-600 font-semibold text-base md:text-lg">
              Founder – NEORA Therapy & Audiology Clinic
            </p>
          </div>

          {/* Content Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Introduction Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-2xl">👋</span>
                </div>
                <h5 className="text-xl font-bold text-gray-800">Introduction</h5>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                BASLP Priyanka Rawat is the Director and Lead Therapist at NEORA. She is a qualified and dedicated professional with a strong passion for helping individuals improve their communication, learning, and daily life skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                She works with children and adults and believes that therapy should be personalised, ethical, and focused on real progress, not just sessions.
              </p>
            </div>

            {/* Educational Background Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 border-t-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <h5 className="text-xl font-bold text-gray-800">Educational Background</h5>
              </div>
              <p className="font-semibold text-indigo-600 mb-3 text-base">
                BASLP (Bachelor in Audiology and Speech-Language Pathology)
              </p>
              <p className="text-gray-600 font-semibold mb-2 text-sm">Trained in:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Speech and Language Therapy</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Audiology basics</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Autism and developmental disorders</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Learning and communication difficulties</span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed">
                Her academic background, along with practical experience, helps her understand clients deeply and plan effective therapy.
              </p>
            </div>

            {/* Clinical Experience Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-2xl">💼</span>
                </div>
                <h5 className="text-xl font-bold text-gray-800">Clinical Experience</h5>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Priyanka Rawat has hands-on experience in working with individuals facing:
              </p>
              <div className="grid grid-cols-1 gap-2 mb-4">
                {[
                  'Speech and language delays',
                  'Autism Spectrum Disorder',
                  'ADHD and attention difficulties',
                  'Learning disabilities',
                  'Stammering and fluency issues',
                  'Voice and communication problems',
                  'Social communication challenges'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                She has worked closely with parents, caregivers, and individuals to design therapy plans that are realistic, achievable, and meaningful.
              </p>
            </div>

            {/* Therapy Philosophy Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 border-t-4 border-pink-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-2xl">💡</span>
                </div>
                <h5 className="text-xl font-bold text-gray-800">Therapy Philosophy</h5>
              </div>
              <p className="text-gray-700 font-semibold mb-3 italic">
                Therapy should improve not only skills, but also confidence and quality of life.
              </p>
              <p className="text-gray-600 text-sm mb-3">Her approach is:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold">Holistic</span>
                <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-semibold">Individual-centred</span>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold">Goal-oriented</span>
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-xs font-semibold">Family-inclusive</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                She focuses on understanding the person first, and then building therapy around their needs, strengths, and daily routine.
              </p>
            </div>

            {/* Vision Behind NEORA Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 border-t-4 border-cyan-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-2xl">🌟</span>
                </div>
                <h5 className="text-xl font-bold text-gray-800">Vision Behind NEORA</h5>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                NEORA was founded by BASLP Priyanka Rawat with a clear vision:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'To provide quality therapy without shortcuts',
                  'To create a safe and respectful environment',
                  'To offer therapy for all age groups',
                  'To ensure proper progress tracking and transparency'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed">
                She wanted to build a clinic where therapy is given time, care, and honesty.
              </p>
            </div>

            {/* Role as Director Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 border-t-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h5 className="text-xl font-bold text-gray-800">Role as Director</h5>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                As the Director of NEORA, she is actively involved in:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Assessment and therapy planning',
                  'Conducting therapy sessions',
                  'Monitoring client progress',
                  'Guiding parents and families',
                  'Maintaining therapy quality and standards'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed">
                She ensures that every individual at NEORA receives genuine care and professional support.
              </p>
            </div>
          </div>

          {/* Message from Director - Full Width Card */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-5xl mr-4">💬</span>
                <h5 className="text-2xl md:text-3xl font-bold">Message from the Director</h5>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                <p className="text-lg md:text-xl leading-relaxed italic">
                  "At NEORA, our aim is not just therapy, but growth.
                  We walk together with families and individuals on their journey towards better communication, independence, and confidence."
                </p>
                <p className="mt-6 text-base md:text-lg font-semibold">— BASLP Priyanka Rawat</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Preview Section */}
      <Section title="Our Clinic Gallery" bgColor="bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-8 text-lg">
            Take a look at our welcoming clinic environment and facilities
          </p>
          
          {/* Gallery Grid - Show 6 images as preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              '/images/005c7ff0-5885-426a-9a03-f846973c7987.JPG',
              '/images/2296b393-0309-42ba-b6cc-405569f55368.JPG',
              '/images/46d06ad3-baa1-4ea7-bdcb-37cff039943c.JPG',
              '/images/494bd119-204d-4c5f-9b19-29fb0ae98677.JPG',
              '/images/5bfe9bd1-6666-4281-8420-072ba3d40132.JPG',
              '/images/79ab4111-df96-4bd8-806d-929e963fc0b2.JPG',
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer aspect-square"
              >
                <img
                  src={image}
                  alt={`Gallery preview ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <span>View Full Gallery</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      <Section title="Our Mission" bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed">
              To empower individuals of all ages to achieve their full communication potential 
              through compassionate, evidence-based care and personalized treatment approaches.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;

