// src/App.jsx
import React from "react";
import StarshipList from "./components/StarshipList/StarshipList";
import starshipService from "./services/starshipService";
import Search from "./components/StarshipSearch/StarshipSearch";
import { useState, useEffect } from "react";


const App = () => {
  const [starships, setStarships] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await starshipService();
      setStarships(data.results);
    };
    fetchData();
  }, [])


  return (
    <>
      <h1>Star Wars SPI Lab!</h1>
      <Search />
      <StarshipList starshipsData={starships}/>
    </>
  );
};

export default App;
