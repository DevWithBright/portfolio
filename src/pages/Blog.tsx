
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = [
    "All", "Web Development", "UI/UX Design", "JavaScript", "React", "Career"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const blogPosts = [
    {
      id: 1,
      title: "Creating Accessible Web Applications with React",
      excerpt: "Learn the importance of accessibility in modern web development and how to implement it in React applications.",
      date: "June 15, 2023",
      category: "Web Development",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding React Hooks: A Comprehensive Guide",
      excerpt: "Dive deep into React Hooks and discover how they can simplify your components and make code reuse easier.",
      date: "May 22, 2023",
      category: "React",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Future of UI Design: Trends to Watch in 2023",
      excerpt: "Explore the emerging trends in UI design that will shape the digital landscape in the coming year.",
      date: "April 10, 2023",
      category: "UI/UX Design",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt: "Learn practical strategies to improve the performance of your React applications and provide a better user experience.",
      date: "March 28, 2023",
      category: "React",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "JavaScript Best Practices for Modern Web Development",
      excerpt: "Discover the essential best practices that every JavaScript developer should follow to write clean, efficient code.",
      date: "February 15, 2023",
      category: "JavaScript",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "From Junior to Senior: Navigating Your Web Development Career",
      excerpt: "Insights and advice on how to progress in your web development career and reach senior level positions.",
      date: "January 5, 2023",
      category: "Career",
      readTime: "10 min read"
    },
    {
      id: 7,
      title: "Building a Design System with React and Tailwind CSS",
      excerpt: "Learn how to create a consistent and reusable design system for your applications using React and Tailwind CSS.",
      date: "December 12, 2022",
      category: "UI/UX Design",
      readTime: "8 min read"
    },
    {
      id: 8,
      title: "The Complete Guide to CSS Grid Layout",
      excerpt: "Master CSS Grid Layout with this comprehensive guide covering everything from basics to advanced techniques.",
      date: "November 30, 2022",
      category: "Web Development",
      readTime: "11 min read"
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-container">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-8">
        Thoughts, insights, and experiences from my journey in web development and design.
      </p>
      
      {/* Search and Filter */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Blog Posts */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="group border rounded-lg overflow-hidden hover:shadow-md transition-all"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date} • {post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
      
      {/* Newsletter Signup */}
      <div className="mt-20 bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Subscribe to my newsletter</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Get notified when I publish new articles. No spam, just quality content.
        </p>
        <div className="flex max-w-md mx-auto flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
