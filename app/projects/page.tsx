"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import Link from "next/link";
import { projectCards, categories, type ProjectCard } from "@/data/project-data/project-cards";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = projectCards.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold font-sora">Projects</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-6">
            <TabsList className="h-14 p-1.5 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full shadow-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="relative px-8 h-11 rounded-full transition-all duration-300 text-muted-foreground hover:text-foreground data-[state=active]:text-primary-foreground"
                >
                  <span className="relative z-10">{category}</span>
                  {/* Active tab background */}
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full -z-0"
                    initial={false}
                    animate={{
                      opacity: activeCategory === category ? 1 : 0,
                      scale: activeCategory === category ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeCategory} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: ProjectCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="group relative overflow-hidden">
          <motion.div
            className="relative h-48 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          
          <div className="p-6 relative">
            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
              {project.category}
            </Badge>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {project.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-secondary/50 hover:bg-secondary/70"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="absolute inset-0 rounded-lg border-2 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-primary transition-all duration-300"
            initial={false}
          />
        </Card>
      </Link>
    </motion.div>
  );
}