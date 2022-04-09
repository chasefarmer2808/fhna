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
import { GalleryBannerGrid } from '../components/GalleryBannerGrid';

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
  const bannerImages = [
    'https://images.prismic.io/fhna/3d9f1587-477d-401c-90fa-3181f4446b5a_fh5.jpg?auto=compress,format',
    'https://images.prismic.io/fhna/e91181f1-b827-425c-b886-3b2be4b36a0d_fh4.jpg?auto=compress,format',
    'https://images.prismic.io/fhna/3d0588af-9e78-49ed-bfc8-0a0cb8404fdc_fh3.jpg?auto=compress,format',
    'https://images.prismic.io/fhna/e5437efe-ce9c-4cb6-97d2-32c9e3f593b0_fh1.jpg?auto=compress,format',
  ];

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
        <GalleryBannerGrid imageUrls={bannerImages} />
        {/* <Banner imgUrl={bannerimage.url} description={missionstatement} /> */}
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
