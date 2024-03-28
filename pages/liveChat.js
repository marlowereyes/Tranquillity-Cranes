import { useEffect, useState } from "react";
import io from "socket.io-client";
import styles from "@/styles/livechat.module.css"
import NavBar from "@/components/NavBar";


let socket;

export default function Chat(){
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]);

    useEffect(() => {

        socket = io();


        socket.on("receive-message", handleReceiveMessage);

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

        setMessage("");
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
                    {allMessages.map(({ username, message }, index) => (
                        <p key={index}>
                            {username}: {message}
                        </p>
                    ))}
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input className={styles.input} name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button type="submit" className={styles.submit}>Send</button>
                    </form>
                </div>
            )}
            <NavBar/>
        </div>
    );
};