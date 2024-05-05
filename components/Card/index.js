import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';

const Card = ({  
    title="title",
    description="hello! this is a description for the placeholder card", 
    bgColor="var(--background-color-3)", 
    textColor="var(--foreground-color)",
    src,
    src2,
    hrefCard,
    bgBColor,
    textBColor,
    textB
 }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className={styles.image}>
      <Image className={`${styles.imageDesign} ${styles.imagee}`} src={src} width={184} height={216}/>
      <Image className={styles.imageDesign} src={src2} width={280} height={216} alt='hDesign Logo' />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button text={textB} bgColor={bgBColor}  textColor={textBColor} href={hrefCard}/>
    </div>
  );
};

export default Card;
