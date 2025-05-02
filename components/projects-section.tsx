"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectCards } from "@/data/project-data/project-cards";
import { AnimatedProjects } from "@/components/ui/animated-projects";

export function ProjectsSection() {
  // Get the first 3 projects from projectCards
  const featuredProjects = projectCards.slice(0, 3);

  return (
    <section className="py-20 relative" id="projects">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
      </div>
      
      <div className="container">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sora">
            Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in AI and web development, showcasing innovative solutions and creative implementations.
          </p>
        </motion.div>
        
        <AnimatedProjects projects={featuredProjects} />
        
        <div className="flex justify-center mt-16">
          <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-white rounded-full">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}