import { useState } from "react";
import { easeInOut, motion, AnimatePresence } from "motion/react";
import { button } from "motion/react-client";
import { IoIosSunny } from "react-icons/io";
import { themes } from "../themes/themeObject";
import { useTheme } from "../../themeContext";
import { BiCurrentLocation } from "react-icons/bi";


function ThemesSection({changeTheme, changeIsThemeClicked, isThemeClicked, isMenuOn, xyPosition}){
    
    const {theme, setTheme} = useTheme();
    const currentTheme = themes[theme];


    const buttonStyle = `
    hover:scale-110
    active: scale-95
    `;

    const onActiveButtonStyle = `
       border-b-1

    `

    return !isMenuOn&&<div style={{top:xyPosition.x, right:xyPosition.y}} className={`absolute md:top-30 md:right-20 flex-col justify-end z-10`}>
        <div className="flex justify-end cursor-pointer" onClick={changeIsThemeClicked}><IoIosSunny className={`size-9 ${currentTheme.text}`}/></div>
        <AnimatePresence>
        {
        isThemeClicked&&<motion.div className={`${currentTheme.text} flex flex-col gap-2 md:gap-5 z-10 bg-white/10 rounded-lg backdrop-blur-2xl`}
        initial={{
            opacity:0,
            x:1000
        }}

        animate={{
            opacity:1,
            x:10,
        }}

        exit={{
            opacity:0,
            x:1000
        }}

        transition={{
            ease:easeInOut,
            duration:0.3
        }}
        >
            <button className={`${buttonStyle} ${theme==='dark'?onActiveButtonStyle:''} text-start`} onClick={()=>changeTheme('dark')}>Dark</button>
            <button className={`${buttonStyle} ${theme==='cyber'?onActiveButtonStyle:''} text-start`} onClick={()=>changeTheme('retro')}>Retro</button>
            <button className={`${buttonStyle} ${theme==='sakura'?onActiveButtonStyle:''} text-start`} onClick={()=>changeTheme('sakura')}>Sakura</button>
        </motion.div>
}

    </AnimatePresence>
    </div>
}


export default ThemesSection;