
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hey, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Designer & Frontend Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I create beautiful, responsive websites with a focus on user experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>
      
      {/* Quick Introduction */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight section-heading">About Me</h2>
              <p className="text-lg text-muted-foreground">
                I'm a passionate frontend developer with a keen eye for design and a love for creating
                intuitive user experiences. With expertise in modern web technologies, I build responsive 
                and accessible websites.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight section-heading mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-background border">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-4xl">🖥️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {index}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the technologies used.
                  </p>
                  <Button variant="outline" size="sm">View Project</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight section-heading mb-12">Latest Articles</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="group border rounded-lg overflow-hidden bg-background hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">May {index + 10}, 2023</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Building Better User Experiences with React
                  </h3>
                  <p className="text-muted-foreground">
                    Learn how to leverage React's capabilities to create smooth, responsive and accessible user interfaces.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/blog">Read All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            I'm currently available for freelance work. If you have a project that you want to get started,
            think you need my help with something, or just want to say hi, then get in touch.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
