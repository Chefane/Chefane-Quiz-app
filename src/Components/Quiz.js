import React, {useState, useContext} from "react";
import {QuizContext} from "../Helpers/Context";
import {Questions} from '../Helpers/QuestionBank';
import {EndScreen} from "./EndScreen";
function Quiz(){

    const {score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {

        if (Questions[currQuestion].answer == optionChosen){
            setScore(score + 1) ;
        }
        setCurrQuestion(currQuestion + 1);
    };
    const finishQuiz = () => {
        if (Questions[currQuestion].answer == optionChosen){
            setScore(score + 1) ;
        } 
        setGameState("endScreen");
    }

    const previousQuestion = () => {
        setCurrQuestion(currQuestion - 1);
    }

    return (<div className="Quiz">
        <p>{Questions[currQuestion].prompt}</p>
        <div className="options">
            <button onClick={() => setOptionChosen("A")}>{Questions [currQuestion].optionA} </button>
            <button onClick={() => setOptionChosen("B")}>{Questions [currQuestion].optionB} </button>
            <button onClick={() => setOptionChosen("C")}>{Questions [currQuestion].optionC} </button>
            <button onClick={() => setOptionChosen("D")}>{Questions [currQuestion].optionD} </button>
        </div>

        {/*if the current question is the last, display finish quiz button or else continue*/}
        
        {currQuestion == Questions.length - 1 ? (
            <button className="next"  onClick={finishQuiz}>Finish Quiz</button>
        ): (
            <button className="next" onClick={nextQuestion}>Next Question</button>  
        ) }
           <button className="next" onClick={previousQuestion}>Previous Question</button>  
        
    </div>
    );
    
}
export default Quiz;