import React from "react";
import AllComponents from "./Components/AllComponents/AllComponents";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import { filterData } from "./Components/Works/FilterData";

const App = () => {
  const oldData = filterData;
  console.log(oldData);
  return (
    <>
      <div className="App" id="outer-container">
        <Navbar />
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <AllComponents reservedData={oldData} />
      </div>
    </>
  );
};

export default App;
