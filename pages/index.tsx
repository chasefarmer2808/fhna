import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federal Hill Neighborhood Association</title>
        <meta name="description" content="Federal Hill Neighborhood Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Home Page</h1>
      </main>
    </div>
  )
}

export default Home
