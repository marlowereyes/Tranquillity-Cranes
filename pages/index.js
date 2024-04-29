import { createRef, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/index.module.css";
import lottie from "lottie-web";
import HeadArea from "@/components/HeadArea";

export default function Home() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/data.json",
    });

    return () => anim.destroy();
  }, []);

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/logIn");
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <HeadArea title="Tranquillity Cranes" description="Learn about our app"/>
      <main className={`${styles.main}`}>
        <div className={styles.logo}>
          <img src="./images/Logo.png" alt="Logo" />
        </div>
        <div className={`${styles.animation__container} ${styles.translate}`}>
          <div className={styles.animation} ref={animationContainer} />
        </div>
      </main>
    </>
  );
}
