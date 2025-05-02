import React from 'react';

// Metadata for the project
export const metadata = {
  title: "ACRES AI Construction Management Platform",
  category: "Gen AI",
  tags: ["AI", "Computer Vision", "NLP", "Agentic AI", "SQL", "React", "TypeScript", "Next.js", "TRU Competition", "Award Winner"],
  image: "/assets/projects/acres/acres-welcome-screen.png",
  // demoUrl: "OPTIONAL_DEMO_URL_HERE",
  // githubUrl: "OPTIONAL_GITHUB_URL_HERE",
};

// Table of Contents Navigation
export const tableOfContents = [
  { id: "overview", title: "Project Overview & Award" },
  { id: "the-challenge", title: "The Industry Challenge" },
  { id: "our-solution", title: "Our AI-Driven Solution" },
  { id: "feature-compliance", title: "Feature: Automated PPE Compliance" },
  { id: "feature-inventory", title: "Feature: Intelligent Inventory & Data Chatbot" },
  { id: "feature-tasks", title: "Feature: Dynamic Task Breakdown" },
  { id: "technical-deep-dive", title: "Technical Deep Dive" },
  { id: "results-recognition", title: "Results & Recognition" },
  { id: "learnings", title: "Key Learnings & Takeaways" },
];

// Main Project Component
export default function AcresPlatform() {
  return (
    <>
      {/* Section 1: Project Overview & Award (No top padding/divider needed for the first section) */}
      <section id="overview" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Project Overview & Award</h2>
        <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mb-8">
          <h4 className="text-xl font-bold mb-2 text-primary">🏆 1st Place Winner - $4,000 Scholarship</h4>
          <p className="text-muted-foreground">Awarded at the ACRES Competition, Thompson Rivers University (December 2024) for exceptional innovation and project execution.</p>
        </div>
        <p className="mb-6">
          As Team Lead, I spearheaded a team of three talented TRU Computing Science students (Deeparsh Singh, Khushal Arora, and myself) to develop the ACRES AI Construction Management Platform. This project aimed to revolutionize construction site operations by integrating cutting-edge AI for enhanced safety, efficiency, and project coordination.
        </p>
        <p className="mb-6">
          We designed and built a comprehensive web application featuring automated uniform/PPE compliance checks using computer vision, an intelligent AI chatbot for real-time data access via secure SQL queries, and dynamic task generation and management leveraging AI agentic calls.
        </p>
        
        <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-border/50 shadow-lg">
            <iframe
               className="absolute top-0 left-0 w-full h-full"
               src="https://www.youtube.com/embed/S5VSp2GwVQw?si=sTz_nJEb4I5J1vv2"
               title="YouTube - ACRES Construction Management Platform Walkthrough"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
            ></iframe>
           </div>
      </section>

      {/* Section 2: The Industry Challenge */}
      <section id="the-challenge" className="mb-20 pt-10"> {/* Added top padding */}
        <hr className="mb-8 border-border/30" /> {/* Added divider */}
        <h2 className="text-3xl font-bold mb-6">The Industry Challenge</h2>
        <p className="mb-6">
          The construction industry, while vital, often faces significant operational hurdles. Traditional site management practices can lead to inefficiencies and safety risks. Key challenges we identified include:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Using Info Card pattern here */}
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-4">Safety Compliance Gaps</h3>
            <p className="text-muted-foreground">Manually ensuring consistent Personal Protective Equipment (PPE) usage across diverse sites is difficult, time-consuming, and prone to human error, increasing safety risks.</p>
          </div>
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-4">Inefficient Data Access</h3>
            <p className="text-muted-foreground">Tracking inventory and accessing critical site data often relies on manual methods or siloed systems, hindering real-time decision-making and resource allocation.</p>
          </div>
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-4">Complex Task Coordination</h3>
            <p className="text-muted-foreground">Managing project tasks, dependencies, and progress updates manually requires significant overhead and can lead to delays or missed steps, especially in dynamic environments.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Our AI-Driven Solution */}
      <section id="our-solution" className="mb-20 pt-10"> {/* Added top padding */}
        <hr className="mb-8 border-border/30" /> {/* Added divider */}
        <h2 className="text-3xl font-bold mb-6">Our AI-Driven Solution</h2>
        <p className="mb-6">
          To address these challenges, we developed the ACRES Management Platform – an integrated system leveraging AI to streamline workflows. The platform centers around three core functionalities designed to work seamlessly together:
        </p>
        {/* Centered image, scales naturally */}
        <div className="relative rounded-xl overflow-hidden border border-border/50 mb-8 max-w-4xl mx-auto">
          <img
            src="/assets/projects/acres/acres-core-features-overview.png"
            alt="ACRES Core Features Overview"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
          <h3 className="text-xl font-bold mb-4">Core Pillars</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong className="text-foreground">Automated Uniform Compliance:</strong> Using AI vision to verify PPE adherence automatically.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong className="text-foreground">Intelligent Inventory Management:</strong> An AI chatbot providing secure, real-time SQL database access via natural language.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong className="text-foreground">Dynamic Task Breakdown:</strong> AI agents generating and organizing project tasks within a Kanban system based on context.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Feature: Automated PPE Compliance */}
      <section id="feature-compliance" className="mb-20 pt-10"> {/* Added top padding */}
        <hr className="mb-8 border-border/30" /> {/* Added divider */}
        <h2 className="text-3xl font-bold mb-6">Feature: Automated PPE Compliance</h2>
        <p className="mb-6">
          Enhancing worker safety was a primary goal. We implemented an AI-powered system to automate the crucial process of checking for correct Personal Protective Equipment (PPE).
        </p>
        {/* Image-Text Grid 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          {/* Image container - allow natural aspect ratio */}
          <div className="relative rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/acres/acres-uniform-compliance-manager-dashboard.png"
              alt="Manager Dashboard for PPE Setup"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Site-Specific Configuration</h3>
            <p className="mb-4">
              Site managers use a dedicated dashboard to define the mandatory PPE items (e.g., hard hats, safety vests, steel-toe boots, gloves) required for each unique construction site. This allows for granular control based on site hazards.
            </p>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 text-sm mt-auto"> {/* Push nested elements down */}
              <p className="text-muted-foreground mb-4">Managers can easily add or modify requirements, including custom gear, ensuring the system stays up-to-date with safety protocols.</p>
               {/* Nested Image */}
               <div className="relative rounded-md overflow-hidden border border-border/50">
                <img
                  src="/assets/projects/acres/acres-uniform-compliance-add-site-modal.png"
                  alt="Adding a New Site and Gear Requirements"
                  className="w-full h-auto object-contain"
                />
               </div>
            </div>
          </div>
        </div>

        {/* Image-Text Grid 2 - Reversed Order */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          {/* Text content */}
           <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">AI-Powered Verification</h3>
            <p className="mb-4">
              Workers simply capture an image of themselves upon arrival. Our integrated computer vision model analyzes the photo in real-time, detecting the presence of required PPE items.
            </p>
            <p className="mb-4">
              The system provides immediate visual feedback, highlighting detected items (e.g., in green) and missing items (e.g., in red), enabling quick corrections before entering the work zone.
            </p>
             {/* Nested Image */}
             <div className="relative rounded-md overflow-hidden border border-border/50 mt-auto">
                <img
                src="/assets/projects/acres/acres-uniform-compliance-multiple-examples.png"
                alt="Multiple Examples of AI PPE Detection"
                className="w-full h-auto object-contain"
                />
            </div>
          </div>
          {/* Image container */}
           <div className="relative rounded-xl overflow-hidden border border-border/50">
             <img
              src="/assets/projects/acres/acres-uniform-compliance-ai-detection.png"
              alt="AI Detection Results Screen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Feature: Intelligent Inventory & Data Chatbot */}
      <section id="feature-inventory" className="mb-20 pt-10"> {/* Added top padding */}
        <hr className="mb-8 border-border/30" /> {/* Added divider */}
        <h2 className="text-3xl font-bold mb-6">Feature: Intelligent Inventory & Data Chatbot</h2>
        <p className="mb-6">
          Accessing up-to-date information quickly is crucial for efficient operations. We built an AI chatbot, the "ACRES Database Assistant," to provide a natural language interface for querying the project's operational database securely.
        </p>
        {/* Image-Text Grid 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          {/* Image container */}
          <div className="relative rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/acres/acres-inventory-chatbot-interface.png"
              alt="AI Chatbot Interface"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Conversational Data Access</h3>
            <p className="mb-4">
              Users can ask questions like "How many employees do we have?", "What materials are needed for the Uptown site?", or "Show me the inventory level for concrete."
            </p>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 text-sm mt-auto">
               <p className="text-muted-foreground mb-4">The chatbot understands the intent and retrieves the relevant information from the database.</p>
               {/* Nested Image */}
               <div className="relative rounded-md overflow-hidden border border-border/50">
                 <img
                  src="/assets/projects/acres/acres-inventory-chatbot-employee-query.png"
                  alt="Chatbot Employee Query Example"
                  className="w-full h-auto object-contain"
                 />
               </div>
            </div>
          </div>
        </div>

        {/* Image-Text Grid 2 - Reversed */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
           {/* Text content */}
           <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Secure SQL Integration</h3>
            <p className="mb-4">
              The chatbot doesn't just understand language; it translates user requests into precise SQL queries executed against the database backend. This ensures data integrity and allows for complex data retrieval involving multiple tables (e.g., finding nearby sites with specific inventory).
            </p>
             <p className="mb-4">
              Crucially, the raw database structure and data are never exposed via external APIs. The AI handles the interaction internally, enhancing security.
            </p>
             {/* Nested Image */}
             <div className="relative rounded-md overflow-hidden border border-border/50 mt-auto">
               <img
                src="/assets/projects/acres/acres-inventory-chatbot-complex-query-result.png"
                alt="Chatbot Complex Query Result"
                className="w-full h-auto object-contain"
               />
            </div>
          </div>
          {/* Code Block Container */}
          <div className="rounded-xl bg-secondary/30 p-6 border border-border/50 flex flex-col">
              <h4 className="text-xl font-bold mb-2">Data and Results</h4>
              {/* Nested Image */}
              <div className="relative rounded-md overflow-hidden border border-border/50 mt-auto">
               <img
                src="/assets/projects/acres/acres-inventory-data-table1.png"
                alt="Generated SQL Query Screenshot"
                className="w-full h-auto object-contain"
               />
              </div>
              {/* Nested Image */}
              <div className="relative rounded-md overflow-hidden border border-border/50 mt-auto">
               <img
                src="/assets/projects/acres/acres-inventory-data-table.png"
                alt="Generated SQL Query Screenshot"
                className="w-full h-auto object-contain"
               />
              </div>
          </div>
        </div>
      </section>

      {/* Section 6: Feature: Dynamic Task Breakdown */}
      <section id="feature-tasks" className="mb-20 pt-10"> {/* Added top padding */}
        <hr className="mb-8 border-border/30" /> {/* Added divider */}
        <h2 className="text-3xl font-bold mb-6">Feature: Dynamic Task Breakdown</h2>
        <p className="mb-6">
          Streamlining project management and task delegation was another key focus. We implemented a Kanban-based system enhanced with AI agentic capabilities to intelligently generate and organize project tasks.
        </p>
         {/* Image-Text Grid 1 */}
         <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
           {/* Image container */}
           <div className="relative rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/acres/acres-tasks-kanban-board.png"
              alt="Kanban Board Interface"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Text content */}
          <div className="flex flex-col justify-center">
             <h3 className="text-2xl font-bold mb-4">Visual Task Management</h3>
            <p className="mb-4">
              The Kanban board provides a clear visual overview of tasks categorized by status (To Do, In Progress, Done). Each task card includes details like priority, due dates, descriptions, subtasks, and specific instructions, facilitating easy tracking and updates.
            </p>
             {/* Nested Image */}
             <div className="relative rounded-md overflow-hidden border border-border/50 mt-auto">
               <img
                src="/assets/projects/acres/acres-tasks-kanban-card-details.png"
                alt="Kanban Task Card Details"
                className="w-full h-auto object-contain"
               />
            </div>
          </div>
        </div>

        {/* Image-Text Grid 2 - Reversed */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
           {/* Text content */}
           <div className="flex flex-col justify-center">
             <h3 className="text-2xl font-bold mb-4">AI-Powered Task Generation</h3>
            <p className="mb-4">
              Managers can leverage an "AI Agent" to automatically draft a set of tasks for a specific job or phase. By providing context – such as the type of work (e.g., "water pipeline installation"), relevant site information, quality assurance documents (ITPs), and the current state of the board – the AI generates a structured task list.
            </p>
             {/* Nested Image */}
             <div className="relative rounded-md overflow-hidden border border-border/50 mt-auto">
               <img
                src="/assets/projects/acres/acres-tasks-ai-draft-generation-prompt.png"
                alt="AI Task Generation Prompt"
                className="w-full h-auto object-contain"
               />
            </div>
          </div>
           {/* Image container */}
           <div className="relative rounded-xl overflow-hidden border border-border/50">
             <img
              src="/assets/projects/acres/acres-tasks-ai-generated-draft.png"
              alt="AI Generated Task Draft"
              className="w-full h-auto object-contain"
            />
             <p className="text-center text-sm text-muted-foreground mt-2">AI-generated draft Kanban for "Water Pipeline Installation".</p>
          </div>
        </div>
         <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-4">Intelligent Delegation & Planning</h3>
            <p className="text-muted-foreground">The AI analyzes the inputs and breaks down the work into logical, actionable tasks and subtasks (e.g., Plan Route, Acquire Permits, Procure Materials, Prepare Site, Schedule Team). This saves significant planning time and ensures comprehensive coverage of project requirements, minimizing the risk of overlooking critical steps.</p>
         </div>
      </section>

       {/* Section 7: Technical Deep Dive */}
      <section id="technical-deep-dive" className="mb-20 pt-10"> {/* Added top padding */}
        <hr className="mb-8 border-border/30" /> {/* Added divider */}
        <h2 className="text-3xl font-bold mb-6">Technical Deep Dive</h2>
        <p className="mb-6">
          Building this platform involved integrating several key technologies and overcoming interesting technical challenges:
        </p>
        <div className="space-y-6">
          {/* Using Info Card pattern for list items */}
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-4">AI & Machine Learning</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li><strong className="text-foreground">Computer Vision (PPE Detection):</strong> Utilized pre-trained object detection models, fine-tuned on construction site imagery, to accurately identify various PPE items in diverse conditions. Addressed challenges related to lighting variations and partial occlusions.</li>
              <li><strong className="text-foreground">Natural Language Processing (Chatbot):</strong> Leveraged Large Language Models (LLMs) for intent recognition and entity extraction from user queries. Developed robust prompt engineering techniques to reliably translate natural language into structured SQL commands.</li>
              <li><strong className="text-foreground">Agentic AI (Task Generation):</strong> Employed an agentic framework where the AI could reason based on multiple sources of context (manager input, ITP documents via RAG - Retrieval-Augmented Generation, current Kanban state) to generate relevant, structured task outputs in JSON format suitable for the Kanban board.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-4">Backend & Database</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li><strong className="text-foreground">SQL Database:</strong> Designed a relational database schema to efficiently store and relate data for sites, employees, materials, inventory, PPE requirements, tasks, and quality documents.</li>
              <li><strong className="text-foreground">Secure Data Handling:</strong> Implemented backend logic to ensure the AI chatbot interacted with the SQL database securely, preventing SQL injection and avoiding direct exposure of database credentials or structure to the frontend or external services.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-4">Frontend & Architecture</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
             <li><strong className="text-foreground">React & TypeScript:</strong> Built the user interface using React and TypeScript for a type-safe, component-based, and interactive experience. (Likely leveraged Next.js, specify if confirmed).</li>
             <li><strong className="text-foreground">State Management:</strong> Employed appropriate state management solutions (e.g., Context API, Zustand) to handle application state, especially for the dynamic Kanban board and chatbot interactions.</li>
             <li><strong className="text-foreground">API Integration:</strong> Developed APIs to connect the frontend with backend services handling AI model inference, database queries, and task management logic.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Results & Recognition */}
      <section id="results-recognition" className="mb-20 pt-10"> {/* Added top padding */}
        <hr className="mb-8 border-border/30" /> {/* Added divider */}
        <h2 className="text-3xl font-bold mb-6">Results & Recognition</h2>
         <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
           {/* Image container */}
           <div className="relative rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/acres/acres-team-introduction.png"
              alt="ACRES Project Team"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Text content */}
          <div className="flex flex-col justify-center">
             <h3 className="text-2xl font-bold mb-4">Competition Success</h3>
            <p className="mb-4">
              The ACRES AI Construction Management Platform was awarded **First Place** in the ACRES Competition at TRU (December 2024), along with a **$4,000 scholarship**. This recognition validated our innovative approach, the technical sophistication of our solution, and its potential impact on the construction industry.
            </p>
             <p>
              The judges highlighted the seamless integration of multiple AI technologies to solve real-world problems in safety, data access, and project management.
            </p>
          </div>
        </div>
         
      </section>

       {/* Section 9: Key Learnings & Takeaways */}
      <section id="learnings" className="mb-20 pt-10"> {/* Added top padding */}
        <hr className="mb-8 border-border/30" /> {/* Added divider */}
        <h2 className="text-3xl font-bold mb-6">Key Learnings & Takeaways</h2>
        <p className="mb-6">
          Leading and developing this project was an invaluable experience, offering significant learning opportunities:
        </p>
        <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong className="text-foreground">Leading a Technical Team:</strong> Gained practical experience in project planning, task delegation, managing timelines, and fostering collaboration within a development team to deliver a complex product under competition deadlines.</span>
            </li>
             <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong className="text-foreground">Integrating Diverse AI Systems:</strong> Learned the intricacies of combining different AI modalities (vision, NLP, agentic reasoning) into a cohesive application, including managing dependencies and data flow between them.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong className="text-foreground">Bridging AI and Databases Securely:</strong> Mastered techniques for enabling AI models (like LLMs) to interact with structured data (SQL) in a secure and effective manner, focusing on preventing vulnerabilities while maximizing functionality.</span>
            </li>
             <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong className="text-foreground">Full-Stack Development Practice:</strong> Reinforced skills across the entire development stack, from designing intuitive frontend interfaces with React/TypeScript to building robust backend APIs and managing database interactions.</span>
            </li>
             <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong className="text-foreground">Problem Decomposition & Solution Design:</strong> Honed the ability to break down complex real-world problems into smaller, manageable components and design targeted technical solutions for each, ensuring they integrate into a functional whole.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}