import styled from 'styled-components';
import theme from '../themes/default';

const Select = styled.select`
  color: ${theme.darkGrey};
  border: 2px solid;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

export default function(props) {  
  const options = props.options.map((option, i) => (
    <option key={i} value={i}>
      {option.title}
    </option>
  ));
  
  const changeHandler = (e) => {
    props.setSelected(props.options[e.target.value]);
  }
  
  return (
    <Select onChange={changeHandler}>
      {options}
    </Select>
  )
}