import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const [patients, setPatients] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [years, setYears] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const finalValues = {
    patients: 500,
    sessions: 2500,
    successRate: 95,
    years: 5
  };

  const animateValue = (start, end, duration, setter) => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      setter(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (hasAnimated) {
      animateValue(0, finalValues.patients, 2000, setPatients);
      animateValue(0, finalValues.sessions, 2000, setSessions);
      animateValue(0, finalValues.successRate, 2000, setSuccessRate);
      animateValue(0, finalValues.years, 2000, setYears);
    }
  }, [hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const RocketIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );

  const CalendarIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
      <path d="M16 2v4"/>
      <path d="M8 2v4"/>
      <path d="M3 10h18"/>
    </svg>
  );

  const TrophyIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  );

  const ClockIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  );

  const stats = [
    {
      icon: RocketIcon,
      value: patients,
      label: 'Patients Treated',
      maxValue: finalValues.patients,
      suffix: '+'
    },
    {
      icon: CalendarIcon,
      value: sessions,
      label: 'Sessions Completed',
      maxValue: finalValues.sessions,
      suffix: '+'
    },
    {
      icon: TrophyIcon,
      value: successRate,
      label: 'Success Rate',
      maxValue: finalValues.successRate,
      suffix: '%'
    },
    {
      icon: ClockIcon,
      value: years,
      label: 'Years of Experience',
      maxValue: finalValues.years,
      suffix: '+'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-8 sm:py-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Impact
        </motion.h2>

        <div className="relative px-4 sm:px-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 lg:hidden -translate-x-1/2"></div>
          <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-blue-600 lg:hidden -translate-x-1/2 animate-progress-line-vertical"></div>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            onViewportEnter={() => setHasAnimated(true)}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="relative mb-4 sm:mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: index * 0.1
                    }}
                  >
                    <motion.svg 
                      className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 -rotate-90"
                      animate={{ rotate: [0, 360] }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: index * 0.1
                      }}
                    >
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="4"
                        strokeDasharray="12 8"
                        className="opacity-90"
                      />
                    </motion.svg>
                    
                    <motion.div 
                      className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full shadow-xl flex flex-col items-center justify-center border-4 border-blue-100"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent 
                        className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600 stroke-[1.5] mb-1" 
                      />
                      <motion.div 
                        className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        {stat.value.toLocaleString()}{stat.suffix}
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-md"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.1
                      }}
                    ></motion.div>
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 px-2">
                      {stat.label}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes progress-line-vertical {
          0% {
            height: 0;
          }
          100% {
            height: 100%;
          }
        }

        .animate-progress-line-vertical {
          animation: progress-line-vertical 2.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Stats;

