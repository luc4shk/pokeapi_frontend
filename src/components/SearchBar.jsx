import React from "react";
import { motion } from "framer-motion";

const SearchBar = () =>{
  return (
    <div className="mt-5">
      <form onSubmit={(e)=>{e.preventDefault()}}className="flex gap-2 flex-col md:flex-row sm:flex-col">
        <input placeholder="Busqueda por nombre" className=" p-2 rounded-md border md:w-4/5 w-full" type={"text"}/>
        <motion.button 
           whileTap={{ scale: 0.8 }}
          className="cursor-pointer text-white bg-black rounded-md md:w-1/5 w-full h-[42px]" >
<input  className="cursor-pointer" type={"submit"}/>
        </motion.button> 
              </form>

    </div>
  ) 
}

export default SearchBar
