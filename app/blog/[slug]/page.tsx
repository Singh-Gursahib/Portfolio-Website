import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { blogCards } from "@/data/blog-data/blog-cards";
import dynamic from "next/dynamic";

type BlogMetadata = {
  title: string;
  date: string;
  tags: string[];
  image: string;
};

// This function generates static routes at build time for all blog posts
export function generateStaticParams() {
  return blogCards.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogCards.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  // Import the blog content component based on slug
  const BlogContent = dynamic(() => import(`@/data/blog-data/${post.slug}`).then(mod => mod.default), {
    loading: () => <div className="animate-pulse h-96 bg-secondary/30 rounded-lg"></div>,
    ssr: true
  });

  // Import the blog metadata to get table of contents if available
  let tocSections: { id: string; title: string }[] = [];
  try {
    const module = await import(`@/data/blog-data/${post.slug}`);
    if (module.tableOfContents) {
      tocSections = module.tableOfContents;
    }
  } catch (error) {
    console.error("No table of contents found:", error);
  }

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="mb-6 md:mb-8">
        <Button variant="ghost" size="sm" className="group" asChild>
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-base">Back to Blog</span>
          </Link>
        </Button>
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

        {/* Main Content - full width if no TOC */}
        <article className={`prose prose-xs sm:prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none ${!tocSections.length ? 'lg:col-span-2' : ''} prose-headings:font-sora prose-headings:font-bold prose-h2:text-[#734916] prose-h2:dark:text-[#F2CA99] prose-h3:text-[#734916] prose-h3:dark:text-[#F2CA99] prose-h4:text-[#734916] prose-h4:dark:text-[#F2CA99] prose-a:text-[#734916] prose-a:dark:text-[#A6855D]`}>
          <header className="not-prose mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora mb-4 text-[#734916] dark:text-[#F2CA99]">{post.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 rounded-full bg-[#A6855D]/10 text-[#734916] dark:bg-[#734916]/20 dark:text-[#F2CA99] text-xs border border-[#A6855D]/20">
                  {tag}
                </span>
              ))}
            </div>
            <div className="aspect-[2/1] rounded-xl overflow-hidden mb-6 md:mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <BlogContent />
        </article>
      </div>
    </div>
  );
}