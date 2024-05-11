import React, { useState, useEffect } from 'react';
import styles from './Quiz.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { QUESTIONS, RESULT_MAP } from './consts';
import Header from '../Header';
import Button from '../Button';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [prevProgressBarWidth, setPrevProgressBarWidth] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const router = useRouter();

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
    setSelectedAnswerIndex(answerIndex);
  };

  const handleNextClick = () => {
    setSelectedAnswerIndex(null); // Reset the selected answer index
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If this is the last question, proceed to display result
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const calculateResult = () => {
    // Concatenate answer indices into a string, excluding the first question's answer index
    const resultKey = answers.slice(1).join('');
    return resultKey;
  };

  const buildResultProps = () => {
    const resultKey = calculateResult();
    // Map result to specific result interpretations
    const props = RESULT_MAP[resultKey];
    return RESULT_MAP[resultKey] || "Unknown Result";
  };

  const allQuestionsAnswered = answers.every(answer => answer !== null);
  const progressBarWidth = currentQuestionIndex === 0 ? 25 : (currentQuestionIndex / QUESTIONS.length + 0.25) * 100;

  useEffect(() => {
    setPrevProgressBarWidth(progressBarWidth);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (allQuestionsAnswered) {
      router.push({
        pathname: '/results',
        query: { resultId: calculateResult() },
      })
    }
  }, [allQuestionsAnswered])

  return (
    <div className={styles.quizContainer}>
      <Header />
      <h1>Activities Quiz</h1>
      <div className={styles.questionNumber}>
        {currentQuestionIndex < QUESTIONS.length ? (
          <p>{`Question ${currentQuestionIndex + 1}`}</p>
        ) : null}
      </div>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBarSegment}
          style={{ width: `${prevProgressBarWidth}%` }}
        ></div>
      </div>
      {currentQuestionIndex < QUESTIONS.length ? (
        <div className={styles.questions}>
          <p>{QUESTIONS[currentQuestionIndex].question}</p>
          {QUESTIONS[currentQuestionIndex].answers.map((answer, answerIndex) => (
            <button
              key={answerIndex}
              onClick={() => handleAnswerSelect(answerIndex)}
              style={{
                backgroundColor: selectedAnswerIndex === answerIndex ? 'var(--accent-color)' : 'initial',
                color: selectedAnswerIndex === answerIndex ? 'var(--foreground-color)' : 'var(--foreground-color)',
                boxShadow: selectedAnswerIndex === answerIndex ? 'inset 0 4px 4px 0 rgba(0, 0, 0, 0.3)' : 'var(--box-shadow)'
              }}
            >
              {answer}
            </button>
          ))}
          <div className={styles.navigateQuiz}>
            <Button onClick={handlePrevious} text={'Previous'} disabled={currentQuestionIndex === 0}/>
            {selectedAnswerIndex !== null && (
              <Button onClick={handleNextClick} text={'Next'} bgColor={'var(--foreground-color)'} textColor={'var(--background-color-3)'}/>
            )}
          </div>
        </div>
      ) : (
        <div>
          {allQuestionsAnswered ? (
            <div>
              <h2>Quiz completed!</h2>
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