import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    children: React.ReactNode;
}

export function Section({ title, children, className, ...props }: SectionProps) {
    return (
        <section className={cn("py-12 md:py-16", className)} {...props}>
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {title && (
                    <h2 className="text-3xl font-bold mb-8 border-b pb-2 border-gray-200 dark:border-gray-800">
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
}
