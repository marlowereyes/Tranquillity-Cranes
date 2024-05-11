import { createRef, useEffect, useState } from "react";
import styles from './Tutorial.module.css'
import Button from "../Button";
import Arrow from '../Icons/Arrow';
import Link from 'next/link';
import lottie from 'lottie-web';
import { useRouter } from "next/router";
import Image from "next/image";

export default function Tutorial({ cards }) {
    let talkAnimationContainer = createRef();

    useEffect(() => {
      const talkAnim = lottie.loadAnimation({
        container: talkAnimationContainer.current,
        rerender: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/terry-talk.json",
      });
  
      return () => talkAnim.destroy();
    }, []);
  
    
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    const prevCard = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className={styles.tutorialContainer}>
        <div className={`${styles.card} ${styles[`card-${currentIndex + 1}`]}`}>
          <h3>{cards[currentIndex].title}</h3>
          <p>{cards[currentIndex].description}</p>
          {cards[currentIndex].image && (
            <Image src={cards[currentIndex].image} alt={cards[currentIndex].alt} width={cards[currentIndex].width} height={cards[currentIndex].height}/>
          )}
          <div>
            {cards[currentIndex].buttonLink && (
              <Button href={cards[currentIndex].buttonLink} text={cards[currentIndex].buttonText}/>
            )}
          </div>
        </div>
        <div className={styles.navigateButtons}>
            <Button onClick={prevCard} text={"Back"}/>
            <Button onClick={nextCard} text={"Next"} bgColor={'var(--foreground-color)'} textColor={'var(--background-color-3)'} />
        </div>
        <div className={`${styles.talkAnimation} ${styles[`card-${currentIndex + 1}`]}`} ref={talkAnimationContainer} />
      </div>
    );
  };
  