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
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Luxury animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,133,93,0.15),rgba(0,1,13,0.05)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(242,202,153,0.08),rgba(166,133,93,0.06),rgba(115,73,22,0.08))]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A6855D' fill-opacity='0.25'%3E%3Cpath d='M30 30a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-30a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM0 30a6 6 0 1 1 0-12 6 6 0 0 1 0 12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
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
                className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-2 border-[#A6855D]/30 hover:border-[#A6855D]/60 transition-colors shadow-md hover:shadow-lg"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                  <div className="p-2 sm:p-3 rounded-full bg-[#F2CA99]/20 dark:bg-[#734916]/20">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-[#734916] dark:text-[#A6855D]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#734916] dark:text-[#F2CA99]">Education</h3>
                </div>

                <div className="space-y-6">
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-sm sm:text-base text-[#734916] dark:text-[#A6855D] font-medium">{edu.school}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{edu.year}</p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h5 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Achievements</h5>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {edu.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#A6855D] mt-1.5" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <h5 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Research</h5>
                    <div className="grid gap-3 sm:gap-4">
                      {edu.research.map((res, i) => (
                        <motion.div
                          key={i}
                          className="p-4 rounded-lg bg-background/50 hover:bg-[#F2CA99]/10 transition-all border border-[#A6855D]/20 hover:border-[#A6855D]/40 shadow-sm hover:shadow-md"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-start justify-between gap-1 sm:gap-2">
                            <h6 className="text-sm sm:text-base font-medium">{res.title}</h6>
                            <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-8 sm:w-8 text-[#734916] hover:text-[#A6855D] hover:bg-[#F2CA99]/10" asChild>
                              <a href={res.poster} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                              </a>
                            </Button>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
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
            <Card className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-2 border-[#A6855D]/30 hover:border-[#A6855D]/60 transition-colors shadow-md hover:shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                <div className="p-2 sm:p-3 rounded-full bg-[#F2CA99]/20 dark:bg-[#734916]/20">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-[#734916] dark:text-[#A6855D]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#734916] dark:text-[#F2CA99]">Work Experience</h3>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-border">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    className="mb-8 relative last:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="absolute -left-[33px] sm:-left-[41px] top-[14px] w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#A6855D] border-3 sm:border-4 border-background" />
                    <div className="p-3 sm:p-4 md:p-6 rounded-lg bg-background/50 hover:bg-[#F2CA99]/10 transition-all border border-[#A6855D]/20 hover:border-[#A6855D]/40 shadow-sm hover:shadow-md">
                      <h4 className="text-base sm:text-lg font-semibold">{exp.role}</h4>
                      <p className="text-sm sm:text-base text-[#734916] dark:text-[#A6855D] font-medium">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{exp.period}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{exp.description}</p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.highlights.map((hl, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#A6855D] mt-1" />
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