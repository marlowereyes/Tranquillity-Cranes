import React, { useState, useEffect, useRef } from "react";
import SocketIOClient from "socket.io-client";
import styles from "@/styles/livechat.module.css";
import NavBar from "@/components/NavBar";

export default function Chat() {
  const inputRef = useRef(null);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const socket = SocketIOClient.connect(process.env.BASE_URL, {
      path: "/api/socketio",
    });

    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
    });

    socket.on("message", (newMessage) => {
      setAllMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => socket.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      const newMessage = {
        username,
        message,
      };
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });
      if (resp.ok) setMessage("");
    }
  };

  return (
    <div className={styles.chat}>
      <h1>Welcome to the Chat Room</h1>
      <p>Enter a username</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      {!!username && (
        <div>
          {allMessages.map(({ username: msgUsername, message }, index) => (
            <p
              key={index}
              className={
                msgUsername === username
                  ? styles.senderMessage
                  : styles.receiverMessage
              }
            >
              {msgUsername === username ? (
                message
              ) : (
                <>
                  {msgUsername}: {message}
                </>
              )}
            </p>
          ))}
          <br />
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className={styles.submit}>
              Send
            </button>
          </form>
        </div>
      )}
      <NavBar />
    </div>
  );
}
