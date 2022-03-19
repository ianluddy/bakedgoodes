import theme from '../themes/default';
import styled from 'styled-components';
import { useContext, useEffect } from "react";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import Layout from '../components/layout';
import { OrderContext } from '../components/orderProvider';
import { GridSplit } from '../components/grid';
import Wrapper from '../components/wrapper';
import Order from '../components/order';
import Cta from '../components/cta';
import Paragraph from '../components/paragraph';
import OrderTotal from '../components/orderTotal';
import PageHeader from '../components/pageHeader';
import { TextArea, TextInput } from '../components/form';
import Button from '../components/button';

const TotalWrapper = styled.div`
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${theme.secondary};
  border-top: 1px solid;
`;

const OrderWrapper = styled.div`
  text-align: left;
  @media (${theme.devices.md}) {
    max-width: 400px;
  }
`;

const FormWrapper = styled.div`
  text-align: left;
  @media (${theme.devices.md}) {
    padding: 0 2rem;
  }
`;

export default function() {
  const { orders, count } = useContext(OrderContext);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    notes: '',
  };
  
  useEffect(() => {
    initialValues.name = localStorage.getItem('form:name');
    initialValues.email = localStorage.getItem('form:email');
    initialValues.phone = localStorage.getItem('form:phone');
  });
    
  return (
    <Layout>
      <PageHeader hide={!count}>
        Checkout
      </PageHeader>
      <Cta 
        headline="Checkout"
        body="Your basket is empty :("
        buttonText="Back to home"
        buttonLink="/"
        hide={count && count != 0}
      />
      <GridSplit hide={!count}>
        <OrderWrapper>
          <h3> Order summary </h3>
          { 
            orders ? orders.map((order, i) => Order(order, i)) : null
          }
          <TotalWrapper>
            <OrderTotal/>
          </TotalWrapper>
        </OrderWrapper>
        <FormWrapper>
          <h3> Your details </h3>
          <Paragraph>
            Please fill in your details below.<br/>
            I will respond within 24 hours to confirm your order and arrange payment.
          </Paragraph>
          <Formik style={{"text-align": "center"}}
            enableReinitialize
            initialValues={initialValues}
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