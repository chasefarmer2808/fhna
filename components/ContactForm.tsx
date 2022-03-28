import React, { SyntheticEvent } from 'react';
import { Field, Form } from 'react-final-form';
import styles from '../styles/ContactForm.module.css';

export interface FormValues {
  name: String;
  email: String;
  subject: String;
  message: String;
}

export const ContactForm: React.FC = () => {
  const onSubmit = async (values: FormValues) => {
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles['contact-form']}>
          <div className="form-field">
            <label>Your Name</label>
            <Field name="name" component="input" />
          </div>
          <div className="form-field">
            <label>Your Email</label>
            <Field name="email" component="input" />
          </div>
          <div className={`form-field ${styles['subject-field']}`}>
            <label>Subject</label>
            <Field name="subject" component="input" />
          </div>
          <div className={`form-field ${styles['message-field']}`}>
            <label>Message</label>
            <Field name="message" component="textarea" />
          </div>
          <div className={styles['form-actions']}>
            <button type="submit" className="primary">
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};
