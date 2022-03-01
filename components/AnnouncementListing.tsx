import { RichText } from 'prismic-reactjs';
import React from 'react';
import { Announcement } from './AnnouncementsFrame';

interface AnnouncementListingProps {
  slug: Announcement;
}

export const AnnouncementListing: React.FC<AnnouncementListingProps> = ({
  slug,
}) => {
  return (
    <div>
      <RichText render={slug.title} />
      {slug.timestamp && <small>Posted on {slug.timestamp}</small>}
      <RichText render={slug.description} />
    </div>
  );
};
