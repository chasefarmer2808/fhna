import type { GetStaticProps, NextPage } from 'next';
import Client from '../utils/prismicHelpers';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ImageField } from '@prismicio/types';
import { RichTextBlock } from 'prismic-reactjs';
import { Banner } from '../components/Banner';

interface HomePagePrismicProps {
  missionstatement: RichTextBlock[];
  bannerimage: ImageField;
}

const Home: NextPage<HomePagePrismicProps> = ({
  missionstatement,
  bannerimage,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federal Hill Neighborhood Association</title>
        <meta
          name="description"
          content="Federal Hill Neighborhood Association"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner imgUrl={bannerimage.url} description={missionstatement} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { missionstatement, bannerimage } = (await (
    await Client().getByUID('home-pa', 'home-page-1', {})
  ).data) as HomePagePrismicProps;

  return {
    props: {
      missionstatement,
      bannerimage,
    },
  };
};

export default Home;
