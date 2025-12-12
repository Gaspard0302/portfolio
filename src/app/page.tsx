import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { WorkHistory } from "@/components/WorkHistory";
import { Papers } from "@/components/Papers";
import { Chatbot } from "@/components/Chatbot";
import { SOCIAL_MEDIA } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Hero />
      <Chatbot />
      <Projects />
      <Education />
      <WorkHistory />
      <Papers />
      <Experience />
      <Skills />

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {Object.entries(SOCIAL_MEDIA).map(([platform, link]) => (
              <a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Gaspard Hassenforder. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
