import React from "react";

const StarshipCard = (props) => {
  return (
    <>
      <h3>{props.starship.name}</h3>
      <p>Model: {props.starship.model}</p>
      <p>Manufacturer: {props.starship.manufacturer}</p>
      <p>Cost: {props.starship.cost_in_credits} credits</p>
    </>
  );
};

export default StarshipCard;
