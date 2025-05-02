"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, Briefcase, Star } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computing Science",
    school: "Thompson Rivers University",
    year: "Sep 2022 – Present",
    achievements: [
      "Dean’s List recognition each semester",
      "Secured UReap funding of $6,000 to address real student challenges with LLM solutions",
      "Presented MicroLearn simulations at TRU CS showcase"
    ],
    research: [
      {
        title: "Local LLM Solutions (UReap Project)",
        poster: "/blog/ureap-funding",
        description:
          "Conducting UReap-funded research ($6,000 grant) to deploy and fine-tune open-source LLMs locally, solving actual campus student problems via RAG pipelines for enhanced performance and privacy."
      },
      {
        title: "Microbiology Education Platform (MicroLearn)",
        poster: "/blog/revolutionizing-microbiology-education",
        description:
          "Developing a web-based application for the TRU Microbiology department to digitize curriculum with interactive simulations, experiments, and quizzes to boost visual learning and retention."
      }
    ]
  }
];


const experience = [
  {
    role: "Full-Stack Developer",
    company: "x360 Digital",
    period: "Sep 2024 – Present",
    description:
      "Develop comprehensive web solutions implementing Next.js, React, Django, and AI integration pipelines.",
    highlights: [
      "Successfully completed 5+ client projects featuring custom AI capabilities",
      "Architected LLM-based AI systems for multiple enterprise projects",
    ]
  },
  {
    role: "Teaching Assistant - Data Structures & Algorithms",
    company: "Thompson Rivers University",
    period: "Jan 2025 – April 2025",
    description:
      "Support students with Data Structures coursework and develop educational resources.",
    highlights: [
      "Mentored over 40 students in mastering algorithmic concepts",
      "Created supplementary learning materials to enhance practical understanding",
      "Evaluated assignments and provided detailed feedback to improve student performance"
    ]
  },
  {
    role: "Teaching Assistant - Mobile App Development",
    company: "Thompson Rivers University",
    period: "Jan 2025 – April 2025",
    description:
      "Facilitate mobile development learning through lab instruction and curriculum creation.",
    highlights: [
      "Supported more than 30 students in acquiring mobile development skills",
      "Invigilated tests and exams to ensure academic integrity",
      "Reviewed assignments and project submissions and offered constructive feedback"
    ]
  },
  {
    role: "Data Annotator & LLM Trainer",
    company: "Outlier.ai",
    period: "Aug 2024 – Present",
    description:
      "Optimize large language models through reinforcement learning techniques for enterprise deployment.",
    highlights: [
      "Successfully completed 40+ high-precision annotation assignments",
      "Assisted in training language models across multiple disciplines including computer science, linguistics, and physics"
    ]
  }
];

export function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        />
      </div>

      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Research */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className="p-8 mb-8 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Education & Research</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-primary font-medium">{edu.year}</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      Achievements
                    </h5>
                    <ul className="grid gap-2">
                      {edu.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xl font-semibold mb-4">Research</h5>
                    <div className="grid gap-4">
                      {edu.research.map((res, i) => (
                        <motion.div
                          key={i}
                          className="p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all border border-border/50 hover:border-primary/50"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h6 className="font-medium">{res.title}</h6>
                            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                              <a href={res.poster} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            {res.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-border">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    className="mb-8 relative last:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="absolute -left-[41px] top-[14px] w-5 h-5 rounded-full bg-primary border-4 border-background" />
                    <div className="p-6 rounded-lg bg-background/50 hover:bg-background/80 transition-all border border-border/50 hover:border-primary/50">
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((hl, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}