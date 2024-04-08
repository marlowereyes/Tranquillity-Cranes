
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { RESULT_MAP } from "@/components/Quiz/consts";
import * as styles from "./Results.module.css";
import Info from "../Icons/Info";

const ResultsContainer = ({resultId}) => {
    console.log({resultId})

    const result = RESULT_MAP[resultId];
    return result ? (
    <div className={styles.quizResults}>
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
                        <div className={styles.resultName}>
                            <action.IconComponent className={styles.icon}/>
                            <p>{action.name}</p>
                        </div>
                        <Info width={32} height={32}/>
                    </div>
                </button>)
            })}
        </div>
        <div className={styles.navigateButtons}>
            <Link href="/quiz" className={styles.navigateQuiz}>
                <button>Retake Quiz</button>
            </Link>
            <Link href="/" className={styles.navigateHome}>
                <button>Home</button>
            </Link>
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
