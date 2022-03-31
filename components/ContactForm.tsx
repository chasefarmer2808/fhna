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
            <Field
              name="name"
              component={TextInput}
              validate={composeValidators(required)}
              label="First Name"
            />
          </div>
          <div className="form-field">
            <Field
              name="email"
              component={TextInput}
              validate={composeValidators(required)}
              label="Email Address"
            />
          </div>
          <div className={`form-field ${styles['subject-field']}`}>
            <Field
              name="subject"
              component={TextInput}
              validate={composeValidators(required)}
              label="Subject"
            />
          </div>
          <div className={`form-field ${styles['message-field']}`}>
            <Field
              name="message"
              component={TextInput}
              validate={composeValidators(required)}
              label="Message"
              isTextArea={true}
            />
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
