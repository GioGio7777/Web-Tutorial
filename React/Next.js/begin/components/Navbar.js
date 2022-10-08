import React from 'react';
import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const name = "yusuf"
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/coins">Coin Prices</Link>
                <Link href={`/profile/${name}`}>{name}</Link>
            </div>
        </div>
    );
};

export default Navbar;