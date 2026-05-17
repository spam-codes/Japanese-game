import { useEffect, useState } from 'react';
import Card from './card'
import Button from '../../components/Button';
import { hiragana } from '../../data/hiragana';
import Header from '../../components/header';
import ThemesSection from '../../components/themes';
import {themes} from '../../themes/themeObject'
import { katakana } from '../../data/katakana';
import { hiraganaCombination } from '../../data/hiraganaCombination';
import { katakanaCombination } from '../../data/katakanaCombination';
import { useTheme } from '../../../themeContext';
import Copyright from '../../components/copyrightSection'


   export const scripts = {
        hiragana,
        katakana,
        hiraganaCombination,
        katakanaCombination
    }

function SpinCharGame(){

  const [character, updateCharacter] = useState(0);  // for the characters
  const [isSpinning, setIsSpinning] = useState(false);  // for spinning 
  const [showRomaji, setShowRomaji] = useState(false);  // for the romaji text
  const [script, changeScript] = useState('hiragana');   // for the header buttons
  const [activeMode, setActiveMode] = useState('hiragana'); // for header
  const {theme, setTheme} = useTheme();
  const [isThemeClicked, setIsThemeClicked] = useState(false);
  const [isMenuOn, setIsMenuOn] = useState(false);

  const currenTheme = themes[theme];

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
    <>
    <div className={`flex flex-col items-center justify-center h-screen w-screen ${currenTheme.background}`}>
      <Header changeScriptFunction={changeScriptFunction} activeMode={activeMode} theme={theme} isMenuOn={isMenuOn} changeIsMenuOn={changeIsMenuOn} script={script}/>
      <ThemesSection changeTheme={changeTheme} changeIsThemeClicked={changeIsThemeClicked} isThemeClicked={isThemeClicked} isMenuOn={isMenuOn} xyPosition={{x:'80px', y:'30px'}}/>
      <Card character={character} showRomaji={showRomaji} script={script}/>
      <div className='flex gap-24 md:gap-30'>
         <Button functionOnClick={changeCharacter} buttonValue={"Spin"}/>
         <Button functionOnClick={showRomajiFunction} buttonValue={showRomaji?"Hide Romaji":"Show Romaji"}/>
      </div>
    </div>
    <Copyright className="fixed bottom-0"/>
    </>

  )
}

export default SpinCharGame;