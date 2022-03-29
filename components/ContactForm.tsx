import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { TextInput } from './TextInput';
import styles from '../styles/ContactForm.module.css';

export interface FormValues {
  name: String;
  email: String;
  subject: String;
  message: String;
}

type FormValidator = (value: string) => string | undefined;

export const ContactForm: React.FC = () => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSuccessful, setEmailSuccessful] = useState<Boolean | undefined>();

  // Form validators
  const required = (value: string) => (value ? undefined : 'Required');
  const composeValidators =
    (...validators: any) =>
    (value: string) =>
      validators.reduce(
        (error: string, validator: FormValidator) => error || validator(value),
        undefined
      );

  const onSubmit = async (values: FormValues) => {
    setSendingEmail(true);

    const res = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    setSendingEmail(false);

    if (res.status === 200) {
      setEmailSuccessful(true);
    } else {
      setEmailSuccessful(false);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles['contact-form']}>
          <div className="form-field">
            <label>Your Name</label>
            <Field
              name="name"
              component={TextInput}
              validate={composeValidators(required)}
            />
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
            {emailSuccessful === false && (
              <div>
                Oops! Something went wrong. Please try again or refresh the
                page.
              </div>
            )}
            {sendingEmail ? (
              <div>Sending email...</div>
            ) : emailSuccessful ? (
              <div>Success! We will be in touch!</div>
            ) : (
              <button type="submit" className="primary">
                Submit
              </button>
            )}
          </div>
        </form>
      )}
    />
  );
};
