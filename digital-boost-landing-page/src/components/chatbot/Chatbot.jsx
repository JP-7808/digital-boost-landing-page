import React, { useState } from "react";
import "./chatbot.css";
import axios from "axios";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! Ask me anything." }]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => setOpen(!open);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("https://digital-boost-landing-page-backend.onrender.com/api/chatbot", { message: input });
      setMessages([...messages, userMessage, { sender: "bot", text: response.data.reply }]);
    } catch (error) {
      setMessages([...messages, userMessage, { sender: "bot", text: "Sorry, I couldn't fetch a response." }]);
    }

    setInput("");
  };

  return (
    <div>
      <button className="chatbot-icon" onClick={toggleChatbot}>💬</button>

      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chat with Us</h3>
            <button onClick={toggleChatbot}>✖</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
