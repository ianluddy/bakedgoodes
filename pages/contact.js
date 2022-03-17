import styled from 'styled-components';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import theme from '../themes/default';
import PageHeader from '../components/pageHeader';
import Button from '../components/button';
import Paragraph from '../components/paragraph';
import { Anchor, ButtonAnchor } from '../components/anchor';
import { GridSplit } from '../components/grid';
import { TextArea, TextInput } from '../components/form';
import Layout from '../components/layout';
import { BsInstagram } from "react-icons/bs";

const FormWrapper = styled.div`
  text-align: center;
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
  return (
    <Layout>
      <PageHeader>Contact</PageHeader>
      <GridSplit>
        <InstaWrapper>
          <h2>
            <BsInstagram/> 
            <Anchor href="https://www.instagram.com/baked_goodes/" bold>
              baked_goodes
            </Anchor>
          </h2>
          <Paragraph centred>
            Check out my Instagram to see my most recent bakes.
            You can message me there to chat about an order.
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
          <Formik style={{"text-align": "center"}}
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
              // TODO
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              // TODO              
            }}
          >
            <Form>
              <TextInput label="Name" name="name" type="text" />
              <TextInput label="Email" name="email" type="email" />
              <TextArea label="Message" name="message" type="text" />
              <Button type="submit" text="Send message" large/>
            </Form>
          </Formik>
        </FormWrapper>
      </GridSplit>
    </Layout>
  );
}