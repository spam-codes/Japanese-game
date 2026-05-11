import { hiragana } from "../../src/data/hiragana";
import { katakana } from "../../src/data/katakana";
import {hiraganaCombination} from "../../src/data/hiraganaCombination"
import {katakanaCombination} from "../../src/data/katakanaCombination"

function Card({character, showRomaji, script}){

    const scripts = {
        hiragana,
        katakana,
        hiraganaCombination,
        katakanaCombination
    }

    const data = scripts[script];

    return(
         <div className="bg-white h-[40vh] w-[40vw] p-2 flex flex-col items-center justify-center gap-10 rounded-2xl">
            <div className=" text-8xl text-center ">{data[character].char}</div>
            {
                showRomaji&& <div className="text-gray-500 text-8xl text-center">{data[character].romaji}</div>
            }
         </div>
    )
}


export default Card;