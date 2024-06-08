// src/ChatMessage.jsx
import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ message }) => {
  const { text, sender } = message;
  return (
    <div className={`chat-message ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
