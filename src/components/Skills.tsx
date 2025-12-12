import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { SKILLS } from "@/lib/data";

export function Skills() {
    return (
        <Section title="Hard Skills" className="bg-gray-50 dark:bg-gray-900/50">
            <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(SKILLS).map(([category, skills]) => (
                    <Card key={category} className="h-full">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            {category}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {skills}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
