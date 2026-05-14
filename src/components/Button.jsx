import { useState } from "react";
import { color, motion, scale } from "motion/react";
import { themes } from "../themes/themeObject";


function Button({functionOnClick, buttonValue, theme}){

   let buttonTheme = themes[theme].button;

    return (
       <motion.div
       className="mt-20"
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
          <motion.button 
           className={`cursor-pointer p-1 w-[100px] md:w-[200px] font-bold size-20 text-white text-xl md:text-2xl border-2 border-zinc-600  ${buttonTheme} hover:bg-zinc-700 rounded-2xl`} onClick={functionOnClick} 
           >
           {buttonValue}
           </motion.button>
       </motion.div>
    )
}

export default Button;