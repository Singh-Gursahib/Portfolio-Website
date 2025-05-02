// data/project-data/verbi-ai-study-bot.tsx
import React from "react";

// Project Metadata
export const metadata = {
  title: "Verbi: AI-Powered Study Bot",
  category: "Gen AI", // Category: Gen AI
  tags: ["Gen AI", "LLM", "React", "Next.js", "TypeScript", "PDF Processing", "Adaptive Learning", "Hackathon"],
  image: "/assets/projects/verbi/verbi-user-dashboard.png", // Featured Image: User Dashboard (Updated)
  demoUrl: null, // No live demo URL provided
  githubUrl: "https://github.com/Singh-Gursahib", // GitHub URL from video (Updated)
};

// Table of Contents
export const tableOfContents = [
  { id: "overview", title: "Project Overview" },
  { id: "key-features", title: "Key Features" },
  { id: "quiz-generation", title: "Intelligent Quiz Generation" },
  { id: "adaptive-learning", title: "Adaptive Learning Engine" },
  { id: "analytics-dashboard", title: "Analytics & User Dashboard" },
  { id: "ai-notes", title: "AI-Enhanced Notes" },
  { id: "tech-stack", title: "Tech Stack & Challenges" },
  { id: "conclusion", title: "Conclusion" },
];

// Main Project Content Component
export default function VerbiAiStudyBot() {
  return (
    <>
      {/* Project Overview Section */}
      <section id="overview" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="mb-6">
          Verbi is an AI-powered study bot designed to transform the learning experience. Developed rapidly over an intense 3-day hackathon using React and Next.js, Verbi addresses the challenges of passive studying by turning user-provided materials into dynamic, interactive quizzes and learning tools.
        </p>
        {/* --- Video Embed Start --- */}
        <div className="mb-8">
           <p className="mb-4 text-lg italic text-muted-foreground">
             Watch the video below for a complete walkthrough of the Verbi application and its features developed during the hackathon. Detailed explanations and screenshots follow.
           </p>
           <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-border/50 shadow-lg">
            <iframe
               className="absolute top-0 left-0 w-full h-full"
               src="https://www.youtube.com/embed/gB_ggwkMVc4?si=kVDJfyFTX0aAwM5Z"
               title="YouTube video player - Verbi AI Study Bot Walkthrough"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
            ></iframe>
           </div>
        </div>
        {/* --- Video Embed End --- */}
        <div>
          <h3 className="text-2xl font-bold mb-4">The Problem & Solution</h3>
          <p className="mb-4">
            Traditional study methods often involve passively reading notes or textbooks, leading to lower retention and engagement. Verbi tackles this by leveraging Generative AI to create a personalized and adaptive learning environment.
          </p>
          <p>
            It empowers learners by automatically generating quizzes from their notes, tracking their progress with insightful analytics, and adapting question difficulty based on performance, making studying significantly more effective and engaging – all built within a challenging 3-day timeframe.
          </p>
        </div>
      </section>

      {/* Key Features Section (Refined based on 0:17) */}
      <section id="key-features" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <p className="mb-4 text-muted-foreground">
          Verbi integrates several AI-powered features to create a comprehensive learning tool (as highlighted at 0:17 in the video):
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start mb-6">
           {/* Feature List (Updated) */}
           <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 order-2 md:order-1">
            <h3 className="text-xl font-bold mb-4">Core Functionality</h3>
            <ul className="space-y-3"> {/* Increased spacing */}
              <li className="flex items-start gap-3"> {/* Use items-start for multi-line */}
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" /> {/* Adjusted icon alignment */}
                <span><strong className="font-semibold">AI-Driven Quiz Generation:</strong> Create personalized quizzes from topics, text, or PDFs using advanced AI algorithms.</span>
              </li>
               <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span><strong className="font-semibold">LLM-Powered Personalization:</strong> Large Language Models analyze performance to tailor questions to the right difficulty level.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span><strong className="font-semibold">Focused Practice:</strong> Identify and strengthen weak areas with targeted exercises and explanations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span><strong className="font-semibold">Spaced Repetition:</strong> Optimize long-term retention with a scientifically-backed spaced repetition system.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span><strong className="font-semibold">Progress Tracking:</strong> Visualize your learning journey with detailed analytics and progress reports.</span>
              </li>
               <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span><strong className="font-semibold">Continuous Improvement:</strong> The AI constantly evolves, learning from user interactions to provide an ever-improving experience.</span>
              </li>
              {/* Added features shown later but still key */}
               <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                 <span><strong className="font-semibold">PDF Processing Integration:</strong> Seamlessly upload and process PDF notes/slides for quiz and content generation.</span>
              </li>
               <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                 <span><strong className="font-semibold">AI Note Assistant:</strong> Interact with uploaded notes for in-context explanations, summaries, and definitions.</span>
              </li>
            </ul>
          </div>
          {/* Feature Image (Represents the grid view) */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 order-1 md:order-2">
            <img
              src="/assets/projects/verbi/verbi-key-features.png" // This image should show the grid of features
              alt="Verbi Key Features Grid"
              className="object-contain w-full h-full"
            />
             <p className="text-center text-xs italic text-muted-foreground mt-1">Feature grid shown at 0:17</p>
          </div>
        </div>
      </section>

      {/* Intelligent Quiz Generation Section */}
      <section id="quiz-generation" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Intelligent Quiz Generation</h2>
        <p className="mb-6">
          Verbi offers multiple flexible ways to generate quizzes tailored to your study needs. You can simply enter a topic and let the AI generate relevant questions, paste your notes directly, or upload your PDF documents.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/verbi/verbi-quiz-generator-pdf-upload.png"
              alt="Verbi PDF Upload for Quiz Generation"
              className="object-contain w-full h-full"
            />
             <p className="text-center text-xs italic text-muted-foreground mt-1">Quiz generation options including PDF upload (0:31)</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">From PDF to Quiz Instantly</h3>
            <p>
              One of the standout features developed during the hackathon is the ability to process uploaded PDF files. Verbi intelligently parses your lecture slides, notes, or textbook chapters, extracts the key information, and automatically converts it into interactive quiz questions, saving valuable study time.
            </p>
          </div>
        </div>
      </section>

      {/* Adaptive Learning Engine Section */}
      <section id="adaptive-learning" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Adaptive Learning Engine</h2>
        <p className="mb-6">
          Verbi's quizzes aren't static. The platform employs an adaptive learning engine powered by Large Language Models (LLMs) to dynamically adjust the difficulty based on your performance, ensuring you're always learning effectively.
        </p>
         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div>
            <h3 className="text-2xl font-bold mb-4">Personalized Difficulty Curve</h3>
            <p className="mb-4">
             If you answer a question incorrectly, Verbi identifies the knowledge gap and introduces simpler, related questions to help build a solid foundation on that subtopic (as shown at 0:59 in the video).
            </p>
             <p>
             Conversely, if you consistently answer correctly, the system presents more challenging questions to deepen your understanding and push your knowledge boundaries (1:06). This ensures the learning experience is tailored precisely to your current level.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/verbi/verbi-adaptive-questionnaire.png"
              alt="Verbi Adaptive Questionnaire Flow"
              className="object-contain w-full h-full"
            />
             <p className="text-center text-xs italic text-muted-foreground mt-1">Dynamic question adjustment visualization (0:59 / 1:06)</p>
          </div>
        </div>
         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/verbi/verbi-interactive-quiz-progress.png"
              alt="Verbi Interactive Quiz with Real-time Progress"
              className="object-contain w-full h-full"
            />
             <p className="text-center text-xs italic text-muted-foreground mt-1">Quiz interface with dynamic performance chart (0:38)</p>
          </div>
          <div>
             <h3 className="text-2xl font-bold mb-4">Real-time Feedback</h3>
            <p>
              During the quiz, the "Dynamic Performance Chart" provides immediate visual feedback on your mastery of different subtopics covered in the material, helping you understand your strengths and weaknesses on the fly.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics & User Dashboard Section */}
      <section id="analytics-dashboard" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Analytics & User Dashboard</h2>
        <p className="mb-6">
          Understanding your progress is crucial for effective learning. Verbi provides detailed analytics both after each quiz and through a comprehensive user dashboard.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/50"> {/* Adjusted aspect ratio */}
            <img
              src="/assets/projects/verbi/verbi-quiz-results-analysis.png"
              alt="Verbi Quiz Results and Recommendations"
              className="object-contain w-full h-full"
            />
             <p className="text-center text-xs italic text-muted-foreground mt-1">Detailed quiz results and AI recommendations (1:10)</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Post-Quiz Insights</h3>
            <p className="mb-4">
              After completing a quiz, you receive a detailed breakdown including your score, correct/incorrect answers, and most importantly, AI-generated recommendations suggesting specific areas for improvement based on your performance.
            </p>
             <p>
               Visualizations like Radar Charts help pinpoint strengths and weaknesses across topics covered in the quiz.
             </p>
          </div>
        </div>
         <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 mb-8">
           <h3 className="text-xl font-bold mb-4 text-center">Performance Visualization</h3>
           <div className="relative aspect-video rounded-xl overflow-hidden mx-auto max-w-xl"> {/* Centered and constrained width */}
            <img
              src="/assets/projects/verbi/verbi-performance-charts.png"
              alt="Verbi Performance Radar and Time Charts"
              className="object-contain w-full h-full"
            />
          </div>
           <p className="text-center mt-4 text-muted-foreground">Radar charts show topic mastery, while line charts track time taken per question (1:18).</p>
         </div>

        <h3 className="text-2xl font-bold mb-4">Your Learning Journey Hub</h3>
         <p className="mb-6">
           The central user dashboard provides a holistic overview of your learning activities and progress over time. Track metrics like overall accuracy, score trends across quizzes, badge progress for mastering levels, quiz frequency, and review recently answered incorrect questions.
         </p>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/verbi/verbi-user-dashboard.png"
              alt="Verbi Comprehensive User Dashboard"
              className="object-cover w-full h-full" // Use cover for dashboard
            />
            <p className="text-center text-xs italic text-muted-foreground mt-1">Comprehensive user dashboard view (1:22)</p>
          </div>
      </section>

      {/* AI-Enhanced Notes Section */}
      <section id="ai-notes" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">AI-Enhanced Notes</h2>
        <p className="mb-6">
          Verbi transforms static notes into dynamic learning resources. After uploading a PDF, you can interact directly with the content using the integrated AI assistant.
        </p>
         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/verbi/verbi-ai-note-assistant.png"
              alt="Verbi AI Note Assistant Context Menu"
              className="object-contain w-full h-full"
            />
             <p className="text-center text-xs italic text-muted-foreground mt-1">Interacting with notes via the AI assistant (2:01)</p>
          </div>
           <div>
            <h3 className="text-2xl font-bold mb-4">Instant Contextual Help</h3>
            <p>
             Simply highlight any text within your uploaded document, and Verbi's AI assistant offers options to:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                <li>Explain the concept (optionally using analogies based on your interests - 1:42)</li>
                <li>Expand on the topic for more detail</li>
                <li>Define specific terms</li>
                <li>Summarize the selected text in bullet points</li>
            </ul>
            <p className="mt-4">
             This feature provides immediate clarification and deeper understanding without needing to leave your study material.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack & Challenges Section */}
      <section id="tech-stack" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Tech Stack & Challenges</h2>
        <p className="mb-6">
         Building Verbi within a 3-day hackathon required rapid development and effective technology choices. The focus was on leveraging powerful AI tools and a modern web stack (React/Next.js) for quick iteration.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Tech Stack Info Card */}
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-xl font-bold mb-2">Core Technologies</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong className="font-semibold">Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
              <li><strong className="font-semibold">AI/Backend:</strong> LLM API (e.g., OpenAI GPT models), PDF Processing Library</li>
              <li><strong className="font-semibold">Platform:</strong> Web Application</li>
            </ul>
          </div>
           {/* Challenges Info Card */}
           <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-xl font-bold mb-2">Key Hackathon Challenges</h4>
             <ul className="space-y-1 list-disc list-inside">
               <li><strong className="font-semibold">Time Constraint:</strong> Implementing a feature-rich AI application in just 3 days.</li>
               <li><strong className="font-semibold">LLM Integration:</strong> Effectively prompting and utilizing the LLM for adaptive questioning and reliable note assistance.</li>
                <li><strong className="font-semibold">PDF Parsing:</strong> Handling various PDF structures and reliably extracting meaningful content.</li>
               <li><strong className="font-semibold">UI/UX Design:</strong> Creating an intuitive and visually appealing interface under pressure using React & Next.js.</li>
             </ul>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
        <p className="mb-6">
          Verbi successfully demonstrates the potential of AI to create highly personalized and adaptive learning tools. Built during a fast-paced 3-day hackathon, it showcases the ability to rapidly prototype and integrate complex AI features like adaptive quizzing, PDF processing, and contextual AI assistance into a functional web application using React and Next.js.
        </p>
         <p className="mb-4">
           The project serves as a strong proof-of-concept for a more intelligent and engaging way to study, moving beyond traditional methods towards a future where learning technology truly adapts to the individual learner.
         </p>
         <p className="text-muted-foreground">
           As mentioned in the video (2:08), the plan is to make Verbi open-source to foster community contribution and wider accessibility. You can find the repository <a href={metadata.githubUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">here</a>.
         </p>
      </section>
    </>
  );
}