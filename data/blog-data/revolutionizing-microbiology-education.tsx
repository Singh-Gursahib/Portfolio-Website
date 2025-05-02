import React from 'react';

// 1. Metadata Export
export const metadata = {
  title: "Revolutionizing Microbiology Education Through Interactive Discovery",
  date: "2024-10-27", // Adjust date as needed
  tags: ["Microbiology", "EdTech", "Virtual Labs", "Simulation", "Education", "TRU", "Research", "Computer Science"],
  image: "/assets/research/posters/microbiology-poster-cover.png" // Assuming this is the path to your poster image
};

// 2. Table of Contents Export
export const tableOfContents = [
  { id: "introduction", title: "Introduction: Bridging the Gap" },
  { id: "the-challenge", title: "The Challenge in Microbiology Education" },
  { id: "our-solution", title: "Our Solution: Interactive Discovery Platform" },
  { id: "platform-features", title: "Inside the Platform: Key Features" },
  { id: "tech-methodology", title: "Technology & Methodology" },
  { id: "impact", title: "Why It Matters: Potential Impact" },
  { id: "prototype-demo", title: "See It In Action: Prototype Ready" },
  { id: "future-expansion", title: "Future Expansion" },
  { id: "team", title: "Meet the Team" },
  { id: "conclusion", title: "Conclusion" }
];

// 3. Default Export Component
export default function MicrobiologyEducationBlog() {
  return (
    <>
      {/* Introduction Section */}
      <section id="introduction" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">Introduction: Bridging the Gap</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          Hi everyone, I'm Gursahib Singh. As part of my Computing Science studies at Thompson Rivers University (TRU), I've had the exciting opportunity to collaborate on a research project aimed at transforming how students learn microbiology. Traditional methods often struggle to convey the dynamic, microscopic world, hindering engagement. Our project, "Revolutionizing Microbiology Education," tackles this head-on by developing an interactive virtual discovery platform.
        </p>
        {/* Image Component */}
        <div className="my-8">
          <img
            src="/assets/research/posters/microbiology-poster.png" // Use the same path as metadata
            alt="Research poster for the Revolutionizing Microbiology Education project"
            className="rounded-lg w-full border border-border/50 shadow-md"
          />
          <p className="text-sm text-center text-muted-foreground mt-2">Our project aims to make learning microbiology more engaging and intuitive.</p>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          This platform leverages technology to bring historical experiments and core concepts to life, allowing students to actively engage with the material in ways previously impossible. Let's dive into the challenges we're addressing and how our solution works.
        </p>
      </section>

      {/* The Challenge Section */}
      <section id="the-challenge" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">The Challenge in Microbiology Education</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Microbiology involves concepts that are abstract and invisible to the naked eye. Visualizing the microscopic world and connecting foundational theories (like those from Pasteur or Koch) to their origins can be difficult for students. This often hinders engagement and makes it challenging to grasp complex processes intuitively. Our goal is to overcome these hurdles.
        </p>
      </section>

      {/* Our Solution Section */}
      <section id="our-solution" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">Our Solution: Interactive Discovery Platform</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          We are developing an interactive platform that reimagines microbiology education. At its core, it allows students to actively recreate historical experiments in virtual labs. Imagine stepping into the shoes of Louis Pasteur or Robert Koch!
        </p>
        {/* Highlighted Box / Card */}
        <div className="p-8 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg mb-6">
          <h3 className="text-2xl font-bold mb-4">Interactive Discovery, Deeper Learning</h3>
          <p className="text-lg">
            By simulating experiments and guiding students through the narrative of discovery with virtual mentors (like our virtual Louis Pasteur!), we help them grasp complex concepts intuitively, leading to enhanced understanding and engagement.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          This hands-on approach turns passive learning into an active exploration, bridging the gap between abstract theory and tangible understanding.
        </p>
      </section>

      {/* Platform Features Section */}
      <section id="platform-features" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">Inside the Platform: Key Features</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          The platform integrates several key features to create a comprehensive learning experience:
        </p>
        {/* Bullet List Component */}
        <ul className="space-y-4">
          {[
            "Dynamic Historical Simulations: Actively manipulate variables and observe outcomes in virtual recreations of experiments by pioneers like Leeuwenhoek, Pasteur, Koch, and Fleming.",
            "Contextual Learning: Core microbiology concepts are woven directly into the narrative of their discovery, guided by virtual scientist mentors.",
            "Progressive Skill Building: Students journey systematically from foundational observations to understanding complex applications and techniques.",
            "Integrated Assessment: Quizzes and checks for comprehension are embedded after simulation tasks to reinforce learning.",
            "Technology-Enhanced Immersion: Utilizes JavaScript physics libraries and 3D tools for a rich, realistic, and engaging virtual lab experience."
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3"> {/* Changed items-center to items-start for longer text */}
              <span className="h-2.5 w-2.5 rounded-full bg-primary mt-2 flex-shrink-0" /> {/* Added mt-2 and flex-shrink-0 */}
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technology & Methodology Section */}
      <section id="tech-methodology" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">Technology & Methodology</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          From a technical standpoint, we're leveraging JavaScript physics libraries and 3D tools to create immersive and realistic simulations.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          Our research methodology combines rigorous expertise from multiple fields: Microbiology, Educational Technology, Computer Science, and Science History. This ensures both scientific accuracy and pedagogical effectiveness.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          We employ an iterative, evidence-based design process. This means we continuously incorporate user feedback and learning analytics to refine the platform and improve the learning experience.
        </p>
      </section>

      {/* Impact Section */}
      <section id="impact" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">Why It Matters: Potential Impact</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          This project has the potential to make a significant impact in several ways:
        </p>
        {/* Bullet List Component */}
        <ul className="space-y-4">
          {[
            "Addresses critical gaps by making abstract concepts visible, tangible, and interactive.",
            "Connects historical breakthroughs to modern applications, building scientific literacy.",
            "Aims to significantly improve student engagement, concept retention, and critical inquiry skills.",
            "Impacts public understanding by promoting the importance of microbes and combating germophobia."
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Prototype Demo Section */}
      <section id="prototype-demo" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">See It In Action: Prototype Ready</h2>
        {/* Highlighted Box / Card */}
        <div className="p-8 rounded-2xl bg-primary/10 border-l-4 border-primary shadow-inner">
          <h3 className="text-2xl font-bold mb-4">Pasteur Prototype Video Demo Ready!</h3>
          <p className="text-lg leading-relaxed">
            Early reviews of our Pasteur experiment prototype are enthusiastic! We're actively refining it based on feedback and are excited about the next phase of development. While the QR code isn't scannable here, this highlights our progress in bringing these historical experiments to life.
          </p>
        </div>
      </section>

      {/* Future Expansion Section */}
      <section id="future-expansion" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">Future Expansion</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          We envision this platform growing significantly:
        </p>
        {/* Using Highlighted Boxes for distinct points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Expand Lab Library</h3>
            <p className="text-lg">Include simulations featuring additional pioneering scientists and more advanced experimental techniques.</p>
          </div>
          <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Broader Audience Activities</h3>
            <p className="text-lg">Integrate fun, easy-to-use interactive activities targeted at children to promote understanding that not all bacteria are harmful and highlight their crucial roles.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">Meet the Team</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          This project is a collaborative effort, and I'm grateful to work alongside dedicated faculty members:
        </p>
        <div className="p-8 rounded-2xl bg-secondary/30 border border-border/50 shadow-lg">
          <ul className="space-y-4">
            {[
              "Dr. Naowarat Cheeptham (Ann), Ph.D.: Professor of Microbiology & 2022 3M NTF (3M/STLHE), Department of Biological Sciences, TRU.",
              "Dr. Mridula Sharma, Ph.D., P. L. Engg., SMIEEE: Associate Teaching Professor (CS), TRU.",
              "Gursahib Singh (Me!): Bachelor of Computing Science, TRU."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="mb-24">
        <div className="h-6 md:h-10"></div>
        <h2 className="text-4xl font-bold tracking-tight mb-8">Conclusion</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Revolutionizing microbiology education through interactive technology is a challenging but incredibly rewarding endeavor. We believe this platform has the potential to significantly enhance student learning and foster a deeper appreciation for the microbial world. I'm excited about the progress we've made and the future developments ahead. Stay tuned for more updates on this project!
        </p>
      </section>
    </>
  );
}