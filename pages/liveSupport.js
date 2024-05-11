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
      <HeadArea title="Tranquillity Cranes | Live Support" description="Seek support with other users and professionals" />
      <div className={styles.supportContainer}>
        <Header2 headerName={"Support"} />
        <Card
          hrefCard={"/liveChat"}
          src={"/images/supportCardImg/liveChatImg.jpg"}
          textB={"Chat!"}
          bgBColor={"var(--foreground-color)"}
          textBColor={"var(--background-color-3)"}
          src2={"/images/tc-Designs/crdDesign.png"}
          title={"Live Public Chat Room"}
          description={
            "The Live Public Chat Room allows you to chat with other users. Sharing experiences with others who relate to your struggles can help combat feelings of isolation and loneliness, fostering a supportive environment where individuals feel heard and validated."
          }
        />
        <Card
          hrefCard={"/urgentHelp"}
          src={"/images/supportCardImg/urgentHelpImg.jpg"}
          textB={"Get Help!"}
          bgColor={"var(--background-color-2)"}
          textColor={"var(--background-color)"}
          bgBColor={"var(--accent-color)"}
          textBColor={"var(--background-color-2)"}
          src2={"/images/tc-Designs/h2Design.png"}
          title={"Urgent Help Lines"}
          description={
            "The Urgent Help Resources page offers immediate assistance for individuals facing crisis situations, providing a curated list of hotlines, helplines, and online resources. This page serves as a vital resource directory, offering timely aid and guidance during challenging times."
          }
        />
        <Card
          src={"/images/supportCardImg/articleImg.jpg"}
          src2={"/images/tc-Designs/1x/crdDesign2.png"}
          textB={"available November 2024"}
          bgColor={"var(--input-grey)"}
          textColor={"grey"}
          bgBColor={"grey"}
          textBColor={"var(--background-color)"}
          title={"Mental Health Articles"}
          description={
            "Reading mental health articles can offer valuable insights, coping strategies, and reassurance, providing a sense of understanding and validation for individuals experiencing anxiety. It can also empower individuals by equipping them with knowledge about their condition and available resources for seeking help and support. "
          }
        />
        <NavBar />
      </div>
    </>
  );
}
