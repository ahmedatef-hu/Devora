import { motion } from 'framer-motion';
import { FiCode, FiMonitor, FiCpu, FiTrendingUp, FiArrowRight, FiZap } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode size={56} />,
      title: 'Web Development',
      description:
        'Modern, responsive websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js.',
      gradient: 'from-blue-500 via-cyan-400 to-teal-400',
      darkGradient: 'from-blue-600 via-cyan-500 to-teal-500',
      glowColor: '#3b82f6',
    },
    {
      icon: <FiMonitor size={56} />,
      title: 'Desktop Applications',
      description:
        'Powerful cross-platform desktop applications using Electron, .NET, and native technologies for optimal performance.',
      gradient: 'from-purple-500 via-pink-500 to-rose-400',
      darkGradient: 'from-purple-600 via-pink-600 to-rose-500',
      glowColor: '#a855f7',
    },
    {
      icon: <FiCpu size={56} />,
      title: 'Custom Programming',
      description:
        'Tailored software solutions, APIs, automation scripts, and backend systems designed to meet your specific needs.',
      gradient: 'from-orange-500 via-amber-400 to-yellow-400',
      darkGradient: 'from-orange-600 via-amber-500 to-yellow-500',
      glowColor: '#f97316',
    },
    {
      icon: <FiTrendingUp size={56} />,
      title: 'Startup Consulting',
      description:
        'Strategic technical guidance, MVP development, and scalable architecture planning to accelerate your startup journey.',
      gradient: 'from-emerald-500 via-green-400 to-lime-400',
      darkGradient: 'from-emerald-600 via-green-500 to-lime-500',
      glowColor: '#10b981',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 via-pink-500 to-rose-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 dark:opacity-15"
        />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${services[i % 4].glowColor}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
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
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
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
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-60"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10 flex items-center gap-2 text-white text-sm md:text-base font-bold tracking-wide">
                <FiZap className="text-yellow-300" />
                What We Offer
                <FiZap className="text-yellow-300" />
              </span>
            </motion.div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-gray-900 dark:text-white">
            Our{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Services
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl"
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
            Comprehensive technology solutions tailored to bring your vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Subtle glow on hover */}
              <motion.div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)`,
                }}
              />
              
              {/* Card */}
              <div className="relative h-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-8 rounded-3xl shadow-xl border-2 border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-gray-300/70 dark:group-hover:border-gray-600/70">
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Corner accent */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl transition-opacity group-hover:opacity-20`} />
                
                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6 inline-block"
                >
                  {/* Icon glow */}
                  <div className={`absolute -inset-3 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  {/* Icon box */}
                  <div className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                    <div className="text-white drop-shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-poppins mb-4 text-gray-900 dark:text-white relative z-10 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
                
                {/* Learn more link */}
                <motion.div
                  className="relative inline-flex items-center gap-2 text-sm font-bold z-10 cursor-pointer group/btn"
                  whileHover={{ x: 5 }}
                >
                  <span className={`relative bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-bold`}>
                    Learn More
                  </span>
                  
                  <motion.div
                    className={`relative text-lg bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    <FiArrowRight />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
