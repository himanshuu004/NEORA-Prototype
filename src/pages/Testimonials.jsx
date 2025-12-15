import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      image: "👩",
      text: "NEORA ki team bahut supportive hai. Meri beti ki speech mein bohot improvement aayi hai. The therapists are very patient and understanding. Main unke progress se bahut khush hoon.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      image: "👨",
      text: "Professional aur caring team hai. Maine unke audiology services use kiye aur hearing aid fitting process bahut smooth tha. Follow-up care bhi excellent hai. Highly recommend!",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Parent",
      image: "👩",
      text: "NEORA mein hamara experience outstanding raha hai. Speech therapy sessions bahut engaging hain aur mere bete ka progress dekh kar main bahut khush hoon. Thank you so much!",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Patient",
      image: "👨",
      text: "Stroke ke baad communication mein problem ho rahi thi. NEORA ki team ne meri confidence wapas laane mein madad ki. Unka expertise aur compassion bahut helpful raha. Main unka aabhari hoon.",
      rating: 5
    },
    {
      name: "Sunita Reddy",
      role: "Parent",
      image: "👩",
      text: "Pediatric services bahut acchi hain. Wo hamare saath aur school ke saath bhi coordinate karte hain. The therapists are knowledgeable aur supportive environment banate hain. Very happy!",
      rating: 5
    },
    {
      name: "Amit Verma",
      role: "Patient",
      image: "👨",
      text: "Telehealth services use kar raha hoon aur yeh bahut convenient hai. Quality of care bilkul same hai jaise in-person sessions. Busy schedule wale logon ke liye perfect hai.",
      rating: 5
    },
    {
      name: "Deepika Mehta",
      role: "Parent",
      image: "👩",
      text: "My son was struggling with stammering, but after therapy at NEORA, uska confidence badh gaya hai. Priyanka mam ka approach bahut systematic hai. Therapy se real improvement dikh rahi hai.",
      rating: 5
    },
    {
      name: "Ramesh Agarwal",
      role: "Parent",
      image: "👨",
      text: "Autism ke liye therapy chahiye thi. NEORA mein unki approach bahut holistic hai - family ko bhi involve karte hain. Progress tracking bhi regular hoti hai. Very professional team.",
      rating: 5
    },
    {
      name: "Kavita Desai",
      role: "Parent",
      image: "👩",
      text: "Meri chhoti beti ko language delay thi. NEORA mein therapy start ki aur ab wo words clearly bol rahi hai. Therapists sabse acche hain aur har session mein improvement dikhti hai.",
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
              <Link 
                to="/book-session" 
                className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Book Your Session
              </Link>
              <Link 
                to="/contact" 
                className="bg-blue-700/50 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 border-2 border-white/50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Testimonials;

