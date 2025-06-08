
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, ExternalLink, Download, Menu, X, Calendar, MapPin, Award, Code, Database, Wrench } from "lucide-react";
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
      logo: "/lovable-uploads/b4218dde-7e5b-4760-9702-5e78221c5ba3.png",
      role: "Engineering Trainee",
      period: "Nov 2024 - Present",
      location: "Hyderabad, India",
      type: "Current Position",
      responsibilities: [
        "Spearheaded P&ID validation and metadata generation using advanced UPV technologies",
        "Executed complex volumetric isolation workflows with AVEVA Point Cloud Manager",
        "Developed precision markups using Greenshot & Bluebeam for technical documentation",
        "Architected batch scripting solutions to automate folder creation and streamline workflows",
        "Engineered Smart3D symbol libraries and implemented bulk loading mechanisms",
        "Conducted comprehensive Excel-based data analysis with advanced reporting capabilities",
        "Designed Excel VBA automation systems for sophisticated issue tracking and resolution",
        "Led quality assurance initiatives and coordinated cross-functional team collaboration",
        "Orchestrated seamless PDS to S3D data migration projects with zero data loss"
      ]
    },
    {
      company: "ExpertsHub",
      logo: "/lovable-uploads/6268e9d4-c975-4746-8491-ba752c2947a0.png",
      role: "Automotive Design & Analysis Intern",
      period: "Jan 2021 – Feb 2021",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Mastered advanced 3D modeling and design principles using CATIA V5",
        "Performed sophisticated structural analysis and simulations with Ansys",
        "Assumed product leadership role for front fairing aerodynamic efficiency optimization project",
        "Delivered innovative design solutions that enhanced product performance metrics"
      ]
    },
    {
      company: "BHEL",
      logo: "/lovable-uploads/eb057585-e6d3-4a58-92d2-e68acb50ca92.png",
      role: "Steam Turbines Engineering Trainee",
      period: "Jul 2019",
      location: "Hyderabad, India",
      type: "Industrial Training",
      responsibilities: [
        "Gained comprehensive understanding of advanced manufacturing procedures",
        "Developed technical expertise in steam turbine component engineering",
        "Studied precision manufacturing processes and quality control systems",
        "Analyzed turbine blade dynamics and thermal efficiency optimization"
      ]
    }
  ];

  const projects = [
    {
      title: "Healthcare Analytics Dashboard",
      description: "Comprehensive healthcare data visualization platform featuring advanced data cleaning algorithms, interactive visualization components, dynamic filtering systems, and sophisticated insurance-billing analytics with real-time insights.",
      tech: ["Power BI", "Data Analysis", "Healthcare Analytics", "Business Intelligence"],
      type: "Data Analytics",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Interactive Portfolio Platform",
      description: "Modern, responsive personal portfolio website built with cutting-edge web technologies, featuring seamless animations, mobile-first design principles, and optimized performance.",
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      type: "Web Development",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Sales Intelligence Dashboard",
      description: "Advanced leads flow analytics platform with comprehensive data visualization, predictive analytics capabilities, conversion tracking, and performance optimization insights for business growth.",
      tech: ["Power BI", "Data Visualization", "Predictive Analytics", "Sales Intelligence"],
      type: "Business Intelligence",
      icon: <Database className="h-6 w-6" />
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "HTML5", "CSS3", "VBA", "Batch Scripting"],
      icon: <Code className="h-6 w-6" />
    },
    {
      category: "Professional Tools",
      skills: ["Power BI", "Microsoft Excel", "MongoDB", "MySQL", "AVEVA Suite", "Hexagon Smart P&ID"],
      icon: <Wrench className="h-6 w-6" />
    },
    {
      category: "Technical Concepts",
      skills: ["Data Structures & Algorithms", "Digital Twin Technology", "Engineering Design", "Database Management"],
      icon: <Database className="h-6 w-6" />
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
      {/* Enhanced Navigation */}
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
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 transition-transform duration-300 hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors">
                Akhil Kumar Boddapati
              </span>
              
              {/* Enhanced Hover Profile Card */}
              <AnimatePresence>
                {showProfileHover && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg p-4 shadow-xl z-50 min-w-[320px]"
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={profileImage} 
                        alt="Akhil Kumar Boddapati" 
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">Akhil Kumar Boddapati</h3>
                        <p className="text-sm text-muted-foreground">Piping Engineer | Tech Enthusiast</p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          Hyderabad, India
                        </p>
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
                  className={`transition-all duration-300 hover:text-primary relative ${
                    activeSection === item.id 
                      ? "text-primary font-medium after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                      : "text-muted-foreground hover:scale-105"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
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
                    className={`block w-full text-left py-3 px-2 rounded-lg transition-all hover:bg-muted ${
                      activeSection === item.id ? "text-primary font-medium bg-primary/10" : "text-muted-foreground"
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

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16"
            >
              {/* Enhanced Profile Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <img 
                    src={profileImage} 
                    alt="Akhil Kumar Boddapati" 
                    className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Available for Opportunities
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Akhil Kumar
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40 bg-clip-text text-transparent">
                    Boddapati
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mb-8"
                >
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium flex items-center justify-center lg:justify-start flex-wrap gap-2">
                    <span>Piping Engineer</span>
                    <span className="w-px h-6 bg-primary/40"></span>
                    <span>Tech Enthusiast</span>
                  </p>
                  <p className="text-lg text-primary/80 font-medium">
                    Building Smart Digital Solutions
                  </p>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
                >
                  Mechanical Engineer with extensive industry experience and an unwavering passion for cutting-edge technology and digital innovation. 
                  Currently spearheading the transition into the tech ecosystem while contributing to real-world engineering projects.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button 
                    onClick={() => scrollToSection("projects")} 
                    size="lg" 
                    className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore My Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <a href="https://www.linkedin.com/in/akhil-kumar-boddapati-962752186/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Professional Journey & Vision
            </h2>
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-primary/10 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                      <img 
                        src={profileImage} 
                        alt="Akhil Kumar Boddapati" 
                        className="relative w-40 h-40 rounded-xl object-cover border-2 border-primary/20 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                        <strong className="text-foreground">Passionate Mechanical Engineer</strong> with comprehensive industry experience and an ambitious vision for technological transformation. 
                        Currently advancing expertise in <span className="text-primary font-medium">Python, Django, JavaScript</span>, and modern web technologies while mastering database management with <span className="text-primary font-medium">MySQL and MongoDB</span>.
                      </p>
                      
                      <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                        Specializing in <span className="text-primary font-medium">Business Intelligence with Power BI</span> and advancing proficiency in <span className="text-primary font-medium">Data Structures & Algorithms</span>. 
                        Driven by adaptability, continuous learning, and a commitment to excellence in every endeavor.
                      </p>
                      
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        <strong className="text-foreground">Career Objective:</strong> Transitioning into the technology sector with a focus on <span className="text-primary font-medium">Data Analytics and Full Stack Development</span>, 
                        bringing a unique perspective that bridges traditional engineering with cutting-edge digital solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Professional Experience & Achievements
            </h2>
            <div className="max-w-6xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 group border-primary/10 hover:border-primary/20">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                          <div className="flex-shrink-0">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`} 
                              className="w-16 h-16 rounded-lg object-contain border border-border p-2 bg-background group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {exp.location}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {exp.period}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant={exp.type === "Current Position" ? "default" : "secondary"} 
                          className={`${exp.type === "Current Position" ? "bg-green-100 text-green-800 border-green-200" : ""} whitespace-nowrap`}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="grid gap-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="flex items-start group/item">
                            <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:bg-primary/80 transition-colors"></span>
                            <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                              {resp}
                            </span>
                          </div>
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

      {/* Enhanced Education & Certifications */}
      <section id="education" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Academic Excellence & Professional Certifications
            </h2>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20 group">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <img 
                      src="/lovable-uploads/e3cb0f27-f416-4348-afb4-905a9fd647a5.png" 
                      alt="SCSVMV University logo" 
                      className="w-16 h-16 rounded-lg object-contain border border-border p-2 bg-background mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Academic Foundation
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg text-foreground">SCSVMV University</h4>
                      <p className="text-primary font-medium">Bachelor of Engineering - Mechanical Engineering</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm text-muted-foreground">2017 – 2021</p>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          CGPA: 8.4/10
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Research Projects:</h5>
                      <div className="space-y-1">
                        <div className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground"><strong>Major Project:</strong> Nano Grease Tribology Research</span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground"><strong>Mini Project:</strong> Advanced Crane Hook Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20 group">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Award className="h-16 w-16 text-primary/20 mr-4 group-hover:text-primary/40 transition-colors" />
                    <h3 className="text-xl font-semibold text-primary">Professional Certifications</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">Oracle Certified Professional</h4>
                          <p className="text-sm text-orange-700 font-medium">Cloud Infrastructure 2024 Generative AI</p>
                          <p className="text-xs text-muted-foreground mt-1">Oracle Corporation</p>
                        </div>
                        <Badge className="bg-orange-100 text-orange-800 border-orange-200 ml-2">
                          2024
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">Data Structures & Algorithms</h4>
                          <p className="text-sm text-blue-700 font-medium">Advanced Programming Concepts</p>
                          <p className="text-xs text-muted-foreground mt-1">Simplilearn</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200 ml-2">
                          Certified
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Featured Projects & Innovations
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-muted/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            {project.icon}
                          </div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                        </div>
                        <Badge variant="outline" className="group-hover:bg-primary/10 group-hover:border-primary/40 transition-colors">
                          {project.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="text-xs group-hover:bg-primary/20 group-hover:text-primary transition-colors"
                          >
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

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Technical Expertise & Core Competencies
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group border-primary/10 hover:border-primary/20 bg-gradient-to-br from-background to-muted/20">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mr-4">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                          {category.category}
                        </h3>
                      </div>
                      <div className="grid gap-3">
                        {category.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="group/skill"
                          >
                            <Badge 
                              variant="secondary" 
                              className="w-full justify-start py-2 px-3 text-sm group-hover/skill:bg-primary group-hover/skill:text-primary-foreground transition-all duration-300 cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
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

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Ready to collaborate on innovative projects, discuss emerging technologies, or explore new opportunities? 
              I'm always excited to connect with fellow professionals and visionaries in the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="https://www.linkedin.com/in/akhil-kumar-boddapati-962752186/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300" asChild>
                <a href="mailto:akhil.boddapati@outlook.com">
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Send Email
                </a>
              </Button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20"
            >
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Response Time:</strong> I typically respond within 24 hours. 
                <br />
                <strong className="text-foreground">Availability:</strong> Open to full-time opportunities, freelance projects, and consulting engagements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <img 
                  src={profileImage} 
                  alt="Akhil Kumar Boddapati" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">Akhil Kumar Boddapati</p>
                  <p className="text-sm text-muted-foreground">Engineering Excellence • Digital Innovation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/akhil-kumar-boddapati-962752186/?trk=opento_sprofile_details" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:akhil.boddapati@outlook.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Akhil Kumar Boddapati. Crafted with precision using modern web technologies.
                <br />
                <span className="text-xs">All rights reserved. Designed for innovation and excellence.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
