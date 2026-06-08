'use client';

import { motion } from 'framer-motion';
import { 
  Trophy, 
  Rocket, 
  Cloud, 
  Award, 
  Target, 
  Zap,
  Users,
  Code,
  Database,
  Shield,
  Settings
} from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'IBM Java Developer Professional',
      description: 'Completed IBM Java Developer Professional certification covering enterprise Java development.',
      icon: Trophy,
      color: 'from-blue-500 to-cyan-500',
      category: 'Certification',
      details: [
        'Enterprise Java development best practices',
        'Spring Boot and REST API design',
        'Database integration and JPA',
        'Microservices architecture'
      ]
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Target },
    { label: 'Hackathons Participated', value: '5+', icon: Code },
    { label: 'Team Members Collaborated', value: '8+', icon: Users },
    { label: 'Technologies Learned', value: '15+', icon: Zap },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Achievements</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Key milestones and accomplishments that showcase my expertise and impact.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'IBM Java Developer Professional',
                provider: 'IBM',
                icon: Code,
                color: 'from-blue-500 to-cyan-500',
                url: 'https://www.coursera.org/account/accomplishments/specialization/S27SHMFNJHH8'
              },
              {
                title: 'Microsoft Back-End Developer Professional',
                provider: 'Microsoft',
                icon: Settings,
                color: 'from-green-500 to-emerald-500',
                url: 'https://www.coursera.org/account/accomplishments/specialization/9VM4EQXPLP5N'
              },
              {
                title: 'AWS Fundamentals Specialization',
                provider: 'Amazon Web Services',
                icon: Trophy,
                color: 'from-orange-500 to-yellow-500',
                url: 'https://www.coursera.org/account/accomplishments/specialization/T941NJ0HT4IL'
              }
            ].map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center card-hover block"
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center`}>
                  <cert.icon size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm">{cert.title}</h4>
                <p className="text-gray-400 text-xs">{cert.provider}</p>
                <div className="mt-3 text-blue-400 text-xs font-medium">
                  View Certificate →
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
