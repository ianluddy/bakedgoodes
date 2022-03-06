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
`;

const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  margin: 0;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export default function ({ children, visible, onClose, width, height, title }) {
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
          { children }
        </Body>
        <Footer>
          
        </Footer>
      </Rodal>
    </Wrapper>
  )
};