import React, {useState, useContext} from "react";
import {QuizContext} from "../Helpers/Context";
import {Questions} from '../Helpers/QuestionBank';



function ViewMemo(){

    const { setGameState } = useContext(QuizContext);

    const [currQuestionAnswer, setCurrQuestionAnswer] = useState(0);


    const nextQuestionAnswer = () => {

      
        setCurrQuestionAnswer(currQuestionAnswer + 1);
    };
    const restartQuiz = () => {
        
        setGameState("menu");
    }

    return (<div className="Quiz">
        <p>{Questions[currQuestionAnswer].prompt}</p>
        <div className="options">
        <p>{Questions[currQuestionAnswer].answer}</p>
         {/* <p>{Questions[currQuestionAnswer].summary}</p> */}
        </div>

        {/*if the current question is the last, display finish quiz button or else continue */}
        
        {currQuestionAnswer == Questions.length - 1 ? (
            <button className="next"  onClick={restartQuiz}>Restart Quiz</button>
        ): (
            <button className="next" onClick={nextQuestionAnswer}>Next Question and answer</button>  
        ) }
    </div>
    );
    
}
export default ViewMemo;