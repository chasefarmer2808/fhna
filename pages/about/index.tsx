import { RichText, RichTextBlock } from 'prismic-reactjs';
import React from 'react';
import Client from '../../utils/prismicHelpers';
import styles from '../../styles/About.module.css';
import { BoardMemberFrame } from '../../components/BoardMemberFrame';
import { BoardMember, getBoardMembers } from '../../api/boardMember';
import { GetStaticProps } from 'next';

interface AboutPagePrismicProps {
  bio: RichTextBlock[];
  boardMembers: BoardMember[];
}

export const About: React.FC<AboutPagePrismicProps> = ({
  bio,
  boardMembers,
}) => {
  return (
    <main className="frame">
      <div className={`${styles['bio-frame']} content-frame`}>
        <h2>About Us</h2>
        <RichText render={bio} />
      </div>
      <div className="content-frame">
        <h2>Meet Our Board Members</h2>
        <BoardMemberFrame boardMembers={boardMembers} />
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { bio } = (await (
    await Client().getByUID('about-page', 'about-page-1', {})
  ).data) as AboutPagePrismicProps;

  const boardMembers = await getBoardMembers();

  return {
    props: {
      bio,
      boardMembers,
    },
  };
};

export default About;
