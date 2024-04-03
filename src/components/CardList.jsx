import {AnimatePresence,motion} from "framer-motion";
import React, {useRef,useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const CardList = () =>{

  const [pokemons, setPokemons] = useState([])
  const [mostrar, setMostrar] = useState(pokemons)
  const navigate = useNavigate()
  const inputRef = useRef()

  const tiposPokemon = {
    normal: "#A8A878",
    fuego: "#F08030",
    agua: "#6890F0",
    planta: "#78C850",
    electrico: "#F8D030",
    hielo: "#98D8D8",
    lucha: "#C03028",
    veneno: "#A040A0",
    tierra: "#E0C068",
    volador: "#A890F0",
    psiquico: "#F85888",
    bicho: "#A8B820",
    roca: "#B8A038",
    fantasma: "#705898",
    dragon: "#7038F8",
    siniestro: "#705848",
    acero: "#B8B8D0",
    hada: "#EE99AC"
  };
  const obtenerPokemons = async  () =>{
    const response = await fetch("http://localhost:8080/pokeapi/v1/findAll")
    if(response.status===200){
      const data = await response.json()
      setPokemons(data)
      setMostrar(data)
    }  }


  useEffect(()=>{
    obtenerPokemons()
  },[])

  const busqueda = (pokemon) => {
    const abuscar = pokemon.toLowerCase();
    const resultados = pokemons&&pokemons.filter(p=>
      p.nombre.toLowerCase().includes(abuscar)
    );
    setMostrar(resultados)
  }

  return(
    <>
      <div className="mt-5">
        <form onSubmit={(e)=>{
          e.preventDefault()
          busqueda(inputRef.current.value)
        }}className="flex gap-2 flex-col md:flex-row sm:flex-col">
          <input
            onChange={()=>busqueda(inputRef.current.value)}
            ref={inputRef} placeholder="Busqueda por nombre" className=" p-2 rounded-md border  w-full" type={"text"}/>
        </form>

      </div>
      {
        pokemons?
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="mt-5 mb-5  gap-2 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:grid-cols-3 ">
              {mostrar&& mostrar.map((p,i)=>
                {
                  return(
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <Card key={p.id} id={p.id}  img={p.sprite} mainType={p.tipos[0]} name={p.nombre}/>
                    </motion.div>
                  )
                })}

            </motion.div>
          </AnimatePresence>
          :
          <div className="flex mt-6 justify-center w-full">
            <button className="btn btn-square">
              <span className="loading loading-spinner"></span>
            </button>
          </div>
      }
      {
          pokemons&&pokemons.length===0?

        <AnimatePresence>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}

            transition={{duration:0.4}}

            className="text-center w-full">No hay pokemons, ¡Añade uno!</motion.div>
</AnimatePresence>
        :null
      }
    </>

  )
}

export default CardList
