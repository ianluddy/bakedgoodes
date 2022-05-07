import Head from 'next/head';
import styled from 'styled-components';
import { Formik, Form as FormikForm, useField } from 'formik';
import * as Yup from 'yup';
import * as emailjs from '@emailjs/browser';
import { BsInstagram } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import theme from '../themes/default';
import Button from '../components/button';
import Map from '../components/map';
import Cta from '../components/cta';
import Section from '../components/section';
import Instagram from '../components/instagram';
import FormLoader from '../components/formLoader';
import { Anchor, ButtonAnchor } from '../components/anchor';
import Grid from '../components/grid';
import { TextArea, TextInput } from '../components/form';
import Layout from '../components/layout';

const MapWrapper = styled.div`
  text-align: center;
  padding: 1rem 0 2rem 0;
  p {
    padding-bottom: 1.5rem;
  }
`;

const FormWrapper = styled.div`
  position: relative;
  text-align: center;
  min-height: 15rem;
  padding: 0 0 4rem 0;
  @media (${theme.devices.md}) {
    padding: 1.5rem 2rem 4rem 2rem;
  }
`;

export default function (props) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const Form = () => {
    return (
      <>
        <h2> Get in touch </h2>
        <FormikForm>
          <TextInput label="Name *" name="name" type="text" />
          <TextInput label="Email *" name="email" type="email" />
          <TextArea label="Message *" name="message" type="text" />
          <Button type="submit" text="Send message" large wide secondary />
        </FormikForm>
      </>
    );
  };

  const Loader = () => {
    return (
      <FormLoader
        $loading={submitting === true}
        $success={success === true}
        $error={success === false}
        loadingMsg={'Sending'}
        errorMsg={'Something went wrong, please try again later'}
        successMsg={"I'll be in touch within 24 hours"}
      />
    );
  };

  useEffect(() => {
    initialValues.name = localStorage.getItem('form:name') || '';
    initialValues.email = localStorage.getItem('form:email') || '';
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name').nullable(),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter your email')
      .nullable(),
    message: Yup.string().required('Please enter your message').nullable(),
  });

  const handleSubmit = (values) => {
    setSubmitting(true);
    setTimeout(() => {
      // setSubmitting(false);
      // setSuccess(true);
      // return;
      emailjs
        .send('service_6wdvvxv', 'template_e0doy5b', {
          from_name: values.name,
          reply_to: values.email,
          message: values.message,
        })
        .then(
          (response) => {
            setSubmitting(false);
            setSuccess(true);
          },
          (error) => {
            setSubmitting(false);
            setSuccess(false);
            throw error;
          }
        );
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>{props.siteName} - Contact</title>
        <meta
          name="description"
          content="Indulge yourself with some delicious home baked goods made with love in Dublin 8"
        />
      </Head>
      <Layout>
        <Section padding={'0 0 2rem 0'}>
          <Grid align={'center'} delay={'0'}>
            <h1>Contact</h1>
            <p>
              Check out my{' '}
              <Anchor
                href="https://www.instagram.com/baked_goodes/"
                color={theme.primary}
                bold
              >
                Instagram
              </Anchor>{' '}
              to see my most recent bakes. You can message me there to chat
              about an order. Or just use the contact form below.
            </p>
          </Grid>
          <Grid md={'50%'} lg={'50%'} delay={'0'}>
            <Instagram hideSubtitle />
            <FormWrapper>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <>
                  {submitting || success != undefined ? <Loader /> : <Form />}
                </>
              </Formik>
            </FormWrapper>
          </Grid>
          <Cta
            headline="Click and collect"
            body="Click and collect is available from Inchicore, choose collection at checkout."
            map
          />
        </Section>
      </Layout>
    </>
  );
}
