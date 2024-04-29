import { useRouter } from 'next/router';
import styles from '@/styles/HomeDisplay.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import HeadArea from '@/components/HeadArea';

export default function Display() {
  const router = useRouter();
  const { imageName, name } = router.query;
  
  return (
    <>
    <HeadArea title="Home" description="Learn about our app"/>
    <div className={styles.homeContainer}>
      {name && <h1>Hello<br/> {name}!</h1>}
      {imageName && (
        <Image
          src={`/images/${imageName}.png`}
          alt={`Selected Image: ${imageName}`}
          width={128} height={168}
        />
      )}
      <div className={styles.chatGPT}>
        <p>“Write an inspiring quote from Chat GPT”</p>
      </div>
      <Link href='/' className={styles.homeLinks}><button>Tutorial</button></Link>
      <Link href='/quiz' className={styles.homeLinks}><button className={styles.lightBlue}>Activities Quiz</button></Link>
      <NavBar />
    </div>
    </>
  );
}
