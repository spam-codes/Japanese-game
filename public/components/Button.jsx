import { useState } from "react";
import { color, motion, scale } from "motion/react";


function Button({functionOnClick, buttonValue}){

    return (
       <motion.div
       className="mt-30"
       whileHover={
         {
            scale: 1.1,
         }
       }

       whileTap={
         {
            scale: 0.98,
         }
       }
       >
          <motion.button className="cursor-pointer p-1 w-[200px] font-bold size-20 text-2xl border-2 border-blue-50  bg-blue-800 rounded-2xl" onClick={functionOnClick} 
          whileHover={
            {
              background: "blue"
            }
          }
          >{buttonValue}</motion.button>
       </motion.div>
    )
}

export default Button;