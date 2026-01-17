import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code, Server, Palette, Cpu, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'Vue.js',
    'HTML/CSS',
    'JavaScript (ES6+)',
    'TypeScript',
    'Nuxt.js',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'REST APIs',
    'Git',
    'GitHub',
    'Bitbucket',
    'VS Code',
    'Quasar',
    'Vuetify',
    'Prime Vue',
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Frontend Development',
      description:
        'Building responsive and interactive user interfaces with modern JavaScript frameworks, ensuring optimal performance and accessibility.',
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: 'Backend Development',
      description:
        'Developing robust server-side applications and APIs that power your web solutions, handling data storage, authentication, and business logic.',
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: 'UI/UX Design',
      description:
        'Creating intuitive and visually appealing designs that enhance user experience and reflect your brand identity.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: 'Performance Optimization',
      description:
        'Analyzing and optimizing web applications for speed, reliability, and scalability, ensuring they can handle increased traffic and usage.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="section py-24 relative" style={{ '--section-index': '1' } as React.CSSProperties}>
      <div className="absolute top-1/2 left-0 -z-10 h-120 w-120 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="heading"
              >
                About <span className="text-gradient">Me</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6 text-base text-muted-foreground"
              >
                <p>
                  Hello! I'm Raghvendra Yadav, a passionate fullstack developer with a knack for creating elegant
                  solutions to complex problems. My journey in web development began over 5 years ago, and I've been in
                  love with the craft ever since.
                </p>
                <p>
                  I specialize in building modern web applications using the latest technologies. My approach combines
                  technical expertise with creative problem-solving to deliver solutions that meet business goals and
                  exceed user expectations.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through blog posts and community events.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">Technologies I work with</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants} className="glass-card p-6 rounded-xl">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
