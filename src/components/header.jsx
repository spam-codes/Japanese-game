import { button } from "motion/react-client";
import { themes } from "../themes/themeObject";
import { easeInOut, motion, AnimatePresence } from "motion/react";

function Header({changeScriptFunction, activeMode, theme, isMenuOn, changeIsMenuOn, script}){

    let headerBackground = themes[theme].header;
    let headerText = themes[theme].text;

    const mobileHeaderScriptButton = {
        hiragana: 'Hiragana',
        katakana: 'Katakana',
        hiraganaCombination: 'HR-Combo',
        katakanaCombination: 'KT-Combo'
    }
    
    const buttonStyle = `
    md:mr-10
    text-sm
    md:text-l
    font-semibold 
    cursor-pointer
    hover:scale-105
    active:scale-95
    h-10
    `
    const activeStyle = `
    border-b-1
    md:border-b-2
    ${headerText}
    `;
    
    return <div className={`${headerBackground} ${headerText} absolute top-0 w-screen h-15 flex justify-end items-center`}>
        <div className="font-bold text-3xl absolute left-4">Learn Japanese</div>
        <div className="hidden md:flex">
            <button className={`${buttonStyle} ${activeMode==='hiragana'?activeStyle:''}`} onClick={()=>changeScriptFunction('hiragana',false)} >Hiragana</button>
            <button className={`${buttonStyle} ${activeMode==='katakana'?activeStyle:''}`} onClick={()=>changeScriptFunction('katakana', false)}>Katakana</button>
            <button className={`${buttonStyle} ${activeMode==='hiraganaCombination'?activeStyle:''}`} onClick={()=>changeScriptFunction('hiraganaCombination', false)}>HR-Combo</button>
            <button className={`${buttonStyle} ${activeMode==='katakanaCombination'?activeStyle:''}`} onClick={()=>changeScriptFunction('katakanaCombination', false)}>KT-Combo</button>
        </div>
        <div className="flex md:hidden">
            <div className="cursor-pointer mr-5 border pr-2 pl-2 pt-1 pb-1 rounded-md text-sm font-semibold" onClick={changeIsMenuOn}>{mobileHeaderScriptButton[script] + ' ⌄'}</div>
            <AnimatePresence>
            {isMenuOn&&
            <motion.div className="absolute top-10 flex flex-col right-6"
            initial={{
                x:1000,
                opacity:0
            }}

            animate={{
                x:1,
                opacity:1
            }}

            exit={{
                x:1000
            }}

            transition={{
                ease:easeInOut,
                duration:0.3
            }}
            >
                <button className={`${buttonStyle} ${activeMode==='hiragana'?activeStyle:''} text-start`} onClick={()=>changeScriptFunction('hiragana', true)} >Hiragana</button>
                <button className={`${buttonStyle} ${activeMode==='katakana'?activeStyle:''} text-start`} onClick={()=>changeScriptFunction('katakana', true)}>Katakana</button>
                <button className={`${buttonStyle} ${activeMode==='hiraganaCombination'?activeStyle:''} text-start`} onClick={()=>changeScriptFunction('hiraganaCombination', true)}>HR-Combo</button>
                <button className={`${buttonStyle} ${activeMode==='katakanaCombination'?activeStyle:''} text-start`} onClick={()=>changeScriptFunction('katakanaCombination', true)}>KT-Combo</button>
            </motion.div >}
            </AnimatePresence>
        </div>
    </div>
}


export default Header;