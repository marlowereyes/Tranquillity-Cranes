import styles from "@/styles/LogIn.module.css";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';
import HeadArea from "@/components/HeadArea";

export default function LogIn() {
  const [name, setName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [clickedImage, setClickedImage] = useState('');
  const router = useRouter();

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
    setClickedImage(imageName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both name and image are selected before redirecting
    if (name && selectedImage) {
      router.push({
        pathname: '/homeDisplay',
        query: { 
          imageName: selectedImage, 
          name: name,
        },
      });
    } else {
      alert('Please enter your name and choose an image.');
    }
  };

  return (
    <>
      <HeadArea title="Login" description="Learn about our app"/>
      <main className={`${styles.main}`}>
        <div className={styles.header}>
          <h1>Tranquillity Cranes</h1>
        </div>
        <div className={styles.logInContainer}>
          <form onSubmit={handleSubmit} className={styles.enter}>
            <h2>What is your name?</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter your name"
              className={styles.nameInput}
            />
            <h2>Choose an egg that resonates with you the most</h2>
            <div className={styles.imagesContainer}>
              <div 
                className={`${styles.imageContainer} ${clickedImage === 'egg1' ? styles.clicked : ''}`}
                onClick={() => handleImageClick('egg1')}
              >
                <img
                  src="./images/egg1.png"
                  alt="Image 1"
                />
              </div>
              <div 
                className={`${styles.imageContainer} ${clickedImage === 'egg2' ? styles.clicked : ''}`}
                onClick={() => handleImageClick('egg2')}
              >
                <img
                  src="./images/egg2.png"
                  alt="Image 2"
                />
              </div>
              <div 
                className={`${styles.imageContainer} ${clickedImage === 'egg3' ? styles.clicked : ''}`}
                onClick={() => handleImageClick('egg3')}
              >
                <img
                  src="./images/egg3.png"
                  alt="Image 3"
                />
              </div>
              <div 
                className={`${styles.imageContainer} ${clickedImage === 'egg4' ? styles.clicked : ''}`}
                onClick={() => handleImageClick('egg4')}
              >
                <img
                  src="./images/egg4.png"
                  alt="Image 4"
                />
              </div>
            </div>
            <div className={styles.submitEggContainer}>
            <button type="submit" className={styles.submitEgg}>Submit</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
