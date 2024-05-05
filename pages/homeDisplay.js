
import { useRouter } from 'next/router';
import styles from '@/styles/HomeDisplay.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import HeadArea from '@/components/HeadArea';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@/components/Button';


export default function Display() {
  const router = useRouter();
  const { imageName, name } = router.query;
  const [motivationalQuote, setMotivationalQuote] = useState('');

  useEffect(() => {
    (async function() {
      const response = await fetch('api/gpt', {
        method: 'POST',
      })
      const data = await response.json();
      setMotivationalQuote(data);
    })();
  }, [])
  
  return (
    <>
    <HeadArea title="Home" description="Learn about our app"/>
    <div className={styles.mainHomeContainer}>
    <div className={styles.homeContainer}>
      {name && <h1><span className={styles.helloSpan}>Hello</span><br/> {name}!</h1>}
      {imageName && (
        <Image
          src={`/images/${imageName}.png`}
          alt={`Selected Image: ${imageName}`}
          width={106} height={132}
        />
      )}
      <div className={styles.chatGPT}>
        <p>{motivationalQuote}</p>
      </div>
      <Button text={'Tutorial'} href={'/'}/>
      <Button text={'Activities Quiz'} href={'/quiz'} bgColor={'var(--foreground-color)'} textColor={'var(--background-color-3)'}/>
      <NavBar />
    </div>
    </div>
    </>
  );
}




































