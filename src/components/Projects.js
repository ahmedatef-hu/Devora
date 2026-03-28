import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Cench Shop',
      category: 'E-Commerce',
      description: 'Modern e-commerce platform with seamless shopping experience',
      fullDescription:
        'Built a comprehensive e-commerce platform featuring real-time inventory management, secure payment processing, user authentication, and an intuitive shopping interface. Optimized for performance and user experience.',
      image: '/Projects-Photo/cench.shop.png',
      link: 'https://cench.shop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'DXLR Egypt',
      category: 'Corporate Website',
      description: 'Professional corporate website with modern design',
      fullDescription:
        'Developed a sleek corporate website showcasing company services, portfolio, and contact information. Features responsive design, smooth animations, and optimized performance for all devices.',
      image: '/Projects-Photo/dxlr-eg.com.png',
      link: 'https://dxlr-eg.com',
      tags: ['React', 'TailwindCSS', 'Framer Motion'],
    },
    {
      id: 3,
      title: 'NXTR Egypt',
      category: 'Corporate Website',
      description: 'Business website with elegant design and functionality',
      fullDescription:
        'Created a professional business website with focus on user experience, modern aesthetics, and seamless navigation. Features include service showcases, portfolio gallery, and contact forms.',
      image: '/Projects-Photo/nxtr-eg.com.png',
      link: 'https://nxtr-eg.com',
      tags: ['React', 'Next.js', 'TailwindCSS'],
    },
    {
      id: 4,
      title: 'Slate Egypt',
      category: 'E-Commerce',
      description: 'Shopify-powered online store with custom features',
      fullDescription:
        'Created a custom Shopify store with unique design elements, enhanced product filtering, and seamless checkout experience. Integrated with multiple payment gateways and shipping providers.',
      image: '/Projects-Photo/slate-egy.myshopify.com.png',
      link: 'https://slate-egy.myshopify.com',
      tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    },
    {
      id: 5,
      title: 'SN2 Studios',
      category: 'Creative Agency',
      description: 'Portfolio website for creative studio',
      fullDescription:
        'Designed and developed a stunning portfolio website for a creative studio, featuring interactive galleries, smooth transitions, and a modern aesthetic that showcases their work beautifully.',
      image: '/Projects-Photo/sn2studios.co.png',
      link: 'https://sn2studios.co',
      tags: ['React', 'Next.js', 'GSAP', 'Three.js'],
    },
    {
      id: 6,
      title: 'Twenty Two (Vercel)',
      category: 'Web Application',
      description: 'Modern web application with cutting-edge features',
      fullDescription:
        'Developed a feature-rich web application with real-time updates, user authentication, and interactive UI components. Deployed on Vercel for optimal performance and scalability.',
      image: '/Projects-Photo/twenty-two22.vercel.app.png',
      link: 'https://twenty-two22.vercel.app',
      tags: ['Next.js', 'React', 'Vercel', 'API'],
    },
    {
      id: 7,
      title: 'Twenty Two Egypt',
      category: 'Business Website',
      description: 'Professional business website with elegant design',
      fullDescription:
        'Built a professional business website with focus on user experience, fast loading times, and SEO optimization. Features include service showcases, testimonials, and contact forms.',
      image: '/Projects-Photo/twentytwoeg.com.png',
      link: 'https://twentytwoeg.com',
      tags: ['React', 'TailwindCSS', 'Node.js'],
    },
    {
      id: 8,
      title: 'Greadz',
      category: 'Platform',
      description: 'Innovative platform with advanced functionality',
      fullDescription:
        'Created an innovative platform with advanced features including user dashboards, data visualization, and real-time collaboration tools. Built with scalability and performance in mind.',
      image: '/Projects-Photo/www.greadz.com.png',
      link: 'https://www.greadz.com',
      tags: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
    },
    {
      id: 9,
      title: 'Yehia Portfolio',
      category: 'Personal Portfolio',
      description: 'Creative portfolio showcasing design and development work',
      fullDescription:
        'Designed and developed a unique personal portfolio website with creative animations, interactive elements, and a clean modern design that effectively showcases projects and skills.',
      image: '/Projects-Photo/yehia.vercel.app.png',
      link: 'https://yehia.vercel.app',
      tags: ['Next.js', 'Framer Motion', 'TailwindCSS'],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-purple-950 transition-colors overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20"
        />
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
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
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
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
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-lg opacity-60"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10 text-white text-sm md:text-base font-bold tracking-wide">
                Our Portfolio
              </span>
            </motion.div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-gray-900 dark:text-white">
            Our{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Projects
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur-2xl"
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
            Showcasing our latest work and successful client collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
              />
              
              {/* Card */}
              <div className="relative h-full flex flex-col bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 group-hover:shadow-2xl group-hover:border-purple-300/50 dark:group-hover:border-purple-600/50">
                {/* Image container */}
                <div className="relative overflow-hidden h-56">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* View Details overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="px-6 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full shadow-2xl"
                    >
                      <span className="text-gray-900 dark:text-white font-bold flex items-center gap-2">
                        <FiExternalLink className="text-purple-600" />
                        View Details
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold font-poppins mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Bottom gradient line */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full my-8 shadow-2xl overflow-hidden"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-60"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Content wrapper */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
                {/* Image header with overlay */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Category badge */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-6 left-6"
                  >
                    <span className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-xl backdrop-blur-sm">
                      {selectedProject.category}
                    </span>
                  </motion.div>
                  
                  {/* Close button */}
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="fixed top-20 right-4 md:absolute md:top-6 md:right-6 p-3 md:p-3 bg-white dark:bg-gray-900 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all group z-50 border-2 border-gray-200 dark:border-gray-700"
                  >
                    <FiX size={28} className="text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors" />
                  </motion.button>
                  
                  {/* Title at bottom of image */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <h3 className="text-4xl md:text-5xl font-bold font-poppins text-white drop-shadow-2xl">
                      {selectedProject.title}
                    </h3>
                  </motion.div>
                </div>
                
                {/* Content section */}
                <div className="p-8 md:p-10">
                  {/* Description */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                      About This Project
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {selectedProject.fullDescription}
                    </p>
                  </motion.div>
                  
                  {/* Technologies */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 300 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="relative group/tag"
                        >
                          {/* Tag glow */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover/tag:opacity-50 transition-opacity" />
                          <span className="relative px-5 py-2.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold text-sm shadow-lg">
                            {tag}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Action buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-center"
                  >
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn relative w-full sm:w-auto"
                    >
                      {/* Button glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                      
                      {/* Button content */}
                      <div className="relative flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl font-bold shadow-xl">
                        <FiExternalLink size={20} />
                        <span>View Live Project</span>
                      </div>
                    </motion.a>
                  </motion.div>
                </div>
                
                {/* Bottom gradient line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
