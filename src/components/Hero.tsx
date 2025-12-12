import Image from "next/image";
import { NAME, DESCRIPTION, EMAIL, SOCIAL_MEDIA } from "@/lib/data";
import { Download, Mail, Linkedin, Github } from "lucide-react";

export function Hero() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-20 animate-pulse" />
                        <Image
                            src="/profile-pic.png"
                            alt={NAME}
                            fill
                            className="rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl relative z-10"
                            priority
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                                {NAME}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                {DESCRIPTION}
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <a
                                href="/CV.pdf"
                                download="CV.pdf"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </a>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </a>
                            <a
                                href={SOCIAL_MEDIA.LinkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0077b5] text-white font-medium hover:opacity-90 transition-opacity"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a
                                href={SOCIAL_MEDIA.GitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#333] text-white font-medium hover:opacity-90 transition-opacity"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
