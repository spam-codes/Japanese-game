import { useTheme } from "../../../themeContext";
import { themes } from "../../themes/themeObject";
import Header from "../Home/header";
import Canva from "./canva";
import DrawingGuide from "./drawingGuideCard";

function WritingPractice(){
    
    const {theme, setTheme} = useTheme();
    const currentTheme = themes[theme];


    return <div className={`${currentTheme.background} h-screen w-screen flex flex-col items-center`}>
        <Header/>
        <DrawingGuide/>    
    </div>
}

export default WritingPractice;