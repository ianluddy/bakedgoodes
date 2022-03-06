import styled from 'styled-components';
import theme from '../../themes/default';
import { useState } from "react";
import { OrderContext } from './orderProvider';
import OrderSummary from './OrderSummary';
import Counter from './counter';
import { IconAnchor } from '../anchor';
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
        title={'Order summary'} 
        visible={modalVisible} 
        onClose={toggleModal} 
        showCloseButton={false}>
        <OrderSummary/>
      </Modal>
    </>
  )
};