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
    <div>
      <h3>{slug.name}</h3>
      <h4>{slug.role}</h4>
    </div>
  );
};
