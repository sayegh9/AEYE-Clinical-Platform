import { X, Send, Bot, User } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface FollowUpAssistantProps {
    activeModule: string;
    onClose: () => void;
}

export function FollowUpAssistant({ activeModule, onClose }: FollowUpAssistantProps) {
    const [messages, setMessages] = useState<{ role: 'agent' | 'user'; content: string }[]>([
        {
            role: 'agent',
            content: `Hello! I'm your assistant for the ${activeModule.replace(/-/g, ' ')} module. How can I help you analyze this data?`
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Reset messages when module changes
    useEffect(() => {
        setMessages([
            {
                role: 'agent',
                content: `Hello! I'm your assistant for the ${activeModule.replace(/-/g, ' ')} module. How can I help you analyze this data?`
            }
        ]);
    }, [activeModule]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = input;
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInput('');

        // Simulate agent response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'agent',
                content: `I understand you're asking about "${userMessage}" in the context of ${activeModule}. Here is some relevant information...`
            }]);
        }, 1000);
    };

    return (
        <div className="absolute top-16 right-6 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200" style={{ height: 'calc(100vh - 100px)' }}>
            {/* Header */}
            <div className="bg-[#0A74B8] p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white/20 rounded-lg">
                        <Bot className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Follow-Up Assistant</h3>
                        <p className="text-xs text-white/80 capitalize">{activeModule.replace(/-/g, ' ')}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'agent' ? 'bg-[#0A74B8] text-white' : 'bg-gray-200 text-gray-600'
                            }`}>
                            {msg.role === 'agent' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'agent'
                                ? 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                                : 'bg-[#0A74B8] text-white rounded-tr-none'
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask a question..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A74B8] focus:border-transparent text-sm"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className="p-2 bg-[#0A74B8] text-white rounded-lg hover:bg-[#09629c] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
