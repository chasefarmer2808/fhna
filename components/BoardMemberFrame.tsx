import React from 'react';
import { BoardMember } from '../api/boardMember';
import { BoardMemberListing } from './BoardMemberListing';
import styles from '../styles/BoardMemberFrame.module.css';

interface BoardMemberFrameProps {
  boardMembers: BoardMember[];
}

export const BoardMemberFrame: React.FC<BoardMemberFrameProps> = ({
  boardMembers,
}) => {
  return (
    <section className={styles['frame']}>
      {boardMembers.map((member) => (
        <BoardMemberListing key={member.name} slug={member} />
      ))}
    </section>
  );
};
