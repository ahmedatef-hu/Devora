import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiMail } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 text-gray-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <img 
                src="/Devora-logo.png"
                alt="Devora Logo" 
                className="h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
              Transforming ideas into powerful digital solutions. Your trusted partner
              in web development, desktop applications, and innovative programming.
            </p>
            <motion.a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=devora.build.official@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
            >
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                <FiMail size={18} />
              </div>
              <span className="text-sm font-medium">devora.build.official@gmail.com</span>
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest updates and tech insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white text-sm placeholder:text-gray-500 transition-all"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/50"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Devora. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <motion.button 
              onClick={() => alert('Privacy Policy page coming soon')} 
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </motion.button>
            <motion.button 
              onClick={() => alert('Terms of Service page coming soon')} 
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 z-40 transition-all"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <FiArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
