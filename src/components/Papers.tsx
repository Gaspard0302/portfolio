"use client";

import { Section } from "@/components/ui/section";
import { PAPERS } from "@/lib/data";
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

export function Papers() {
    const [expandedPaper, setExpandedPaper] = useState<string | null>(null);

    return (
        <Section title="Papers & Thoughts" className="bg-gray-50 dark:bg-gray-900/50">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                A curated list of research papers that have shaped my thinking in AI and data science.
            </p>

            <div className="grid gap-4">
                {PAPERS.map((paper, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="p-4 md:p-6 flex items-start justify-between gap-4">
                            <div>
                                <a
                                    href={paper.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
                                >
                                    {paper.title}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                            <button
                                onClick={() => setExpandedPaper(expandedPaper === paper.title ? null : paper.title)}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            >
                                {expandedPaper === paper.title ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>
                        </div>

                        <div
                            className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                expandedPaper === paper.title ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="p-4 md:p-6 pt-0 border-t border-gray-100 dark:border-gray-800">
                                    <div className="prose dark:prose-invert max-w-none text-sm md:text-base text-gray-600 dark:text-gray-300">
                                        <ReactMarkdown>{paper.thoughts}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
