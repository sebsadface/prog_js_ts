import React, { useState } from 'react';
import { fetchQuizQuestions } from './api'
import { Difficulty } from './api'
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 20;

const App = () => {
  const [Loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.HARD))


  const startTrivia = async () => {


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {


  }

  const nextQuestion = () => {


  }

  return (
    <div className="App">
      <h1>TRIVIA</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'> Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;

