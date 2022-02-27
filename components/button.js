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
  padding: 8px 18px;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-size: ${props => props.large ? '1.2rem' : '1rem'};  
  background-color: ${props => props.secondary ? theme.grey : theme.primary};
  color: ${props => props.secondary ? theme.black : theme.body};
  &:hover {
    opacity: ${theme.opacity};
  }
}
`;

export default function(props) {
  return (
    <Button href={props.href} large={props.large} secondary={props.secondary}>
      {props.text}
    </Button>
  )
}