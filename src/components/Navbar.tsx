
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Code } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2"
          >
            <span className="p-1.5 bg-primary/10 rounded">
              <Code className="w-5 h-5 text-primary" />
            </span>
            <span><span className="text-gradient">Dev</span>Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="bg-secondary/80 backdrop-blur-md border-b border-border/50 px-2 pt-2 pb-3">
            <div className="space-y-1 px-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-base font-medium text-foreground hover:text-primary"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
