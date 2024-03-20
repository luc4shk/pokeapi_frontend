import {AnimatePresence,motion} from "framer-motion";
import React from "react";
import Card from "./Card";

const CardList = () =>{
  return(
    

    <AnimatePresence>
    <motion.div
       layout
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
      className="mt-5 mb-5  gap-2 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:grid-cols-3 ">
      <Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png"} mainType={"bicho"} name={"Spinarak"}/>
      <Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} mainType={"normal"} name={"Ditto"}/>
      <Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"} mainType={"dragón"} name={"Rayquaza"}/>
      <Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"} mainType={"psíquico"} name={"Drowzee"}/>
<Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"} mainType={"fantasma"} name={"Gengar"}/>
<Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png"} mainType={"bicho"} name={"Spinarak"}/>
      <Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} mainType={"normal"} name={"Ditto"}/>
      <Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"} mainType={"dragón"} name={"Rayquaza"}/>
      <Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"} mainType={"psíquico"} name={"Drowzee"}/>
<Card img={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"} mainType={"fantasma"} name={"Gengar"}/>
    </motion.div></AnimatePresence>
  )
}

export default CardList
