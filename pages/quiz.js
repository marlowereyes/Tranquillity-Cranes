import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Quiz.module.css";
import Link from "next/link";
import RadialMenu from "@/components/RadialMenu";
import NavBar from "@/components/NavBar";
import Quiz from "@/components/Quiz";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <HeadArea title="Activities Quiz" description="Learn about our app"/>
      <main className={`${styles.main}`}>
        <Quiz />
       <NavBar/>
      </main>
    </>
  );
}
