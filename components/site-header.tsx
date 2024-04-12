import Link from "next/link";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/config/site";
import { MainNav } from "./main-nav";
import { Github, Linkedin } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn("w-9 px-0")}>
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn("w-9 px-0")}>
                <Linkedin className="h-3 w-3 fill-current" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
