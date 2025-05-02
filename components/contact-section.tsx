"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      </div>
      
      <div className="container relative">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">Let&apos;s Connect</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let&apos;s chat about AI, learning & cool hacks.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="outline" size="lg" asChild className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40">
                <Link href={SITE_CONFIG.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="outline" size="lg" asChild className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40">
                <Link href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="outline" size="lg" asChild className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40">
                <Link href="mailto:gursahib99888@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}