import React, {useContext} from "react";
import {QuizContext} from "../Helpers/Context";
import '../App.css';

export default function MainMenu() {

   // “useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually
   //  to each level. Context defined will be available to all the child components without involving “props
    const {gameState, setGameState} = useContext(QuizContext);

    return (
    <div className="Menu">

       {/* change the state to quiz */}
       
        <button className="next"  onClick={() => {
        setGameState("quiz");
        }}
        >
        Start Quiz
        </button>
    </div>
    
    );
}