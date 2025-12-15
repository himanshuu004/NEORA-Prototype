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
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 md:p-12 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <img
                    src="/Director/director.png"
                    alt="Clinic Director"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Dr. [Director Name]
                </h3>
                <p className="text-blue-600 font-semibold text-lg md:text-xl mb-6">
                  Clinic Director & Lead Speech Therapist
                </p>
                <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p>
                    Dr. [Director Name] brings over 15 years of extensive experience in speech therapy 
                    and audiology, with an unwavering passion for helping individuals overcome communication 
                    challenges. She holds a Doctorate in Speech-Language Pathology from [University Name] 
                    and is certified in multiple specialized treatment approaches including PROMPT, 
                    LSVT LOUD, and various augmentative and alternative communication (AAC) systems.
                  </p>
                  <p>
                    Her commitment to excellence and patient-centered care has made NEORA a 
                    trusted name in the community. Dr. [Director Name] believes in creating 
                    personalized treatment plans that address each patient's unique needs while 
                    fostering a supportive and encouraging environment. She works closely with 
                    families, schools, and other healthcare professionals to ensure comprehensive 
                    and coordinated care.
                  </p>
                  <p>
                    Beyond her clinical work, Dr. [Director Name] is actively involved in research 
                    and continuing education to ensure that NEORA always offers the most current and 
                    effective treatment methods available. She regularly presents at conferences, 
                    conducts workshops for other professionals, and stays at the forefront of 
                    evidence-based practices in speech-language pathology and audiology.
                  </p>
                  <p>
                    Her dedication to her patients and the field has earned her recognition from 
                    various professional organizations. She is a member of the American Speech-Language-Hearing 
                    Association (ASHA) and maintains active involvement in local and national 
                    professional communities.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold">
                    Speech-Language Pathology
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full text-sm font-semibold">
                    Audiology Specialist
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-sm font-semibold">
                    15+ Years Experience
                  </span>
                  <span className="bg-pink-100 text-pink-800 px-5 py-2 rounded-full text-sm font-semibold">
                    ASHA Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Mission">
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

