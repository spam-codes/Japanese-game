import { Link } from "react-router-dom";
import Header from "./header";
import HeroSection from "./heroSection";
import ModesCard from "./modesCard";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import Copyright from "../../components/copyrightSection";
import { useTheme } from '../../../themeContext'
import {themes} from '../../themes/themeObject'

function Home(){

  const { theme, setTheme} = useTheme();
  const currentTheme = themes[theme];

    return <>    <div className={`h-screen w-screen ${currentTheme.background} relative`}>
      <Header/>
      <HeroSection/>
      <ModesCard/>
      <div className={`flex items-center justify-center gap-2 p-2 ${currentTheme.subText} rounded-md mt-6`}><MdOutlineTipsAndUpdates/> Tip: Consistent practice everyday leads to mastery.</div>
    </div>
    <Copyright/>
    </>

}

export default Home;