import styled from 'styled-components';
import theme from '../themes/default';

const Button = styled.a`
  transition: opacity ${theme.transitionTime};
  opacity: 1;  
  font-weight: bold;  
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  border-style: none;
  box-sizing: border-box;
  line-height: 1rem;
  list-style: none;
  outline: none;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  font-size: ${props => props.large ? '1.2rem' : '1rem'};  
  padding: ${props => props.large ? '14px 22px' : '8px 18px'};
  background-color: ${props => props.secondary ? theme.secondary : theme.primary};
  color: ${props => props.secondary ? theme.body : theme.body};
  display: ${props => props.wide ? "block" : "inline-block"};
  &:hover {
    opacity: ${theme.opacity};
  }
}
`;

export default function(props) {
  return (
    <Button 
      onClick={props.onClick} 
      href={props.href} 
      large={props.large} 
      secondary={props.secondary}
      wide={props.wide}
    >
      {props.text}
    </Button>
  )
}