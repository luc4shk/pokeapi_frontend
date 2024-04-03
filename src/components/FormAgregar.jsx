import React from "react";
import {AnimatePresence,motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { toast } from "react-hot-toast";


const FormAgregar = () =>{
  //Referencias
  const nombreRef = useRef()
  const alturaRef = useRef()
  const pesoRef = useRef()
  const regionRef = useRef()
  const tipoRef = useRef()
  const imagenRef = useRef()
  const navigate = useNavigate()

  //Llamada a la api
  const añadirPokemon = async () =>{
    const formData = new FormData()
    formData.append("nombre", nombreRef.current.value)
    formData.append("tipos", JSON.stringify( Array.from(tipoRef.current.selectedOptions).map(o=>o.value)))
    formData.append("altura", alturaRef.current.value)
    formData.append("peso", pesoRef.current.value)
    formData.append("region", regionRef.current.value)
    formData.append("file", imagenRef.current.files[0])

    const response = await fetch("http://localhost:8080/pokeapi/v1/create",{
      method: "POST",
      headers: {
        "Access-Control-Origin": "*"
      },
      body: formData
    })


    const data = await response.json()
    if(response.status===200){
      toast(data.message, {
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
      console.log(data)
      toast(data.message, {
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


  return <>
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="font-Poppins sm:w-2/5 m-auto mt-6"
      >
        <form onSubmit={(e)=>{
          e.preventDefault()
          añadirPokemon()
        }}>
          <div className="flex flex-row gap-6 mb-4">
            <input ref={nombreRef} required type="text" placeholder="Nombre" class="input input-bordered w-full max-w-xs" />
            <input ref={alturaRef} required type="text" placeholder="Altura en metros" className="input input-bordered w-full max-w-xs" />
          </div>
          <input ref={pesoRef} required type="text" placeholder="Peso en Kilos" className="input input-bordered w-full mb-4" />
          <select ref={regionRef} required className="select select-bordered w-full mb-4">
            <option>Selecciona la región</option>
            <option value={"Kanto"} >Kanto</option>
            <option value={"Johto"}  >Johto</option>
            <option value={"Hoenn"} >Hoenn</option>
            <option value={"Sinnoh"} >Sinnoh</option>
            <option value={"Teselia"}>Teselia</option>
            <option value={"Kalos"}>Kalos</option>
            <option value={"Alola"}>Alola</option>
            <option value={"Galar"}>Galar</option>
            <option value={"Paldea"}>Paldea</option>
          </select>
          <div className="flex flex-col mb-4">
            <label className="text-base mb-2">Selecciona máximo 3 tipos</label>
            <select ref={tipoRef} required multiple className="select select-bordered w-full ">
              <option value={"Bicho"}>Bicho</option>
              <option value={"Dragon"}>Dragón</option>
              <option value={"Electrico"}>Eléctrico</option>
              <option value={"Hada"}>Hada</option>
              <option value={"Lucha"}>Lucha</option>
              <option value={"Fuego"}>Fuego</option>
              <option value={"Volador"}>Volador</option>
              <option value={"Fantasma"}>Fantasma</option>
              <option value={"Planta"}>Planta</option>
              <option value={"Tierra"}>Tierra</option>
              <option value={"Hielo"}>Hielo</option>
              <option value={"Normal"}>Normal</option>
              <option value={"Veneno"}>Veneno</option>
              <option value={"Psiquico"}>Psíquico</option>
              <option value={"Roca"}>Roca</option>
              <option value={"Acero"}>Acero</option>
              <option value={"Agua"}>Agua</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-base mb-2">Selecciona la imagen</label>
            <input ref={imagenRef} required type="file" className="file-input file-input-bordered w-full " />
          </div>
          <motion.button whileTap={{ scale: 0.8 }} className="cursor-pointer p-2 rounded-md bg-white text-black w-full">
            <input className={"cursor-pointer"} type={"submit"}/>
          </motion.button>
        </form>
      </motion.div>
    </AnimatePresence>
  </>
}

export default FormAgregar
