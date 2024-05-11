import { createRef, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import lottie from "lottie-web";
import HeadArea from "@/components/HeadArea";
import Image from "next/image";

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
      <HeadArea
        title="Tranquillity Cranes"
        description="Please wait as we load the date for the application"
      />
      <main className={`${styles.main}`}>
        <div className={styles.mainContainer}>
          <div className={styles.logo}>
            <Image
              src="/images/Logo.png"
              alt="Tranquillity Cranes logo"
              width={208}
              height={136}
            />
          </div>
          <div className={`${styles.animation__container} ${styles.translate}`}>
            <div className={styles.animation} ref={animationContainer} />
          </div>
        </div>
      </main>
    </>
  );
}
