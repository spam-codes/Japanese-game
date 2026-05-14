import { useEffect, useState } from 'react';
import Card from './components/card'
import Button from './components/Button';
import { hiragana } from './data/hiragana';
import Header from './components/header';
import ThemesSection from './components/themes';
import {themes} from '../src/themes/themeObject'
import { katakana } from './data/katakana';
import { hiraganaCombination } from './data/hiraganaCombination';
import { katakanaCombination } from './data/katakanaCombination';


    export const scripts = {
        hiragana,
        katakana,
        hiraganaCombination,
        katakanaCombination
    }

function App(){

  const [character, updateCharacter] = useState(0);  // for the characters
  const [isSpinning, setIsSpinning] = useState(false);  // for spinning 
  const [showRomaji, setShowRomaji] = useState(false);  // for the romaji text
  const [script, changeScript] = useState('hiragana');   // for the header buttons
  const [activeMode, setActiveMode] = useState('hiragana'); // for header
  const [theme, setTheme] = useState('dark');
  const [isThemeClicked, setIsThemeClicked] = useState(false);
  const [isMenuOn, setIsMenuOn] = useState(false);

  let background = themes[theme].background;
  let text = themes[theme].text;

  // useEffect(()=>{
        function changeCharacter(){

          if(isSpinning) return;
          setIsSpinning(true);
          setShowRomaji(false);

            const intervalId = setInterval(()=>{
                const data = scripts[script];
                let bag = [...data];

                function shuffle(array){
                    for(let i=array.length-1; i>0; i-- ){
                    const j = Math.floor(Math.random()*(i+1));

                      [array[i], array[j]] = [array[j], array[i]];
                }

                   return array;
               }

               bag = shuffle(bag);
               updateCharacter(bag.pop().id-1);
               console.log("change character");
            },100)

             setTimeout(()=>{
                clearInterval(intervalId);
                console.log("SetTimeOut")
                setIsSpinning(false);
             },1000)
        }
  // }, [])


  function showRomajiFunction(){
    setShowRomaji(!showRomaji)
  }

  function changeScriptFunction(type, isMobileView){
        changeScript(type);
        updateCharacter(0);
        setActiveMode(type);
        if(isMobileView) changeIsMenuOn();
  }

  //change Theme function

  function changeTheme(type){
      setTheme(type);
      setIsThemeClicked(!isThemeClicked);

  }

  // theme icon drop down function

   function changeIsThemeClicked(){
        setIsThemeClicked(!isThemeClicked);
    }

    // for mobile view

    function changeIsMenuOn(){
      setIsMenuOn(!isMenuOn);
    }

  return(
    <div className={`flex flex-col items-center justify-center h-screen w-screen ${background}`}>
      <Header changeScriptFunction={changeScriptFunction} activeMode={activeMode} theme={theme} isMenuOn={isMenuOn} changeIsMenuOn={changeIsMenuOn} script={script}/>
      <ThemesSection changeTheme={changeTheme} changeIsThemeClicked={changeIsThemeClicked} isThemeClicked={isThemeClicked} theme={theme} isMenuOn={isMenuOn}/>
      <Card character={character} showRomaji={showRomaji} script={script} theme={theme}/>
      <div className='flex gap-24 md:gap-30'>
         <Button functionOnClick={changeCharacter} buttonValue={"Spin"}  theme={theme}/>
         <Button functionOnClick={showRomajiFunction} buttonValue={showRomaji?"Hide Romaji":"Show Romaji"}theme={theme}/>
      </div>
      <div className={`${text} absolute bottom-0 font-medium`}>Copyright@Samit</div>
    </div>
  )
}

export default App;