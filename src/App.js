import React from "react";
import Maincontents from "./components/main";
import Navbar from "./components/navbar";
import Card from "./components/card";
import airbnbData from "./components/data";

function App() {
  const cards = airbnbData.map((items) => {
    return <Card key={items.id} {...items} />;
  });

  return (
    <>
      <Navbar />
      <Maincontents />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
