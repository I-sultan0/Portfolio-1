import React from "react";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
const App = () => {
  return (
    <>
      <div className="App" id="outer-container">
        <Navbar />
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <Hero />
        <About />
      </div>
    </>
  );
};

export default App;
