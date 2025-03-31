
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    "JavaScript (ES6+)", 
    "TypeScript", 
    "React", 
    "Next.js", 
    "CSS/SCSS", 
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Responsive Design",
    "UI/UX Design"
  ];

  return (
    <div className="page-container">
      <h1 className="text-4xl font-bold mb-2">About Me</h1>
      <p className="text-muted-foreground mb-8">Learn more about my background, skills, and experience.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello! I'm John, a passionate web developer and designer with a keen eye for creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
            <p>
              My journey in web development began over 5 years ago, and since then, I've been 
              constantly learning and evolving my skills to keep up with the ever-changing landscape of web technologies.
            </p>
            <p>
              I believe in the power of thoughtful design and clean code to transform ideas into impactful digital solutions.
              Whether I'm working on a website, application, or digital product, I bring my commitment to design excellence
              and user-centered thinking to every project.
            </p>
            <p>
              Outside of work, I enjoy hiking, reading science fiction, and experimenting with new technologies. 
              I'm always interested in new challenges and opportunities to grow.
            </p>
          </div>
        </div>
        
        <div>
          <div className="aspect-square bg-muted rounded-lg mb-6 flex items-center justify-center">
            <span className="text-6xl">👋</span>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 section-heading">Experience</h2>
        
        <div className="space-y-12">
          {/* Experience Item */}
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-0"></div>
            <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
            <p className="text-muted-foreground mb-2">Tech Solutions Inc. • 2020 - Present</p>
            <p className="text-muted-foreground mb-4">
              Lead the development of responsive web applications using React and TypeScript. 
              Collaborated with designers and backend developers to implement user-friendly interfaces.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Redesigned main product interface, improving user engagement by 25%</li>
              <li>Implemented CI/CD pipelines for streamlined deployments</li>
              <li>Mentored junior developers on best practices and coding standards</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-0"></div>
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-muted-foreground mb-2">Digital Agency • 2017 - 2020</p>
            <p className="text-muted-foreground mb-4">
              Developed responsive websites for various clients using modern frontend technologies.
              Worked closely with the design team to ensure high-quality implementation.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Created over 30 client websites with a focus on performance and accessibility</li>
              <li>Introduced component-based architecture, reducing development time by 40%</li>
              <li>Optimized website performance, improving load times by 60%</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 section-heading">Education</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-muted-foreground">University of Technology • 2013 - 2017</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Web Development Certification</h3>
            <p className="text-muted-foreground">Frontend Masters • 2018</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center py-8 bg-muted/50 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Interested in working together?</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">Get In Touch</Link>
        </Button>
      </div>
    </div>
  );
};

export default About;
