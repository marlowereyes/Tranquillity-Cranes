import Link from 'next/link';
import { useState } from 'react';
import styles from './NavBar.module.css'
import RadialMenu from '../RadialMenu';

export default function NavBar(){
    return(
        <>
            <div className={styles.outerContainer}>
                <Link className={styles.link} href="/"><button>Home</button></Link>
                <div className={styles.radialMenu}><RadialMenu/></div>
                <Link className={styles.link} href="/profile"><button>Profile</button></Link>
            </div>
        </>
    )
}