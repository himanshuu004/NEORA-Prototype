import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Sessions = () => {
  return (
    <div>
      <div className="relative min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Sessions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Understanding how our therapy sessions work
          </p>
        </div>
      </div>

      <Section title="How Our Sessions Work">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Initial Assessment</h3>
              <p className="text-gray-700 leading-relaxed">
                We begin with a comprehensive evaluation to understand your specific needs, 
                communication goals, and medical history. This helps us create a personalized 
                treatment plan tailored just for you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Treatment Plan</h3>
              <p className="text-gray-700 leading-relaxed">
                Based on the assessment, we develop a customized treatment plan with clear 
                goals and milestones. We discuss the plan with you and your family to ensure 
                everyone is aligned.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Regular Sessions</h3>
              <p className="text-gray-700 leading-relaxed">
                We conduct regular therapy sessions, typically once or twice a week, depending 
                on your needs. Each session is designed to make progress toward your goals 
                while keeping you engaged and motivated.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Progress Tracking</h3>
              <p className="text-gray-700 leading-relaxed">
                We continuously monitor your progress and adjust the treatment plan as needed. 
                Regular check-ins ensure we're on track and celebrate your achievements along 
                the way.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Session Details" bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-blue-600 mr-3">⏱️</span>
                  Session Duration
                </h3>
                <p className="text-gray-700 text-lg">
                  Most sessions last between 45-60 minutes, depending on your treatment plan 
                  and specific needs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-indigo-600 mr-3">📅</span>
                  Frequency
                </h3>
                <p className="text-gray-700 text-lg">
                  Sessions are typically scheduled once or twice per week. We work with your 
                  schedule to find the best times for you.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-purple-600 mr-3">🏠</span>
                  Location Options
                </h3>
                <p className="text-gray-700 text-lg">
                  We offer in-person sessions at our clinic, as well as convenient telehealth 
                  options for those who prefer virtual sessions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-pink-600 mr-3">💼</span>
                  What to Expect
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Each session includes:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Targeted exercises and activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Real-time feedback and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Progress review and goal setting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Home practice recommendations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg mb-6">
                  Contact us today to schedule your initial assessment
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+1234567890" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
                  >
                    Book Session
                  </a>
                  <a 
                    href="mailto:contact@neora.com" 
                    className="bg-blue-700/50 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 border-2 border-white/50"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Sessions;

