import React from 'react';

// Corrected image path prefix
const imagePath = '/assets/projects/lifelens/';

// --- METADATA ---
export const metadata = {
  title: "LifeLens: AI-Powered Journaling Companion",
  category: "Web Apps",
  tags: ["React", "TypeScript", "AI", "HCI", "Frontend", "Data Visualization"],
  image: `${imagePath}lifelens-dashboard-overview.png`, // Featured image using correct path
  demoUrl: null, // Add URL if you have a live demo
  githubUrl: null // Add URL if the repo is public
};

// --- TABLE OF CONTENTS ---
export const tableOfContents = [
  { id: "overview", title: "Project Overview" },
  { id: "dashboard-insights", title: "Dashboard & Insights" },
  { id: "journaling-experience", title: "The Journaling Experience" },
  { id: "ai-features", title: "AI-Powered Features" },
  { id: "tech-stack-design", title: "Tech Stack & Design Approach" },
  { id: "challenges-learnings", title: "Challenges & Learnings" },
];

// --- PROJECT CONTENT ---
export default function LifeLens() {
  return (
    <>
      {/* Overview Section */}
      <section id="overview" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

        <p className="mb-6">
          LifeLens is an intelligent journaling application I developed for my Human-Computer Interaction (HCI) course at Thompson Rivers University in April 2025. It's designed to transform journaling from a simple text-entry task into an insightful, interactive experience. The goal was to create an AI-powered companion that helps users capture thoughts, track emotions, visualize progress, and gain deeper self-awareness effortlessly.
        </p>

        {/* YouTube Video Embed */}
        <div className="mb-8">
           <p className="mb-4 text-center text-muted-foreground">
              Watch a walkthrough of the LifeLens application below:
           </p>
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
              
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_XXdjuo5bBg?si=E7IhKyWmF-uyiLjY"
                title="LifeLens Project Walkthrough"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              
          </div>
        </div>

        {/* Core Objectives */}
        <div>
            <h3 className="text-2xl font-bold mb-4">Core Objectives</h3>
             <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Create an intuitive and engaging user interface (HCI focus).</span>
                  </li>
                   <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Integrate AI for enhanced functionality (formatting, analysis, input).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Provide meaningful data visualizations for self-reflection.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Streamline the journaling process with features like quick entry and multiple input methods.</span>
                  </li>
                </ul>
              </div>
          </div>
      </section>

      {/* Dashboard & Insights Section */}
      <section id="dashboard-insights" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Dashboard & Insights</h2>

        <p className="mb-6">
          The central hub of LifeLens is the personalized dashboard. It welcomes the user, offers a one-click "Quick Journal Entry" option, and provides an immediate overview of their journaling journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src={`${imagePath}lifelens-dashboard-overview.png`} // Corrected path
              alt="LifeLens Dashboard Overview"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Dashboard Components</h3>
            <ul className="space-y-2 mb-4 list-disc list-inside">
              {/* Fixed Bold */}
              <li><strong>Heatmap Visualizations:</strong> Track daily Mood, Energy, Productivity, and Creativity levels throughout the year. Color intensity indicates the level, allowing users to spot trends and patterns easily.</li>
              <li><strong>Recent Journal Entries:</strong> Quick access to the latest thoughts and reflections.</li>
              <li><strong>Badges & Achievements:</strong> Gamified motivation showcasing earned milestones like "Consistency Champion" or "Gratitude Guru."</li>
               <li><strong>Favorites:</strong> Quick links to specially marked entries.</li>
            </ul>
            <p>This immediate visual feedback encourages consistent use and helps users connect daily inputs to longer-term trends.</p>
          </div>
        </div>

         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div>
            <h3 className="text-2xl font-bold mb-4">In-Depth Insights Page</h3>
            <p className="mb-4">
              For a more comprehensive analysis, the dedicated "Insights" page displays the full yearly heatmaps for all tracked metrics (Mood, Energy, Productivity, Creativity). This allows for a deeper dive into personal patterns and how different aspects of well-being correlate over time.
            </p>
             <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
                {/* Fixed Bold */}
                <h4 className="text-xl font-bold mb-2">Data Visualization Focus</h4>
                <p className="text-muted-foreground">
                   A key HCI consideration was making complex temporal data easy to understand. The heatmap was chosen for its ability to represent density and trends across two axes (day and month) effectively.
                </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src={`${imagePath}lifelens-insights-page.png`} // Corrected path
              alt="LifeLens Insights Page Heatmaps"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Journaling Experience Section */}
      <section id="journaling-experience" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">The Journaling Experience</h2>
        <p className="mb-6">
          LifeLens aims to make writing, viewing, and managing journal entries seamless and powerful.
        </p>

         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src={`${imagePath}lifelens-journal-list.png`} // Corrected path
              alt="LifeLens Journal Entries List"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Organized Entry Management</h3>
            <p>
              The "Journals" page presents a clean, chronological list of all entries. Users can easily view entry details, associated metrics (like Happiness, Creativity captured at the time of writing), and edit past entries.
            </p>
             <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 mt-4">
               <ul className="space-y-2">
                 <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>View full entry content and metrics.</span>
                 </li>
                 <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Edit functionality for corrections or additions (with fine-tuning planned).</span>
                 </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Ability to mark entries as favorites.</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div>
             {/* Fixed Bold */}
            <h3 className="text-2xl font-bold mb-4">Distraction-Free Writing</h3>
            <p className="mb-4">
              Creating a new entry opens a clean canvas, minimizing distractions. Users can set a title, date, and mood rating easily.
            </p>
            {/* Fixed Bold */}
            <h3 className="text-2xl font-bold mb-4">Markdown Editor</h3>
            <p>
              The editor supports Markdown for text formatting (bold, italics, lists, headings, etc.). Users can switch between "Write" and "Preview" modes instantly to see their formatted text. A handy guide explains the basic Markdown syntax.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src={`${imagePath}lifelens-markdown-guide.png`} // Corrected path
              alt="LifeLens Markdown Editor Preview"
              className="object-cover"
            />
          </div>
        </div>
         <div className="relative aspect-video w-full md:w-1/2 mx-auto rounded-xl overflow-hidden border border-border/50 mb-6">
             <img
                 src={`${imagePath}lifelens-markdown-preview.png`} // Corrected path
                 alt="LifeLens Markdown Formatting Guide"
                 className="object-contain p-2"
             />
         </div>

      </section>

      {/* AI-Powered Features Section */}
      <section id="ai-features" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">AI-Powered Features</h2>
        <p className="mb-6">
          The integration of AI elevates LifeLens beyond a standard journaling app, offering unique capabilities to enhance the user experience.
        </p>

         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src={`${imagePath}lifelens-ai-formatting.png`} // Corrected path
              alt="LifeLens AI Text Formatting"
              className="object-cover"
            />
          </div>
          <div>
            {/* Fixed Bold */}
            <h3 className="text-2xl font-bold mb-4">AI Formatting Tool</h3>
            <p>
              With a single click, users can leverage an AI tool to automatically format and structure their plain text entry using Markdown. This adds headings, bullet points, and emphasis based on the content's structure, saving time and improving readability.
            </p>
          </div>
        </div>

         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            {/* Fixed Bold */}
            <h3 className="text-2xl font-bold mb-4">Image-to-Text (OCR)</h3>
            <p>
              Bridge the gap between physical and digital journaling. Users can point their camera at a handwritten journal page, and LifeLens uses Optical Character Recognition (OCR) to extract the text and insert it directly into a digital entry.
            </p>
          </div>
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src={`${imagePath}lifelens-image-to-text.png`} // Corrected path
              alt="LifeLens Image-to-Text OCR"
              className="object-cover"
            />
          </div>
        </div>

         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src={`${imagePath}lifelens-voice-input.png`} // Corrected path
              alt="LifeLens Voice Input"
              className="object-contain p-4"
            />
          </div>
          <div>
            {/* Fixed Bold */}
            <h3 className="text-2xl font-bold mb-4">Voice Input (Speech-to-Text)</h3>
            <p>
             For users who prefer speaking their thoughts, LifeLens includes a voice input feature that transcribes spoken words into text directly within the journal entry editor.
            </p>
          </div>
        </div>

         <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            {/* Fixed Bold */}
            <h3 className="text-2xl font-bold mb-4">AI Analysis & Suggestions</h3>
            <p>
              After saving an entry, an AI model analyzes the text content. It provides scores across various metrics (e.g., Happiness, Energy, Mindfulness, Stress, Productivity) based on sentiment and keywords. It also offers personalized textual feedback and suggestions for reflection. If the user didn't provide a title, the AI can generate a relevant one.
            </p>
          </div>
           <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src={`${imagePath}lifelens-ai-analysis.png`} // Corrected path
              alt="LifeLens AI Analysis Modal"
              className="object-cover"
            />
          </div>
        </div>
      </section>

       {/* Tech Stack & Design Section */}
      <section id="tech-stack-design" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Tech Stack & Design Approach</h2>

          <p className="mb-6">
              LifeLens was built with a focus on modern web technologies and user-centered design principles learned in my HCI course.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
                  <h3 className="text-xl font-bold mb-4">Core Technologies</h3>
                  <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {/* Fixed Bold */}
                          <span><strong>Frontend:</strong> React, TypeScript (Assumed based on portfolio structure)</span>
                      </li>
                      <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {/* Fixed Bold */}
                          {/* Mention framework  e.g., Tailwind CSS, CSS Modules, or custom CSS */}
                          <span><strong>Styling:</strong> Tailwind CSS, CSS Modules, custom CSS, and more.</span>
                      </li>
                      <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                           {/* Fixed Bold */}
                          <span><strong>Data Visualization:</strong>Chart.js, or custom SVG implementation for heatmaps</span>
                      </li>
                      <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                           
                          <span><strong>AI/ML:</strong> Llama models locally for vision and llm capabilities, used LLM basedAI agents for the analysis and formatting</span>
                      </li>
                  </ul>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
                  <h3 className="text-xl font-bold mb-4">Design Philosophy</h3>
                  <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                           {/* Fixed Bold */}
                          <span><strong>User-Centric:</strong> Focused on creating an intuitive, non-intimidating journaling experience.</span>
                      </li>
                      <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                           {/* Fixed Bold */}
                          <span><strong>Clarity:</strong> Ensuring visualizations and information are easily understandable.</span>
                      </li>
                      <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                           {/* Fixed Bold */}
                          <span><strong>Efficiency:</strong> Streamlining common tasks like entry creation and data input.</span>
                      </li>
                      <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                           {/* Fixed Bold */}
                          <span><strong>Feedback:</strong> Providing immediate visual feedback for actions (e.g., saving, AI processing).</span>
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Challenges & Learnings Section */}
      <section id="challenges-learnings" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Challenges & Learnings</h2>

          <p className="mb-6">
              Developing LifeLens involved several technical and design challenges, leading to valuable learning experiences.
          </p>

          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                     {/* Fixed Bold */}
                    <span><strong>AI Integration:</strong> Seamlessly integrating multiple AI features (OCR, STT, Analysis, Formatting) requires careful API design or model management, ensuring responsiveness without compromising user experience. Handling potential inaccuracies from these models was also a consideration.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                     {/* Fixed Bold */}
                    <span><strong>Data Visualization Design:</strong> Creating effective heatmaps that are informative, aesthetically pleasing, and performant across a year's worth of data required careful design and implementation choices.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                     {/* Fixed Bold */}
                    <span><strong>HCI Principles in Practice:</strong> Translating theoretical HCI concepts (like usability, feedback, cognitive load) into concrete UI/UX decisions for features like the editor, dashboard layout, and AI interactions.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                     {/* Fixed Bold */}
                    <span><strong>State Management:</strong> Managing application state effectively in React, especially with asynchronous AI operations and dynamic visualizations.</span>
                </li>
            </ul>
            <h3 className="text-xl font-bold mb-4 mt-6">Primary Learnings</h3>
             <ul className="space-y-2 list-disc list-inside">
                <li>Deepened understanding of applying HCI principles to build intuitive software.</li>
                <li>Practical experience in integrating various AI/ML capabilities into a user-facing application.</li>
                <li>Techniques for effective data visualization for temporal user data.</li>
                <li>Reinforced skills in frontend development with React and TypeScript (or relevant stack).</li>
                <li>Importance of iterative design and handling edge cases, particularly with AI-driven features.</li>
            </ul>
          </div>
      </section>
    </>
  );
}