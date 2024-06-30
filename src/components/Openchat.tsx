import React, { useState } from 'react';
import '../styles/tailwind.css';

const OpenChat: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = input.trim();
    const botMessage = getBotResponse(userMessage);

    setMessages([...messages, { user: userMessage, bot: botMessage }]);
    setInput('');
  };

  const getBotResponse = (message: string): string => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('c++')) {
      return 'C++ is a powerful general-purpose programming language. It is used to develop operating systems, browsers, games, and more.';
    } else if (lowerCaseMessage.includes('python')) {
      return 'Python is an interpreted, high-level, general-purpose programming language. It is often used for web development, data analysis, artificial intelligence, and scientific computing.';
    } else if (lowerCaseMessage.includes('uiux')) {
      return 'UI/UX design focuses on the user experience and user interface design of applications. It involves understanding user needs and creating intuitive, effective, and enjoyable interfaces.';
    } else if (lowerCaseMessage.includes('crash')) {
      return 'If you are facing a crash, please provide more details about the error message and the context in which the crash occurs.';
    } else {
      return 'Sorry, I did not understand your question. Please ask about C++, Python, UI/UX, or crashes.';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border bg-gray-300 border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Open Chat</h1>
      <div className="mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <div className="text-black-500"><strong>User:</strong> {message.user}</div>
            <div className="text-black-500"><strong>Bot:</strong> {message.bot}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-grow p-2 border  border-gray-300 rounded-l-md"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default OpenChat;
