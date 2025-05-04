import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: (312) 555-0199</p>
            <p className="mb-2">123 Main Street, Chicago, IL 60601</p>
            <p className="mb-2">Email: info@breezehomesolutions.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
            <p className="mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="mb-2">Saturday: 9:00 AM - 4:00 PM</p>
            <p className="mb-2">Sunday: Closed</p>
            <p className="mt-4">Emergency services available 24/7</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Breeze Home Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
