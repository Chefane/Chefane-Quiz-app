import React, {useContext} from "react";
import {QuizContext} from "../Helpers/Context";
import '../App.css';
import {Questions} from '../Helpers/QuestionBank';

function EndScreen(){
    const {score, setScore, setGameState} = useContext(QuizContext);

    //method to restart quiz
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }


    return( <div className="EndScreen">
            <h1>Quiz Completed</h1>

        {/* display final score*/}
        <h3>Final Score: {score}/{Questions.length}</h3>

        {/*Go back to main menu*/}
        <button className="next" onClick={restartQuiz}>Restart Quiz</button>

        
        
  
     <div className="Menu">

       {/* change the state to quiz*/}
       
        <button className="next"  onClick={() => {
        setGameState("memo");
        }}
        >
        View Answers
        </button>
    </div>
    
  
        
    </div>
    );

}
export default EndScreen;