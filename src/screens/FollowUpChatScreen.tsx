import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Send, User, Bot } from 'lucide-react';

export function FollowUpChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai' as const,
      text: 'Hello! I can help answer questions about this assessment. What would you like to know?',
      timestamp: '10:30 AM'
    }
  ]);
  const [input, setInput] = useState('');

  const assessments = [
    { date: 'Nov 15, 2025', status: 'Current Assessment' },
    { date: 'May 3, 2025', status: 'Previous' },
    { date: 'Nov 12, 2024', status: 'Initial' }
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user' as const,
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInput('');

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai' as const,
        text: 'OS Kmax increased by 0.6 D from baseline; BAD-D remains Suspect at 2.78. No significant progression in pachymetry. Continued monitoring recommended.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="AEYE Logo" className="h-10 w-10" />
            <h1 className="text-xl font-semibold text-gray-900">AEYE</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Timeline</h3>
              <div className="space-y-3">
                {assessments.map((assessment, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      index === 0
                        ? 'border-[#0A74B8] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-sm font-semibold text-gray-900">{assessment.date}</div>
                    <div className="text-xs text-gray-600 mt-1">{assessment.status}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Patient Summary</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>John Doe, 23 years</div>
                  <div>Myopia correction candidate</div>
                  <div className="text-amber-700 font-medium mt-2">OD: Suspect ectasia</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-12rem)] flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-4 border-b border-gray-200">
                Follow-Up Consultation
              </h3>

              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'ai' ? 'bg-blue-100' : 'bg-gray-200'
                    }`}>
                      {message.sender === 'ai' ? (
                        <Bot className="w-5 h-5 text-[#0A74B8]" />
                      ) : (
                        <User className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className={`flex-1 max-w-2xl ${message.sender === 'user' ? 'flex justify-end' : ''}`}>
                      <div className={`rounded-lg p-4 ${
                        message.sender === 'ai'
                          ? 'bg-blue-50 border border-blue-100'
                          : 'bg-gray-100 border border-gray-200'
                      }`}>
                        <p className="text-sm text-gray-800">{message.text}</p>
                        <p className="text-xs text-gray-500 mt-2">{message.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A74B8] focus:border-transparent"
                />
                <Button onClick={handleSend}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
