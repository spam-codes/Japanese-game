import { useState } from "react";
import { hiragana } from "../../data/hiragana";
import { katakana } from "../../data/katakana";
import { SlPencil } from "react-icons/sl";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import Canva from "./canva";
import { motion } from "motion/react";
import Copyright from "../../components/copyrightSection";
import { useTheme } from "../../../themeContext";
import { themes } from "../../themes/themeObject";

function DrawingGuide(){

    const {theme, setTheme} = useTheme();
    const currentTheme = themes[theme];

    const [character, setCharacter] = useState(0);
    const [script, setScript] = useState('hiragana');
    const [scriptDropDown, setScriptDropDown] = useState(false);
    const [scriptButtonName, setScriptButtonName] = useState(script);
    const [preview, setPreview] = useState(false);


    const scripts = {
        hiragana,
        katakana,
    }

    let bag = [...scripts[script]];
    console.log(bag);
    console.log(script);

    function changeCharacter(){
         for(let i=0; i<bag.length; i++){
            console.log(bag.length);
            const index = Math.floor(Math.random()*bag.length);

            [bag[i], bag[index]] = [bag[index], bag[i]];
         }

         setCharacter(bag.pop().id-1);
    }

    function changeScript(type){
        changeCharacter();
         if(type === 'random'){
            setScriptButtonName('random');
            const num = Math.floor(Math.random()*2);
            if(1) setScript('katakana');
            else setScript('hiragana');
  
            changeScriptDropDown();
            return;
         }
         
         setScript(type);
         setScriptButtonName(type);
         changeScriptDropDown();

    }

    function changeScriptDropDown(){
        setScriptDropDown(!scriptDropDown);
    }

    function showPreview(){
        setPreview(!preview);
    }

    return <><div className={`${currentTheme.text} w-[96vw] h-[26vh] flex flex-col gap-2 mt-4 md:mt-8 ${currentTheme.background}`}>
          <div className="flex justify-between md:justify-around md:w-[45%]">
             <div>
             <button onClick={changeScriptDropDown} className={`border ${currentTheme.border} p-2 rounded-md flex items-center gap-2 cursor-pointer`}><LuBookOpenText /> {scriptButtonName.charAt(0).toUpperCase().concat(scriptButtonName.slice(1))} <IoMdArrowDropdown size={20} /></button>
             {
              scriptDropDown&&
              <div className="flex flex-col text-start absolute left-7 top-32 md:top-38 backdrop-blur-md p-2">
                <motion.button className="cursor-pointer" onClick={()=>changeScript('hiragana')}>Hiragana</motion.button>
                <motion.button className="cursor-pointer" onClick={()=>changeScript('katakana')}>Katakana</motion.button>
                <motion.button className="cursor-pointer" onClick={()=>changeScript('random')}>Random</motion.button>
             </div>
            }
             </div>
             <button onClick={showPreview} className={`border ${currentTheme.border} p-2 rounded-md flex items-center gap-2 cursor-pointer`}><IoEyeSharp /> {!preview?`Show Preview`:`Hide Preview`}</button>
          </div>
          <div className="flex flex-col md:flex-row md:gap-10">
          <div className={`flex md:flex-col justify-between rounded-lg ${currentTheme.card} h-[18vh] md:w-[45vw] md:h-[60vh] p-1 mt-3`}>
            <div className={`text-center ${currentTheme.card} rounded-md md:mt-6 p-3 w-70`}>
                <p>Write this character</p>
                <h1 className={`font-bold text-5xl md:text-9xl ${currentTheme.accent} mt-1 md:mt-5`}>'{bag[character].romaji}'</h1>
                <div className="flex text-sm gap-3 justify-between md:justify-around mt-3 md:mt-8">
                    <h2 className={`${currentTheme.secondaryButton} rounded-md p-1 md:p-4 text-[10px] md:text-[13px] flex items-center`}><MdOutlineTypeSpecimen className="mr-1"/> Type: {script.charAt(0).toUpperCase().concat(script.slice(1))} </h2>
                    <h2 className={`${currentTheme.secondaryButton} rounded-md p-1 md:p-4 text-[10px] md:text-[13px] flex justify-center items-center`}><SlPencil className="mr-1"/> Required strokes: {bag[character].strokes} </h2>
                </div>
            </div>
            <div className={`flex md:h-[25vh] justify-center items-center font-bold text-8xl md:text-9xl ${currentTheme.card} rounded-lg p-1 border ${currentTheme.border} relative`}>
                {!preview&&<div className="absolute h-full w-full backdrop-blur-sm"></div>}
                <h1>{bag[character].char}</h1>
            </div>
          </div>
          <Canva changeCharacter={changeCharacter} strokes={bag[character].strokes}/>
          </div>
    </div>
    
    <Copyright/>
    </> 

}


export default DrawingGuide;