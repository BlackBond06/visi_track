import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

let onlineUsers = [];

const addNewUser = (userName, socketId) => {
  !onlineUsers.some((user) => user.userName === userName) &&
    onlineUsers.push({ userName, socketId });
};



const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userName) => {
  return onlineUsers.find((user) => user.userName === userName);
};

io.on("connection", (socket) => {
  socket?.on("newUser", (userName) => {
  addNewUser(userName, socket.id);
 
  });

  

  socket.on("sendNotification", ({ senderName, receiverName, checkInTime }) => {
    const receiver = getUser(receiverName);
    

    io.emit("getNotification", {
      senderName,
      receiverName,
      checkInTime
    });
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
   
  });
});

io.listen(5000);
