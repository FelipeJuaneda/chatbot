// src/Chatbot.jsx
import React, { useState } from "react";
import "./Chatbot.css";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hola! ¿En qué puedo ayudarte?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div
        className={`chatbot-bubble ${isOpen ? "open" : ""}`}
        onClick={toggleChat}
      >
        <span>💬</span>
      </div>
      {isOpen && (
        <div className="chatbot-chat">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
