import React, { useState } from 'react';
import styles from './Quiz.module.css'; // Import CSS module

const Quiz = () => {
  const questions = [
    {
      question: "How is your heart?",
      answers: ["Content", "Depressed", "Frustrated"]
    },
    {
      question: "What environment do you prefer to be in?",
      answers: ["Outdoor", "Indoor"]
    },
    {
      question: "What type of activities do you prefer?",
      answers: ["High Impact", "Low Impact"]
    },
    {
      question: "Are you introverted or extroverted?",
      answers: ["Introverted", "Extroverted"]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);

    // Proceed to the next question or display result
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If this is the last question, proceed to display result
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const calculateResult = () => {
    // Concatenate answer indices into a string, excluding the first question's answer index
    const resultKey = answers.slice(1).join('');
    return resultKey;
  };

  const displayResult = () => {
    const resultKey = calculateResult();
    // Map result to specific result interpretations
    const resultMap = {
      "000": "Result A",
      "001": "Result B",
      "010": "Result C",
      "011": "Result D",
      "100": "Result E",
      "101": "Result F",
      "110": "Result G",
      "111": "Result H"
    };
    return resultMap[resultKey] || "Unknown Result";
  };

  const allQuestionsAnswered = answers.every(answer => answer !== null);
  const progressBarWidth = (currentQuestionIndex / questions.length) * 100;

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <h1>{`Question ${currentQuestionIndex + 1}`}</h1>
      ) : null}
      <div className={styles["progress-bar-container"]}>
        <div className={styles["progress-bar-segment"]} style={{ width: `${progressBarWidth}%` }}></div>
      </div>
      {currentQuestionIndex < questions.length ? (
        <div>
          <p>{questions[currentQuestionIndex].question}</p>
          {questions[currentQuestionIndex].answers.map((answer, answerIndex) => (
            <button key={answerIndex} onClick={() => handleAnswerSelect(answerIndex)}>
              {answer}
            </button>
          ))}
          <div>
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
            {currentQuestionIndex < questions.length - 1 && <button onClick={handleNext}>Next</button>}
          </div>
        </div>
      ) : (
        <div>
          {allQuestionsAnswered ? (
            <div>
              <h2>Quiz completed!</h2>
              <p>{displayResult()}</p>
            </div>
          ) : (
            <p>Please answer all questions</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
