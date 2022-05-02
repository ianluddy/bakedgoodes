import Head from 'next/head';
import theme from '../themes/default';
import styled from 'styled-components';
import { useContext, useEffect, useState, useRef } from 'react';
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import * as emailjs from '@emailjs/browser';

import Layout from '../components/layout';
import { OrderContext } from '../components/orderProvider';
import Grid from '../components/grid';
import Order from '../components/order';
import Section from '../components/section';
import FormLoader from '../components/formLoader';
import Cta from '../components/cta';
import OrderTotal from '../components/orderTotal';
import {
  Select,
  DateInput,
  TextArea,
  TextInput,
  Radio,
} from '../components/form';
import Button from '../components/button';

const TotalWrapper = styled.div`
  text-align: left;
  padding: 0.8rem 0 1rem 0;
  font-weight: bold;
  color: ${theme.secondary};
`;

const OrderWrapper = styled.div`
  text-align: left;
  padding-bottom: 1rem;
  @media (${theme.devices.md}) {
    max-width: 400px;
  }
`;

const FormWrapper = styled.div`
  text-align: left;
  position: relative;
  p {
    padding: 0 0 1rem 0;
  }
  @media (${theme.devices.md}) {
    padding: 0 2rem 4rem 2rem;
  }
`;

const DeliveryFee = styled.div`
  color: ${theme.secondary};
  position: relative;
  bottom: 1em;
  text-align: left;
  font-weight: 500;
`;

const LocationSelect = (props) => {
  const {
    values: { location, delivery },
  } = useFormikContext();
  const { setDelivery } = useContext(OrderContext);

  const locations = {
    'Dublin 1': 8,
    'Dublin 2': 8,
    'Dublin 4': 8,
    'Dublin 6': 8,
    'Dublin 7': 8,
    'Dublin 8': 5,
    'Dublin 9': 10,
    'Dublin 10': 10,
    'Dublin 12': 8,
    'Dublin 14': 10,
  };

  useEffect(() => {
    setDelivery(delivery ? locations[location] : 0);
  });

  return (
    <>
      <Select
        name="location"
        label="Location *"
        options={Object.keys(locations)}
        {...props}
      />
      {delivery && (
        <DeliveryFee> Delivery fee: €{locations[location]} </DeliveryFee>
      )}
    </>
  );
};

const DeliveryRadio = (props) => {
  const {
    values: { delivery },
  } = useFormikContext();

  const options = [
    { label: 'Delivery in Dublin', value: true },
    { label: 'Collection from Inchicore', value: false, default: true },
  ];

  return <Radio name="delivery" options={options} />;
};

export default function (props) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const { total, delivery, orders, count, clearOrder, orderString } =
    useContext(OrderContext);

  const initialValues = {
    name: '',
    email: '',
    delivery: false,
    location: 'Dublin 8',
    date: new Date(),
    phone: '',
    notes: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name').nullable(),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter your email')
      .nullable(),
    delivery: Yup.string()
      .required('Please specify delivery or collection')
      .nullable(),
    date: Yup.string().required('Please enter a date').nullable(),
    phone: Yup.string().nullable(),
    notes: Yup.string().nullable(),
  });

  const handleSubmit = (values) => {
    const emailValues = {
      from_name: values.name,
      reply_to: values.email,
      delivery: values.delivery ? 'Delivery' : 'Collection',
      location: values.delivery ? values.location : '-',
      date: values.date.toDateString(),
      notes: values.notes || '-',
      phone: values.phone || '-',
      order: orderString,
      total: total + delivery,
    };
    setSubmitting(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      // setSubmitting(false);
      // setSuccess(true);
      // return;
      emailjs.send('service_6wdvvxv', 'template_uiuv1uu', emailValues).then(
        (response) => {
          setSubmitting(false);
          setSuccess(true);
          clearOrder();
        },
        (error) => {
          setSubmitting(false);
          setSuccess(false);
          throw error;
        }
      );
    }, 1200);
  };

  useEffect(() => {
    initialValues.name = localStorage.getItem('form:name') || '';
    initialValues.email = localStorage.getItem('form:email') || '';
    initialValues.phone = localStorage.getItem('form:phone') || '';
  });

  return (
    <>
      <Head>
        <title>{props.siteName} - Checkout</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Layout>
        <Section
          hide={submitting || success != undefined || count == 0}
          padding={'0'}
        >
          <h1>Checkout</h1>
        </Section>
        <Section
          hide={(count && count != 0) || submitting || success != undefined}
        >
          <Cta
            headline="Checkout"
            body="Your basket is empty :("
            buttonText="Back to home"
            buttonLink="/"
          />
        </Section>
        <Section hide={!submitting && success == undefined}>
          <FormLoader
            $loading={submitting === true}
            $success={success === true}
            $error={success === false}
            loadingMsg={'Ordering'}
            errorMsg={'Oops something went wrong, please try again later'}
            successMsg={
              "I'll be in touch within 24 hours to confirm your order"
            }
            id="loader"
          />
        </Section>
        <Section hide={!count || submitting || success != undefined}>
          <Grid md={'50%'} lg={'50%'}>
            <OrderWrapper>
              <h2> Your order </h2>
              {orders ? orders.map((order, i) => Order(order, i)) : null}
              <TotalWrapper>
                <OrderTotal showDelivery />
              </TotalWrapper>
            </OrderWrapper>
            <FormWrapper>
              <h2> Your details </h2>
              <p>
                Please fill in your details below.
                <br />I will respond within 24 hours to confirm your order and
                arrange payment.
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {(props) => (
                  <Form>
                    <TextInput label="Name *" name="name" type="text" />
                    <TextInput label="Email *" name="email" type="email" />
                    <DeliveryRadio {...props} />
                    <LocationSelect
                      hidden={props.values.delivery === false}
                      {...props}
                    />
                    <DateInput
                      label={
                        props.values.delivery
                          ? 'Delivery Date *'
                          : 'Collection Date *'
                      }
                      name="date"
                    />
                    <TextInput
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="Optional"
                    />
                    <TextArea
                      label="Order notes"
                      name="notes"
                      type="text"
                      placeholder="Optional"
                    />
                    <Button
                      type="submit"
                      text="Submit order"
                      large
                      secondary
                      wide
                    />
                  </Form>
                )}
              </Formik>
            </FormWrapper>
          </Grid>
        </Section>
      </Layout>
    </>
  );
}
