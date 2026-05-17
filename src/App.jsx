import SpinCharGame from "./pages/SpinGame/spinCharGame";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import WritingPractice from "./pages/WritingPractice/writingPractice";

function App(){

    return (
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/spinChar' element={<SpinCharGame/>}/>
       <Route path="/writingPractice" element={<WritingPractice/>}/>
       </Routes>
    )
}


export default App;