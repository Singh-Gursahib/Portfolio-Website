import React from 'react';
import Link from 'next/link'; // Import Link for internal navigation

export const metadata = {
  title: "My UREAP-Funded Research: Building Privacy-Preserving LLMs for Student Support",
  description: "Detailing my UREAP project plan for Summer 2025, focused on developing secure, locally-hosted Large Language Models using RAG and open-source technologies to assist TRU students.",
  date: "2025-05-03",
  tags: ["AI Research", "Local LLM", "RAG", "Privacy", "Education", "UREAP", "Student Support", "TRU", "Summer 2025"],
  image: "/assets/research/posters/TRU-LLM-Project-cover.png"
};

// Sidebar table of contents - adjusted titles for clarity
export const tableOfContents = [
  { id: "introduction", title: "Introduction & Motivation" },
  { id: "key-objectives", title: "Key Project Objectives" },
  { id: "poster", title: "Project Poster" },
  { id: "project-approach", title: "Project Approach: The Four Pillars" },
  { id: "tech-stack", title: "Technology Stack & Benchmarking" },
  { id: "acknowledgements", title: "Acknowledgements" },
  { id: "future-directions", title: "Next Steps & Potential Impact" },
  { id: "conclusion", title: "Conclusion & Feedback" } // Updated title
];

// Helper component for styled list items
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
    <span className="text-base md:text-lg text-muted-foreground">{children}</span>
  </li>
);

// Helper component for feature cards
const FeatureCard = ({ title, children, icon }: { title: any; children: any; icon?: any }) => (
  <div className="p-6 h-full rounded-lg border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-md flex flex-col"> {/* Added h-full and flex flex-col */}
    {icon && <div className="mb-3 text-primary">{icon}</div>}
    <h4 className="text-lg md:text-xl font-semibold text-card-foreground mb-2">{title}</h4>
    <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">{children}</p> {/* Added flex-grow */}
  </div>
);


export default function UREAPFundingBlog() {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-20 px-4">

      {/* Introduction & Motivation */}
      <section id="introduction" className="mb-16 md:mb-20"> {/* Adjusted mb */}
        {/* No margin needed before the very first heading */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8">Introduction & Motivation</h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4">
          I am thrilled to share that my research proposal was selected for funding through the Thompson Rivers University (TRU) Undergraduate Research Experience Award Program (UREAP). This grant provides a fantastic opportunity to delve into a topic I'm passionate about: leveraging Artificial Intelligence, specifically Large Language Models (LLMs), to enhance the student experience while rigorously prioritizing data privacy.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Navigating university resources, academic requirements, and support services can often be challenging. My project aims to develop a secure, locally-hosted AI assistant tailored to the needs of TRU students. By utilizing open-source LLMs, Retrieval-Augmented Generation (RAG), and intuitive interfaces like voice commands, the goal is to provide timely, accurate, and context-aware support without compromising sensitive student data. This research stems from my own experiences and a desire to create tools that genuinely help students succeed. You can learn more about the UREAP program itself on the{' '}
          <a
            href="https://www.tru.ca/research/undergraduate-research/undergraduate-research-opportunities/ureap-award.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
          >
            official TRU UREAP Award page
          </a>.
        </p>
      </section>

      {/* Key Project Objectives */}
      {/* Added mt-6 here for spacing before the card */}
      <section id="key-objectives" className="mb-16 md:mb-20 mt-6"> {/* Adjusted mb */}
        <div className="p-6 md:p-8 rounded-xl bg-secondary/50 border border-border/60 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-foreground">Key Project Objectives</h3>
          <ul className="space-y-4">
             <ListItem>
               <strong>Secure UREAP Funding:</strong> Successfully obtained an operating grant to support the research activities, including potential hardware needs for local model hosting and software licenses.
             </ListItem>
             <ListItem>
               <strong>Develop a Privacy-Centric RAG Pipeline:</strong> Implement a robust RAG system using vector databases and embedding models to index TRU-specific documents (program guides, policies, web content) securely on local infrastructure. This ensures sensitive queries and institutional data remain within TRU's control.
             </ListItem>
             <ListItem>
               <strong>Benchmark and Fine-tune Local LLMs:</strong> Evaluate various open-source LLMs (e.g., Llama 3, Phi-3, Mistral variants) against proprietary models (like GPT-4o, Claude 3) on metrics including accuracy, latency, resource consumption, and adherence to privacy constraints using TRU-specific evaluation sets. Explore fine-tuning techniques (like LoRA) to optimize performance for university-related tasks.
             </ListItem>
             <ListItem>
               <strong>Build Integrated AI Assistant Features:</strong> Create user-facing applications leveraging the RAG pipeline, including a dynamic degree planner, a voice-activated query system, and a confidential mental health resource navigator.
             </ListItem>
             <ListItem>
                <strong>Promote Open Science:</strong> Share findings, methodologies, and potentially anonymized code or evaluation frameworks with the academic community to foster further research in educational AI.
             </ListItem>
           </ul>
        </div>
      </section>

      {/* Poster Callout */}
      {/* Added mt-6 here for spacing before the card */}
      <section id="poster" className="mb-16 md:mb-20 mt-6"> {/* Adjusted mb */}
        <div className="p-6 md:p-8 rounded-xl bg-primary/10 border-l-4 border-primary shadow-md">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary/90">Dive Deeper: Project Poster</h3>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            For a visual overview of the research framework, core technologies, implementation strategy, and the four key application pillars, please see the detailed project poster.{' '}
            <a
              href="/assets/research/posters/TRU-LLM-Project-Poster.png" // Adjusted path if needed
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium underline hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
            >
              View the project poster here
            </a>.
          </p>
        </div>
      </section>

      {/* Project Approach: The Four Pillars */}
      <section id="project-approach" className="mb-16 md:mb-20"> {/* Adjusted mb */}
        {/* Added mt-6 for spacing */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 text-center mt-6">Project Approach: The Four Pillars</h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-10 md:mb-12 text-center">
          Our framework addresses key student challenges through four integrated AI-powered applications, each leveraging locally-deployed LLMs and secure retrieval systems for personalized, private assistance.
        </p>

         <div className="mb-10 md:mb-12 flex justify-center">
            <img
                src="/assets/research/posters/TRU-LLM-Project-Features.png"
                alt="The Four Pillars: University Data RAG Assistant, Dynamic Degree Pathway Designer, Voice-Enabled AI Advisor, Mental Health Resource Navigator"
                className="w-full max-w-3xl rounded-lg shadow-lg border border-border/50"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           <FeatureCard title="University Data RAG Assistant">
             This component focuses on information retrieval. Public TRU documents (course calendars, policies, FAQs) are chunked, converted into vector embeddings using models like Sentence-BERT, and stored in a local vector database (e.g., ChromaDB). When a student asks a question ("What are the prerequisites for COMP 3XXX?"), the system retrieves relevant document chunks based on semantic similarity and feeds them, along with the query, to the locally hosted LLM. The LLM then synthesizes an answer grounded in the provided TRU context, ensuring accuracy and relevance.
           </FeatureCard>

           <FeatureCard title="Dynamic Degree Pathway Designer">
             Moving beyond simple Q&A, this tool aims to provide personalized academic planning. By interfacing with (anonymized or securely accessed) student progression data and program requirements, the LLM can suggest optimal course sequences, flag missing prerequisites, estimate time-to-completion, and align pathways with declared majors or career interests. This involves constraint checking and potentially basic planning algorithms guided by the LLM's understanding of course descriptions and dependencies.
           </FeatureCard>

           <FeatureCard title="Voice-Enabled AI Advisor">
             To enhance accessibility, this pillar integrates speech-to-text (e.g., using Whisper variants) and text-to-speech (e.g., Piper, Coqui TTS) technologies. Students can ask questions conversationally ("How do I apply for a scholarship?") and receive spoken responses. This module acts as a frontend to the RAG Assistant, processing voice input, querying the backend, and vocalizing the LLM's generated response.
           </FeatureCard>

           <FeatureCard title="Mental Health Resource Navigator">
             Handling sensitive queries requires extreme care. This module is designed *not* to provide therapy but to confidentially connect students with *existing* TRU mental health resources. Using keyword detection and potentially sentiment analysis, it identifies queries related to stress, anxiety, or counseling needs. It then directs students to appropriate official resources like TRU Counseling Services, peer support groups, or emergency contact information, ensuring responses are safe, supportive, and strictly informational, pointing towards human support systems. Privacy is paramount here.
           </FeatureCard>
        </div>
      </section>

      {/* Technology Stack & Benchmarking */}
      <section id="tech-stack" className="mb-16 md:mb-20"> {/* Adjusted mb */}
         {/* Added mt-6 for spacing */}
         <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 mt-6">Technology Stack & Benchmarking</h2>
         <div className="p-6 md:p-8 rounded-xl bg-secondary/50 border border-border/60 shadow-lg">
             <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4">
                 The project relies heavily on open-source tools to maintain transparency and control. Key technologies include:
             </p>
             <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-muted-foreground mb-6">
                 <li><strong>LLMs:</strong> Primarily exploring models like Llama 3 (8B/70B), Phi-3 (Mini/Medium), Mistral 7B, and potentially others runnable on local hardware (GPU required for optimal performance).</li>
                 <li><strong>RAG Framework:</strong> Leveraging libraries like LangChain or LlamaIndex for orchestrating the retrieval and generation process.</li>
                 <li><strong>Embedding Models:</strong> Sentence Transformers (e.g., `all-MiniLM-L6-v2`, `bge-large-en`) for creating text embeddings.</li>
                 <li><strong>Vector Database:</strong> ChromaDB, FAISS, or similar for efficient similarity search.</li>
                 <li><strong>Voice Interface:</strong> Exploring Whisper (or faster variants like Whisper.cpp) for STT and Piper/Coqui TTS for TTS.</li>
                 <li><strong>Backend/Frontend:</strong> Likely Python (FastAPI/Flask) for the backend and React/Next.js for any potential web interface/demonstrator.</li>
             </ul>
             <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3">Benchmarking Approach</h4>
             <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                 A critical part of the research involves rigorous benchmarking. Local models will be compared against each other and against API-based proprietary models (GPT-4o, Gemini Pro, Claude 3 Sonnet/Opus) using:
             </p>
             <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-muted-foreground mt-4">
                 <li><strong>Accuracy:</strong> Evaluating response quality on TRU-specific question-answering datasets, potentially using metrics like ROUGE, BLEU, or human evaluation. Standard benchmarks (e.g., MMLU subsets) may also be used for general capability assessment.</li>
                 <li><strong>Latency:</strong> Measuring end-to-end response time for user queries on local hardware.</li>
                 <li><strong>Resource Usage:</strong> Monitoring VRAM, RAM, and CPU consumption during inference.</li>
                 <li><strong>Privacy Compliance:</strong> Auditing data flow to ensure no sensitive information leaves the local environment during processing by local models.</li>
             </ul>
         </div>
      </section>

      {/* Acknowledgements */}
      <section id="acknowledgements" className="mb-16 md:mb-20"> {/* Adjusted mb */}
        {/* Added mt-6 for spacing */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 mt-6">Acknowledgements</h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          I am profoundly grateful to my faculty supervisors, Dr. Ghazanfar Latif and Dr. Jaspreet Kaur. Their mentorship, expertise, and encouragement have been invaluable. They've not only guided the technical aspects but also fostered an environment where I feel empowered to pursue research in an area I genuinely care about – improving the student journey through thoughtful technology. This project addresses challenges I've observed and personally experienced, and their support in allowing me to tackle this is deeply appreciated. I also extend my sincere thanks to the UREAP committee for recognizing the potential of this project and providing the funding to make it possible.
        </p>
      </section>

      {/* Next Steps & Potential Impact */}
      <section id="future-directions" className="mb-16 md:mb-20"> {/* Adjusted mb */}
        {/* Added mt-6 for spacing */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 mt-6">Next Steps & Potential Impact</h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-10 md:mb-12">
          The UREAP funding marks the beginning of an exciting research phase. The plan outlined above represents the core focus for my work during **Summer 2025**. The immediate next steps involve setting up the development environment, refining the data ingestion pipeline for TRU documents, and conducting initial benchmarks of selected LLMs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Added h-full to the parent grid div might not be necessary, but ensured cards have h-full */}
          <FeatureCard title="Refine & Fine-tune Models">
            Systematically benchmark local LLMs. Implement fine-tuning strategies (e.g., Parameter-Efficient Fine-Tuning methods like LoRA) using curated TRU-specific datasets (e.g., question-answer pairs based on FAQs) to enhance performance on relevant tasks.
          </FeatureCard>
          <FeatureCard title="Prototype & User Feedback">
            Develop functional prototypes for each of the four pillars. Conduct usability testing and gather feedback from a small group of TRU students and staff (following ethics protocols) to iterate on the design, functionality, and accuracy.
          </FeatureCard>
          <FeatureCard title="Strengthen Privacy & Security">
            Continuously audit and enhance data privacy measures. Implement robust access controls and data handling protocols. Explore techniques like differential privacy or homomorphic encryption if handling potentially sensitive (even anonymized) student data becomes necessary for features like the pathway designer.
          </FeatureCard>
          <FeatureCard title="Disseminate Findings">
            Document the research process, methodologies, benchmarking results, and challenges encountered. Plan to present findings at student research conferences, publish results if appropriate, and potentially release code components or evaluation datasets to benefit the wider educational technology community.
          </FeatureCard>
        </div>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-10 md:mt-12">
          The ultimate impact of this project could be a blueprint for other institutions seeking to implement privacy-preserving AI student support systems. By demonstrating the viability of local, open-source solutions, this research aims to empower universities to leverage AI responsibly.
        </p>
      </section>

      {/* Conclusion & Feedback */}
      <section id="conclusion">
        {/* Added mt-6 for spacing */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-8 mt-6">Conclusion & Feedback</h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4">
          Embarking on this UREAP project is an incredible learning opportunity. I am eager to contribute to the development of AI tools that are not only intelligent but also ethical and secure, directly benefiting the TRU community here in Kamloops. The work detailed here is my focus for Summer 2025, and I look forward to sharing progress and insights as the research unfolds.
        </p>
        {/* Added Call to Action */}
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          I am always open to discussing ideas and learning from others in the field. If you have any thoughts, insights, or suggestions regarding this project, please feel free to reach out. You can connect with me on{' '}
          <a href="https://www.linkedin.com/in/gursahibsingh07/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">LinkedIn</a>,
          send me an email, or visit my{' '}
          <Link href="/#contact" legacyBehavior>
             <a className="text-primary underline hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">contact page</a>
          </Link>.
          Thank you again to the UREAP program and my supervisors for their trust and support.
        </p>
      </section>

    </div>
  );
}