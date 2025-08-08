import React, { useState, useRef, useEffect } from "react";

const ChatBoard = ({
  title = "AI Chat",
  placeholder = "Type your message here...",
}) => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = async (userMessage) => {
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000));
    const responses = [
      "That's an interesting question! Let me think about that...",
      "I understand what you're asking. Here's my perspective...",
      "Great point! I'd be happy to help you with that.",
      "Thanks for sharing that with me. Here's what I think...",
      "I see what you mean. Let me provide some insights...",
    ];
    return (
      responses[Math.floor(Math.random() * responses.length)] +
      ' This is a simulated response to: "' +
      userMessage +
      '".'
    );
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const aiResponse = await simulateAIResponse(userMessage.content);
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("AI response failed.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const Avatar = ({ sender }) => {
    const styles = sender === "ai" ? "bg-blue-500" : "bg-gray-500";
    return (
      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${styles} text-white text-sm font-bold`}>
        {sender === "ai" ? "AI" : "U"}
      </div>
    );
  };

  return (
  
      <div className="flex flex-col h-400 w-full bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '580px' }}>
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 bg-white">
          <div className="w-5 h-5 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {message.sender === "ai" && <Avatar sender="ai" />}
                <div className={`flex flex-col max-w-[75%] ${message.sender === "user" ? "items-end" : "items-start"}`}>
                  <div className={`px-4 py-2 rounded-xl text-sm shadow ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-200 text-gray-900"
                  }`}>
                    {message.content}
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{formatTime(message.timestamp)}</span>
                </div>
                {message.sender === "user" && <Avatar sender="user" />}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <Avatar sender="ai" />
                <div className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-500">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="sticky bottom-0 px-4 py-3 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                disabled={isLoading}
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="p-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ChatBoard;