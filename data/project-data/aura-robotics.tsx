// data/project-data/aura-robotics.tsx
import React from "react";

// Project Metadata
export const metadata = {
  title: "AURA: Vision-Controlled IoT-Enabled Robotic Arm",
  category: "ML/DL",
  tags: [
    "Robotics",
    "IoT",
    "Computer Vision",
    "Google MediaPipe",
    "GPT-4o-mini",
    "Arduino",
    "Firebase",
    "Python",
    "3D Printing",
    "Automation",
    "Accessibility",
  ],
  image: "/assets/projects/aura/aura-hero-shot.png",
  demoUrl: null,
  githubUrl: "https://github.com/Singh-Gursahib/AURA-Robotics",
};

// Table of Contents
export const tableOfContents = [
  { id: "overview", title: "Project Overview" },
  { id: "the-problem", title: "The Complexity Gap Problem" },
  { id: "innovation", title: "Innovation Through Collaboration" },
  { id: "no-code-paradigm", title: "No-Code Automation" },
  { id: "high-impact-low-cost", title: "High Impact, Low Cost" },
  { id: "research", title: "Academic Research & Publication" },
  { id: "technical-architecture", title: "Technical Architecture" },
  { id: "key-features", title: "Key Features" },
  { id: "future-vision", title: "The Future of AURA" },
];

// Main Project Content Component
export default function AuraRobotics() {
  return (
    <>
      {/* Project Overview Section */}
      <section id="overview" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-6">
          Project <strong>AURA</strong> (Vision-Controlled IoT-Enabled Robotic Arm) represents a breakthrough in accessible robotics. During the Internet of Things course in Fall 2024 at Thompson Rivers University, our team developed a groundbreaking solution that bridges the gap between industrial-grade automation and human safety.
        </p>

        <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-border/50 shadow-lg mb-8">
          <img
            src="/assets/projects/aura/aura-hero-shot.png"
            alt="AURA Robotic Arm - Hero Shot"
            className="object-cover w-full h-full"
          />
          <p className="text-center text-xs italic text-muted-foreground mt-2">
            The AURA robotic arm in action - 3D-printed design with precision control
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">The Core Mission</h3>
          <p className="mb-4">
            In the middle of a bustling factory floor, there is a worker standing in front of a hydraulic press. Their job is simple but terrifying: reach in, place a part, pull back, and repeat. For eight hours a day, they dance with a machine that could change their life in a split second of fatigue.
          </p>
          <p>
            This is where the inspiration for AURA began. We saw a massive disconnect in the industry—a gap I call <strong>"The Complexity Gap."</strong> On one side, you have million-dollar industrial robots that are safe but require a PhD to program. On the other, you have manual labor that is "cheap" but puts human lives at risk. Our mission was clear: build a bridge across that gap.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="the-problem" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">The Complexity Gap Problem</h2>
        <p className="mb-6 text-muted-foreground">
          The robotics industry faces a critical accessibility challenge that AURA directly addresses.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-lg font-bold mb-2">Traditional Industrial Robots</h4>
            <p className="text-sm">
              • Cost: $100,000+ <br />
              • Programming: Requires PhD-level expertise <br />
              • Accessibility: Only available to major corporations <br />
              • Deployment Time: Months
            </p>
          </div>

          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-lg font-bold mb-2">Manual Labor Reality</h4>
            <p className="text-sm">
              • Cost: Low per-unit labor <br />
              • Safety: High risk of injury <br />
              • Sustainability: High employee burnout <br />
              • Precision: Variable and inconsistent
            </p>
          </div>

          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-lg font-bold mb-2">AURA Solution</h4>
            <p className="text-sm">
              • Cost: &lt;$100 prototype (<strong>&lt;$30</strong> at scale) <br />
              • Programming: No code needed <br />
              • Accessibility: Democratized robotics <br />
              • Deployment: Immediate
            </p>
          </div>
        </div>

        <p className="mb-4">
          The "dull, dirty, and dangerous" jobs represent some of the most critical opportunities for automation. Yet the tools to automate these tasks have traditionally been locked behind massive price tags and technical barriers. AURA shatters both limitations.
        </p>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Innovation Through Collaboration</h2>

        <div className="mb-8 p-6 rounded-xl bg-secondary/30 border border-border/50">
          <h3 className="text-xl font-bold mb-4">Team & Leadership</h3>
          <p className="mb-4">
            Project AURA is the result of an exceptional collaborative effort. Developed during the Internet of Things (IoT) course in Fall 2024 at Thompson Rivers University, our team was guided by the expertise of <strong>Dr. Anthony Aighobahi</strong>.
          </p>
          <p className="text-lg font-semibold mb-3">Core Team Members:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span><strong>Gursahib Singh</strong> - Lead Developer & Robotics Engineer</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span><strong>Deepansh Sharma</strong> - Systems Architect</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span><strong>Yassh Singh</strong> - IoT Integration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span><strong>Noori Arora</strong> - Computer Vision Specialist</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span><strong>Vansh Sethi</strong> - Control Systems Engineer</span>
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground">
          Together, we wanted to prove that high-end automation shouldn't be a luxury reserved for the world's richest corporations. Every member brought their unique expertise to create something truly transformative.
        </p>
      </section>

      {/* No-Code Paradigm Section */}
      <section id="no-code-paradigm" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Solving the Safety Crisis: The No-Code Paradigm</h2>

        <p className="mb-6">
          The revolutionary insight behind AURA is simple yet powerful: <strong>workers shouldn't need to be programmers to operate robots.</strong> We implemented a breakthrough "No-Code" automation paradigm that fundamentally changes how humans interact with robotics.
        </p>

        <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 mb-8">
          <h3 className="text-xl font-bold mb-4">How No-Code Operation Works</h3>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="font-bold text-primary min-w-8">1.</span>
              <span>
                <strong>Visual Recognition:</strong> A worker simply shows their hand movements to the webcam. The robot observes exactly what needs to be done.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary min-w-8">2.</span>
              <span>
                <strong>Intent Processing:</strong> Using Google MediaPipe for human pose estimation and OpenAI's GPT-4o-mini for semantic understanding, the system processes the human's intent.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary min-w-8">3.</span>
              <span>
                <strong>Instant Mirroring:</strong> The AURA robotic arm mirrors the human hand movements in real-time with precision control.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary min-w-8">4.</span>
              <span>
                <strong>Life-Saving Deployment:</strong> By replacing a human hand with AURA's 3D-printed grip in high-risk environments like hydraulic presses, we save lives while improving efficiency.
              </span>
            </li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">The Technology Stack</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Computer Vision Pipeline:</p>
                <p className="text-sm text-muted-foreground">
                  Google MediaPipe detects hand keypoints and human pose in real-time
                </p>
              </div>
              <div>
                <p className="font-semibold">AI Understanding:</p>
                <p className="text-sm text-muted-foreground">
                  OpenAI GPT-4o-mini processes visual intent into robotic commands
                </p>
              </div>
              <div>
                <p className="font-semibold">Microcontroller:</p>
                <p className="text-sm text-muted-foreground">
                  Arduino-based control for servo motors and arm coordination
                </p>
              </div>
              <div>
                <p className="font-semibold">IoT Connectivity:</p>
                <p className="text-sm text-muted-foreground">
                  Firebase for telemetry, logging, and real-time synchronization
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <img
              src="/assets/projects/aura/product.png"
              alt="AURA Robotic Arm Product"
              className="object-cover w-full h-full"
            />
            <p className="text-center text-xs italic text-muted-foreground mt-2">
              The AURA robotic arm in action
            </p>
          </div>
        </div>
      </section>

      {/* High Impact, Low Cost Section */}
      <section id="high-impact-low-cost" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">High Impact, Low Cost: Democratizing Robotics</h2>

        <p className="mb-8 text-lg">
          Perhaps the most "disruptive" part of Project AURA is the price tag. While traditional industrial arms cost as much as a luxury car, our prototype was built for <strong>under $100.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-xl font-bold mb-4">Prototype Cost: &lt;$100</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>3D-printed components (PLA plastic)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Entry-level servo motors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Arduino microcontroller</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Standard webcam & connectivity modules</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-xl font-bold mb-4">Scale Production: &lt;$30</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Injection molding cost reduction (60-70%)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Bulk motor procurement (30-40% savings)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Integrated circuit board manufacturing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Economies of scale across supply chain</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mb-8">
          <p className="text-lg font-semibold mb-2">🎯 The Vision</p>
          <p>
            This represents a total democratization of robotics. We are moving toward a future where a small family-owned workshop can have the same safety standards and precision as a massive automotive plant. Safety should never be a luxury—it should be universal.
          </p>
        </div>
      </section>

      {/* Research & Publication Section */}
      <section id="research" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Academic Research & International Publication</h2>

        <p className="mb-6">
          Project AURA is more than just a functional prototype—it is a contribution to the scientific community. Our team has authored a <strong>full-length technical research paper</strong> detailing:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-lg font-bold mb-3">Paper Topics</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Kinematic modeling and inverse kinematics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>IoT telemetry via Firebase infrastructure</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Neural pipeline for no-code programming</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Computer vision integration methodology</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Accessibility-first robotics design</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
            <h4 className="text-lg font-bold mb-3">Publication Status</h4>
            <p className="mb-4">
              Our work is currently <strong>in the process of being published with a highly reputed international conference.</strong>
            </p>
            <p className="text-sm">
              We believe the data and findings inside this paper will serve as a blueprint for the next generation of accessible robotics and inspire other researchers to pursue democratized automation solutions.
            </p>
          </div>
        </div>

        <p className="italic text-muted-foreground">
          Once the publication process is finalized, the full manuscript and findings will be shared publicly to benefit the research community.
        </p>
      </section>

      {/* Technical Architecture Section */}
      <section id="technical-architecture" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>

        <p className="mb-6">
          AURA's architecture combines multiple sophisticated systems working in harmony:
        </p>

        <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 mb-8">
          <img
            src="/assets/projects/aura/architecture.png"
            alt="AURA System Architecture Diagram"
            className="object-contain w-full h-full"
          />
          <p className="text-center text-xs italic text-muted-foreground mt-2">
            Complete system architecture from vision input to IoT telemetry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Key Technical Components</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">MediaPipe Hand Tracking</p>
                <p className="text-sm text-muted-foreground">
                  Detects 21 hand landmarks in 3D space with ~95% accuracy at 30fps
                </p>
              </div>
              <div>
                <p className="font-semibold">Servo Motor Array</p>
                <p className="text-sm text-muted-foreground">
                  6-degree-of-freedom arm with synchronized servo control
                </p>
              </div>
              <div>
                <p className="font-semibold">Inverse Kinematics Engine</p>
                <p className="text-sm text-muted-foreground">
                  Calculates joint angles from target end-effector positions
                </p>
              </div>
              <div>
                <p className="font-semibold">Firebase Integration</p>
                <p className="text-sm text-muted-foreground">
                  Cloud-based telemetry for monitoring and analytics
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-lg font-bold mb-4">Data Flow</h4>
            <ol className="space-y-3 text-sm">
              <li>
                <strong>1. Capture:</strong> Webcam captures user hand gesture
              </li>
              <li>
                <strong>2. Process:</strong> MediaPipe extracts keypoints (21 landmarks)
              </li>
              <li>
                <strong>3. Understand:</strong> GPT-4o-mini interprets intent
              </li>
              <li>
                <strong>4. Calculate:</strong> IK engine computes servo angles
              </li>
              <li>
                <strong>5. Execute:</strong> Arduino drives motors in sync
              </li>
              <li>
                <strong>6. Log:</strong> Firebase records telemetry data
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-lg font-bold mb-4">User-Facing Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1" />
                <span>
                  <strong>No-Code Operation:</strong> Show, don't tell. No programming knowledge required.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1" />
                <span>
                  <strong>Real-Time Mirroring:</strong> Gestures translate to arm movements instantly
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1" />
                <span>
                  <strong>Safety Override:</strong> Emergency stop and real-time control options
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1" />
                <span>
                  <strong>Accessibility First:</strong> Designed for operators with varying physical abilities
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h3 className="text-lg font-bold mb-4">Technical Capabilities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1" />
                <span>
                  <strong>Multi-Gesture Recognition:</strong> Point, grab, rotate, and custom gestures
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1" />
                <span>
                  <strong>Adaptive Learning:</strong> Improves accuracy with each use
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1" />
                <span>
                  <strong>IoT Telemetry:</strong> Full performance monitoring and analytics
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1" />
                <span>
                  <strong>Modular Design:</strong> Easy to upgrade components and extend functionality
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="future-vision" className="mb-16 scroll-m-20">
        <h2 className="text-3xl font-bold mb-6">The Future of AURA</h2>

        <p className="mb-8 text-lg">
          Project AURA proved that when you combine the power of AI, the connectivity of IoT, and the passion of a focused team, you can solve problems that were once thought to be too expensive to fix. The journey is just beginning.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-lg font-bold mb-4">Near-Term Goals (6-12 months)</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Complete academic publication & peer review</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Prototype refinement for industrial testing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Partnership discussions with manufacturing facilities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Open-source release for educational purposes</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-lg font-bold mb-4">Long-Term Vision</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Commercial manufacturing at $30 scale</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Global accessibility in developing countries</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Multi-arm coordination and swarm robotics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Integration with AR/VR for advanced teleoperation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mb-8">
          <h3 className="text-xl font-bold mb-3">The Complexity Gap is Closing</h3>
          <p>
            We are experiencing a fundamental shift in how automation will be deployed in the next decade. As AI becomes more accessible and manufacturing costs continue to drop, the barriers to industrial-grade robotics will continue to crumble. AURA is not just a product—it's a proof of concept that democratized, accessible automation is not only possible, but inevitable.
          </p>
          <p className="mt-4 font-semibold">
            We're the ones holding the door open.
          </p>
        </div>

        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-bold mb-4">Learn More</h3>
          <div className="space-y-2">
            <p>
              <strong>GitHub Repository:</strong> Full source code and documentation coming soon
            </p>
            <p>
              <strong>Research Paper:</strong> Complete technical details available upon publication
            </p>
            <p>
              <strong>Contact:</strong> Interested in collaboration or implementation? Get in touch!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
