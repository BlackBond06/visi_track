import React from "react";
import SearchInput from "../../SearchBar/SearchInput"
import VisitorList from "../VisitorList/VisitorList";
import AddVisitorForm from "../../AddVisitorForm/AddVisitorForm";
import Analytics from "../Analytics/Analytics";

const Home = () => {
  return (
    <>
      <SearchInput />
      <VisitorList />
      <AddVisitorForm />
      <Analytics />
    </>
  );
};

export default Home;
