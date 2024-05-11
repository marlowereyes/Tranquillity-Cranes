import { useRouter } from "next/router";
import styles from "@/styles/LiveSupport.module.css";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import HeadArea from "@/components/HeadArea";
import Header2 from "@/components/Header2";
import Card from "@/components/Card";

export default function Support() {
  const router = useRouter();
  const { imageName, name } = router.query;

  return (
    <>
      <HeadArea title="Live Support" description="Learn about our app" />
      <div className={styles.supportContainer}>
        <Header2 headerName={"Relax"} />
        <Card
          hrefCard={"/breathe"}
          src={"/images/supportCardImg/breatheImg.jpg"}
          textB={"Breathe!"}
          bgBColor={"var(--foreground-color)"}
          textBColor={"var(--background-color-3)"}
          src2={"/images/tc-Designs/crdDesign.png"}
          title={"Breathing Exercise"}
          description={
            "Join Terry in a guided 4-7-8 breathing technique, which can alleviate anxiety attacks by triggering the body's relaxation response. This can counteract the physiological symptoms associated with anxiety, such as rapid breathing and increased heart rate."
          }
        />
        <Card
          src={"/images/supportCardImg/musicImg.jpg"}
          src2={"/images/tc-Designs/1x/crdDesign2.png"}
          textB={"available June 2025"}
          bgColor={"var(--input-grey)"}
          textColor={"grey"}
          bgBColor={"grey"}
          textBColor={"var(--background-color)"}
          title={"Calming Music"}
          description={
            "Calming music can be effective in reducing anxiety by influencing the body's physiological responses, such as lowering heart rate and blood pressure, and promoting relaxation through its soothing melodies and rhythms. It can also distract from negative thoughts and provide a sense of comfort and emotional support during anxious moments."
          }
        />
        <NavBar />
      </div>
    </>
  );
}
