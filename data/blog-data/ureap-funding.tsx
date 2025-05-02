import React from 'react';

export const metadata = {
  title: "Securing $6,000 in UREAP Funding for Privacy-Preserving LLM Research",
  date: "2025-04-20",
  tags: ["AI Research", "Local LLM", "Education", "UREAP"],
  image: "/assets/research/posters/TRU-LLM-Project-cover.png"
};

// Table of contents for the sidebar
export const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "key-takeaways", title: "Key Takeaways" },
  { id: "poster", title: "Project Poster" },
  { id: "project-overview", title: "Project Overview" },
  { id: "acknowledgements", title: "Acknowledgements" },
  { id: "future-directions", title: "Next Steps & Impact" },
  { id: "conclusion", title: "Conclusion" }
];

export default function UREAPFundingBlog() {
  return (
    <div className="max-w-4xl mx-auto py-8 md:py-16 px-4 md:px-0">

      {/* Introduction */}
      <section id="introduction" className="mb-12 md:mb-24">
        {/* add vertical space */}
        <div className="h-6 md:h-10"></div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-8">Introduction</h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          I'm Gursahib Singh, a Bachelor of Computing Science student at Thompson Rivers University,
          and I'm thrilled to announce that I've been awarded $6,000 in UREAP funding to advance my research
          on privacy-preserving, locally hosted Large Language Models (LLMs) for student support.
          This project leverages open-source models, Retrieval-Augmented Generation (RAG),
          and voice interfaces to build a secure, intelligent assistant for TRU students.
        </p>
      </section>

      {/* Key Takeaways */}
      <section id="key-takeaways" className="mb-12 md:mb-24">
        {/* add vertical space */}
        <div className="h-6 md:h-10"></div>
        <div className="p-4 md:p-8 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Key Takeaways</h3>
          <ul className="space-y-3 md:space-y-4">
            {[
              "$6,000 UREAP operating grant secured",
              "Fine-tuning and benchmarking open-source LLMs locally",
              "RAG pipeline for contextual information retrieval",
              "Voice-enabled advisor for academic and mental health queries"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="h-2 md:h-2.5 w-2 md:w-2.5 rounded-full bg-primary" />
                <span className="text-sm md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* vertical space before the poster callout */}
      <div className="h-6 md:h-10"></div>

      {/* Poster Callout */}
      <section id="poster" className="mb-12 md:mb-24">
        <div className="p-4 md:p-8 rounded-2xl bg-primary/10 border-l-4 border-primary shadow-inner">
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">See the Full Project Poster</h3>
          <p className="text-sm md:text-lg leading-relaxed">
            Dive deeper into the research framework, core technologies, and implementation approach in my detailed poster.{' '}
            <a
              href="../assets/research/posters/TRU-LLM-Project-Poster.png"
              className="text-primary underline hover:text-primary/80"
            >
              View the project poster here
            </a>.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section id="project-overview" className="mb-12 md:mb-24">
        {/* add vertical space */}
        <div className="h-6 md:h-10"></div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-8">Project Overview</h2>

        <div className="space-y-6 md:space-y-8 text-sm md:text-lg leading-relaxed text-muted-foreground">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">Secure Data Embedding</h3>
            <p>
              We ingest TRU's public-facing webpages, program guides, and official documents, then transform
              them into high-quality vector embeddings stored in a secure database. This ensures quick,
              context-rich retrieval while guaranteeing that all student data remains within university systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">Benchmarking Local vs. Proprietary LLMs</h3>
            <p>
              By comparing open-source models like Llama, Phi-4, and DeepSeek-R1 against proprietary systems
              (e.g., GPT-4o, Gemini), we measure performance in accuracy, response time, and privacy compliance.
              These benchmarks guide optimal model selection and fine-tuning strategies for campus deployment.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">Personalized Degree Pathway Designer</h3>
            <p>
              Our AI-driven pathway tool helps students map out their academic journey. It suggests
              course sequences aligned with career goals, flags prerequisite requirements, and offers
              tailored advice on how to meet graduation criteria efficiently.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-4">Voice-Enabled AI Advisor</h3>
            <p>
              A 24/7 voice assistant built on our RAG pipeline answers common queries like "How do I apply
              for an extension?" or "What's the process for declaring a minor?" This hands-free interface
              improves accessibility and streamlines student support services.
            </p>
          </div>
        </div>
      </section>

      {/* Acknowledgements */}
      <section id="acknowledgements" className="mb-12 md:mb-24">
        {/* add vertical space */}
        <div className="h-6 md:h-10"></div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-8">Acknowledgements</h2>
        <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
          I'm deeply grateful to my advisors, Dr. Ghazanfar Latif and Dr. Jaspreet Kaur, whose
          guidance and encouragement have been invaluable in shaping this research. Thank you
          for your mentorship and support throughout this journey.
        </p>
      </section>

      {/* Next Steps & Impact */}
      <section id="future-directions" className="mb-12 md:mb-24">
        {/* add vertical space */}
        <div className="h-6 md:h-10"></div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-8">Next Steps & Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="p-4 md:p-8 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg">
            <h4 className="text-lg md:text-xl font-bold mb-2">Fine-tune LLM Models</h4>
            <p className="text-xs md:text-lg leading-relaxed">
              Fine-tune and evaluate local LLM models using TRU's public dataset to ensure optimal performance.
            </p>
          </div>
          <div className="p-4 md:p-8 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg">
            <h4 className="text-lg md:text-xl font-bold mb-2">Gather User Feedback</h4>
            <p className="text-xs md:text-lg leading-relaxed">
              Collect insights through user surveys and prototype testing to refine usability and accuracy.
            </p>
          </div>
          <div className="p-4 md:p-8 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg">
            <h4 className="text-lg md:text-xl font-bold mb-2">Enhance Privacy Controls</h4>
            <p className="text-xs md:text-lg leading-relaxed">
              Optimize data sovereignty measures, ensuring all student information remains on local servers.
            </p>
          </div>
          <div className="p-4 md:p-8 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg">
            <h4 className="text-lg md:text-xl font-bold mb-2">Publish & Share</h4>
            <p className="text-xs md:text-lg leading-relaxed">
              Release code, share best practices, and publish findings to benefit the broader academic community.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion">
        {/* add vertical space */}
        <div className="h-6 md:h-10"></div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-8">Conclusion</h2>
        <p className="text-sm md:text-lg leading-relaxed text-muted-foreground">
          I'm incredibly grateful to the UREAP committee for their support and look forward to sharing
          future milestones as this research unfolds. Stay tuned for updates here and on my portfolio!
        </p>
      </section>
    </div>
  );
}
