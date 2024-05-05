import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { RESULT_MAP } from "@/components/Quiz/consts";
import * as styles from "./Results.module.css";
import Info from "../Icons/Info";
import Button from "../Button";

const ResultsContainer = ({resultId}) => {
    console.log({resultId})

    const result = RESULT_MAP[resultId];
    return result ? (
    <div className={styles.quizResults}>
        <div className={styles.mainQuizContainer}>
        <div className={styles.quizContainer}>
            <h1>Quiz Completed!</h1>
            <Image src="/images/terry-fly.png" width={150} height={100} className={styles.bobAnimation} />
            <p>
                Based on your results, we recommend you <span className={styles.resultBold}>{result.actionName}</span>. Time to implement these activities into your daily schedule or retake the quiz to get better results.
            </p>
        </div>
        <div className={styles.resultButton}>
            {result.actions.map((action) => {
                return (<button key={action.name}>
                    <div className={styles.resultButtonContent}>
                            <action.IconComponent className={styles.icon}/>
                            <p>{action.name}</p>
                    </div>
                </button>)
            })}
        </div>
        <div className={styles.navigateButtons}>
            <Button href={'/quiz'} text={'Retake Quiz'} bgColor={'var(--foreground-color)'} textColor={'var(--background-color-3)'}/>
            <Button href={'/home'} text={'Home'} bgColor={'var(--foreground-color)'} textColor={'var(--background-color-3)'}/>
        </div>
        </div>
    </div>
    ) : (
        <div>Please go to home to complete the quiz. <Link href="/">
        <button>Retake Quiz</button>
    </Link>
    </div>
    )
}

export default ResultsContainer;
