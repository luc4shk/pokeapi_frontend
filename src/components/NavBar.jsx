import React from "react";
import { motion } from "framer-motion";
import {useNavigate, useLocation} from "react-router-dom"


const NavBar = () =>{
  const navigate = useNavigate()
  const location = useLocation()
  return(
    <div className="px-8 flex items-center justify-between flex-row p-0 w-full  h-16 bg-black text-white">
      <div onClick={()=>navigate("/")} className="cursor-pointer font-Pokemon text-center tracking-[0.2em] relative bottom-[8px] text-3xl" >
        PokeApi
      </div>
      <div>
        <motion.button 
          whileTap={{ scale: 0.8 }}
          className="cursor-pointer p-2 text-black bg-white rounded-md  w-full h-[42px] font-Poppins" 
          onClick={()=>{
            location.pathname!="/agregar"?navigate("/agregar"):navigate("/")
          }}
        >

          <button>{location.pathname!="/agregar"?"Añadir":"Home"}</button>
        </motion.button> 


      </div> 
    </div>
  )

}


export default NavBar
