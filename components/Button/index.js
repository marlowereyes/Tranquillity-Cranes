import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

const Button = ({ 
    onClick, 
    text, 
    href, 
    bgColor="var(--background-color-3)", 
    textColor="var(--foreground-color)"
 }) => {
  if (href) {
    return (
      <Link href={href}
        className={styles.btn} style={{ backgroundColor: bgColor, color: textColor }}>{text}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick} style={{ backgroundColor: bgColor, color: textColor }}>
      {text}
    </button>
  );
};

export default Button;
