import React, {useState} from "react";
import { motion } from "framer-motion";

const Card = ({mainType, name,img}) =>{

  const tiposPokemon = {
    normal: "#A8A878",
    fuego: "#F08030",
    agua: "#6890F0",
    planta: "#78C850",
    eléctrico: "#F8D030",
    hielo: "#98D8D8",
    lucha: "#C03028",
    veneno: "#A040A0",
    tierra: "#E0C068",
    volador: "#A890F0",
    psíquico: "#F85888",
    bicho: "#A8B820",
    roca: "#B8A038",
    fantasma: "#705898",
    dragón: "#7038F8",
    siniestro: "#705848",
    acero: "#B8B8D0",
    hada: "#EE99AC"
  };


  const tipo = ["Siniestro","Fantasma","acero"]
  const color = tiposPokemon[mainType.toLowerCase()]

  console.log(typeof(color))

  return(
    <motion.div 
      whileHover={{
        scale:1.1,
        zIndex: 100,
        border:"2px solid black"
      }}
      style={{"backgroundColor":color}} className="h-[200px] cursor-pointer z-10 justify-center relative overflow-hidden flex flex-col items-center shadow-md rounded-xl">
      <div style={{"backgroundcolor":color}} className="relative z-20 top-0 w-full h-[140px]" ></div> 
      <div className=" relative bottom-0 bg-white z-20 rounded-t-[100%] w-full h-full"></div> 
      <img className={"top-[23px] z-50 absolute z-50 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] w-28 object-cover object-center "} src={img}/>
      <p className="absolute bottom-5 z-50 text-black">{name}</p>

    </motion.div>
  )
}

export default Card
