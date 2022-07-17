import React, {useContext} from "react";
import {QuizContext} from "../Helpers/Context";
import '../App.css';
import {Questions} from '../Helpers/QuestionBank';

function EndScreen(){
    const {score, setScore, setGameState} = useContext(QuizContext);

    
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }
    return( <div className="EndScreen">
        <h1>Quiz Completed</h1>
        <h3>Final Score: {score}/{Questions.length}</h3>
        <button className="next" onClick={restartQuiz}>Restart Quiz</button>
    </div>
    );

}
export default EndScreen;