import React, {useEffect, useState} from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./NavBar";

const PokemonData = () =>{

  const [pokemon, setPokemon] = useState()
  const navigate = useNavigate()
  const {id} =useParams()

  console.log(id)

  const obtenerPokemon = async () =>{
    const response = await fetch(`http://localhost:8080/pokeapi/v1/find/${id}`)
    if(response.status===200){
      const data = await response.json()
      setPokemon(data)
      console.log(data)
    }else{
      console.log("error")
    }
  }

  const eliminarPokemon = async () =>{
    const response = await fetch(`http://localhost:8080/pokeapi/v1/delete/${id}`,{
      method: "DELETE",
      headers: {
        "Access-Control-Origin": "*"
      },
    })
    if(response.status===200){
      toast('¡Pokémon eliminado!', {
        duration: 4000,
        position: 'top-center',

        style: {
          backgroundColor:"#201c1c",
          color:"white"
        },

        icon: '👍',

        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
      });
      navigate("/")
    }else{
      toast('El pokemon no ha podido ser actualizado', {
        duration: 4000,
        position: 'top-center',

        style: {
          backgroundColor:"#201c1c",
          color:"white"
        },

        icon: '👎',

        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
      });
    }
  }

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


  useEffect(()=>{
    obtenerPokemon()
  },[])



  return (
    <>
                  <NavBar/>
{
        pokemon?

            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{duration:0.3}}
                className={"p-4"}
              >
                <div className="w-3/5 md:w-2/5 m-auto rounded-md mt-6 border font-Poppins">
                  <div className="w-full flex justify-center m-auto p-6 rounded-t-md" style={{ backgroundColor: tiposPokemon[pokemon.tipos[0].toLowerCase()] }} >
                    <div>
                    </div>
                    <img src={pokemon.sprite} className="w-44 "/>
                  </div>
                  <p className="text-white w-full text-center text-xl py-4">{pokemon.nombre}</p>
                  <div className="px-6 flex flex-col sm:flex-row items-center justify-center w-full sm:gap-6">
                    <p>Peso: {pokemon.peso}k</p>
                    <p>Altura: {pokemon.altura}m</p>
                    <p>Region: {pokemon.region}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 py-2 items-center sm:justify-center">{pokemon.tipos.map(t=><div style={{ backgroundColor: tiposPokemon[t.toLowerCase()] }} className="badge text-black font-bold">{t}</div>)}</div>
                  <div className="flex sm:flex-row flex-col w-full gap-2 justify-between px-6 py-4">
                    <button className="btn btn-active btn-accent" onClick={()=>navigate(`/editar/${id}`)}>Editar</button>

                    <button className="btn btn-error" onClick={()=>document.getElementById('my_modal_1').showModal()}>Eliminar</button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Eliminar Pokemon</h3>
                        <p className="py-4">¿Estas seguro que deseas eliminar a {pokemon.nombre}?</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-info">Cancelar</button>
                            <button className="btn btn-error ml-4" onClick={()=>eliminarPokemon()}>Eliminar</button>
                          </form>
                        </div>
                      </div>
                    </dialog>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence> 
          :<div className="flex mt-6 justify-center w-full">
            <button className="btn btn-square">
              <span className="loading loading-spinner"></span>
            </button>
          </div>
      }
    </>
  )
}

export default PokemonData
