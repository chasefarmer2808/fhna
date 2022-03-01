import { ImageField, KeyTextField } from '@prismicio/types';
import { RichTextBlock } from 'prismic-reactjs';
import Client from '../utils/prismicHelpers';
import Prismic from '@prismicio/client';
import { Document } from '@prismicio/client/types/documents';

export interface BoardMember {
  name: KeyTextField;
  role: KeyTextField;
  photo: ImageField;
}

export const getBoardMembers = async (): Promise<BoardMember[]> => {
  return (
    (
      await Client().query(
        Prismic.Predicates.at('document.type', 'board-member'),
        {
          orderings: '[my.board-member.priority]', // Sort by priority in ascending order.
        }
      )
    ).results as Document<BoardMember>[]
  ).map((doc) => {
    return {
      name: doc.data.name,
      role: doc.data.role,
      photo: doc.data.photo,
    };
  });
};
