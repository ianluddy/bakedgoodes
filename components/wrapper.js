import styled from 'styled-components';
import theme from '../themes/default';

export const Wrapper = styled.div`
  margin: ${props => props.centred ? '0 auto' : '0'};
  padding: ${props => props.padding || 0};
  display: ${props => 
    props.hide || props.hideMobile ? 'none' : 
    props.centred ? 'inline-block' : 'block'
  };
  @media (${theme.devices.md}) {
    display: 
      ${props => 
        props.hide || props.hideDesktop ? 'none' : 
        props.centred ? 'inline-block' : 'block'
      };
  }
`;