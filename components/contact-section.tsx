"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { 
  IconBrain, 
  IconCode, 
  IconBuildingSkyscraper, 
  IconChartBar 
} from "@tabler/icons-react";

export function ContactSection() {
  // Define the icons to display with each morphing text
  const renderIconAfterText = (text: string) => {
    switch (text) {
      case "Think":
        return <IconBrain className="inline-block ml-2 text-[#734916] dark:text-[#F2CA99]" size={36} stroke={1.5} />;
      case "Code":
        return <IconCode className="inline-block ml-2 text-[#734916] dark:text-[#F2CA99]" size={36} stroke={1.5} />;
      case "Build":
        return <IconBuildingSkyscraper className="inline-block ml-2 text-[#734916] dark:text-[#F2CA99]" size={36} stroke={1.5} />;
      case "Impact":
        return <IconChartBar className="inline-block ml-2 text-[#734916] dark:text-[#F2CA99]" size={36} stroke={1.5} />;
      default:
        return null;
    }
  };
  
  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      {/* More subtle luxury gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(166,133,93,0.2),rgba(0,1,13,0.08)_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(115,73,22,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(242,202,153,0.04),rgba(166,133,93,0.04),rgba(115,73,22,0.04))]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      </div>
      
      <div className="container relative px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with enhanced typography */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora mb-12 sm:mb-16 text-[#734916] dark:text-[#F2CA99] tracking-tight relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative z-10">Let&apos;s Connect</span>
            {/* Subtle underline effect */}
            <motion.span 
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#A6855D] to-transparent"
              initial={{ width: 0, opacity: 0, left: '50%', right: '50%' }}
              whileInView={{ width: '100%', opacity: 0.6, left: 0, right: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          
          {/* Enhanced GooeyText animation container with more space and visual impact */}
          <motion.div 
            className="relative mb-20 py-16 mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative elements with more subtle glow effects */}
            <div className="absolute -inset-x-24 -top-12 -bottom-12 bg-[#A6855D]/15 rounded-full blur-3xl" />
            <div className="absolute -inset-x-16 -top-8 -bottom-8 bg-[#F2CA99]/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute -inset-x-8 -top-4 -bottom-4 bg-[#734916]/5 rounded-full blur-xl animate-pulse" style={{ animationDuration: '12s' }} />
            
            {/* Subtle decorative lines with animation */}
            <motion.div 
              className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#A6855D]/30 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#A6855D]/30 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            
            {/* GooeyText with enhanced typography and properly aligned icons */}
            <div className="h-[220px] flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main morphing text */}
                <div className="flex justify-center items-center h-[120px]">
                  <GooeyText
                    texts={["Think", "Code", "Build", "Impact"]}
                    morphTime={0.8}
                    cooldownTime={1.2}
                    className="font-bold text-[#734916] dark:text-[#F2CA99] font-sora tracking-tight"
                    textClassName="text-5xl md:text-6xl lg:text-7xl"
                  />
                </div>
                
                {/* Icon container positioned directly below the text */}
                <div className="flex justify-center mt-8 relative">
                  {/* Subtle line connecting text to icons */}
                  <div className="absolute -top-4 left-1/2 w-px h-4 bg-gradient-to-b from-[#A6855D]/40 to-transparent transform -translate-x-1/2"></div>
                  
                  {/* Icons with proper spacing and alignment */}
                  <div className="grid grid-cols-4 gap-x-10 md:gap-x-16 w-full max-w-md">
                    <motion.div 
                      className="flex justify-center"
                      initial={{ opacity: 0.3, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <IconBrain className="text-[#734916] dark:text-[#F2CA99]" size={28} stroke={1.5} />
                    </motion.div>
                    <motion.div 
                      className="flex justify-center"
                      initial={{ opacity: 0.3, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.25 }}
                    >
                      <IconCode className="text-[#734916] dark:text-[#F2CA99]" size={28} stroke={1.5} />
                    </motion.div>
                    <motion.div 
                      className="flex justify-center"
                      initial={{ opacity: 0.3, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    >
                      <IconBuildingSkyscraper className="text-[#734916] dark:text-[#F2CA99]" size={28} stroke={1.5} />
                    </motion.div>
                    <motion.div 
                      className="flex justify-center"
                      initial={{ opacity: 0.3, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.75 }}
                    >
                      <IconChartBar className="text-[#734916] dark:text-[#F2CA99]" size={28} stroke={1.5} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced tagline with refined typography */}
          <motion.p 
            className="text-xl sm:text-2xl text-[#A6855D] dark:text-[#A6855D]/90 mb-16 max-w-2xl mx-auto font-medium leading-relaxed font-sora tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10">Let&apos;s chat about</span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A6855D]/40 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
            {" "}
            <span className="text-[#734916] dark:text-[#F2CA99] font-semibold">AI, learning & cool hacks</span>
            <span className="text-[#A6855D] dark:text-[#A6855D]/90">.</span>
          </motion.p>
          
          {/* Social links with improved spacing and alignment */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Decorative line above social links on mobile */}
            <div className="hidden max-sm:block w-24 h-px bg-gradient-to-r from-transparent via-[#A6855D]/30 to-transparent mb-4"></div>
            
            {/* GitHub button */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="rounded-full bg-[#00010D]/5 backdrop-blur-sm border-[#A6855D]/40 hover:border-[#A6855D]/70 text-[#734916] hover:text-[#A6855D] shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-base px-8 py-5 h-auto"
              >
                <Link href={SITE_CONFIG.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Github className="h-5 w-5 mr-3" />
                  <span className="font-medium">GitHub</span>
                </Link>
              </Button>
            </motion.div>
            
            {/* LinkedIn button */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="rounded-full bg-[#00010D]/5 backdrop-blur-sm border-[#A6855D]/40 hover:border-[#A6855D]/70 text-[#734916] hover:text-[#A6855D] shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-base px-8 py-5 h-auto"
              >
                <Link href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Linkedin className="h-5 w-5 mr-3" />
                  <span className="font-medium">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
            
            {/* Email button */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="rounded-full bg-[#00010D]/5 backdrop-blur-sm border-[#A6855D]/40 hover:border-[#A6855D]/70 text-[#734916] hover:text-[#A6855D] shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-base px-8 py-5 h-auto"
              >
                <Link href="mailto:gursahib99888@gmail.com" className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span className="font-medium">Email</span>
                </Link>
              </Button>
            </motion.div>
            
            {/* Decorative line below social links on mobile */}
            <div className="hidden max-sm:block w-24 h-px bg-gradient-to-r from-transparent via-[#A6855D]/30 to-transparent mt-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}