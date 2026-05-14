import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";
import {hiraganaCombination} from "../data/hiraganaCombination"
import {katakanaCombination} from "../data/katakanaCombination"
import { themes } from "../themes/themeObject";
import {scripts} from '../App';

function Card({character, showRomaji, script, theme}){
    let background = themes[theme].card;
    let text = `black`;

    let data = scripts[script];
    console.log(character);
    return(
         <div className={`${background} h-[20vh] md:h-[40vh] w-[60vw] md:w-[40vw] p-2 flex flex-col items-center justify-center gap-5 md:gap-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.06)]`}>
            <div className={`text-4xl md:text-8xl text-center ${text} font-bold`}>{data[character].char}</div>
            {
                showRomaji&& <div className="text-gray-500 text-4xl md:text-8xl text-center">{data[character].romaji}</div>
            }
         </div>
    )
}


export default Card;