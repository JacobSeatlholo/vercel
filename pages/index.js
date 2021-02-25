import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Silver Banana Cape Town
        </h1>

        <p className={styles.description}>
          Cape Town Printing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.facebook.com/printingcapetown" className={styles.card}>
            <h3>About us</h3>
            <p>Find in-depth information about Silver Banana.</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Learn about our services &rarr;</h3>
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
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
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
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
