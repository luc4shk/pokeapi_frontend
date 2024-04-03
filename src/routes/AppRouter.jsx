import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AddPokemon from "../pages/AddPokemon"
import Home from "../pages/Home";
import PokemonData from "../components/PokemonData";
import EditPokemon from "../pages/EditPokemon";


const AppRouter = () =>{
  return (
    <Router>
      <Routes>
        <Route>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/agregar"} element={<AddPokemon/>} />
          <Route path={"*"} element={<ErrorPage/>} />
          <Route path={"/pokemon/:id"} element={<PokemonData/>}/>
          <Route path={"/editar/:id"} element={<EditPokemon/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
