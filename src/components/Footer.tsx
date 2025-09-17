
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-2xl font-bold tracking-tight text-foreground mb-4">
              <span className="text-gradient">Dev</span>Portfolio
            </div>
            <p className="text-muted-foreground max-w-xs">
              Building exceptional digital experiences with clean code and
              thoughtful design.
            </p>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/raghu2x"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/raghvendra-yadav/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:raghvendraa.dev@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Raghvendra Yadav. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a
              href="https://github.com/raghu2x"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/raghvendra-yadav/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
