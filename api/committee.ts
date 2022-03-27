import { KeyTextField } from "@prismicio/types";
import Client from "../utils/prismicHelpers";
import Prismic from '@prismicio/client';
import { Document } from '@prismicio/client/types/documents';

export interface Committee {
  name: KeyTextField;
  chairperson: KeyTextField;
}

export const getCommittees = async (): Promise<Committee[]> => {
  return (
    (
      await Client().query(
        Prismic.Predicates.at('document.type', 'committee')
      )
    ).results as Document<Committee>[]
  ).map((doc) => {
    return {
      name: doc.data.name,
      chairperson: doc.data.chairperson,
    };
  });
}