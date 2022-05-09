import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AppLayout from '../components/AppLayout/AppLayout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Capella</title>
        <meta name="description" content="Share your soubts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>

        <main className={styles.main}>

          <h1 className={styles.title}>

            <a href="https://nextjs.org">Capella</a>
          </h1>
          <nav>
            <Link href="/timeline">Timeline</Link>
          </nav>
        </main>
      </AppLayout>


    </div>
  )
}
