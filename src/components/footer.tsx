import React from "react";
import Link from "next/link";
import { FaGithub as Github, FaLinkedin as Linkedin, FaKaggle as Kaggle} from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">This is Tom</h3>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Associate Data Scientist @ 
              <a 
              href="https://www.awaze.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center ml-1 font-medium text-primary hover:text-primary/80 transition-colors underline hover:text-primary transition"
              >
              Awaze Vacation Rentals Ltd
              </a>
              <br className="my-2"/>
              Building innovative solutions with focus on AI, machine learning and 
              modern technological products.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label="Kaggle"
              >
                <Kaggle size={20} />
              </a>
            </div>
            <div className="text-muted-foreground space-y-1">
              <p>Manchester, United Kingdom</p>
              <a 
                href="mailto:laiminhthong1@gmail.com"
                className="block hover:text-primary transition"
              >
                laiminhthong1@gmail.com
              </a>
              <a 
                href="mailto:minhthong.lai@awaze.com"
                className="block hover:text-primary transition"
              >
                minhthong.lai@awaze.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} Thong Minh Lai (Tom). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}