import NavBar from "@/components/NavBar";
import styles from "@/styles/About.module.css";
import Link from "next/link";
import Head from "next/head";
import GraphBar from "@/components/GraphBar";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import Arrow from "@/components/Icons/Arrow";

export default function About() {
  return (
    <>
      <HeadArea title="Tranquillity Cranes | About" description="Learn about our app" />
      <main className={`${styles.main}`}>
        <div className={styles.mainAbout}>
          <Header />
          <div className={styles.backArrow}>
            <Link href="/profile">
              <Arrow className={styles.flip} />
            </Link>
          </div>
          <h1>About the App</h1>
          <div className={styles.aboutApp}>
            <p className={styles.infoApp}>
              Tranquility, an innovative app designed with a focus on mental
              well-being, serves as a digital sanctuary for individuals seeking
              solace in today's hectic world. Through a variety of activities
              such as breathing techniques, and soothing sounds, our app
              provides practical tools to help relieve stress, and anxiety. A
              Study done by Preeti Vankar showed that people between the age of
              18 - 34 has the highest percentage of people requiring mental
              health support.
            </p>
            <GraphBar />
            <p className={styles.infoAppP2}>
              Tranquility aims to provides personalized support crafted to each
              of our user’s needs. Tranquility isn’t only an app, it’s a
              companion for those who are seeking tranquility among life’s
              chaos.
            </p>
          </div>
        </div>
        <NavBar />
      </main>
    </>
  );
}
