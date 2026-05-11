import { useEffect, useState } from 'react';
import Card from '../public/components/card'
import Button from '../public/components/Button';
import { hiragana } from './data/hiragana';
import Header from '../public/components/header';

function App(){

  const [character, updateCharacter] = useState(0);  // for the characters
  const [isSpinning, setIsSpinning] = useState(false);  // for spinning 
  const [showRomaji, setShowRomaji] = useState(false);  // for the romaji text
  const [script, changeScript] = useState('hiragana');   // for the header buttons

  // useEffect(()=>{
        function changeCharacter(){

          if(isSpinning) return;
          setIsSpinning(true);
          setShowRomaji(false);

            const intervalId = setInterval(()=>{
               const index = Math.floor(Math.random()*script.length);
               updateCharacter(index);
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

  function changeScriptFunction(type){
        changeScript(type);
  }

  return(
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <Header changeScriptFunction={changeScriptFunction}/>
      <Card character={character} showRomaji={showRomaji} script={script} />
      <div className='flex gap-30'>
         <Button functionOnClick={changeCharacter} buttonValue={"Spin"} />
         <Button functionOnClick={showRomajiFunction} buttonValue={showRomaji?"Hide Romaji":"Show Romaji"}/>
      </div>
    </div>
  )
}

export default App;