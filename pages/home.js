import { useRouter } from 'next/router';
import styles from '@/styles/HomeDisplay.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import HeadArea from '@/components/HeadArea';
import { useEffect } from 'react';
import { useState } from 'react';

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
    <div className={styles.homeContainer}>
      <Image src={"/images/terry-fly.png"} width={200} height={150} className={styles.terryAgh}/>
      <div className={styles.motivationalContainer}>
        <p>{motivationalQuote}</p>
      </div>
      <Link href='/' className={styles.homeLinks}><button>Tutorial</button></Link>
      <Link href='/quiz' className={styles.homeLinks}><button className={styles.lightBlue}>Activities Quiz</button></Link>
      <NavBar />
    </div>
    </>
  );
}

//import Head from "next/head";
//import Image from "next/image";
//import styles from "@/styles/Home.module.css";
//import Link from "next/link";
//import RadialMenu from "@/components/RadialMenu";
//import NavBar from "@/components/NavBar";
//import Quiz from "@/components/Quiz";
//import HeadArea from "@/components/HeadArea";
//
//export default function Home() {
//
//  var name = process.env.NEXT_PUBLIC_NAME;
//  return (
//    <>
//      <HeadArea title="Test Home" description="Learn about our app"/>
//      <main className={`${styles.main}`}>
//       <NavBar/>
//       <Link href='./about'>About App</Link>
//       <Link href='./quiz'className={styles.link}>Quiz</Link>
//       <Link href='./breathe'className={styles.link}>Breathe</Link>
//       {name}
//      </main>
//    </>
//  );
//}
//
