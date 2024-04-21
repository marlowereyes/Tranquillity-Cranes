import { Server as ServerIO } from "socket.io";
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (!res.socket.server.io) {
    console.log("New Socket.io server...");

    const httpServer = res.socket.server;
    const io = new ServerIO(httpServer, {
      path: "/api/socketio",
    });

    res.socket.server.io = io;
  }

  console.log("Triggering Pusher event...");

  pusher.trigger('my-channel', 'my-event', {
    message: 'hello world'
  });

  res.end();
};
