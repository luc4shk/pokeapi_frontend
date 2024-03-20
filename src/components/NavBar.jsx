import React from "react";
import { motion } from "framer-motion";


const NavBar = () =>{
  return(
    <div className="px-8 flex items-center justify-between flex-row p-0 w-full  h-16 bg-black text-white">
      <div className="font-Pokemon text-center tracking-[0.2em] relative bottom-[8px] text-3xl" >
        PokeApi
      </div>
      <div>
        <div className="drawer drawer-end z-50">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="font-Poppins p-2 cursor-pointer text-black bg-white rounded-md ">Agregar</label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <form className="flex flex-col gap-2">
                <p className="text-center text-xl">Agregar Pokemon</p>
                <input type="text" placeholder="Nombre" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="Altura en metros" className="input input-bordered input-secondary w-full max-w-xs" />
                <input type="text" placeholder="Peso" className="input input-bordered input-accent w-full max-w-xs" />

                <select className="select select-warning w-full max-w-xs">
                  <option>Selecciona la región</option>
                  <option value={"kanto"} >Kanto</option>
                  <option value={"johto"}  >Johto</option>
                  <option value={"hoenn"} >Hoenn</option>
                  <option value={"sinnoh"} >Sinnoh</option>
                  <option value={"teselia"}>Teselia</option>
                  <option value={"kalos"}>Kalos</option>
                  <option value={"alola"}>Alola</option>
                  <option value={"galar"}>Galar</option>
                  <option value={"paldea"}>Paldea</option>
                </select>

                <label className="text-base">Selecciona máximo 3 tipos</label>
                <select multiple className="select select-error w-full max-w-xs">
                  <option value={"bicho"}>Bicho</option>
                  <option value={"dragon"}>Dragón</option>
                  <option value={"electrico"}>Eléctrico</option>
                  <option value={"hada"}>Hada</option>
                  <option value={"lucha"}>Lucha</option>
                  <option value={"fuego"}>Fuego</option>
                  <option value={"volador"}>Volador</option>
                  <option value={"fantasma"}>Fantasma</option>
                  <option value={"planta"}>Planta</option>
                  <option value={"tierra"}>Tierra</option>
                  <option value={"hielo"}>Hielo</option>
                  <option value={"normal"}>Normal</option>
                  <option value={"veneno"}>Veneno</option>
                  <option value={"psiquico"}>Psíquico</option>
                  <option value={"roca"}>Roca</option>
                  <option value={"acero"}>Acero</option>
                  <option value={"agua"}>Agua</option>
                </select>

                <label className="text-base">Selecciona la imagen</label>
                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                <button onClick={(e)=>e.preventDefault()} className="cursor-pointer btn btn-success">
                  <input className={"cursor-pointer"} type={"submit"}/>
                </button>
              </form>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}


export default NavBar
