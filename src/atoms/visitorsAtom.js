import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export const visitorAtomState = {
  
  default: {
    name : "",
    contact : "",
    createdAt:Timestamp,
    numberOfVisitors : 0,
    purpose : "",
    whomToSee : "",
    imageURL : ""
  },
};
