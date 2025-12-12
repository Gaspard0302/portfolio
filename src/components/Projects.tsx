import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { PROJECTS } from "@/lib/data";

export function Projects() {
    return (
        <Section title="Projects & Accomplishments" className="bg-white dark:bg-black">
            <div className="grid gap-6">
                {PROJECTS.map((project, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500 dark:border-l-blue-400">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {project.description}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
