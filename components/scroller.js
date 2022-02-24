import styled from 'styled-components';
import theme from '../themes/default';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

export const Button = styled.div`
  position: fixed; 
  right: 20px;
  bottom: 10px;
  color: ${theme.primary};
  font-size: 3rem;
  z-index: 100;
  cursor: pointer;
  transition: transform 0.5s;
  transform: ${props => props.active ? 'none' : 'translate(0, 200px);' };
  @media (${theme.devices.md}) {
    display: none;
  }  
`
  
const Scroller = () => {  
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible); // TODO debounce
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
    <Button active={visible}>
     <IoIosArrowDropupCircle onClick={scrollToTop}/>
    </Button>
  );
}
  
export default Scroller;