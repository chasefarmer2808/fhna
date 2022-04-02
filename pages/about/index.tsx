import { RichText, RichTextBlock } from 'prismic-reactjs';
import React from 'react';
import Client from '../../utils/prismicHelpers';
import styles from '../../styles/About.module.css';
import { BoardMemberFrame } from '../../components/BoardMemberFrame';
import { BoardMember, getBoardMembers } from '../../api/boardMember';
import { GetStaticProps } from 'next';
import {
  FilledLinkToDocumentField,
  FilledLinkToMediaField,
} from '@prismicio/types';
import { Icon } from '../../components/Icon';

interface AboutPagePrismicProps {
  bio: RichTextBlock[];
  bylawslink: FilledLinkToMediaField;
  meetingprocedures: FilledLinkToMediaField;
  financepolicy: FilledLinkToMediaField;
  boardMembers: BoardMember[];
}

export const About: React.FC<AboutPagePrismicProps> = ({
  bio,
  bylawslink,
  meetingprocedures,
  financepolicy,
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
      <div className="content-frame">
        <h2>Bylaws and Procedures</h2>
        <section className={styles['link-grid']}>
          <a
            className="link-button"
            target="_blank"
            rel="noreferrer"
            href={bylawslink.url}
          >
            <span>Bylaws</span>
            <Icon name="external-link" sizeRem={1.8} />
          </a>
          <a
            className="link-button"
            target="_blank"
            rel="noreferrer"
            href={meetingprocedures.url}
          >
            <span>Meeting Procedures</span>
            <Icon name="external-link" sizeRem={1.8} />
          </a>
          <a
            className="link-button"
            target="_blank"
            rel="noreferrer"
            href={financepolicy.url}
          >
            <span>Finance Policy</span>
            <Icon name="external-link" sizeRem={1.8} />
          </a>
        </section>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { bio, bylawslink, meetingprocedures, financepolicy } = (await (
    await Client().getByUID('about-page', 'about-page-1', {})
  ).data) as AboutPagePrismicProps;

  const boardMembers = await getBoardMembers();

  return {
    props: {
      bio,
      bylawslink,
      meetingprocedures,
      financepolicy,
      boardMembers,
    },
  };
};

export default About;
