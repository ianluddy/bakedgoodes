import theme from '../themes/default';
import styled from 'styled-components';
import { useContext, useEffect, useState, useRef } from "react";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import * as emailjs from '@emailjs/browser';

import Layout from '../components/layout';
import { OrderContext } from '../components/orderProvider';
import { GridSplit } from '../components/grid';
import { Wrapper } from '../components/wrapper';
import Order from '../components/order';
import FormLoader from '../components/formLoader';
import Cta from '../components/cta';
import OrderTotal from '../components/orderTotal';
import { TextArea, TextInput } from '../components/form';
import Button from '../components/button';

const TotalWrapper = styled.div`
  padding: 0 0 1rem 0;
  font-size: 1.17em;
  font-weight: bold;
  color: ${theme.secondary};
`;

const OrderWrapper = styled.div`
  text-align: left;
  padding-bottom: 5rem;
  @media (${theme.devices.md}) {
    max-width: 400px;
  }
`;

const FormWrapper = styled.div`
  text-align: left;
  position: relative;
  p {
    padding: 0 0 1.5rem 0;
  }
  @media (${theme.devices.md}) {
    padding: 0 2rem;
  }
`;

export default function() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);  
  const { orders, count } = useContext(OrderContext);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    notes: '',
  };
  
  useEffect(() => {
    initialValues.name = localStorage.getItem('form:name') || '';
    initialValues.email = localStorage.getItem('form:email') || '';
    initialValues.phone = localStorage.getItem('form:phone') || '';
  });
    
  return (
    <Layout>
      <h1>
        Checkout
      </h1>
      <Cta 
        headline="Checkout"
        body="Your basket is empty :("
        buttonText="Back to home"
        buttonLink="/"
        hide={count && count != 0}
      />
      <FormLoader 
        $loading={submitting === true} 
        $success={success === true}
        $error={success === false}
        loadingMsg={"Submitting"}
        errorMsg={"Oops something went wrong, please try again later"}
        successMsg={"I'll be in touch within 24 hours to confirm your order"}
        id="loader"
      />
      <GridSplit hide={!count || submitting || success != undefined}>
        <OrderWrapper>
            <h2> Your order </h2>
            { 
              orders ? orders.map((order, i) => Order(order, i)) : null
            }
            <TotalWrapper>
              <OrderTotal/>
            </TotalWrapper>
        </OrderWrapper>
        <FormWrapper>
          <h2> Your details </h2>
          <p>
            Please fill in your details below.<br/>
            I will respond within 24 hours to confirm your order and arrange payment.
          </p>
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
              phone: Yup.string().nullable(),
              notes: Yup.string().nullable(),
            })}
            onSubmit={(values) => {
              setSubmitting(true);
              window.scrollTo({
                top: 0, 
                behavior: 'smooth'
              });
              setTimeout(() => {
                // setSubmitting(false);
                // setSuccess(true);
                // return;
                emailjs.send(
                  'service_6wdvvxv', 
                  'template_uiuv1uu',
                  {
                    from_name: values.name,
                    reply_to: values.email,
                    notes: values.notes || '-',
                    phone: values.phone || '-',
                    order: JSON.stringify(orders),
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
            <Form>
              <TextInput label="Name *" name="name" type="text" />
              <TextInput label="Email *" name="email" type="email" />
              <TextInput label="Phone" name="phone" type="number"/>
              <TextArea label="Order notes" name="notes" type="text" placeholder="Optional"/>
              <Button type="submit" text="Submit order" large secondary wide/>
            </Form>
          </Formik>
        </FormWrapper>
      </GridSplit>
    </Layout>
  );
}