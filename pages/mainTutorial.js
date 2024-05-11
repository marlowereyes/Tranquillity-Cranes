import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import Tutorial from "@/components/Tutorial";
import styles from "@/styles/MainTutorial.module.css";
import Link from "next/link";
import Arrow from "@/components/Icons/Arrow";

export default function MainTutorial() {
  const cards = [
    {
      title: "1/6",
      description:
        "Welcome to Tranquillity Cranes! My name is Terry Crane and I am here to guide you on a spiritual journey of peace.",
    },
    {
      title: "2/6",
      description:
        "The baby egg you chose represents your heart. Protect it as you would do your own. To do so, complete the different activities on our app which you can find by clicking our logo below to open the radial menu.",
      image: "/images/tutorials/c2-main.png",
      alt: "test alt",
      width: "350",
      height: "140",
    },
    {
      title: "3/6",
      description:
        'This button will take you to the "Support" page, where you can gain support from professionals and other users.',
      image: "/images/tutorials/c3-main.png",
      alt: "test alt",
      width: "350",
      height: "165",
    },
    {
      title: "4/6",
      description:
        'This button will take you to the "Relax" page, where you can find media that will help you calm your heart.',
      image: "/images/tutorials/c4-main.png",
      alt: "test alt",
      width: "350",
      height: "190",
    },
    {
      title: "5/6",
      description:
        'This button will take you to the "Activities" page, where you can create a schedule of daily tasks to help boost your mental routine.',
      image: "/images/tutorials/c5-main.png",
      alt: "test alt",
      width: "350",
      height: "160",
    },
    {
      title: "6/6",
      description:
        "Looks like you're all set! Let's protect our egg with love and care.",
      buttonLink: "/home",
      buttonText: "Get Started!",
    },
  ];

  return (
    <>
      <HeadArea />
      <main className={`${styles.main}`}>
        <div className={styles.skipo}>
          <Link href="/home" className={styles.skip}>
            Skip <Arrow />
          </Link>
        </div>
        <Tutorial cards={cards} />
      </main>
    </>
  );
}
