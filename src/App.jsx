// src/App.jsx
import planetList from "./services/starshipService";
import Search from "./components/StarshipSearch/StarshipSearch";
import React from "react";
const App = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <Search />
    </>
  );
};

export default App;
