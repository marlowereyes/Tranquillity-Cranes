
import { useRouter } from 'next/router';
import styles from '@/styles/HomeDisplay.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import HeadArea from '@/components/HeadArea';
import { useState } from 'react';
import { useEffect } from 'react';


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
    <link rel="icon" href="/public/favicon.ico"/>
    <HeadArea title="Home" description="Learn about our app"/>
    <div className={styles.homeContainer}>
      {name && <h1>Hello<br/> {name}!</h1>}
      {imageName && (
        <Image
          src={`/images/${imageName}.png`}
          alt={`Selected Image: ${imageName}`}
          width={128} height={168}
        />
      )}
      <div className={styles.chatGPT}>
        <p>{motivationalQuote}</p>
      </div>
      <Link href='/' className={styles.homeLinks}><button>Tutorial</button></Link>
      <Link href='/quiz' className={styles.homeLinks}><button className={styles.lightBlue}>Activities Quiz</button></Link>
      <NavBar />
    </div>
    </>
  );
}




































