"use client";

import React from "react";
import { GooeyTextDemo } from "@/components/ui/gooey-text-demo";

export function ConnectSection() {
  return (
    <section id="connect" className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
          <p className="text-muted-foreground">
            Let's collaborate and create something amazing together
          </p>
        </div>
        
        <div className="bg-card rounded-lg shadow-lg p-8">
          <GooeyTextDemo />
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-background p-6 rounded-md shadow">
              <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
              <p className="mb-4">
                Have a project in mind or want to discuss opportunities? 
                Feel free to reach out through any of these channels.
              </p>
              <div className="space-y-3">
                <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-primary hover:underline">
                  <span>your.email@example.com</span>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-md shadow">
              <h3 className="text-xl font-semibold mb-3">Let's Collaborate</h3>
              <p className="mb-4">
                I'm always open to new opportunities and collaborations. 
                Whether you need a website, application, or have a project idea, 
                I'd love to hear from you.
              </p>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
