import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Code, Monitor, ShoppingBag, Layers } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  achievements: string[];
  liveUrl: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const filters = ['All', 'Web App', 'Desktop', 'Mobile'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Pratham - Restaurant POS',
      description:
        'A comprehensive point-of-sale system designed specifically for restaurants, allowing seamless order management, payment processing, and business analytics. The system supports both desktop and mobile platforms.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      category: 'Desktop',
      technologies: ['Vue.js', 'Axios', 'Quasar', 'Pinia', 'Electron', 'Cordova', 'Tailwind CSS', 'TypeScript'],
      achievements: [
        'Migrated legacy Vue2 codebase to Vue3+TypeScript for improved type safety and maintainability.',
        'Integrated EFTPOS Payment gateways (MX51, Till Payment, ANZ Worldline) & developed a package for reusability & maintainability.',
        'Developed a package to handle receipt printing in electron.js & a package to handle printing in cordova.',
      ],
      liveUrl: '#',
      icon: <Monitor className="w-6 h-6 text-primary" />,
    },
    {
      id: 2,
      title: 'Coding Age',
      description:
        'An innovative learning and job search platform connecting students with educational resources and career opportunities in the tech industry. Features interactive courses, practical assignments, and job matching.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      category: 'Web App',
      technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Quasar', 'Pinia'],
      achievements: [
        'Led front-end development for the job search interface, increasing user engagement by 45%.',
        'Implemented responsive design patterns ensuring seamless experience across all devices.',
        'Built reusable component library reducing development time for new features by 30%.',
      ],
      liveUrl: '#',
      icon: <Code className="w-6 h-6 text-primary" />,
    },
    {
      id: 3,
      title: 'Platform 943',
      description:
        'A versatile marketplace platform enabling users to rent or buy products across various categories. Features include secure payment processing, user reviews, and inventory management for vendors.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      category: 'Web App',
      technologies: ['Vue.js', 'Pinia', 'JavaScript', 'Prime Vue', 'Axios', 'HTML/CSS'],
      achievements: [
        'Developed comprehensive admin panel with intuitive data visualization and management tools.',
        'Implemented secure authentication and authorization flows protecting sensitive user data.',
        'Created optimized API integration layer reducing load times by 40%.',
      ],
      liveUrl: '#',
      icon: <ShoppingBag className="w-6 h-6 text-primary" />,
    },
    {
      id: 4,
      title: 'Eraa - Website Builder',
      description:
        'A powerful drag-and-drop website builder allowing users to create professional websites without coding knowledge. Features customizable templates, responsive design tools, and seamless publishing.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      category: 'Web App',
      technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Quasar', 'Axios', 'Pinia'],
      achievements: [
        'Built a component to use Tailwind CSS classes in website builder.',
        'Developed real-time preview functionality for immediate visualization of design changes.',
        'Created extensible plugin architecture allowing third-party integrations and custom functionality.',
      ],
      liveUrl: '#',
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
  ];

  // Filter projects based on the active filter
  useEffect(() => {
    filterProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  const filterProjects = () => {
    console.log('Filtering projects with filter:', activeFilter);

    if (activeFilter === 'All') {
      setFilteredProjects(projects);
      console.log('All projects:', projects);
    } else {
      const filtered = projects.filter((project) => project.category === activeFilter);
      console.log('Filtered projects:', filtered);
      setFilteredProjects(filtered);
    }
  };

  const handleFilterClick = (filter: string) => {
    console.log('Filter clicked:', filter);
    setActiveFilter(filter);
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="projects" className="section py-24 relative" style={{ '--section-index': '2' } as React.CSSProperties}>
      <div className="absolute top-0 right-0 -z-10 h-120 w-120 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-none">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            Professional <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading max-w-3xl mx-auto"
          >
            Explore a selection of my professional projects showcasing my skills in Vue.js, TypeScript, and frontend
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 flex flex-wrap justify-center gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/60 text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  layout
                  className="group relative overflow-hidden rounded-xl glass-card transition-all duration-300 hover:-translate-y-1.25 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {project.category}
                      </span>
                    </div>
                    <p className="mb-4 text-muted-foreground text-left">{project.description}</p>

                    <div className="mb-4 text-left">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {project.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
