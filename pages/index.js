import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   
    <Image
  src="/vercel/pages/silverbanana.png"
  alt="silverbanana logo"
  width={500}
  height={500}
/>
   
    
    <div className={styles.container}>
  
      <Head>
        <title>Silver Banana Printing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Silver Banana Cape Town
        </h1>

        <p className={styles.description}>
          Cape Town Printing{' '}
          <code className={styles.code}> </code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.facebook.com/printingcapetown" className={styles.card}>
            <h3>About us</h3>
            <p>Find in-depth information about Silver Banana.</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Discover our services &rarr;</h3>
            <p>Learn about Silver Banana and what we can do for you!</p>
          </a>

          <a
            href=" / "
            className={styles.card}
          >
            <h3>Our portfolio  &rarr;</h3>
            <p>Discover and browse through our portfolio and projects.</p>
          </a>

          <a
            href="https://www.bizcommunity.com/Company/SilverBananaCapeTownSouthAfrica"
            className={styles.card}
          >
            <h3>Contact us &rarr;</h3>
            <p>
              Reach out to one of our friendly staff.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{""}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
