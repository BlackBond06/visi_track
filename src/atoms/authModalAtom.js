import { atom } from "recoil";


export const authModalState = atom({
    key:"authModalState",
    default:{
        open:false,
        view: "login" || "signup" || "resetPassword" || "admin",
    }
})










// // Define an interface-like object literal
// const vehicleInterface = {
//   start() {
//     throw new Error("start() method not implemented");
//   },
//   stop() {
//     throw new Error("stop() method not implemented");
//   },
// };

// // Create a class that implements the interface
// class Car {
//   start() {
//     console.log("Starting the car...");
//   }

//   stop() {
//     console.log("Stopping the car...");
//   }
// }

// // Check if an object adheres to the interface
// function checkInterface(obj, interfaceObj) {
//   for (let key in interfaceObj) {
//     if (!(key in obj) || typeof obj[key] !== typeof interfaceObj[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// // Create an instance of Car
// const myCar = new Car();

// // Check if myCar adheres to the vehicleInterface
// if (checkInterface(myCar, vehicleInterface)) {
//   myCar.start();
//   myCar.stop();
// } else {
//   console.error("myCar does not adhere to the vehicleInterface");
// }


