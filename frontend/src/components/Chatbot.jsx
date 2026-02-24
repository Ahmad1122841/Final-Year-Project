import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "I am AI assistant for Wearwell ecommerce website. How can I help you?",
    },
  ]);

  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const updatedChat = [...chat, { sender: "user", text: message }];
    setChat(updatedChat);

    try {
      const res = await fetch("http://localhost:4000/api/chatbot/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      setChat([
        ...updatedChat,
        { sender: "bot", text: data.output.content },
      ]);

      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const styles = {
    chatContainer: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 1000,
    },
    chatIcon: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#111827",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "24px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    },
    chatBox: {
      width: "420px", // ✅ wider
      height: "520px",
      backgroundColor: "#ffffff",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
      marginBottom: "10px",
    },
    header: {
      backgroundColor: "#111827",
      color: "#fff",
      padding: "15px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    closeBtn: {
      cursor: "pointer",
      fontSize: "18px",
    },
    messages: {
      flex: 1,
      padding: "15px",
      overflowY: "scroll", // ✅ always show scrollbar
      backgroundColor: "#f3f4f6",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    userMessage: {
      alignSelf: "flex-end",
      backgroundColor: "#2563eb",
      color: "white",
      padding: "12px 16px",
      borderRadius: "15px 15px 0 15px",
      maxWidth: "85%", // ✅ wider bubbles
      wordWrap: "break-word",
    },
    botMessage: {
      alignSelf: "flex-start",
      backgroundColor: "#e5e7eb",
      padding: "12px 16px",
      borderRadius: "15px 15px 15px 0",
      maxWidth: "85%", // ✅ wider bubbles
      wordWrap: "break-word",
    },
    inputArea: {
      display: "flex",
      borderTop: "1px solid #ddd",
    },
    input: {
      flex: 1,
      padding: "14px",
      border: "none",
      outline: "none",
      fontSize: "14px",
    },
    button: {
      backgroundColor: "#111827",
      color: "white",
      border: "none",
      padding: "0 25px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.chatContainer}>
      {isOpen && (
        <div style={styles.chatBox}>
          <div style={styles.header}>
            Customer Support
            <span
              style={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              ❌
            </span>
          </div>

          <div style={styles.messages}>
            {chat.map((msg, index) => (
              <div
                key={index}
                style={
                  msg.sender === "user"
                    ? styles.userMessage
                    : styles.botMessage
                }
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div style={styles.inputArea}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.button}>
              Send
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <div
          style={styles.chatIcon}
          onClick={() => setIsOpen(true)}
        >
          💬
        </div>
      )}
    </div>
  );
};

export default Chatbot;