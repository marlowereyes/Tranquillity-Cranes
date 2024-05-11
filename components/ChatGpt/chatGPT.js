import React from "react";

function quoteBox({ generateQuote, onSelectChange, selectedValue }) {
  const quoteFilterOptions = [
    "Filter",
    "Inspiration",
    "Motivation",
    "Academic",
    "Religious",
    "Masculine",
    "Feminie",
  ];
  const handleSelectChange = (e) => {
    conSelectChange(e.target.value);
  };

  return <></>;
}

// import { useEffect, useState } from "react";
// import styles from '@/styles/HomeDisplay.module.css'
// import Image from "next/image";
// import Link from "next/link";
// import NavBar from "@/components/NavBar";
// import HeadArea from "@/components/HeadArea";

// export default function Display() {
//   const [motivationalQuote, setMotivationalQuote] = useState('');

//   useEffect(() => {
//     fetchMotivationalQuote();
//   }, []);

//   const fetchMotivationalQuote = async () => {
//     try {
//       const apiKey = 'API_KEY';
//       const response = await fetch('https://api.example.com/motivational-quotes', {
//         headers: {
//         'Authorization': `Bearer ${apiKey}`
//         }
//       });

//       const data = await response.json();

//       if (data && Array.isArray(data) && data.length > 0) {
//         const randomIndex = Math.floor(Math.random() * data.length);
//         setMotivationalQuote(data[randomIndex]);
//       }
//     } catch (error) {
//       console.error('Error fetching motivational quote:', error);
//     }
//   };

//   return (
//     <>

//       <HeadArea title="Home" description="Learn about our app"/>
//       <div className={styles.homeContainer}>
//         <div className={styles.chatGPT}>
//           {motivationalQuote}
//         </div>
//         <Link href='/' className={styles.homeLinks}><button>Tutorial</button></Link>
//         <Link href='/quiz' className={styles.homeLinks}><button className={styles.lightBlue}>Activities Quiz</button></Link>
//         <NavBar />
//       </div>

//     </>
//   )
// }
