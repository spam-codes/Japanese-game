import { useState } from 'react';
import {useTheme} from '../../../themeContext'
import ThemesSection from '../../components/themes';
import {themes} from '../../themes/themeObject'

function Header(){

    const {theme, setTheme} = useTheme();
    const currentTheme = themes[theme];
    const [isThemeClicked, setIsThemeClicked] = useState(false);
    const [isMenuOn, setIsMenuOn] = useState(false);


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

    return <div className={`${currentTheme.header} h-[8vh] md:h-[9vh] w-full flex items-center p-4 md:p-6 ${currentTheme.text}`}>
       <div className="text-2xl md:text-4xl yuji-font">Learn<span className={`${currentTheme.japaneseText}`}> 日本語</span></div>
       <ThemesSection changeTheme={changeTheme} changeIsThemeClicked={changeIsThemeClicked} isThemeClicked={isThemeClicked} isMenuOn={isMenuOn} xyPosition={{x:'13px', y:'20px'}} />
    </div>
}


export default Header;