
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-0"
    >
      <div className="absolute top-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[100px]" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary"
              >
                <span>Available for hire</span>
              </motion.div>
              
              <motion.h1
                ref={headingRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                Raghvendra Yadav
                <span className="text-gradient block">Fullstack Web Developer</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-prose text-lg text-muted-foreground"
              >
                I design and develop web applications that are fast, accessible, and built with best practices. Let's turn your vision into reality.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 button-glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contact Me
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-6"
            >
              <a
                href="https://github.com/raghu2x"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/raghvendra-yadav"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:raghvendraa.dev@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="perspective"
            >
              <motion.div
                initial={{ rotateX: 0, rotateY: 0 }}
                animate={{ rotateX: 10, rotateY: -15 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                className="aspect-square rounded-2xl glass-card relative overflow-hidden max-w-[450px] mx-auto"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.12),transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,108,255,0.12),transparent_40%)]" />
                <div className="h-full w-full p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-foreground">Your Portfolio</h3>
                    <p className="text-muted-foreground mt-2">Showcase your best work and connect with potential clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 shadow-sm text-primary"
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
