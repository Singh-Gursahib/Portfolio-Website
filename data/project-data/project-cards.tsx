export type ProjectCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Gen AI" | "Web Apps" | "Mobile Apps" | "ML/DL";
  tags: string[];
  image: string;
};

export const projectCards: ProjectCard[] = [
  {
    slug: "verbi-ai-study-bot",
    title: "Verbi: AI-Powered Study Bot",
    excerpt: "An AI-powered study companion built in a 3-day hackathon, featuring adaptive quizzes generated from PDFs, progress tracking, and AI note assistance.",
    category: "Gen AI",
    tags: ["Gen AI", "LLM", "React", "TypeScript", "PDF Processing", "Adaptive Learning", "Hackathon"],
    image: "/assets/projects/verbi/verbi-cover.png"
  },
  {
    slug: "acres-platform",
    title: "ACRES AI Construction Management Platform",
    excerpt: "Led development of an award-winning AI platform enhancing construction safety (PPE detection), data access (SQL chatbot), and task management (AI agents).",
    category: "Gen AI",
    tags: ["AI", "Computer Vision", "NLP", "SQL", "React", "TypeScript", "Award Winner"],
    image: "/assets/projects/acres/acres-welcome-screen.png"
  },
  {
    slug: "alphasage-ai",
    title: "AlphaSage AI: AI-Powered Trading & Investment Platform",
    excerpt: "An AI-driven platform for advanced market analysis, Python-based strategy backtesting, and intelligent report generation using Gemini & LLaMA.",
    category: "Gen AI",
    tags: [
      "FinTech",
      "TradingView",
      "Yahoo Finance API",
      "Google Gemini",
      "Groq",
      "LLaMA",
      "AI",
      "Backtesting",
    ],
    image: "/assets/projects/alphasage-ai/landing-page.png"
  },
  {
    slug: "lifelens", // Matches the filename lifelens.tsx
    title: "LifeLens: AI-Powered Journaling Companion",
    excerpt: "An intelligent journaling app developed for an HCI course, featuring heatmaps, Markdown editing, and AI-driven insights, OCR, and voice input.",
    category: "Web Apps", // Consistent with metadata
    tags: ["React", "TypeScript", "AI", "HCI", "Frontend", "Data Visualization"], // Consistent with metadata
    image: "/assets/projects/lifelens/lifelens-dashboard-overview.png"
  },
  {
    slug: "aura-robotics",
    title: "AURA: Vision-Controlled IoT-Enabled Robotic Arm",
    excerpt: "A groundbreaking no-code robotic arm that democratizes industrial automation. Using computer vision and AI, workers can control precision robots without programming knowledge.",
    category: "ML/DL",
    tags: [
      "Robotics",
      "IoT",
      "Computer Vision",
      "MediaPipe",
      "GPT-4o-mini",
      "Arduino",
      "Firebase",
      "AI",
      "Accessibility",
    ],
    image: "/assets/projects/aura/aura-hero-shot.png"
  }
];

export const categories = ["All", "Gen AI", "Web Apps", "Mobile Apps"] as const; 