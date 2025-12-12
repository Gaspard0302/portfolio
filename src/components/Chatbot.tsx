"use client";

import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Section } from "@/components/ui/section";

export function Chatbot() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollAreaRef.current) {
            const scrollArea = scrollAreaRef.current;
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    }, [messages, isLoading]);

    return (
        <Section title="AI Assistant" className="bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-[600px]">
                {/* Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Ask Buddy</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Powered by OpenAI & RAG
                        </p>
                    </div>
                </div>

                {/* Messages */}
                <div
                    ref={scrollAreaRef}
                    className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800"
                >
                    {messages.length === 0 && (
                        <div className="text-center text-gray-500 dark:text-gray-400 mt-8 px-4">
                            <p className="text-lg font-medium mb-2">👋 Hi! I&apos;m Buddy.</p>
                            <p className="text-sm">
                                I can answer questions about Gaspard&apos;s experience, skills, and projects. Try asking:
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-blue-600 dark:text-blue-400">
                                <li>&quot;What is Gaspard&apos;s experience with RAG?&quot;</li>
                                <li>&quot;Tell me about the Homelab AI Server.&quot;</li>
                                <li>&quot;What did he do at Veltys?&quot;</li>
                            </ul>
                        </div>
                    )}

                    {messages.map((m) => (
                        <div
                            key={m.id}
                            className={cn(
                                "flex gap-3 max-w-[85%]",
                                m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                            )}
                        >
                            <div
                                className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                    m.role === "user"
                                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                )}
                            >
                                {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>

                            <div
                                className={cn(
                                    "p-3 rounded-2xl text-sm",
                                    m.role === "user"
                                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-tr-none"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-none"
                                )}
                            >
                                <ReactMarkdown>{m.content}</ReactMarkdown>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex gap-3 mr-auto max-w-[85%]">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <div className="relative flex items-center">
                        <input
                            className="w-full px-4 py-3 pr-12 bg-gray-100 dark:bg-gray-800 border-0 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Ask a question..."
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </form>
            </div>
        </Section>
    );
}
