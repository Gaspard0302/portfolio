import { Section } from "@/components/ui/section";
import { WORK_HISTORY } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function WorkHistory() {
    return (
        <Section title="Work History" className="bg-white dark:bg-black">
            <div className="space-y-12">
                {WORK_HISTORY.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                        <div className="absolute -left-[9px] top-0 bg-white dark:bg-gray-900 p-1 rounded-full border border-gray-200 dark:border-gray-800">
                            <Briefcase className="w-4 h-4 text-purple-500" />
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {job.role}
                            </h3>
                            <div className="flex flex-wrap gap-2 items-center text-sm mt-1">
                                <span className="font-semibold text-purple-600 dark:text-purple-400">
                                    {job.company}
                                </span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    {job.period}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-2">
                            {job.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
