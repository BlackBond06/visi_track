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

    return onlineUsers.filter(item => (item.userName && item.socketId) !== null);
};

// console.log(onlineUsers);

const removeUser = (socketId) => {
 return onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userName) => {
  return onlineUsers.find((user) => user.userName === userName);
};

io.on("connection", (socket) => {
  
  socket.on("newUser", (userName) => {
  addNewUser(userName, socket.id);

  io.emit("getNewUser", {
    userName
  })
 
  });

  

  socket.on("sendNotification", ({ senderName, receiverName, checkInTime }) => {
     const receiver = getUser(receiverName);
     
    // console.log(onlineUsers, receiver);
    // console.log(getUser(senderName));
    // io.emit("getNotification", {
    //   senderName,
    //   receiverName,
    //   checkInTime 
    // });
    
    io.to(receiver.socketId).emit("getNotification", {
      senderName,
      receiverName,
      checkInTime
    })
  });
  
  socket.on("sendOffLineStatus", ({isOffLine})=>{
   

    io.emit("getOffLineStatus", {
      isOffLine
    })
  })

  socket.on("sendOnLineStatus", ({isOnLine})=>{
   

    io.emit("getOnLineStatus", {
      isOnLine   
    })
  })
  

  socket.on("disconnect", () => {
    removeUser(socket.id);
   
   
  });
});

io.listen(5000);
