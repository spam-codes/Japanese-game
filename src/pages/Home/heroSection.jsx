import { easeIn, motion } from "motion/react";
import { ellipse } from "motion/react-client";
import { useTheme } from "../../../themeContext";
import { themes } from "../../themes/themeObject";

function HeroSection(){
    
    const {theme, setTheme} = useTheme();
    const currentTheme = themes[theme];

    return <div className="flex flex-col justify-center items-center text-center h-[29vh] w-screen text-zinc-300 z-0">
        <motion.h1 
        initial={{
            y:-80
        }}
        animate={{
            y:1
        }}
        transition={{
            duration:0.2
        }}
        className={`text-7xl md:text-9xl yuji-font drop-shadow-[0_0_20px_rgba(255,170,0,0.5)] tracking-wider ${currentTheme.accent}`}>Nihongo</motion.h1>
       <p className={`${currentTheme.subText} text-center md:text-lg pr-16 pl-16 mt-5`}>
        Master Hiragana and Katakana through interactive practice.
       </p>
    </div>
}

export default HeroSection;