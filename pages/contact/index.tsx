import { KeyTextField } from '@prismicio/types';
import { GetStaticProps } from 'next';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import Client from '../../utils/prismicHelpers';

interface ContactPagePrismicProps {
  description: RichTextBlock[];
  email: KeyTextField;
}

const Contact: React.FC<ContactPagePrismicProps> = ({ description, email }) => {
  return (
    <main className="frame">
      <div className="content-frame">
        <h2>Contact Us</h2>
        <div className="col-center">
          <RichText render={description} />
          <div>
            <h3>Send an email to</h3>
            <a href={`mailto: ${email}`}>{email}</a>
          </div>
          <hr />
          <div className="col-center">
            <h3>Or fill out our form</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const props = (await (
    await Client().getByUID('contact-us-page', 'contact-us-page-1', {})
  ).data) as ContactPagePrismicProps;

  return {
    props: { ...props },
  };
};

export default Contact;
