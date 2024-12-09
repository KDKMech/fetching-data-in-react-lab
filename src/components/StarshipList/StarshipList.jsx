import { useState, useEffect } from "react";
// import starshipService from "../../services/starshipService";
import StarshipCard from "./StarshipCard/StarshipCard";


const StarshipList = (props) => {
    return (
        <div>
            {props.starshipsData.map((starship) => (
                <StarshipCard key={starship.name} starship={starship} />
            ))}
        </div>
    )

}
export default StarshipList;