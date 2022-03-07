import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { GetStaticProps } from 'next';
import Client from '../../utils/prismicHelpers';

interface GetInvolvedPagePrismicProps {
  becomememberdescription: RichTextBlock[];
}

export const GetInvolved: React.FC<GetInvolvedPagePrismicProps> = ({
  becomememberdescription,
}) => {
  return (
    <main className="frame">
      <div className="content-frame">
        <h2>Become a Member</h2>
        <RichText render={becomememberdescription} />
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { becomememberdescription } = (await (
    await Client().getByUID('get-involved-page', 'get-involved-page-1', {})
  ).data) as GetInvolvedPagePrismicProps;

  return {
    props: {
      becomememberdescription,
    },
  };
};

export default GetInvolved;
