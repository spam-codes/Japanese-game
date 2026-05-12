import { button } from "motion/react-client";
import { themes } from "../themes/themeObject";

function Header({changeScriptFunction, activeMode, theme}){
    
    const buttonStyle = `
    mr-10
    font-semibold 
    cursor-pointer
    hover:scale-105
    active:scale-95
    h-10
    `
    const activeStyle = `
    border-b-2
    border-zinc-400
    `
    let headerBackground = themes[theme].header;
    let headerText = themes[theme].text;

    return <div className={`${headerBackground} ${headerText} absolute top-0 w-screen h-15 flex justify-end items-center`}>
        <div className="font-bold text-3xl absolute left-4">Learn Japanese</div>
        <div>
        <button className={`${buttonStyle} ${activeMode==='hiragana'?activeStyle:''}`} onClick={()=>changeScriptFunction('hiragana')} >Hiragana</button>
        <button className={`${buttonStyle} ${activeMode==='katakana'?activeStyle:''}`} onClick={()=>changeScriptFunction('katakana')}>Katakana</button>
        <button className={`${buttonStyle} ${activeMode==='hiraganaCombination'?activeStyle:''}`} onClick={()=>changeScriptFunction('hiraganaCombination')}>HR-Combo</button>
        <button className={`${buttonStyle} ${activeMode==='katakanaCombination'?activeStyle:''}`} onClick={()=>changeScriptFunction('katakanaCombination')}>KT-Combo</button>
        </div>
    </div>
}


export default Header;