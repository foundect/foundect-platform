"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X, Send, Sparkles } from "lucide-react";
import { GlassButton } from "./GlassButton";
import { GlassInput } from "./GlassInput";

export interface AIChatDrawerProps {
  open: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const AIChatDrawer = React.forwardRef<HTMLDivElement, AIChatDrawerProps>(
  ({ open, onClose }, ref) => {
    const [messages, setMessages] = React.useState<Message[]>([
      {
        id: "1",
        role: "assistant",
        content: "Hello! I'm your Foundect AI assistant. How can I help you with halal investing today?",
        timestamp: new Date(),
      },
    ]);
    const [input, setInput] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim() || isLoading) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: input,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      // TODO: Integrate AI backend API here
      // Simulated response for now
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "This is a placeholder response. Please integrate your AI backend to enable real conversations.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000);
    };

    return (
      <>
        {/* Backdrop */}
        {open && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in"
            onClick={onClose}
            aria-hidden="true"
          />
        )}

        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            "fixed right-0 top-0 h-full w-full sm:w-96 bg-white/95 backdrop-blur-glass shadow-glass-lg z-50",
            "flex flex-col",
            "transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
          style={{ transitionTimingFunction: "cubic-bezier(.17,.67,.83,.67)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-drawer-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-accent-1 rounded-full">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h2 id="ai-drawer-title" className="text-lg font-semibold text-text-900">
                AI Assistant
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close AI chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-card p-3",
                    message.role === "user"
                      ? "bg-blue-500 text-white"
                      : "glass-bg text-text-900"
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-bg rounded-card p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="glass-input flex-1"
                disabled={isLoading}
                aria-label="Chat message"
              />
              <GlassButton
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </GlassButton>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI responses are for informational purposes only
            </p>
          </form>
        </div>
      </>
    );
  }
);

AIChatDrawer.displayName = "AIChatDrawer";

export { AIChatDrawer };

/**
 * Usage Example:
 * 
 * const [aiOpen, setAIOpen] = useState(false);
 * 
 * <GlassNavBar onAIClick={() => setAIOpen(true)} />
 * <AIChatDrawer open={aiOpen} onClose={() => setAIOpen(false)} />
 */

