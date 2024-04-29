import { createRef, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Breathe.module.css";
import lottie from "lottie-web";
import NavBar from "@/components/NavBar";
import HeadArea from "@/components/HeadArea";

export default function Home() {
  let breatheAnimationContainer = createRef();

  useEffect(() => {
    const breatheAnim = lottie.loadAnimation({
      container: breatheAnimationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/breathe-data.json",
    });

    return () => breatheAnim.destroy();
  }, []);

  const router = useRouter();

  return (
    <>
      <HeadArea title="Breathe" description="Learn about our app"/>
      <main className={`${styles.main}`}>
        <div className={styles.breatheAnimation} ref={breatheAnimationContainer} />
        <NavBar/>
      </main>
    </>
  );
}