import { setDragLock } from "motion";
import { useEffect, useRef, useState } from "react";
import { SlPencil } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { useTheme } from '../../../themeContext'
import { themes } from '../../themes/themeObject'

function Canva({changeCharacter, strokes}){

    const {theme, setTheme} = useTheme();
    const currentTheme = themes[theme];

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const lastX = useRef(0);
    const lastY = useRef(0);

    const [isDrawing, setIsDrawing] = useState(false);
    const [numberOfStrokes, setNumberOfStrokes] = useState(0);
    const [startDrawingFlexItem, setStartDrawingFlexItem] = useState(true); // for Start Drawing from here template
    const [strokeWarning, setStrokeWarning] = useState(false);
    let didDraw = false;
    

    function startDrawing(e){

        setIsDrawing(true);
        setStartDrawingFlexItem(false);

        lastX.current = e.nativeEvent.offsetX;
        lastY.current = e.nativeEvent.offsetY;
    }

    function draw(e){
        if(!isDrawing) return;
        const context = contextRef.current;

        const currentX = e.nativeEvent.offsetX;
        const currentY = e.nativeEvent.offsetY;
        console.log(currentX, currentY);

        context.beginPath();

        context.moveTo(lastX.current, lastY.current);
        context.lineTo(currentX, currentY);

        context.stroke();

        lastX.current = currentX;
        lastY.current = currentY;

        didDraw = true;
    }

    function stopDrawing(e){
        setIsDrawing(false);

        if(didDraw)
           setNumberOfStrokes((prev)=> prev+1);
    }

    function clearCanvas(){
        const canvas = canvasRef.current;
        const context = contextRef.current;

        context.clearRect(0,0, canvas.width, canvas.height);
        setNumberOfStrokes(0);
    }

    function nextCharacter(){
        changeCharacter();
    }

    function showStrokeWarning(){
        setStrokeWarning(true);
        strokeScoreStyle = `text-red-800`;
    }

    useEffect(()=>{
        const canvas = canvasRef.current;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const context = canvas.getContext('2d');

        context.strokeStyle = 'black';
        context.lineWidth = 8;
        context.lineCap = 'round';
        contextRef.current = context;
    },[])
    

    return <div className={`h-[40vh] w-[96vw] md:w-[50vw] md:h-[50vh] ${currentTheme.text} mt-4`}>
        
          <div className={`${currentTheme.card} rounded-md justify-center p-1 ${currentTheme.text} flex items-center gap-2`}>
            <FaPaintBrush />
            <h1 className="text-end">
               Strokes: <span>{numberOfStrokes}</span>/{strokes}
            </h1>    
         </div>
          <div className="p-2 h-[40vh] w-[96vw] md:w-[50vw] md:h-[50vh] mt-2 rounded-lg bg-white">
            {
                startDrawingFlexItem&&<div className="text-gray-400 absolute top-[58%] md:top-[40%] md:left-[68%] left-[30%] flex flex-col justify-center items-center"><SlPencil/><h1>Start drawing here</h1></div>
            }
          <canvas
           onPointerDown={startDrawing}
           onPointerMove={draw}
           onPointerUp={stopDrawing}
           onPointerLeave={stopDrawing}
           ref={canvasRef} className={`${currentTheme.canvas} touch-none w-[99%] h-[95%] border-3 border-blue-400 border-dotted rounded-xl mt-3 `}>
            this is the alternative text
          </canvas>
          </div>
          <div className={`flex items-center gap-2 text-sm ${currentTheme.subText} mt-4 justify-center`}><MdOutlineTipsAndUpdates /> Tip: Follow the stroke order and try your best!</div>
          <div className="flex justify-between mt-5 md:mt-10">
              <button onClick={clearCanvas} className={`${currentTheme.button} p-2 md:p-4 rounded-md flex items-center gap-2 md:gap-3 md:text-2xl`}><FaRegTrashAlt /> Clear</button>
              <button onClick={nextCharacter} className={`p-2 md:p-4 rounded-md ${currentTheme.secondaryButton} flex items-center gap-2 md:gap-3 md:text-2xl`} ><FaArrowRight /> Next</button>
          </div> 
          
    </div>
}

export default Canva;