import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform built with React, Redux, and Node.js. Features include user authentication, product filtering, cart functionality, and payment processing.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "🛒",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A clean and modern portfolio website template designed for developers and designers. Features a dark/light mode toggle, responsive design, and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "👨‍💻",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app that helps users manage their tasks with features like drag-and-drop organization, due dates, priority levels, and recurring tasks.",
      technologies: ["React", "TypeScript", "Firebase", "React DnD"],
      image: "📝",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather information, forecasts, and visualizations based on user location or search.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "HTML/CSS"],
      image: "🌤️",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "An application that allows users to search for recipes based on ingredients they have, dietary restrictions, and cuisine preferences.",
      technologies: ["React", "Spoonacular API", "CSS Modules"],
      image: "🍳",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A mobile-first web application for tracking workouts, setting fitness goals, and visualizing progress over time.",
      technologies: ["React", "Chart.js", "Local Storage", "Progressive Web App"],
      image: "💪",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <div className="page-container">
      <h1 className="text-4xl font-bold mb-2">My Projects</h1>
      <p className="text-muted-foreground mb-12">
        Here are some of my recent projects. Each project reflects my passion for creating user-friendly and visually appealing applications.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group border rounded-lg overflow-hidden bg-background hover:shadow-md transition-all animate-slide-in"
          >
            <div className="aspect-video bg-muted flex items-center justify-center text-6xl">
              {project.image}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Other Work Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6 section-heading">Other Noteworthy Projects</h2>
        <p className="text-muted-foreground mb-8">
          Besides the featured projects above, I've worked on numerous smaller projects and experiments.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border rounded-lg p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium mb-2">Mini Project {i}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A brief description of this smaller project or coding experiment.
              </p>
              <div className="flex gap-2">
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  <Github size={14} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
