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
      <HeadArea title="Tranquillity Cranes | Activities Quiz" description="Find the activity that best suits what you should implement into your daily life" />
      <main className={`${styles.main}`}>
        <Quiz />
        <NavBar />
      </main>
    </>
  );
}
