"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }
    
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex md:justify-center p-4 bg-[#F2CA99]/10 dark:bg-[#00010D]/40 md:bg-transparent md:dark:bg-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.nav 
          className={cn(
            "flex items-center justify-between w-full md:w-auto gap-1 px-4 py-2 md:rounded-full",
            "md:bg-[#F2CA99]/10 md:dark:bg-[#00010D]/40 backdrop-blur-lg md:border md:border-[#A6855D]/20 md:dark:border-[#734916]/30",
            "md:shadow-lg md:shadow-[#734916]/5 md:dark:shadow-[#A6855D]/5",
            isScrolled && "md:bg-[#F2CA99]/20 md:dark:bg-[#00010D]/60 md:border-[#A6855D]/30 md:dark:border-[#734916]/40"
          )}
          whileHover={{
            boxShadow: "0 8px 32px rgba(115, 73, 22, 0.1)",
          }}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href || 
                              (pathname === "/" && link.href === "/") ||
                              (link.href !== "/" && pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "/#contact" ? handleContactClick : undefined}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    "hover:text-[#734916] dark:hover:text-[#A6855D]",
                    isActive ? "text-[#734916] dark:text-[#A6855D]" : "text-muted-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-[#A6855D]/15 dark:bg-[#A6855D]/20"
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-[#F2CA99]/20 hover:bg-[#F2CA99]/30 dark:bg-[#734916]/20 dark:hover:bg-[#734916]/30 border border-[#A6855D]/20 dark:border-[#734916]/30"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-[#734916] dark:text-[#F2CA99]" />
            ) : (
              <Menu className="h-5 w-5 text-[#734916] dark:text-[#F2CA99]" />
            )}
          </Button>

          <ThemeToggle />
        </motion.nav>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="mx-4 rounded-2xl bg-[#F2CA99]/10 dark:bg-[#00010D]/80 backdrop-blur-lg border border-[#A6855D]/20 dark:border-[#734916]/30 shadow-lg overflow-hidden">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = pathname === link.href || 
                                (pathname === "/" && link.href === "/") ||
                                (link.href !== "/" && pathname.startsWith(link.href));
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "/#contact") {
                        handleContactClick(e);
                      }
                      setIsOpen(false);
                    }}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium transition-colors",
                      "hover:bg-[#F2CA99]/20 dark:hover:bg-[#734916]/20",
                      isActive ? "text-[#734916] dark:text-[#A6855D]" : "text-muted-foreground"
                    )}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}