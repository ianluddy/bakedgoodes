import styled from 'styled-components';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import * as emailjs from '@emailjs/browser';
import FadeIn from 'react-fade-in';
import { BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";

import theme from '../themes/default';
import PageHeader from '../components/pageHeader';
import Button from '../components/button';
import { Wrapper } from '../components/wrapper';
import Paragraph from '../components/paragraph';
import FormLoader from '../components/formLoader';
import { Anchor, ButtonAnchor } from '../components/anchor';
import { GridSplit } from '../components/grid';
import { TextArea, TextInput } from '../components/form';
import Layout from '../components/layout';

const FormWrapper = styled.div`
  position: relative;
  text-align: center;
  min-height: 15rem;
  @media (${theme.devices.md}) {
    padding: 0 2rem;
  }  
`;

const InstaWrapper = styled.div`
  text-align: center;
  padding-bottom: 5rem;
  svg {
    font-size: 2rem;
    line-height: 2rem;
    vertical-align: top;
    margin-right: 0.5rem;
    position: relative;
    top: 0.15rem;
  }
  h3 {
    font-weight: bold;
    margin-top: 0;
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
  
  useEffect(() => {
    initialValues.name = localStorage.getItem('form:name');
    initialValues.email = localStorage.getItem('form:email');
  }, []);
  
  return (
    <Layout>
      <PageHeader hideDesktop>
        Contact
      </PageHeader>
      <GridSplit>
        <InstaWrapper>
          <h2>
            <BsInstagram/> 
            <Anchor href="https://www.instagram.com/baked_goodes/" bold>
              baked_goodes
            </Anchor>
          </h2>
          <Paragraph centred padding={"0 0 1rem 0"}>
            Check out my Instagram to see my most recent bakes.<br/>
            You can message me there to chat about an order. <br/>
            Or just use the contact form on this page.
          </Paragraph>
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
          <h2> Get in touch </h2>
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
                emailjs.send(
                  'service_6wdvvxv', 
                  'template_e0doy5b', 
                  {
                    from_name: values.name,
                    reply_to: values.email,
                    message: values.message
                  }
                ).then((response) => {
                  console.log(response);
                  setSubmitting(false);
                  setSuccess(true);
                }, (error) => {
                  console.log(error);
                  setSubmitting(false);
                  setSuccess(true);
                });
                // setSubmitting(false);
                // setSuccess(false);
              }, 2000);
            }}
          >
            <Wrapper>
              <Wrapper hide={submitting || success != undefined}>
                <Form>
                  <TextInput label="Name *" name="name" type="text" />
                  <TextInput label="Email *" name="email" type="email" />
                  <TextArea label="Message *" name="message" type="text" />
                  <Button type="submit" text={"Send message"} large wide/>
                </Form>
              </Wrapper>
              <FormLoader 
                $loading={submitting === true} 
                $success={success === true}
                $error={success === false}
                loadingMsg={"Sending"}
                errorMsg={"Oops something went wrong, please try again later"}
                successMsg={"Thanks! I will be in touch within 24 hours"}
              />              
            </Wrapper>
          </Formik>
        </FormWrapper>
      </GridSplit>
    </Layout>
  );
}