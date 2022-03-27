import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { GetStaticProps } from 'next';
import Client from '../../utils/prismicHelpers';
import { FilledLinkToWebField } from '@prismicio/types';

interface GetInvolvedPagePrismicProps {
  becomememberdescription: RichTextBlock[];
  paypallink: FilledLinkToWebField;
  meetingdescription: RichTextBlock[];
  meetingLink: FilledLinkToWebField;
}

export const GetInvolved: React.FC<GetInvolvedPagePrismicProps> = ({
  becomememberdescription,
  paypallink,
  meetingdescription,
  meetingLink,
}) => {
  return (
    <main className="frame">
      <div className="content-frame">
        <h2>Attend a Meeting</h2>
        <RichText render={meetingdescription} />
        <a href={meetingLink.url}>Click here for the Zoom link.</a>
      </div>
      <div className="content-frame">
        <h2>Join a Committee</h2>
      </div>
      <div className="content-frame">
        <h2>Become a Member</h2>
        <RichText render={becomememberdescription} />
        <div className="content-action-frame">
          <a
            className="link-button"
            href={paypallink.url}
            target="_blank"
            rel="noreferrer"
          >
            Pay with PayPal
          </a>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const props = (await (
    await Client().getByUID('get-involved-page', 'get-involved-page-1', {})
  ).data) as GetInvolvedPagePrismicProps;

  const meetingLink = await (
    await Client().getByUID('meeting-link', 'meeting-link-1', {})
  ).data;

  return {
    props: {
      ...props,
      meetingLink,
    },
  };
};

export default GetInvolved;
