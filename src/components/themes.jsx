import { useState } from "react";
import { motion } from "motion/react";
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

    return <div className="absolute top-30 right-20 flex-col justify-end">
        <div className="flex justify-end cursor-pointer" onClick={changeIsThemeClicked}><IoIosSunny className={`size-9 ${themeDivTextColor}`}/></div>
        {
        isThemeClicked&&<motion.div className={`${themeDivTextColor} flex flex-row gap-5 z-10`}>
            <button className={`${buttonStyle} ${theme==='dark'?onActiveButtonStyle:''}`} onClick={()=>changeTheme('dark')}>Dark</button>
            <button className={`${buttonStyle} ${theme==='cyber'?onActiveButtonStyle:''}`} onClick={()=>changeTheme('cyber')}>Cyber</button>
            <button className={`${buttonStyle} ${theme==='sakura'?onActiveButtonStyle:''}`} onClick={()=>changeTheme('sakura')}>Sakura</button>
        </motion.div>
}
    </div>
}


export default ThemesSection;