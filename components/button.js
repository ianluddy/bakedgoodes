import styled from 'styled-components';
import theme from '../themes/default';

const Button = styled.button`
  transition: background-color ${theme.transitionTime};
  font-family: ${theme.fontButton};
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
  touch-action: manipulation;
  cursor: pointer;
  font-size: ${(props) => (props.large ? '1.2rem' : '1rem')};  
  padding: ${(props) => (props.large ? '14px 22px' : '8px 18px')};
  background-color: ${(props) =>
    props.secondary ? theme.secondary : theme.primary};
  color: ${theme.body};
  display: ${(props) => (props.wide ? 'block' : 'inline-block')};
  width: ${(props) => (props.wide ? '100%' : 'auto')};
  margin: ${(props) => (props.nomargin ? '0' : 'initial')};
  &:hover {
    background-color: ${(props) =>
      props.secondary ? theme.secondaryLight : theme.primaryLight};
  }
}
`;

export default function (props) {
  return (
    <Button
      onClick={props.onClick}
      href={props.href}
      type={props.type}
      large={props.large}
      secondary={props.secondary}
      wide={props.wide}
      nomargin={props.nomargin}
    >
      {props.text}
    </Button>
  );
}
