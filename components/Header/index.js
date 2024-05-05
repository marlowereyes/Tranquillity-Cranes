import Image from "next/image"
import styles from "./Header.module.css";
import lottie from "lottie-web";
import { createRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
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


    return(
        <>
        <div className={styles.containera}>
            <div className={styles.header2}>
        <div className={styles.containero}>

        </div>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/images/tc-Designs/hDesign.png' width={208} height={152} alt='hDesign Logo' />
            </div>
            <div className={`${styles.animation__container} ${styles.imageContainer1}`}>
            <div className={styles.animation} ref={animationContainer} alt='Terry Crane Flapping Its Wings' />
          </div>
        </div>
        </div>
        </div>
        </>
    )
}

//<div className={styles.imageContainer1}>
//<Image src='/images/terry-fly.png' width={176} height={96} />
//</div>