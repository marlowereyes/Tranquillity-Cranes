import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

const Chat = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]);

    useEffect(() => {
        // Initialize socket when component mounts
        socket = io();

        // Add event listener for "receive-message" event
        socket.on("receive-message", handleReceiveMessage);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            socket.off("receive-message", handleReceiveMessage);
        };
    }, []);

    const handleReceiveMessage = (data) => {
        console.log(data);
        setAllMessages((prevMessages) => [...prevMessages, data]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        socket.emit("send-message", {
            username,
            message,
        });

        setMessage(""); // Clear the message input after sending
    };

    return (
        <div>
            <h1>Live Chat</h1>
            <p>Enter a username</p>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <br />
            {!!username && (
                <div>
                    {allMessages.map(({ username, message }, index) => (
                        <p key={index}>
                            {username}: {message}
                        </p>
                    ))}
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chat;
