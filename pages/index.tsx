import type { GetStaticProps, NextPage } from 'next'
import Prismic from '@prismicio/client';
import Client from '../utils/prismicHelpers';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface HomePagePrismicProps {
  missionStatement: string;
  bannerImage: string;
}

const Home: NextPage<HomePagePrismicProps> = ({ missionStatement, bannerImage }) => {
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

export const getStaticProps: GetStaticProps = async (context) => {
  const homePageContent = await Client().getByUID('home-pa', 'home-page-1', {})

  console.log(homePageContent)

  return {
    props: {}
  }
}

export default Home
