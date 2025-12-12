import { Section } from "@/components/ui/section";
import { EXPERIENCE } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function Experience() {
    return (
        <Section title="Experience & Qualifications" className="bg-white dark:bg-black">
            <div className="grid gap-4">
                {EXPERIENCE.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-gray-700 dark:text-gray-300 text-lg">{item.replace("✔️ ", "")}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
