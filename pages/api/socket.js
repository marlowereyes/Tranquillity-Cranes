import { Server } from "socket.io";

export default function SocketHandler(req, res) {

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.setMaxListeners(0); 

    io.on("connection", (socket) => {
        socket.on("send-message", (obj) => {
            io.emit("receive-message", obj);
        });
    });

    console.log("Setting Socket");
    res.end();
}
