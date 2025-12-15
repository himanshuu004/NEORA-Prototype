import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedOut } from '@clerk/clerk-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Sessions from './pages/Sessions';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import BookSession from './pages/BookSession';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Authentication Routes */}
        <Route 
          path="/login" 
          element={
            <SignedOut>
              <Login />
            </SignedOut>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <SignedOut>
              <SignUp />
            </SignedOut>
          } 
        />
        
        {/* Protected Routes - Only accessible when signed in */}
        <Route 
          path="/book-session" 
          element={
            <ProtectedRoute>
              <BookSession />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

