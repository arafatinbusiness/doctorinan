
import React from 'react';
import FacebookIcon from './icons/FacebookIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">DoctorInan</h3>
            <p className="mt-2 text-gray-400 text-sm">Your health partner for online medical consultations in Bangladesh.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#admin" className="text-base text-gray-400 hover:text-white">Admin Panel</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">+8801628617785</a></li>
              <li>
                <a 
                  href="https://www.facebook.com/share/1ajBcybtbD/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 transition-colors duration-200"
                >
                  <FacebookIcon className="w-5 h-5" />
                  <span className="font-medium">Follow us on Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DoctorInan. All rights reserved.</p>
          <p className="mt-2">
            Website developed by{' '}
            <a
              href="https://labinitial.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline font-medium"
            >
              labinitial.com
            </a>
            {' '}– Web Development & SEO Agency | Founder: Arafat Hossain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
