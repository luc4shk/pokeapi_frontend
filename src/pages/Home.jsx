import React from "react";
import NavBar from "../components/NavBar";
import Contenedor from "../components/Contenedor";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";


const Home = () =>{
  return(
    <>
      <NavBar/>
      <Contenedor>
        <CardList/>
      </Contenedor>
    </>
  )
}

export default Home
