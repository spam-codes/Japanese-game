import { GiSpinningSword } from "react-icons/gi";
import { RiDiceLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbWriting } from "react-icons/tb";
import { PiPencilLineFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { easeIn, motion, scale } from "motion/react";
import { themes } from "../../themes/themeObject";
import { useTheme } from "../../../themeContext";

function ModesCard(){

    const {theme, setTheme} = useTheme();
    const currentTheme = themes[theme];

    return <div className={` ${currentTheme.text} h-[45vh] w-full flex justify-center gap-4 md:gap-15 p-5`}>
        <motion.div
        initial={{
            x:-100,
        }}
        whileHover={{
            scale:1.1
        }}
        animate={{
            x:1,
        }}
        transition={{
            duration:0.2
        }}
        className={`${currentTheme.card} border rounded-2xl h-[40vh] w-48 md:w-[38vw] flex flex-col items-center justify-center`}>
            <div className=""><GiSpinningSword className="size-20 md:size-30" /></div>
            <h1 className={`text-xl md:text-2xl font-bold mt-3 ${currentTheme.text}`}>Memory Game</h1>
            <p className={`${currentTheme.subText} text-center text-sm md:text-lg p-2`}>Test your recognition skills with a fun spin game. Random characters, real learning</p>
            <motion.div
            whileHover={{
                scale:1.1
            }}
            whileTap={{
                scale:0.9
            }}
            >
                <Link to={'/spinChar'} className={`border ${currentTheme.border} font-bold rounded-md p-2 md:p-4 flex items-center gap-3 mt-4 cursor-pointer ${currentTheme.button}`}><RiDiceLine />Start Game<FaArrowRightLong /></Link>
            </motion.div>
        </motion.div>
        <motion.div 
        initial={{
            x:100,
        }}
        whileHover={{
            scale:1.1
        }}
        animate={{
            x:1,
        }}
        transition={{
            duration:0.2
        }}
        className={`border rounded-2xl h-[40vh] w-50 md:w-[38vw] flex flex-col items-center justify-center ${currentTheme.card}`}>
            <div><PiPencilLineFill className="size-20 md:size-30"/></div>
            <h1 className={`text-xl md:text-2xl font-bold mt-3 ${currentTheme.text}`}>Writing Practice</h1>
            <p className={`${currentTheme.subText} text-center text-sm md:text-lg p-1`}>Practice writing characters step by step and improve your stroke accuracy</p>
            <motion.div
            whileHover={{
                scale:1.1
            }}
            whileTap={{
                scale:0.9
            }}
            >
                <Link to={'/writingPractice'} className={`border ${currentTheme.border} font-bold rounded-md p-2 md:p-4 flex items-center gap-2 mt-9 cursor-pointer ${currentTheme.button}`}><TbWriting />Start Practice<FaArrowRightLong /></Link>
            </motion.div>
        </motion.div>
    </div>
}

export default ModesCard;