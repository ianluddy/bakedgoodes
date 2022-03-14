import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import theme from '../themes/default';
import PageHeader from '../components/pageHeader';
import Button from '../components/button';
import { TextArea, TextInput } from '../components/form';
import Layout from '../components/layout';

const FormWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  @media (${theme.devices.md}) {
    width: 500px;
  }
`;

const Centred = styled.div`
  text-align: center;
`;

export default function() {
  return (
    <Layout>
      <FadeIn delay="0">
        <PageHeader>Contact</PageHeader>
        <Centred>
          <FormWrapper>
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required('Please enter your name'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Please enter your email'),
                message: Yup.string()
                  .required('Please enter your message'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <TextInput
                  label="Name"
                  name="name"
                  type="text"
                />
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                />
                <TextArea
                  label="Message"
                  name="message"
                  type="text"
                />
                <Button type="submit" text="Submit" large/>
              </Form>
            </Formik>
          </FormWrapper>
        </Centred>
      </FadeIn>
    </Layout>
  );
}