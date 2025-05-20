"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GREETINGS } from "@/lib/constants";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { blogCards } from "@/data/blog-data/blog-cards";

export function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const charIndexRef = useRef(0);
  const latestPost = blogCards[0];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const greeting = GREETINGS[currentGreeting];

    const type = () => {
      if (charIndexRef.current < greeting.length) {
        setDisplayText(greeting.slice(0, charIndexRef.current + 1));
        charIndexRef.current += 1;
        timeout = setTimeout(type, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    };

    const erase = () => {
      if (charIndexRef.current > 0) {
        setDisplayText(greeting.slice(0, charIndexRef.current - 1));
        charIndexRef.current -= 1;
        timeout = setTimeout(erase, 50);
      } else {
        setCurrentGreeting((prev) => (prev + 1) % GREETINGS.length);
        setIsTyping(true);
      }
    };

    if (isTyping) type();
    else erase();

    return () => clearTimeout(timeout);
  }, [currentGreeting, isTyping]);

  return (
    <AuroraBackground className="min-h-screen flex items-center justify-center py-20 md:pt-20 pt-28 overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column - Profile Image (hidden on mobile) */}
        <motion.div
          className="hidden md:flex justify-center md:justify-end order-2 md:order-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative group">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#734916] to-[#A6855D] opacity-70 blur-2xl group-hover:blur-3xl transition-all duration-500"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative h-[250px] w-[250px] rounded-full overflow-hidden border-4 border-white/20 dark:border-black/20 shadow-xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A6855D]/20 to-[#F2CA99]/20 backdrop-blur-sm" />
              <Image
                src="/assets/utilImages/profile.png"
                alt="Gursahib Singh profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Right column - Text content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 order-1 md:order-2 mt-0 col-span-1 md:col-span-1">
          <div className="space-y-4">
            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-baseline gap-3 justify-center md:justify-start"
            >
              <motion.span
                key={displayText}
                className="text-3xl md:text-4xl font-bold text-[#734916] dark:text-[#A6855D] font-sora min-h-[48px]"
              >
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block ml-1 w-[3px] h-[30px] bg-[#734916] dark:bg-[#A6855D]"
                />
              </motion.span>
              <span className="text-2xl md:text-3xl font-semibold dark:text-white ml-3">
                I’m <span className="underline decoration-accent-500 underline-offset-4">Gursahib Singh</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sora text-foreground dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#734916] via-[#A6855D] to-[#F2CA99] bg-300% animate-gradient">
                scalable, agentic AI tools
              </span>{" "}
              for learning and innovation.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I’m a Computer Science student @ Thompson Rivers University blending AI with education, building impactful tools — from voice assistants to LLM-powered web systems.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="group bg-[#734916] hover:bg-[#A6855D] text-[#F2CA99] rounded-full border border-[#A6855D]/30 shadow-lg hover:shadow-[#A6855D]/20" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="group rounded-full text-[#734916] hover:text-[#A6855D] dark:text-[#F2CA99] dark:hover:text-[#F2CA99] border-[#A6855D]/30 hover:border-[#A6855D]/60 hover:bg-[#F2CA99]/10 dark:hover:bg-[#734916]/20" asChild>
              <Link href={`/blog/${latestPost.slug}`}>
                Latest Blog Post
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}
