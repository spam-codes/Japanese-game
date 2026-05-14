import { useState } from "react";
import { easeInOut, motion, AnimatePresence } from "motion/react";
import { button } from "motion/react-client";
import { IoIosSunny } from "react-icons/io";
import { themes } from "../themes/themeObject";


function ThemesSection({changeTheme, changeIsThemeClicked, isThemeClicked, theme}){

    let themeDivTextColor = themes[theme].text;

    const buttonStyle = `
    hover:scale-110
    active: scale-95
    `;

    const onActiveButtonStyle = `
       border-b-1

    `

    return <div className="absolute top-20 md:top-30 left-5 md:left-20 flex-col justify-end">
        <div className="flex justify-end cursor-pointer" onClick={changeIsThemeClicked}><IoIosSunny className={`size-9 ${themeDivTextColor}`}/></div>
        <AnimatePresence>
        {
        isThemeClicked&&<motion.div className={`${themeDivTextColor} flex flex-col gap-2 md:gap-5 z-10`}
        initial={{
            opacity:0,
            x:-1000
        }}

        animate={{
            opacity:1,
            x:15,
        }}

        exit={{
            opacity:0,
            x:-1000
        }}

        transition={{
            ease:easeInOut,
            duration:0.3
        }}
        >
            <button className={`${buttonStyle} ${theme==='dark'?onActiveButtonStyle:''} text-start`} onClick={()=>changeTheme('dark')}>Dark</button>
            <button className={`${buttonStyle} ${theme==='cyber'?onActiveButtonStyle:''} text-start`} onClick={()=>changeTheme('cyber')}>Cyber</button>
            <button className={`${buttonStyle} ${theme==='sakura'?onActiveButtonStyle:''} text-start`} onClick={()=>changeTheme('sakura')}>Sakura</button>
        </motion.div>
}

    </AnimatePresence>
    </div>
}


export default ThemesSection;