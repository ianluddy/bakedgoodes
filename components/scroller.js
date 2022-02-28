import styled from 'styled-components';
import theme from '../themes/default';
import React, { useState, useEffect } from 'react';
import { IconAnchor } from './anchor';
import { IoIosArrowDropupCircle } from 'react-icons/io';

export const Wrapper = styled.div`
  position: fixed; 
  right: 1rem;
  bottom: 1.2rem;
  z-index: 100;
  transition: transform ${theme.transitionTime};
  transform: ${props => props.active ? 'none' : 'translate(0, 200px);' };
  @media (${theme.devices.md}) {
    display: none;
  }
`
  
const Scroller = () => {  
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible); // TODO debounce
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []); 
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 1100);
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  return (
    <Wrapper active={visible}>
      <IconAnchor color={theme.primary} size="2.4rem">
        <IoIosArrowDropupCircle onClick={scrollToTop}/>
      </IconAnchor>
    </Wrapper>
  );
}
  
export default Scroller;