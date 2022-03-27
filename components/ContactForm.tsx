import React from 'react';
import { Field, Form } from 'react-final-form';
import styles from '../styles/ContactForm.module.css';

export const ContactForm: React.FC = () => {
  const onSubmit = () => console.log('Submitted!');

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={`${styles['contact-form']}`}>
          <div className="form-field">
            <label>Your Name</label>
            <Field name="name" component="input" />
          </div>
          <div className="form-field">
            <label>Your Email</label>
            <Field name="email" component="input" />
          </div>
          <div className="form-field">
            <label>Subject</label>
            <Field name="subject" component="input" />
          </div>
          <div className="form-field">
            <label>Message</label>
            <Field name="message" component="textarea" />
          </div>
          <div className="form-actions">
            <button type="submit" className="primary">
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};
