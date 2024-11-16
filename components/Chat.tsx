import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]); // State for chat messages
  const [currentMessage, setCurrentMessage] = useState<string>(''); // State for the input field

  // Handle sending a message
  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, currentMessage]); // Add the new message to the list
      setCurrentMessage(''); // Clear the input field
    }
  };

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '0.5rem' }}>
            <strong>User:</strong> {message}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={currentMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="chat-input-field"
        />
        <button onClick={handleSendMessage} className="chat-send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
