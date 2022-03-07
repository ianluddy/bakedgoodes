import CurrencyFormat from 'react-currency-format';

export default function (props) {
  return (
    <CurrencyFormat 
      value={props.value} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'€ '} 
      suffix={'.00'} // hmmm TODO
    />
  )
}