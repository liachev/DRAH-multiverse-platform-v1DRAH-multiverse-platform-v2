import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message. We will get back to you soon!');
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our properties or services? Fill out the form and our team will get back to you as soon as possible.
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday-Friday: 6:30 AM - 3:30 PM</p>
            <p className="text-gray-600">Saturday: 7:00 AM - 3:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Email:</span> info@multiverseplatform.com
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Phone:</span> (555) 123-4567
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Address:</span> 123 Real Estate Blvd, Suite 100, City, State 12345
            </p>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
