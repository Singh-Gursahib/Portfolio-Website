import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github
} from "lucide-react";
import { projectCards } from "@/data/project-data/project-cards";
import dynamic from "next/dynamic";

type ProjectMetadata = {
  title: string;
  category: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
};

// This function generates static routes at build time for all projects
export function generateStaticParams() {
  return projectCards.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectCards.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  // Import the project content component based on slug
  const ProjectContent = dynamic(() => import(`@/data/project-data/${project.slug}`).then(mod => mod.default), {
    loading: () => <div className="animate-pulse h-96 bg-secondary/30 rounded-lg"></div>,
    ssr: true
  });

  // Get project metadata for links
  let metadata: ProjectMetadata | null = null;
  let tocSections: { id: string; title: string }[] = [];
  
  try {
    const module = await import(`@/data/project-data/${project.slug}`);
    if (module.metadata) {
      metadata = module.metadata;
    }
    if (module.tableOfContents) {
      tocSections = module.tableOfContents;
    }
  } catch (error) {
    console.error("Failed to load project metadata:", error);
  }

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="mb-6 md:mb-8">
        <Button variant="ghost" size="sm" className="group" asChild>
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-base">Back to Projects</span>
          </Link>
        </Button>
      </div>
      
      {/* Hero Section */}
      <div className="mb-8 md:mb-12">
        <div className="rounded-xl overflow-hidden aspect-video mb-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <div>
            <Badge className="mb-2 text-xs">{project.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-sora text-[#734916] dark:text-[#F2CA99]">{project.title}</h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {metadata?.demoUrl && (
              <Button size="sm" className="h-8 text-sm" asChild>
                <Link href={metadata.demoUrl} target="_blank" className="flex items-center gap-1">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </Link>
              </Button>
            )}
            
            {metadata?.githubUrl && (
              <Button variant="outline" size="sm" className="h-8 text-sm" asChild>
                <Link href={metadata.githubUrl} target="_blank" className="flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-secondary/50 text-xs px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 md:gap-12">
        {/* Table of Contents Sidebar - only shown if TOC exists */}
        {tocSections.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <h2 className="text-xl font-bold font-sora text-[#734916] dark:text-[#F2CA99]">Table of Contents</h2>
              <nav className="space-y-2 text-sm">
                {tocSections.map((section) => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`} 
                    className="block text-muted-foreground hover:text-[#734916] dark:hover:text-[#A6855D] transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <article className={`prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none ${!tocSections.length ? 'lg:col-span-2' : ''} prose-headings:font-sora prose-headings:font-bold prose-h2:text-[#734916] prose-h2:dark:text-[#F2CA99] prose-h3:text-[#734916] prose-h3:dark:text-[#F2CA99] prose-h4:text-[#734916] prose-h4:dark:text-[#F2CA99]`}>
          <ProjectContent />
        </article>
      </div>
    </div>
  );
}