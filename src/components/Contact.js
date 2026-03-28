import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiInstagram, FiPhone } from 'react-icons/fi';
import { SiTiktok, SiWhatsapp} from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const socialLinks = [
    { icon: <FiInstagram size={24} />, url: 'https://www.instagram.com/devora.build?igsh=ZWJzMG4zZWNycmJi&utm_source=qr', label: 'Instagram' },
    { icon: <SiTiktok size={24} />, url: 'https://www.tiktok.com/@devora.build?_r=1&_t=ZS-954Pcl5Y7ZH', label: 'TikTok' },
    { icon: <SiWhatsapp size={24} />, url: 'https://wa.me/201065733948', label: 'WhatsApp' },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20"
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
            className="inline-block mb-6"
          >
            <motion.div
              className="relative px-6 py-2.5 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-lg opacity-60"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10 text-white text-sm md:text-base font-bold tracking-wide">
                Let's Connect
              </span>
            </motion.div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-gray-900 dark:text-white">
            Get in{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Touch
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 blur-2xl"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Form glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <form onSubmit={handleSubmit} className="relative space-y-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold mb-3 text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <div className="relative group/input">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-blue-600 transition-colors" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold mb-3 text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <div className="relative group/input">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-blue-600 transition-colors" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold mb-3 text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <div className="relative group/input">
                  <FiMessageSquare className="absolute left-4 top-5 text-gray-400 group-focus-within/input:text-blue-600 transition-colors" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder:text-gray-400"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative w-full"
              >
                {/* Button glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                
                {/* Button content */}
                <div className="relative py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend size={20} />
                    </>
                  )}
                </div>
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-center font-semibold"
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="relative group">
              {/* Card glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-blue-200/50 dark:border-gray-600/50">
                <h3 className="text-3xl font-bold font-poppins mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Let's Build Something Amazing
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  Whether you're a startup looking to launch your MVP or an established
                  business seeking to modernize your tech stack, we're here to help.
                  Our team is ready to turn your vision into reality.
                </p>

                <div className="space-y-6 mb-8">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-50 group-hover/item:opacity-100 transition-opacity" />
                      <div className="relative w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <FiMail className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Email</p>
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=devora.build.official@gmail.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        devora.build.official@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-50 group-hover/item:opacity-100 transition-opacity" />
                      <div className="relative w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <FiPhone className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Phone</p>
                      <a href="tel:+201065733948" className="font-bold text-lg text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        +20 106 573 3948
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <p className="text-sm font-bold mb-5 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                    Follow Us
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.15, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/social relative"
                        aria-label={social.label}
                      >
                        {/* Icon glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover/social:opacity-60 transition-opacity" />
                        
                        <div className="relative w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover/social:bg-gradient-to-r group-hover/social:from-blue-600 group-hover/social:to-purple-600 group-hover/social:text-white transition-all shadow-lg">
                          {social.icon}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
