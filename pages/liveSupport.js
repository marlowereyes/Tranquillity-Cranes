import { useRouter } from 'next/router';
import styles from '@/styles/LiveSupport.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import HeadArea from '@/components/HeadArea';

export default function Support() {
  const router = useRouter();
  const { imageName, name } = router.query;
  
  return (
    <>
    <HeadArea title="Live Support" description="Learn about our app"/>
    <div className={styles.supportContainer}>
        <div className={styles.publicChatContainer}>
            <div className={styles.publicChatHeader}>
                <h2>Live Public Chat Room</h2>
            </div>
            <p>The Live Public Chat Room allows you to chat with other users. Sharing experiences with others who relate to your struggles can help combat feelings of isolation and loneliness, fostering a supportive environment where individuals feel heard and validated.</p>
        </div>
        <Link href="/liveChat" className={styles.chatButton}><button>Chat Now</button></Link>
        <div className={styles.liveSupportContainer}>
            <div className={styles.liveSupportHeader}>
                <h2>Urgent Help Resources</h2>
            </div>
            <p>The Urgent Help Resources page offers immediate assistance for individuals facing crisis situations, providing a curated list of hotlines, helplines, and online resources. This page serves as a vital resource directory, offering timely aid and guidance during challenging times.</p>
        </div>
        <Link href="/urgentHelp" className={styles.helpButton}><button>Get Help</button></Link>
        <NavBar/>
    </div>
    </>
  );
}