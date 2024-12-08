//this will be a page of nothing but API call functions.

//planets  
import React from "react";
const BASE_URL = `https://swapi.dev/api/`


const planetList = async (props) => {///this was just a test to see what I was doing
    //get a list of all planets

    const allPlanets = await fetch(
        `${BASE_URL}planets`
    )
} 

const starshipService = async () => {
    

}



export default planetList;


