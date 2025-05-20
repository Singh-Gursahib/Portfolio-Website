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
    <div className={cn("max-w-full md:max-w-6xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12 relative z-10", className)}>
      {/* Adjusted grid layout to prevent overlapping */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {/* Adjusted image container width */}
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
                <Link href={`/projects/${project.slug}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200} // Increased width for larger display
                    height={600} // Increased height for better aspect ratio
                    className="w-full rounded-3xl object-cover object-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                    priority={isActive(index)}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </Link>
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
            <Badge className="mb-2 sm:mb-4 bg-[#A6855D]/10 text-[#734916] hover:bg-[#A6855D]/20 border-[#A6855D]/30 text-xs sm:text-sm">
              {projects[active].category}
            </Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">
              {projects[active].title}
            </h3>
            <motion.p className="text-sm sm:text-base md:text-lg text-muted-foreground">
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
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {projects[active].tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-[#F2CA99]/30 hover:bg-[#F2CA99]/50 text-[#734916] border-[#A6855D]/20 text-xs sm:text-sm py-0.5 px-2 sm:py-1 sm:px-2.5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
          </motion.div>
          {/* Increased top padding here for more space */}
          <div className="flex items-center gap-2 sm:gap-4 pt-8 sm:pt-12 md:pt-16">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-[#F2CA99]/30 dark:bg-[#734916]/30 flex items-center justify-center group/button hover:bg-[#A6855D]/40 dark:hover:bg-[#A6855D]/30 transition-colors border border-[#A6855D]/20 dark:border-[#A6855D]/30 shadow-sm"
            >
              <ArrowLeft className="h-5 w-5 text-[#734916] dark:text-[#F2CA99] group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            
            <Link
              href={`/projects/${projects[active].slug}`}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#734916] dark:bg-[#A6855D] text-[#F2CA99] dark:text-[#00010D] hover:bg-[#A6855D] dark:hover:bg-[#734916]/90 transition-all duration-300 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 shadow-sm hover:shadow-md border border-[#A6855D]/30"
            >
              View Project Details
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-[#F2CA99]/30 dark:bg-[#734916]/30 flex items-center justify-center group/button hover:bg-[#A6855D]/40 dark:hover:bg-[#A6855D]/30 transition-colors border border-[#A6855D]/20 dark:border-[#A6855D]/30 shadow-sm"
            >
              <ArrowRight className="h-5 w-5 text-[#734916] dark:text-[#F2CA99] group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};