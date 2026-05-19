import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am Luxara Assistant. Ask me about products, orders, care, shipping, or gift ideas.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim().slice(0, 500);
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: 'user', text: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const { askLuxaraAssistant } = await import('../utils/gemini');
      const reply = await askLuxaraAssistant({
        userMessage: trimmed,
        history: messages,
      });

      setMessages([...nextMessages, { role: 'bot', text: reply }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages([
        ...nextMessages,
        {
          role: 'bot',
          text: 'Sorry, Luxara Assistant se connect karte waqt issue aa gaya. Please thori der baad try karein.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 left-6 z-50 flex flex-col items-start gap-2">
      {isOpen && (
        <div className="w-80 bg-neutral-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10">
          <div className="flex items-center justify-between px-4 py-3 bg-black">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-300 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#050505" width="18" height="18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Luxara AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ maxHeight: '320px', minHeight: '200px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-3 py-2 rounded-2xl text-sm max-w-[85%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-black rounded-br-sm'
                      : 'bg-white/10 text-neutral-200 rounded-bl-sm'
                  }`}
                  style={msg.role === 'user' ? { backgroundColor: '#d6b46a' } : {}}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-neutral-400 px-3 py-2 rounded-2xl rounded-bl-sm text-sm">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-2 p-3 border-t border-white/10">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 text-sm border border-white/10 bg-black/40 text-white placeholder-neutral-500 rounded-full px-3 py-2 outline-none focus:border-amber-400/50 transition-colors"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity disabled:opacity-40"
              style={{ backgroundColor: '#d6b46a' }}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" fill="#050505" width="16" height="16">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 active:scale-95"
        style={{ backgroundColor: '#d6b46a' }}
        aria-label="Open AI chat"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="#050505" width="22" height="22">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="#050505" width="24" height="24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        <span className="absolute w-14 h-14 rounded-full animate-ping opacity-10" style={{ backgroundColor: '#d6b46a' }} aria-hidden="true" />
      </button>
    </div>
  );
};

export default Chatbot;
