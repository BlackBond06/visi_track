import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export const visitorAtomState = {
  name: "",
  contact: "",
  createdAt: new Timestamp(),
  numberOfVisitors: 0,
  purpose: "",
  whomToSee: "",
  imageURL: "",
};

const defaultVisitorStateState = {
  mySnippets: [],
  initSnippetsFetched: false,
  visitedCommunities: {},
  currentCommunity: visitorAtomState,
};

export const visitorState = atom({
  key: "visitorState",
  default: defaultVisitorStateState,
});
