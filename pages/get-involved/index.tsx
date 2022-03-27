import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { GetStaticProps } from 'next';
import Client from '../../utils/prismicHelpers';
import { FilledLinkToWebField } from '@prismicio/types';
import { Committee, getCommittees } from '../../api/committee';

interface GetInvolvedPagePrismicProps {
  becomememberdescription: RichTextBlock[];
  paypallink: FilledLinkToWebField;
  meetingdescription: RichTextBlock[];
  meetingLink: FilledLinkToWebField;
  committees: Committee[];
}

export const GetInvolved: React.FC<GetInvolvedPagePrismicProps> = ({
  becomememberdescription,
  paypallink,
  meetingdescription,
  meetingLink,
  committees,
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
        <ul>
          {committees.map((committee) => (
            <li key={committee.name}>
              {committee.name} - {committee.chairperson}
            </li>
          ))}
        </ul>
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

  const committees = await getCommittees();
  console.log(committees);

  return {
    props: {
      ...props,
      meetingLink,
      committees,
    },
  };
};

export default GetInvolved;
