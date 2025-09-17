
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion, useAnimation } from "framer-motion";

const Index: React.FC = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.5 } });
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="relative w-full overflow-hidden">
        {/* Floating gradient orbs */}
        <div 
          className="fixed top-20 right-10 -z-10 h-[25rem] w-[25rem] rounded-full bg-primary/10 blur-[150px]"
          style={{ 
            transform: `translate3d(${scrollY * 0.02}px, ${-scrollY * 0.05}px, 0)` 
          }}
        />
        
        <div 
          className="fixed bottom-20 left-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[150px]"
          style={{ 
            transform: `translate3d(${-scrollY * 0.03}px, ${scrollY * 0.03}px, 0)` 
          }}
        />

        <div 
          className="fixed top-[40%] left-[30%] -z-10 h-[20rem] w-[20rem] rounded-full bg-blue-200/5 blur-[120px]"
          style={{ 
            transform: `translate3d(${scrollY * 0.04}px, ${-scrollY * 0.02}px, 0)` 
          }}
        />

        {/* Star field effect */}
        <div className="fixed inset-0 -z-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(241,35,35,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className="relative"
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
