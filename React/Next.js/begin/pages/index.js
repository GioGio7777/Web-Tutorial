import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Yusuf Çelik Youtube NextJS</title>
        </Head>
        <h1 className={styles.homePageTitle}>Hello from main page</h1>
      <Link href="/about"> About </Link>
    </div>

  )
}
