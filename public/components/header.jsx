import { button } from "motion/react-client";

function Header({changeScriptFunction}){
    
    const buttonStyle = `
    mr-10
    font-semibold 
    cursor-pointer
    hover:scale-105
    active:scale-95
    `

    return <div className="bg-red-500 absolute top-0 w-screen h-15 flex justify-end">
        <button className={buttonStyle} onClick={()=>changeScriptFunction('hiragana')} >Hiragana</button>
        <button className={buttonStyle} onClick={()=>changeScriptFunction('katakana')}>Katakana</button>
        <button className={buttonStyle} onClick={()=>changeScriptFunction('hiraganaCombination')}>HR-Combo</button>
        <button className={buttonStyle} onClick={()=>changeScriptFunction('katakanaCombination')}>KT-Combo</button>
    </div>
}


export default Header;