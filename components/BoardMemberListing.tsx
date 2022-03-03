import Image from 'next/image';
import React from 'react';
import { BoardMember } from '../api/boardMember';
import styles from '../styles/BoardMemberListing.module.css';

interface BoardMemberListingProps {
  slug: BoardMember;
}

export const BoardMemberListing: React.FC<BoardMemberListingProps> = ({
  slug,
}) => {
  return (
    <div className={styles['frame']}>
      <Image
        className={styles['profile-picture']}
        src={`${slug.photo.url ? slug.photo.url : '/user.png'}`}
        alt={`Picture of ${slug.role}`}
        width={80}
        height={80}
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles['listing-label']}>
        <h3>{slug.name}</h3>
        <h4>{slug.role}</h4>
      </div>
    </div>
  );
};
