import Image from "next/image"
import styles from "./Header2.module.css";

export default function Header({
    headerName
}) {
    return(
        <>
        <div className={styles.containera}>
        <div className={styles.containero}>

        </div>
        <div className={styles.container}>
        <h1>{headerName}</h1>
            <div className={styles.designElem}>
                    <div className={styles.imageContainer}>
                        <Image src='/images/tc-Designs/h2Design.png' width={200} height={144} alt='hDesign Logo' />
                    </div>
                    <div className={styles.imageContainer1}>
                        <Image src='/images/terry-fly.png' width={200} height={120} alt='Terry Crane Flapping Its Wings' />
                    </div>
            </div>
        </div>
        </div>
        </>
    )
}