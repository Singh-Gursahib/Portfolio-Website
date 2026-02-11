# Build an Individual Project Showcase Page

This guide shows you exactly how to build a beautiful, detailed project page layout like the one used in this portfolio. This is the page that displays when someone clicks on a project to learn more about it.

---

## 🎯 What You'll Create

A single-page project showcase with:

- **Attractive Header** - Project title, category, and description
- **Organized Sections** - Multiple content sections with proper spacing
- **Flexible Layouts** - Text, images, videos, and feature blocks
- **Smooth Animations** - Page transitions and content reveals
- **Responsive Design** - Works on all screen sizes
- **Dark Mode Support** - Beautiful in light and dark themes

---

## 📁 File Structure

You need just 2 files:

```
data/project-data/
├── project-cards.tsx          # Metadata for all projects
└── your-project-name.tsx      # Content for your project page

app/projects/
└── [slug]/page.tsx            # Dynamic page handler
```

---

## 📦 Dependencies

Install these first:

```bash
npm install framer-motion lucide-react
```

---

## 🔧 Step 1: Create Project Metadata

**data/project-data/project-cards.tsx**

This file lists all your projects (metadata only):

```tsx
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
    slug: "my-ai-project",
    title: "My AI Project",
    excerpt: "A brief one-liner about what this project does.",
    category: "Gen AI",
    tags: ["React", "TypeScript", "AI"],
    image: "/assets/projects/my-ai-project/cover.png",
  },
  // Add more projects here
];
```

**Key points:**
- `slug` - URL-friendly name (no spaces, lowercase)
- `category` - Choose one of the 4 options
- `tags` - Skills/technologies used
- `image` - Path to cover image in public folder

---

## 🔧 Step 2: Create Project Content File

**data/project-data/my-ai-project.tsx**

This is where all the actual content goes:

```tsx
import React from 'react';

// Image path - make it relative to public folder
const imagePath = '/assets/projects/my-ai-project/';

// Metadata for this specific project
export const metadata = {
  title: "My AI Project",
  category: "Gen AI",
  tags: ["React", "TypeScript", "AI", "LLM"],
  image: `${imagePath}cover.png`,
  demoUrl: "https://your-demo-link.com",
  githubUrl: "https://github.com/yourname/repo"
};

// Table of contents - links to sections below
export const tableOfContents = [
  { id: "overview", title: "Project Overview" },
  { id: "features", title: "Key Features" },
  { id: "tech-stack", title: "Technology Stack" },
  { id: "challenges", title: "Challenges & Solutions" },
];

// Main component - all content goes here
export default function MyAIProject() {
  return (
    <>
      {/* SECTION 1: Overview */}
      <section id="overview" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

        <p className="mb-6">
          Write a compelling description of your project. Explain what problem it solves,
          why you built it, and what makes it special.
        </p>

        {/* Video Embed */}
        <div className="mb-8">
          <p className="mb-4 text-center text-muted-foreground">
            Watch the project walkthrough:
          </p>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Project Walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Image with caption */}
        <img
          src={`${imagePath}screenshot-1.png`}
          alt="Project screenshot"
          className="w-full rounded-xl mb-6"
        />
        <p className="text-sm text-muted-foreground text-center mb-6">
          Main dashboard of the application
        </p>
      </section>

      {/* SECTION 2: Features */}
      <section id="features" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>

        {/* Two-column feature grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-3">Feature 1: Real-time Chat</h3>
            <p className="text-muted-foreground">
              Users can chat with the AI in real-time with instant responses.
              The interface is clean and intuitive.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-3">Feature 2: Export Results</h3>
            <p className="text-muted-foreground">
              Export conversations and results as PDF, JSON, or images.
              Great for sharing and archiving.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-3">Feature 3: Dark Mode</h3>
            <p className="text-muted-foreground">
              Beautiful dark mode support for comfortable viewing at night.
              Theme preference is saved automatically.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
            <h3 className="text-xl font-bold mb-3">Feature 4: Mobile Optimized</h3>
            <p className="text-muted-foreground">
              Fully responsive design works perfectly on phones, tablets,
              and desktops with no performance loss.
            </p>
          </div>
        </div>

        {/* Image showcase */}
        <img
          src={`${imagePath}features-showcase.png`}
          alt="Features overview"
          className="w-full rounded-xl"
        />
      </section>

      {/* SECTION 3: Tech Stack */}
      <section id="tech-stack" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>

        <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <strong className="block mb-1">Frontend Framework</strong>
                <p className="text-muted-foreground">
                  React with TypeScript for type-safe components and better
                  developer experience.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <strong className="block mb-1">Styling</strong>
                <p className="text-muted-foreground">
                  Tailwind CSS for rapid UI development with a utility-first approach
                  and built-in dark mode support.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <strong className="block mb-1">AI Integration</strong>
                <p className="text-muted-foreground">
                  Google Gemini API for natural language processing and intelligent
                  responses with streaming support.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <strong className="block mb-1">Backend</strong>
                <p className="text-muted-foreground">
                  Node.js with Express for server-side logic and MongoDB for
                  persistent data storage.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <strong className="block mb-1">Animations</strong>
                <p className="text-muted-foreground">
                  Framer Motion for smooth, performant animations and transitions
                  that enhance user experience.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: Challenges */}
      <section id="challenges" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>

        <div className="space-y-8">
          {/* Challenge 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Challenge 1: Real-time Streaming
            </h3>
            <p className="text-muted-foreground mb-4">
              The AI responses were taking 3-5 seconds to complete, creating
              a poor user experience. Users wanted to see the response as it
              was being generated.
            </p>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 border-l-4">
              <p className="text-sm">
                <strong>Solution:</strong> Implemented streaming responses using
                Server-Sent Events (SSE). The API now sends partial responses
                progressively, so users see the answer being "typed" in real-time,
                reducing perceived latency.
              </p>
            </div>
          </div>

          {/* Challenge 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Challenge 2: Context Management
            </h3>
            <p className="text-muted-foreground mb-4">
              Keeping track of conversation history while managing token limits
              of the LLM was complex. Sending all previous messages caused
              rate limiting and increased costs.
            </p>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 border-l-4">
              <p className="text-sm">
                <strong>Solution:</strong> Built a smart context window that
                keeps only the last 10 messages plus a summary of older messages.
                This maintains context while staying within token limits and
                reducing API costs by 40%.
              </p>
            </div>
          </div>

          {/* Challenge 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Challenge 3: Mobile Performance
            </h3>
            <p className="text-muted-foreground mb-4">
              The app was sluggish on older mobile devices. Heavy animations
              and large image sizes were causing performance issues.
            </p>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 border-l-4">
              <p className="text-sm">
                <strong>Solution:</strong> Optimized images with Next.js Image
                component, implemented lazy loading, reduced animation complexity
                on mobile, and used code splitting. Performance improved from
                45fps to 58fps on mid-range devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Results & Learnings */}
      <section id="results" className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Results & Key Learnings</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">2.5K+</div>
            <p className="text-muted-foreground">Active users in first month</p>
          </div>

          <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
            <p className="text-muted-foreground">Average user rating</p>
          </div>

          <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Mobile responsiveness score</p>
          </div>

          <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">5 Awards</div>
            <p className="text-muted-foreground">From hackathons and competitions</p>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
          <h3 className="text-xl font-bold mb-4">Key Learnings</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>User testing early and often leads to better product decisions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>Performance matters more than feature richness for user satisfaction</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>Documentation and clear error messages improve user trust</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>Incremental deployment and monitoring catch issues before users do</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
```

---

## 🔧 Step 3: Create the Dynamic Page Router

**app/projects/[slug]/page.tsx**

This file handles displaying any project:

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectCards } from "@/data/project-data/project-cards";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the project from metadata
  const project = projectCards.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The project you're looking for doesn't exist.
        </p>
        <Link href="/projects">
          <button className="text-primary hover:underline">
            ← Back to all projects
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        {/* Back Button */}
        <Link href="/projects">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {project.category}
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>

          <p className="text-xl text-muted-foreground mb-8">
            {project.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-muted-foreground prose-a:text-primary">
          {/* Content will be imported from project file */}
        </div>
      </motion.div>
    </div>
  );
}
```

---

## 🎨 Key Layout Components

### Section Container

```tsx
<section id="section-id" className="mb-20">
  <h2 className="text-3xl font-bold mb-6">Section Title</h2>
  {/* Content */}
</section>
```

### Feature Grid (2 columns)

```tsx
<div className="grid md:grid-cols-2 gap-6">
  <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
    <h3 className="text-xl font-bold mb-3">Feature Title</h3>
    <p className="text-muted-foreground">Description</p>
  </div>
  {/* More items */}
</div>
```

### Image with Caption

```tsx
<figure className="mb-8">
  <img
    src="/assets/projects/name/image.png"
    alt="Description"
    className="w-full rounded-xl"
  />
  <figcaption className="text-sm text-muted-foreground text-center mt-2">
    Image caption
  </figcaption>
</figure>
```

### Video Embed

```tsx
<div className="relative aspect-video rounded-xl overflow-hidden border border-border/50">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video title"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
```

### Feature Card Box

```tsx
<div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
  <h3 className="text-xl font-bold mb-3">Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>
```

### Highlight Box (for solutions)

```tsx
<div className="p-4 rounded-lg bg-primary/5 border border-primary/20 border-l-4">
  <p className="text-sm">
    <strong>Solution:</strong> Your solution text here
  </p>
</div>
```

### Stats Grid

```tsx
<div className="grid md:grid-cols-2 gap-6">
  <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
    <p className="text-muted-foreground">Stat description</p>
  </div>
  {/* More stats */}
</div>
```

---

## 📸 Image Organization

Store images in `/public/assets/projects/`:

```
public/
└── assets/
    └── projects/
        └── my-ai-project/
            ├── cover.png              # Main project image
            ├── screenshot-1.png       # First screenshot
            ├── features-showcase.png  # Feature image
            └── gallery/
                └── detail-1.png
```

**Pro tips:**
- Keep images under 500KB each
- Use PNG for screenshots, JPG for photos
- Use descriptive alt text for accessibility
- Use Next.js Image component for optimization

---

## 🎨 Tailwind CSS Classes Reference

Use these common classes throughout your sections:

```tsx
// Spacing
mb-6, mb-8, mb-12, mb-20  // Margin bottom for sections
gap-4, gap-6             // Grid gaps

// Typography
text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl
font-bold, font-medium
text-muted-foreground    // Gray text
text-primary             // Link color

// Backgrounds & Borders
bg-secondary/30          // Light background
border border-border/50  // Subtle border
rounded-lg, rounded-xl   // Rounded corners

// Display
grid md:grid-cols-2      // Two-column on medium screens
flex items-center        // Flex layout
hidden md:block          // Show only on medium+

// Opacity & Effects
hover:opacity-90         // Hover effect
transition-all           // Smooth transitions
shadow-lg, shadow-xl     // Shadows
```

---

## ✨ Animation Tips

Add smooth page entrance:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

## 📱 Responsive Patterns

```tsx
// Mobile first, then larger screens
className="
  text-sm md:text-base lg:text-lg       // Text sizing
  px-4 md:px-8 lg:px-12                 // Padding
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // Columns
"
```

---

## 🚀 Quick Checklist

Before publishing your project page:

- [ ] Title and description are compelling
- [ ] All images have correct file paths
- [ ] Videos embed properly
- [ ] Text is well-organized in sections
- [ ] Links work (demo and GitHub)
- [ ] Looks good on mobile
- [ ] Dark mode works properly
- [ ] No broken images

---

**That's it! You now have a complete, reusable template for building beautiful project showcase pages. 🎉**
