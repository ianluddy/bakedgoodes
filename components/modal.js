import styled from 'styled-components';
import { useState } from "react";
import { IconAnchor } from './anchor';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { HiX } from "react-icons/hi";

const Wrapper = styled.div`
  div.rodal-dialog {
    max-height: 65vh;
  }
`;

const Body = styled.div`
  position: absolute;
  top: 4rem;
  bottom: 4rem;
  left: 0;
  right: 0;
  overflow: auto;
  padding: 1rem;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 2px solid;
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-size: 1.3rem;
  margin: 0;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export default function ({ body, footer, visible, onClose, width, height, title }) {
  return (
    <Wrapper>
      <Rodal 
        width={width || 600} 
        height={height || 450} 
        visible={visible} 
        onClose={onClose} 
        showCloseButton={false}
        >
        <Title>
          {title}
        </Title>
        <CloseButton>
          <IconAnchor href="#" onClick={onClose}>
            <HiX/>
          </IconAnchor>
        </CloseButton>
        <Body>
          { body }
        </Body>
        <Footer>
          { footer }
        </Footer>
      </Rodal>
    </Wrapper>
  )
};