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
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.nav 
          className={cn(
            "flex items-center gap-1 px-4 py-2 rounded-full",
            "bg-white/15 dark:bg-black/15 backdrop-blur-lg border border-white/20 dark:border-white/10",
            "shadow-lg shadow-black/5 dark:shadow-white/5",
            isScrolled && "bg-white/30 dark:bg-black/30"
          )}
          whileHover={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
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
                    "hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary/10"
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
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
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
            className="fixed inset-x-0 top-20 z-40 md:hidden"
          >
            <div className="mx-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg overflow-hidden">
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
                      "hover:bg-gray-100 dark:hover:bg-gray-800",
                      isActive ? "text-primary" : "text-muted-foreground"
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