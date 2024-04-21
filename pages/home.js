import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import RadialMenu from "@/components/RadialMenu";
import NavBar from "@/components/NavBar";
import Quiz from "@/components/Quiz";

export default function Home() {

  var name = process.env.NEXT_PUBLIC_NAME;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
       <NavBar/>
       <Link href='./quiz'>Quiz</Link>
       <Link href='./about'>About App</Link>
       <Link href='./quiz'className={styles.link}>Quiz</Link>
       <Link href='./breathe'className={styles.link}>Breathe</Link>
       {name}
      </main>
    </>
  );
}
