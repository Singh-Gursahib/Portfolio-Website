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
    <section className="py-12 md:py-20 relative" id="projects">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,133,93,0.15),rgba(0,1,13,0.05)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(115,73,22,0.05))]" />
      </div>
      
      <div className="container px-4 sm:px-6">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora">
            Recent Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in AI and web development, showcasing innovative solutions and creative implementations.
          </p>
        </motion.div>
        
        <AnimatedProjects projects={featuredProjects} />
       
        <div className="flex justify-center mt-6 md:mt-8">
          <Button asChild size="lg" className="group text-sm md:text-base bg-[#734916] hover:bg-[#A6855D] text-[#F2CA99] rounded-full border border-[#A6855D]/30 shadow-lg hover:shadow-[#A6855D]/20">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}