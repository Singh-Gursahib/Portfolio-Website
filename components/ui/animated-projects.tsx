"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { type ProjectCard } from "@/data/project-data/project-cards";

export const AnimatedProjects = ({
  projects,
  className,
}: {
  projects: ProjectCard[];
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(handleNext, 5000);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
    startTimer();
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
    startTimer();
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Fixed rotation angles for stacked effect
  const getRotation = (index: number, activeIndex: number) => {
    const position = (index - activeIndex + projects.length) % projects.length;
    switch (position) {
      case 0: // Active/top card
        return 0;
      case 1: // First card behind
        return 15;
      default: // Second card behind
        return -15;
    }
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12", className)}>
      {/* Increased gap-x for potentially more horizontal space between image and text on md+ screens */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10">
        {/* Changed image container height to auto */}
        <div className="relative h-auto w-full">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.image}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: getRotation(index, active),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: getRotation(index, active),
                  zIndex: isActive(index)
                    ? 999
                    : projects.length + 2 - index,
                  y: isActive(index) ? [0, -40, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: getRotation(index, active),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                // Adjusted motion div to allow image aspect ratio to control height
                className="absolute inset-x-0 top-0 origin-bottom"
                style={{ position: isActive(index) ? 'relative' : 'absolute' }} // Ensure only active takes space initially if needed
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000} // Wider aspect ratio
                  height={200} // Smaller height for wider look
                  // Removed h-full, kept w-full to fill width, height adjusts by aspect ratio
                  className="w-full rounded-3xl object-cover object-center shadow-xl"
                  // Add priority to potentially improve LCP for the active image
                  priority={isActive(index)}
                  // Added sizes attribute for better responsive optimization
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active} // Use active index as key for text animation
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              {projects[active].category}
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {projects[active].title}
            </h3>
            <motion.p className="text-lg text-muted-foreground">
              {projects[active].excerpt.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <div className="flex flex-wrap gap-2 mt-6">
              {projects[active].tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-secondary/50 hover:bg-secondary/70"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href={`/projects/${projects[active].slug}`}
                className="text-primary hover:text-primary/80 font-medium"
              >
                View Project Details →
              </Link>
            </div>
          </motion.div>
          {/* Increased top padding here for more space */}
          <div className="flex gap-4 pt-16">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-secondary/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group/button hover:bg-secondary/80 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};