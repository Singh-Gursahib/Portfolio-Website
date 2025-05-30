// data/project-data/alphasage-ai.tsx
import React from "react";

// Project Metadata
export const metadata = {
  title: "AlphaSage AI: AI-Powered Trading & Investment Platform",
  category: "Gen AI",
  tags: [
    "Gen AI",
    "Next.js",
    "TypeScript",
    "Python",
    "TradingView",
    "Yahoo Finance API",
    "Google Gemini",
    "Groq",
    "LLaMA",
    "Supabase",
    "AI",
    "Backtesting",
    "Financial Technology",
  ],
  image: "/assets/projects/alphasage-ai/landing-page.png", // Featured Image
  demoUrl: null, // Video embed is primary demo
  githubUrl: null, // Replace with specific repo URL if available, else keep null
};

// Table of Contents
export const tableOfContents = [
  { id: "overview", title: "Project Overview" },
  { id: "key-features", title: "Key Features" },
  { id: "how-it-works", title: "How It Works" },
  { id: "technologies-used", title: "Technologies Used" },
  { id: "screenshots-walkthrough", title: "Screenshots & Walkthrough" },
  { id: "learnings-challenges", title: "Learnings & Challenges" },
  { id: "future-scope", title: "Future Scope" },
  { id: "conclusion", title: "Conclusion" },
];

// Main Project Content Component
export default function AlphaSageAI() {
  return (
    <>
      {/* Project Overview Section */}
      <section id="overview" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="mb-6">
          AlphaSage AI is a comprehensive trading and investment platform
          designed to provide users with advanced tools for market analysis,
          strategy development, and informed decision-making. Leveraging the
          power of artificial intelligence, the platform aims to democratize
          access to sophisticated research capabilities and backtesting
          functionalities traditionally reserved for institutional traders.
        </p>
        <p className="mb-8">
          This project was built with a focus on real-time data processing,
          robust backtesting infrastructure, and an innovative AI-driven
          pipeline for fundamental and sentiment analysis.
        </p>
        {/* --- Video Embed Start --- */}
        <div className="mb-8">
          <p className="mb-4 text-lg italic text-muted-foreground">
            Watch the video below for a complete walkthrough of the AlphaSage AI
            application and its features. Detailed explanations and screenshots
            follow.
          </p>
          <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-border/50 shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/zv4PTZmLCBU" // Updated Video ID
              title="YouTube video player - AlphaSage AI Platform Walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* --- Video Embed End --- */}
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                <strong className="font-semibold">
                  Real-Time Charting and Technical Analysis:
                </strong>{" "}
                Professional-grade charting tools offering support for multiple
                ticker symbols, timeframes, and custom-calculated technical
                indicators (SMA, EMA, RSI, MACD, Bollinger Bands).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                <strong className="font-semibold">
                  Python-Powered Strategy Backtesting:
                </strong>{" "}
                An integrated editor allowing users to write and test their own
                trading strategies using historical data, providing detailed
                performance metrics.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                <strong className="font-semibold">
                  Advanced AI-Powered Report Generation:
                </strong>{" "}
                A sophisticated pipeline utilizing Google's Gemini for in-depth
                company analysis and Groq's LLaMA model for dynamic HTML report
                formatting.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                <strong className="font-semibold">
                  Configurable Settings:
                </strong>{" "}
                Allows users to customize API keys, default chart settings,
                risk tolerance levels, and notification preferences.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="mb-6">
          AlphaSage AI employs a multi-layered architecture to deliver its
          comprehensive suite of trading tools:
        </p>
        <ol className="list-decimal list-inside space-y-4 mb-6">
          <li>
            <strong className="font-semibold">
              Data Ingestion & Frontend Presentation:
            </strong>{" "}
            The user interface, built with Next.js and TypeScript, interacts
            with the backend to request and display real-time and historical
            OHLC and Volume data, primarily sourced from the Yahoo Finance API.
          </li>
          <li>
            <strong className="font-semibold">
              Technical Analysis & Charting:
            </strong>{" "}
            The frontend integrates robust charting libraries like TradingView to
            render dynamic market charts. Technical indicators are calculated
            using custom-written formulas and overlaid on these charts.
          </li>
          <li>
            <strong className="font-semibold">
              Strategy Backtesting Engine:
            </strong>{" "}
            Users input trading strategies, which are then processed by a
            Python-based backend engine, leveraging Python's extensive
            libraries for efficient historical data processing and strategy
            simulation.
          </li>
          <li>
            <strong className="font-semibold">
              AI-Powered Report Generation Pipeline (Core Innovation):
            </strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>
                <strong className="font-semibold">Deep Analysis with Gemini:</strong> A
                detailed prompt guides Google's Gemini 2.5 Pro model to perform
                comprehensive company analysis (fundamentals, sentiment,
                outlook).
              </li>
              <li>
                <strong className="font-semibold">Structured Output & Parsing:</strong>
                Gemini returns a rich, text-based report, which is then
                programmatically parsed by the backend.
              </li>
              <li>
                <strong className="font-semibold">
                  Dynamic HTML Conversion with LLaMA on Groq:
                </strong>{" "}
                Each parsed text section is converted into well-formatted,
                visually appealing HTML by the LLaMA 3.2 model via the Groq API.
              </li>
              <li>
                <strong className="font-semibold">Report Stitching & Delivery:</strong> HTML
                sections are combined into a complete, multi-page report,
                presented to the user and available for PDF download.
              </li>
            </ul>
          </li>
        </ol>
        <p>
          This pipeline effectively automates complex research, delivering deep
          insights in a polished format.
        </p>
      </section>

      {/* Technologies Used Section */}
      <section id="technologies-used" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-xl font-bold mb-3">Core Stack</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                <strong className="font-semibold">Frontend:</strong> Next.js
                (React framework), TypeScript
              </li>
              <li>
                <strong className="font-semibold">Charting:</strong> TradingView
                library
              </li>
              <li>
                <strong className="font-semibold">
                  Backend (Backtesting & AI Orchestration):
                </strong>{" "}
                Python (e.g., Flask/FastAPI)
              </li>
              <li>
                <strong className="font-semibold">Data Source:</strong> Yahoo
                Finance API
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-xl font-bold mb-3">AI & Infrastructure</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                <strong className="font-semibold">AI Models & APIs:</strong>{" "}
                Google Gemini 2.5 Pro, Groq API (LLaMA 3.2)
              </li>
              <li>
                <strong className="font-semibold">
                  Indicator Calculation:
                </strong>{" "}
                Custom-written formulas
              </li>
              <li>
                <strong className="font-semibold">Database & Auth:</strong>{" "}
                Supabase (PostgreSQL) for user authentication, settings, strategies,
                and cached data.
              </li>
              <li>
                <strong className="font-semibold">Deployment:</strong> Vercel for
                frontend, Python backend on a cloud service (e.g., AWS
                Lambda, Google Cloud Run).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Screenshots & Walkthrough Section */}
      <section id="screenshots-walkthrough" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">
          Screenshots & Walkthrough
        </h2>
        <p className="mb-8 text-muted-foreground">
          Key moments from the demo video showcasing AlphaSage AI's
          functionality:
        </p>

        {/* Screenshot items */}
        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
              <img
                src="/assets/projects/alphasage-ai/landing-page.png"
                alt="AlphaSage AI Landing Page"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Landing Page</h3>
              <p>
                The clean and modern landing page, highlighting the platform's
                core value proposition of AI-driven trading insights.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Real-Time Chart Analysis
              </h3>
              <p>
                Interactive chart analysis interface showing candlestick data,
                technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands,
                Volume), and options for ticker symbol, time range, interval,
                and chart style.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
              <img
                src="/assets/projects/alphasage-ai/chart-analysis.png"
                alt="AlphaSage AI Chart Analysis with Indicators"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
              <img
                src="/assets/projects/alphasage-ai/strategy-editor.png"
                alt="AlphaSage AI Strategy Editor"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Strategy Editor & Backtesting
              </h3>
              <p>
                The Strategy Editor allows users to write custom Python trading
                strategies. The backtesting engine then provides performance
                charts, key metrics (Initial Investment, Final Value, Total
                Return %, Annual Return, Sharpe Ratio, Total Trades, Win Rate,
                Max Drawdown), and a log of recent trades.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div>
              <h3 className="text-xl font-bold mb-2">
                AI Research Assistant
              </h3>
              <p>
                The AI Research Assistant takes user prompts to generate
                in-depth company reports. The system fetches financial data,
                processes it through Gemini for analysis, and then uses LLaMA via
                Groq to format a comprehensive, multi-page HTML report.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
              <img
                src="/assets/projects/alphasage-ai/ai-research-report-overview-performance.png"
                alt="AlphaSage AI Research Report Section"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
              <img
                src="/assets/projects/alphasage-ai/settings-platform.png"
                alt="AlphaSage AI Settings Page"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Customizable Settings
              </h3>
              <p>
                Users can personalize their experience by toggling dark/light
                mode, configuring API keys for AI services (Groq, Google
                Gemini), and adjusting platform settings like default chart
                timeframes, risk tolerance, and notification preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings & Challenges Section */}
      <section id="learnings-challenges" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Learnings & Challenges</h2>
        <p className="mb-6">
          Developing AlphaSage AI was a journey through modern web development,
          backend processing, and cutting-edge AI integration. Key challenges
          included:
        </p>
        <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                <strong className="font-semibold">
                  AI Pipeline Orchestration:
                </strong>{" "}
                Designing and implementing the multi-step AI pipeline (Gemini
                for analysis, parsing, then LLaMA via Groq for HTML) required
                careful prompt engineering, error handling, and ensuring data
                flow integrity.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                <strong className="font-semibold">
                  Real-Time Data Handling:
                </strong>{" "}
                Efficiently and reliably ingesting and displaying market data
                from the Yahoo Finance API, while managing potential rate
                limits and data inconsistencies.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                <strong className="font-semibold">
                  Python Backtesting Integration:
                </strong>{" "}
                Seamlessly connecting the Next.js frontend with the Python
                backtesting engine involved designing APIs or inter-process
                communication for strategies and results.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                <strong className="font-semibold">
                  Custom Indicator Logic:
                </strong>{" "}
                Developing and validating custom formulas for technical
                indicators to ensure accuracy mirroring industry standards.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Future Scope Section */}
      <section id="future-scope" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Future Scope</h2>
        <p className="mb-6">
          Future enhancements for AlphaSage AI are envisioned to further expand
          its capabilities and user experience:
        </p>
        <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                Implementing live trading capabilities by integrating with
                brokerage APIs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                Developing a more advanced strategy builder with a visual,
                no-code/low-code interface.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                Expanding AI report generation to include more dynamic
                visualizations and interactive elements.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                Increasing the sophistication of market sentiment analysis by
                incorporating more diverse data sources.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span>
                Creating a community feature for users to share strategies, AI
                report prompts, and insights.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
        <p className="mb-6">
          AlphaSage AI stands as a testament to the power of combining modern
          web technologies like Next.js and TypeScript with specialized backend
          processing in Python and the transformative capabilities of advanced AI
          models like Google's Gemini and LLaMA via Groq.
        </p>
        <p className="mb-4">
          The platform's innovative AI-driven report generation pipeline, in
          particular, offers users a significant edge by automating complex
          research tasks and delivering professional-grade insights. It aims to
          provide a robust, intuitive, and intelligent toolkit for traders and
          investors navigating the financial markets.
        </p>
      </section>
    </>
  );
}

