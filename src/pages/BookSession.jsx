import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookSession = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    kidName: '',
    condition: '',
    email: '',
    phone: '',
    selectedDate: '',
    message: ''
  });

  const conditions = [
    'Speech and Language Delay',
    'Autism Spectrum Disorder (ASD)',
    'ADHD and Attention Difficulties',
    'Learning Disabilities',
    'Stammering and Fluency Issues',
    'Voice and Communication Problems',
    'Social Communication Challenges',
    'Hearing Impairment',
    'Articulation Disorders',
    'Language Development Issues',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateSelect = (date) => {
    setFormData({
      ...formData,
      selectedDate: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Session booking request submitted! We will contact you soon.');
  };

  // Generate calendar dates (next 30 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isDateSelected = (date) => {
    if (!formData.selectedDate) return false;
    const selected = new Date(formData.selectedDate);
    return date.toDateString() === selected.toDateString();
  };

  return (
    <div>
      <div className="relative min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Book a Session
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Schedule your appointment with our expert therapists
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* Parent and Kid Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Parent/Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Child's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="kidName"
                    value={formData.kidName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter child's name"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              {/* Condition/Problem Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Condition/Problem <span className="text-red-500">*</span>
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select a condition or problem</option>
                  {conditions.map((condition, index) => (
                    <option key={index} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional Message */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please provide any additional details about the condition or specific concerns..."
                />
              </div>

              {/* Calendar Section */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-4">
                  Select Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
                    {dates.map((date, index) => {
                      const isSelected = isDateSelected(date);
                      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleDateSelect(date.toISOString().split('T')[0])}
                          disabled={isWeekend}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105'
                              : isWeekend
                              ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md'
                          }`}
                        >
                          <div className="text-xs font-semibold mb-1">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <div className="text-lg font-bold">
                            {date.getDate()}
                          </div>
                          <div className="text-xs">
                            {date.toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Note: Sessions are available Monday to Friday. Weekends are not available for booking.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Session
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-gray-800 mb-3">📋 What Happens Next?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">1.</span>
                <span>We'll review your booking request within 24 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">2.</span>
                <span>Our team will contact you to confirm the appointment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">3.</span>
                <span>You'll receive a confirmation email with session details</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookSession;




