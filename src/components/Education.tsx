import { Section } from "@/components/ui/section";
import { EDUCATION } from "@/lib/data";
import { GraduationCap, Download } from "lucide-react";

export function Education() {
    return (
        <Section title="Education" className="bg-gray-50 dark:bg-gray-900/50">
            <div className="space-y-12">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0">
                        <div className="absolute -left-[9px] top-0 bg-white dark:bg-gray-900 p-1 rounded-full border border-gray-200 dark:border-gray-800">
                            <GraduationCap className="w-4 h-4 text-blue-500" />
                        </div>

                        <div className="mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {edu.school}
                            </h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                {edu.degree} — {edu.year}
                            </p>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                            {edu.description}
                        </p>

                        {edu.courses && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                <span className="font-semibold">Key Courses:</span> {edu.courses}
                            </p>
                        )}

                        {edu.researchPaper && (
                            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/50">
                                <p className="text-gray-900 dark:text-white font-medium mb-1">
                                    Research Paper: &quot;{edu.researchPaper.title}&quot;
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                    {edu.researchPaper.description}
                                </p>
                                <a
                                    href={`/${edu.researchPaper.file}`}
                                    download
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Paper
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}
