import styled from 'styled-components';
import { Formik, Form as FormikForm, useField } from 'formik';
import * as Yup from 'yup';
import * as emailjs from '@emailjs/browser';
import FadeIn from 'react-fade-in';
import { BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";

import theme from '../themes/default';
import Button from '../components/button';
import Section from '../components/section';
import FormLoader from '../components/formLoader';
import { Anchor, ButtonAnchor } from '../components/anchor';
import { GridSplit } from '../components/grid';
import { TextArea, TextInput } from '../components/form';
import Layout from '../components/layout';

const FormWrapper = styled.div`
  position: relative;
  text-align: center;
  min-height: 15rem;
  padding: 0 0 4rem 0;
  @media (${theme.devices.md}) {
    padding: 0 2rem 4rem 0;
  }  
`;

const InstaWrapper = styled.div`
  text-align: center;
  padding-bottom: 5rem;
  p {
    text-align: center;
    padding: 0.5rem 0 2rem 0;
    margin: 0 auto;
  }
  svg {
    font-size: 2rem;
    line-height: 2rem;
    vertical-align: top;
    margin-right: 0.5rem;
    position: relative;
    top: 0rem;
  }
`;

export default function() {
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
          <TextInput label="Name *" name="name" type="text"/>
          <TextInput label="Email *" name="email" type="email"/>
          <TextArea label="Message *" name="message" type="text"/>
          <Button type="submit" text="Send message" large wide/>
        </FormikForm>
      </>
    );
  }

  const Loader = () => {
    return (
      <FormLoader 
        $loading={submitting === true} 
        $success={success === true}
        $error={success === false}
        loadingMsg={"Sending"}
        errorMsg={"Something went wrong, please try again later"}
        successMsg={"I'll be in touch within 24 hours"}
      />
    )
  }
  
  useEffect(() => {
    initialValues.name = localStorage.getItem('form:name') || '';
    initialValues.email = localStorage.getItem('form:email') || '';
  }, []);
  
  return (
    <Layout>
      <Section padding={"0 0 2rem 0"}>
        <h1>
          Contact
        </h1>
        <GridSplit>
          <InstaWrapper>
            <h2>
              <BsInstagram/> 
              <Anchor href="https://www.instagram.com/baked_goodes/">
                baked_goodes
              </Anchor>
            </h2>
            <p>
              Check out my Instagram to see my most recent bakes.
              You can message me there to chat about an order.
              Or just use the contact form on this page.
            </p>
            <ButtonAnchor 
              href="https://www.instagram.com/baked_goodes/" 
              text={"Follow me"}
              large 
              secondary
              nomargin
            >
              <BsInstagram/>
            </ButtonAnchor>
          </InstaWrapper>
          <FormWrapper>
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required('Please enter your name')
                  .nullable(),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Please enter your email')
                  .nullable(),
                message: Yup.string()
                  .required('Please enter your message')
                  .nullable(),
              })}
              onSubmit={(values) => {
                setSubmitting(true);
                setTimeout(() => {
                  // setSubmitting(false);
                  // setSuccess(true);
                  // return;
                  emailjs.send(
                    'service_6wdvvxv', 
                    'template_e0doy5b',
                    {
                      from_name: values.name,
                      reply_to: values.email,
                      message: values.message
                    }
                  ).then((response) => {
                    setSubmitting(false);
                    setSuccess(true);
                  }, (error) => {
                    setSubmitting(false);
                    setSuccess(false);
                    throw error;
                  });
                }, 1200);
              }}
            >
            <>
              {
                (submitting || success != undefined) ? <Loader/> : <Form/> 
              }
            </>
            </Formik>
          </FormWrapper>
        </GridSplit>
      </Section>
    </Layout>
  );
}