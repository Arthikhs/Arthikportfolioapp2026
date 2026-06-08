'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

const Projects = () => {

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'Job Portal – Distributed Recruitment Platform',
      description: 'Distributed recruitment platform with secure REST APIs, JWT Authentication, and event-driven communication via Apache Kafka for recruiter and candidate workflows.',
      techStack: ['Next.js', 'PostgreSQL', 'Redis', 'Microservices', 'Kafka', 'JWT'],
      githubUrl: 'https://github.com/Arthikhs/Build-a-Job-Portal-with-Microservices-Next.js-Node.js-Kafka-PostgreSQL-TypeScript-Tutoria',
      liveUrl: '#',
      image: '/jobportal.png',
      featured: true,
    },
    {
      id: 2,
      title: 'GlobalUnion Pay – FinTech Payment Platform',
      description: 'Fintech payment platform with JWT Authentication, Razorpay & QR-based UPI Payments, and reporting modules for transaction monitoring and user engagement.',
      techStack: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL', 'JWT', 'Razorpay'],
      githubUrl: 'https://github.com/Arthikhs',
      liveUrl: '#',
      image: '/globalunion.jpg',
      featured: true,
    },
    {
      id: 3,
      title: 'Zomato Clone – Real-Time Food Delivery Platform',
      description: 'Full-stack food delivery platform with JWT auth, WebSocket & RabbitMQ for real-time updates, live GPS tracking, payment integration, and Docker + AWS deployment.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSocket', 'RabbitMQ', 'Docker', 'AWS'],
      githubUrl: 'https://github.com/Arthikhs/zomato-clone2/tree/main/tomato-code',
      liveUrl: '#',
      image: '/zomato.png',
      featured: true,
    },
    {
      id: 4,
      title: 'AI Mock Interview App',
      description: 'Web app that helps users practice technical interviews using AI-generated questions, real interview simulations, and AI-based evaluation with improvement suggestions.',
      techStack: ['React.js', 'Node.js', 'Tailwind CSS', 'REST API', 'JavaScript', 'Axios'],
      githubUrl: 'https://github.com/Arthikhs',
      liveUrl: '#',
      image: '/aiinterview.jpg',
      featured: true,
    },
    {
      id: 5,
      title: 'AI Career Coach',
      description: 'AI-powered career guidance platform for mock interviews, resume generation, and personalized career advice using Gemini AI.',
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'NeonDB', 'Prisma', 'Clerk', 'Gemini API'],
      githubUrl: 'https://github.com/Arthikhs',
      liveUrl: '#',
      image: '/aicare.png',
      featured: true,
    },
  ];


  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, featuring both personal projects and contributions to open source.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl font-bold gradient-text opacity-50">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h4>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass rounded-lg hover:bg-blue-500/20 transition-colors"
                      >
                        <Github size={18} className="text-gray-400 hover:text-white" />
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 glass rounded-lg hover:bg-blue-500/20 transition-colors"
                        >
                          <ExternalLink size={18} className="text-gray-400 hover:text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary text-center text-sm"
                    >
                      View Code
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 btn-secondary text-center text-sm"
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;