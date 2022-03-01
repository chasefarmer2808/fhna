import { TitleField } from '@prismicio/types';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import React from 'react';
import styles from '../styles/AnnouncementsFrame.module.css';
import { AnnouncementListing } from './AnnouncementListing';

export interface Announcement {
  title: RichTextBlock[];
  description: RichTextBlock[];
  timestamp: string | null;
}

interface AnnouncementFrameProps {
  announcements: Announcement[];
}

export const AnnouncementsFrame: React.FC<AnnouncementFrameProps> = ({
  announcements,
}) => {
  if (announcements.length === 0) {
    return (
      <section className={styles['announcements-frame-container']}>
        <h3>No announcements to show :(</h3>
      </section>
    );
  }

  return (
    <section className={styles['announcements-frame-container']}>
      {announcements.map((announcement) => (
        <AnnouncementListing key={announcement.timestamp} slug={announcement} />
      ))}
    </section>
  );
};
