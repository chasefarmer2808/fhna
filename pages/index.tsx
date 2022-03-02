import type { GetStaticProps, NextPage } from 'next';
import Client from '../utils/prismicHelpers';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ImageField } from '@prismicio/types';
import { RichTextBlock } from 'prismic-reactjs';
import { Banner } from '../components/Banner';
import {
  Announcement,
  AnnouncementsFrame,
} from '../components/AnnouncementsFrame';
import { Document } from '@prismicio/client/types/documents';

interface HomePagePrismicProps {
  missionstatement: RichTextBlock[];
  bannerimage: ImageField;
  announcements: Announcement[];
}

const Home: NextPage<HomePagePrismicProps> = ({
  missionstatement,
  bannerimage,
  announcements,
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
        <AnnouncementsFrame announcements={announcements} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Get basic static content.
  const { missionstatement, bannerimage } = (await (
    await Client().getByUID('home-pa', 'home-page-1', {})
  ).data) as HomePagePrismicProps;

  // Get announcements collection.
  const announcements: Announcement[] = (
    (
      await Client().query(
        Prismic.Predicates.at('document.type', 'announcement')
      )
    ).results as Document<Announcement>[]
  ).map((doc) => {
    return {
      title: doc.data.title,
      description: doc.data.description,
      timestamp: doc.first_publication_date,
    };
  });

  return {
    props: {
      missionstatement,
      bannerimage,
      announcements,
    },
  };
};

export default Home;
