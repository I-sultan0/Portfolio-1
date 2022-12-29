import React, { useState } from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Works from "../Works/Works";
import { filterData } from "../Works/FilterData";
import Connect from "../Connect/Connect";

const AllComponents = () => {
  const [details, setDetails] = useState("Web");
  console.log(filterData);
  const passValue = (data) => {
    console.log(data);
    console.log(data.value);
    setDetails(data.value);
  };
  const filtered = filterData.filter((filterValue) => {
    return filterValue.id === details;
  });
  console.log(filtered);

  return (
    <>
      <Hero />
      <About />
      <Works sendValue={passValue} newValue={filtered} />
      <Connect />
    </>
  );
};

export default AllComponents;
