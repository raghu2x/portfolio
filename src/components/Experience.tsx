
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin, Code, Building, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Experience: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const { scrollY } = useScroll();
  
  const experiences = [
    {
      company: "Achyutlabs Pty Ltd",
      location: "Ahmedabad, India",
      period: "Jun 2024 - Present",
      position: "Senior Frontend Developer",
      description: "Leading frontend development for enterprise clients, building scalable and responsive web applications with a focus on performance optimization and user experience. Implemented advanced state management solutions and created reusable component libraries used across multiple projects.",
      achievements: [
        "Reduced load time by 40% through code optimization and lazy loading strategies",
        "Implemented CI/CD pipelines that decreased deployment times by 60%",
        "Mentored junior developers through code reviews and pair programming"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "GraphQL"]
    },
    {
      company: "Hanriver Technology",
      location: "Kolkata, India",
      period: "Oct 2023 - May 2024",
      position: "Full Stack Developer",
      description: "Developed and maintained full-stack applications for fintech clients, implementing secure authentication systems and real-time data visualization dashboards. Collaborated closely with UX/UI designers to create intuitive interfaces for complex financial data.",
      achievements: [
        "Built a real-time analytics dashboard that increased client retention by 25%",
        "Implemented secure payment processing system handling $2M in monthly transactions",
        "Optimized database queries that improved application response time by 35%"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS"]
    },
    {
      company: "Mahera Technology",
      location: "Indore, India",
      period: "May 2022 - Sep 2023",
      position: "Frontend Developer",
      description: "Collaborated in an agile team to build e-commerce platforms and content management systems. Implemented responsive designs and improved site performance metrics. Worked directly with clients to gather requirements and implement feedback.",
      achievements: [
        "Developed a custom CMS that reduced content update time by 70%",
        "Implemented responsive designs that increased mobile conversion rates by 45%",
        "Contributed to open-source libraries used by over 500 developers"
      ],
      technologies: ["JavaScript", "React", "PHP", "MySQL", "SASS", "RESTful APIs"]
    },
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="experience"
      className="section py-24 relative"
      style={{ "--section-index": "2" } as React.CSSProperties}
    >
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/3 right-0 -z-10 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-1/4 left-0 -z-10 h-[20rem] w-[20rem] translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />
        </div>
      )}

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="heading flex items-center gap-3">
              <span className="inline-block p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-7 h-7 text-primary" />
              </span>
              <span>Professional <span className="text-gradient">Experience</span></span>
            </h2>
            <p className="subheading max-w-2xl">
              My professional journey through various organizations where I've contributed my skills and grown as a developer.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-10"
          >
            {experiences.map((exp, index) => {
              // Create unique transforms for each card for a staggered parallax effect
              const y = useTransform(
                scrollY, 
                [0, 1500], 
                [0, -30 * (index + 1) * 0.5]
              );
              
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  style={{ y: isMounted ? y : 0 }}
                  className="group"
                >
                  <Card className="group relative overflow-hidden rounded-xl glass-card transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          <div className="flex justify-center sm:justify-start">
                            <div className="mt-1 p-3 rounded-lg bg-primary/10 flex-shrink-0 shadow-inner shadow-primary/5 w-14 h-14 flex items-center justify-center">
                              <Building className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="flex flex-wrap items-start gap-2 mb-2">
                              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{exp.company}</h3>
                              <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium">
                                {exp.position}
                              </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>{exp.location}</span>
                              </div>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 flex-shrink-0" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-5 flex justify-center">
                            <Award className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Key Achievements:</span>
                        </div>
                        <ul className="space-y-2 list-disc pl-5">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-shrink-0 w-5 flex justify-center">
                            <Code className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">Technologies Used:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center rounded-full bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
