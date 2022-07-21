
import './App.css';
import React, {useState, useContext} from 'react'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import ViewMemo from './Components/ViewMemo';
import {QuizContext} from "./Helpers/Context";


function App() {

  //creating state
  //The state is a built-in React object that is used to contain data or information about the component.

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  //display data/components on the screen/ rendering the state of the main menu
  //Components are independent and reusable bits of code.
  
  return( 
  <div className="App">
    <h1>Quiz App</h1>

    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

    {/*if the current state is equal to menu, then render MainMenu components*/}
    {gameState === "menu" && <MainMenu/>}

    {/*if the current state is equal to quiz, then render Quiz components*/}
    {gameState === "quiz" && <Quiz/>}

    {/*if the current state is equal to endscreen, then render EndScreen components*/}
    {gameState === "endScreen" && <EndScreen/>}

    {/*if the current state is equal to view, then render viewMemo components*/}
    {gameState === "memo" && <ViewMemo/>}
  
  
    
    </QuizContext.Provider>
  </div>
  );
}

export default App;
