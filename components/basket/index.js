import styled from 'styled-components';
import theme from '../../themes/default';
import { useState } from "react";
import { OrderContext } from './orderProvider';
import OrderSummary from './OrderSummary';
import Counter from './counter';
import Total from './orderTotal';
import { ButtonAnchor, IconAnchor } from '../anchor';
import Button from '../button';
import Price from '../price';
import Modal from '../modal';
import { BsFillBasket2Fill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const OpenButton = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1rem;
  z-index: 100;
  @media (${theme.devices.md}) {
    top: 2rem;
    right: 2rem;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1rem;
  div {
    margin: 0 1rem;
  }
`;

export default function ({ children }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  const toggleModal = (e) => {
    e.preventDefault();
    document.body.style.overflow = modalVisible ? 'unset' : 'hidden';
    setModalVisible(!modalVisible);
  }

  return (
    <>
      <OpenButton>
        <IconAnchor href="#" onClick={toggleModal}>
          <BsFillBasket2Fill/>
        </IconAnchor>
      </OpenButton>
      <Counter/>
      <Modal 
        title={''}
        visible={modalVisible} 
        onClose={toggleModal} 
        showCloseButton={false}
        body={<OrderSummary/>}
        footer={(
          <FooterWrapper>
            <Total/>
            <ButtonAnchor href="/checkout" text="Checkout" onClick={() => {setModalVisible(false)}}/>
          </FooterWrapper>
        )}
        >
      </Modal>
    </>
  )
};