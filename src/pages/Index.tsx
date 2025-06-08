import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, ExternalLink, Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileHover, setShowProfileHover] = useState(false);

  const profileImage = "/lovable-uploads/bdf9dc0c-0f06-4bd3-aea7-490cd98d3a8e.png";

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const experiences = [
    {
      company: "Nexa Digital Engineering Inc",
      role: "Engineering Trainee",
      period: "Nov 2024 - Present",
      location: "Hyderabad",
      responsibilities: [
        "P&ID validation and metadata generation using UPV",
        "Volumetric isolation with AVEVA Point Cloud Manager, markups using Greenshot & Bluebeam",
        "Batch scripting to automate folder creation",
        "Smart3D symbol development and bulk loading",
        "Excel-based data analysis and reporting",
        "Excel VBA automation for issue tracking",
        "Performed quality checks, team coordination",
        "Contributed to PDS to S3D data migration"
      ]
    },
    {
      company: "ExpertsHub",
      role: "Intern, Automotive Design & Analysis",
      period: "Jan 2021 – Feb 2021",
      location: "Remote",
      responsibilities: [
        "Design using CATIA V5, analysis with Ansys",
        "Product lead for front fairing efficiency project"
      ]
    },
    {
      company: "BHEL",
      role: "Internship Trainee, Steam Turbines",
      period: "Jul 2019",
      location: "Hyderabad",
      responsibilities: [
        "Manufacturing procedures, technical understanding of turbine components"
      ]
    }
  ];

  const projects = [
    {
      title: "Hospital Dashboard",
      description: "Data cleaning, visualization, dynamic slicers, insurance-billing analytics",
      tech: ["Power BI", "Data Analysis"],
      type: "Data Analytics"
    },
    {
      title: "Personal Portfolio Website",
      description: "Built using JavaScript, HTML, CSS, Bootstrap",
      tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      type: "Web Development"
    },
    {
      title: "Leads Flow Dashboard",
      description: "Analytics dashboard project with comprehensive data visualization",
      tech: ["Power BI", "Data Analysis"],
      type: "Data Analytics"
    }
  ];

  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "HTML", "CSS", "VBA", "Batch Scripting"]
    },
    {
      category: "Tools",
      skills: ["Power BI", "Excel", "MongoDB", "MySQL", "AVEVA tools", "Hexagon Smart P&ID"]
    },
    {
      category: "Concepts",
      skills: ["Data Structures & Algorithms", "Digital Twin", "Engineering Design"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 relative"
              onMouseEnter={() => setShowProfileHover(true)}
              onMouseLeave={() => setShowProfileHover(false)}
            >
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Akhil Kumar Boddapati" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
              <span className="text-xl font-bold text-primary cursor-pointer">
                Akhil Kumar Boddapati
              </span>
              
              {/* Hover Profile Card */}
              <AnimatePresence>
                {showProfileHover && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg p-4 shadow-lg z-50 min-w-[280px]"
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={profileImage} 
                        alt="Akhil Kumar Boddapati" 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">Akhil Kumar Boddapati</h3>
                        <p className="text-sm text-muted-foreground">Piping Engineer & Tech Enthusiast</p>
                        <p className="text-xs text-muted-foreground mt-1">Building Smart Digital Solutions</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4"
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 transition-colors hover:text-primary ${
                      activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
            >
              {/* Profile Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <img 
                    src={profileImage} 
                    alt="Akhil Kumar Boddapati" 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Available for Hire
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Akhil Kumar Boddapati
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
                  Piping Engineer Turned Tech Enthusiast | Building Smart Digital Solutions
                </p>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                  Mechanical Engineer with current industry experience and a growing passion for technology and digital innovation. 
                  Actively building skills in full-stack development and data analysis while contributing to real-world engineering projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    onClick={() => scrollToSection("projects")} 
                    size="lg" 
                    className="group"
                  >
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/akhil-kumar-boddapati-962752186/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <img 
                      src={profileImage} 
                      alt="Akhil Kumar Boddapati" 
                      className="w-32 h-32 rounded-lg object-cover border-2 border-primary/20"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Mechanical Engineer with current industry experience and a growing passion for technology and digital innovation. 
                      I am actively building my skills in Python, Django, HTML, CSS, JavaScript, MySQL, MongoDB, MS Excel, and Power BI, 
                      along with strengthening my foundation in Data Structures and Algorithms. Guided by adaptability and continuous learning, 
                      I am actively exploring opportunities to transition into the tech industry, particularly in Data Analyst and Full Stack Developer roles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
                          <p className="text-lg font-medium">{exp.role}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <Badge variant="secondary" className="mt-2 md:mt-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">SCSVMV University</h4>
                      <p className="text-muted-foreground">B.E. in Mechanical Engineering</p>
                      <p className="text-sm text-muted-foreground">2017 – 2021 | CGPA: 8.4/10</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Projects: Nano Grease Tribology (Major), Crane Hook Design (Mini)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Certifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">DSA – Simplilearn</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <Badge variant="outline">{project.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <a href="https://www.linkedin.com/in/akhil-kumar-boddapati-962752186/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Akhil Kumar Boddapati. Built with React and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
