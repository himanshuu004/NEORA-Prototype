import { motion } from 'framer-motion';
import { FaMicrophone, FaHeadphones, FaComments, FaUserMd, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { HiSpeakerWave, HiAcademicCap } from 'react-icons/hi2';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: FaMicrophone,
      title: "Speech Therapy",
      description: "Comprehensive speech and language assessment and therapy for children and adults with personalized treatment plans.",
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-600"
    },
    {
      icon: FaHeadphones,
      title: "Audiology Services",
      description: "Hearing evaluations, hearing aid fittings, and auditory rehabilitation services for all age groups.",
      gradient: "from-indigo-500 to-purple-500",
      color: "text-indigo-600"
    },
    {
      icon: FaComments,
      title: "Language Therapy",
      description: "Specialized language therapy for children and adults with communication challenges and learning difficulties.",
      gradient: "from-purple-500 to-pink-500",
      color: "text-purple-600"
    },
    {
      icon: FaUserMd,
      title: "Occupational Therapy",
      description: "Supporting daily living skills, fine motor development, and sensory integration for better independence.",
      gradient: "from-pink-500 to-rose-500",
      color: "text-pink-600"
    },
    {
      icon: FaGraduationCap,
      title: "Special Education",
      description: "Individualized educational support and learning strategies tailored to each child's unique needs.",
      gradient: "from-cyan-500 to-teal-500",
      color: "text-cyan-600"
    },
    {
      icon: FaHeart,
      title: "Early Intervention",
      description: "Early detection and intervention services for infants and toddlers to support optimal development.",
      gradient: "from-teal-500 to-emerald-500",
      color: "text-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const testimonials = [
    {
      text: "NEORA has been a blessing for our family. My daughter's speech has improved tremendously in just 3 months. Priyanka ma'am is so patient and understanding. Highly recommended!",
      author: "Priya Sharma",
      location: "Dehradun"
    },
    {
      text: "The team at NEORA is professional and caring. My son was struggling with language development, and now he's communicating much better. The therapy sessions are engaging and fun for kids.",
      author: "Rajesh Kumar",
      location: "Dehradun"
    },
    {
      text: "Excellent audiology services! The hearing assessment was thorough, and the follow-up care is outstanding. My mother's hearing aid fitting was perfect. Thank you NEORA team!",
      author: "Anita Singh",
      location: "Dehradun"
    },
    {
      text: "We've been coming to NEORA for occupational therapy, and the progress is remarkable. The therapists understand our child's needs and create personalized plans. Very satisfied!",
      author: "Vikram Mehta",
      location: "Dehradun"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <Stats />

      {/* About Us Section */}
      <Section title="About Us" bgColor="bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Welcome to <strong className="text-blue-600">NEORA</strong>, a leading speech therapy and audiology clinic 
              dedicated to helping individuals of all ages improve their communication and hearing abilities. We provide 
              comprehensive therapeutic services including Speech Therapy, Audiology, Language Therapy, Occupational Therapy, 
              Special Education, and Early Intervention.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Our team of experienced professionals is committed to providing personalized care and evidence-based 
              treatments to help you achieve your communication goals. We believe in a holistic, individual-centered, 
              goal-oriented, and family-inclusive approach to therapy.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              With years of experience and a passion for helping others, we strive to create a welcoming and supportive 
              environment where every patient feels valued and empowered on their journey to better communication and 
              improved quality of life.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Meet Our Director Section - Modern & Professional */}
      <Section title="Meet Our Director" bgColor="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:flex">
              <div className="md:w-2/5 p-6 sm:p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/Director/director.png')] bg-cover bg-center opacity-10"></div>
                <motion.div 
                  className="w-full max-w-xs relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
                    <img
                      src="/Director/director.png"
                      alt="BASLP Priyanka Rawat - Director & Lead Therapist"
                      className="w-full h-auto rounded-2xl shadow-2xl object-cover relative z-10 border-4 border-white/50"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="md:w-3/5 p-6 sm:p-8 md:p-12 bg-white">
                <motion.div 
                  className="flex items-center mb-4 sm:mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                    <HiAcademicCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      About the Director
                    </h3>
                  </div>
                </motion.div>
                <motion.h4 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  BASLP Priyanka Rawat
                </motion.h4>
                <motion.p 
                  className="text-indigo-600 font-semibold mb-2 text-sm sm:text-base md:text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Founder – NEORA Therapy & Audiology Clinic
                </motion.p>
                <motion.p 
                  className="text-blue-600 font-semibold mb-4 sm:mb-6 text-sm sm:text-base md:text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Director & Lead Therapist
                </motion.p>
                <motion.div 
                  className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <p>
                    BASLP Priyanka Rawat is the Director and Lead Therapist at NEORA. She is a qualified 
                    and dedicated professional with a strong passion for helping individuals improve their 
                    communication, learning, and daily life skills.
                  </p>
                  <p>
                    She works with children and adults and believes that therapy should be personalised, 
                    ethical, and focused on real progress, not just sessions. Her approach is holistic, 
                    individual-centred, goal-oriented, and family-inclusive.
                  </p>
                </motion.div>
                <motion.div 
                  className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-blue-200 shadow-sm">
                    BASLP Certified
                  </span>
                  <span className="bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-indigo-200 shadow-sm">
                    Speech & Language Therapy
                  </span>
                  <span className="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-purple-200 shadow-sm">
                    Audiology Specialist
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/about" 
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl"
                    >
                      Learn More About Our Director
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Gallery Preview Section - Only 4 Photos */}
      <Section title="Our Clinic Gallery" bgColor="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.p 
            className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Take a look at our welcoming clinic environment and facilities
          </motion.p>
          
          {/* Gallery Grid - Only 4 images */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              '/images/005c7ff0-5885-426a-9a03-f846973c7987.JPG',
              '/images/2296b393-0309-42ba-b6cc-405569f55368.JPG',
              '/images/46d06ad3-baa1-4ea7-bdcb-37cff039943c.JPG',
              '/images/494bd119-204d-4c5f-9b19-29fb0ae98677.JPG',
            ].map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image}
                  alt={`Gallery preview ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Explore More Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/gallery"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group min-h-[44px]"
              >
                <span>Explore More</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Services Section with Icons */}
      <Section title="Our Services" bgColor="bg-white">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`bg-gradient-to-br ${service.gradient} p-6 sm:p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className={`text-5xl sm:text-6xl mx-auto mb-4 ${service.color} drop-shadow-lg`} />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white relative z-10 drop-shadow-md">{service.title}</h3>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/services"
                      className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm sm:text-base min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg"
                    >
                      View Details
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/services" 
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base md:text-lg transition-colors"
          >
            View All Services →
          </Link>
        </motion.div>
      </Section>

      <Section title="How Our Sessions Work">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { num: 1, title: "Initial Assessment", desc: "Understanding your needs and goals", color: "bg-blue-600" },
                { num: 2, title: "Treatment Plan", desc: "Personalized approach for you", color: "bg-indigo-600" },
                { num: 3, title: "Regular Sessions", desc: "Consistent progress tracking", color: "bg-purple-600" },
                { num: 4, title: "Ongoing Support", desc: "Continuous care and follow-up", color: "bg-pink-600" },
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0 shadow-lg`}>
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-700">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/sessions"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm sm:text-base min-h-[44px] flex items-center"
                >
                  Learn More About Sessions
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Reviews from Families Section */}
      <Section title="Reviews from Families" bgColor="bg-gray-50">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 md:p-8 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 italic mb-3 sm:mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-sm sm:text-base text-gray-800 font-semibold">- {testimonial.author}</p>
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/testimonials" 
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base md:text-lg transition-colors"
          >
            Read More Reviews →
          </Link>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
};

export default Home;
