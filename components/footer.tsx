import Link from "next/link";
import { SITE_CONFIG, NAVIGATION_LINKS } from "@/lib/constants";
import { Github, Linkedin, X } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={SITE_CONFIG.links.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={SITE_CONFIG.links.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">X</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}