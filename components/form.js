import { useEffect, useState } from 'react';
import theme from '../themes/default';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { useField, useFormikContext, Field } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

const Error = styled.div`
  color: ${theme.red};
  font-size: 1rem;
  text-align: right;
`;

const FieldWrapper = styled.div`
  margin-bottom: 1.5rem;

  input,
  textarea,
  select {
    font-size: 1rem;
    width: calc(100% - 2rem);
    padding: 1rem;
    color: ${theme.darkGrey};
    border: 2px solid;
    border-radius: 4px;
    font-family: ${theme.fontBody};

    ::placeholder {
      color: ${theme.text};
      opacity: 0.5;
    }
  }
  textarea {
    height: 120px;
  }
  select {
    width: 100%;
  }
  .react-datepicker {
    font-family: ${theme.fontBody};
  }
  .react-datepicker__header {
    background: none;
    border: none;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background: ${theme.secondary};
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background: ${theme.secondary};
  }
  .react-datepicker__month-container {
    padding: 0.5rem 2rem;
  }
  .react-datepicker__navigation {
    top: 10px;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  opacity: 1;
  cursor: pointer;
  transition: opacity ${theme.transitionTime};
  position: relative;
  right: 0.5rem;
  :hover {
    opacity: ${theme.opacity};
  }
  input {
    width: 30px;
    height: 18px;
    position: relative;
    top: 2px;
  }
  input,
  label {
    cursor: pointer;
  }
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.1rem;
  padding-bottom: 0.2rem;
`;

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  useEffect(() => {
    if (field.value) {
      localStorage.setItem(
        `form:${field.name}`,
        field.value.length > 1 ? field.value : ''
      );
    }
  }, [field]);

  return (
    <FieldWrapper>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </FieldWrapper>
  );
};

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FieldWrapper>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </FieldWrapper>
  );
};

export const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <FieldWrapper>
      <Label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </Label>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </FieldWrapper>
  );
};

export const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const options = props.options.map((option, i) => (
    <option key={i} value={option} label={option}>
      {option}
    </option>
  ));

  return (
    <FieldWrapper>
      {!props.hidden && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <select {...field} hidden={props.hidden}>
        {options}
      </select>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </FieldWrapper>
  );
};

export const Radio = ({ options, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const radios = options.map((option, i) => (
    <RadioWrapper key={i}>
      <Label>
        <input
          type="radio"
          name={field.name}
          value={option.value}
          onChange={() => setFieldValue(field.name, option.value)}
          defaultChecked={option.default}
        />
        {option.label}
      </Label>
    </RadioWrapper>
  ));
  return (
    <FieldWrapper>
      {radios}
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </FieldWrapper>
  );
};

export const DateInput = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  const isNotPast = (date) => {
    return date > new Date();
  };
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [date, setDate] = useState(tomorrow);

  useEffect(() => {
    setDate(date);
    setTimeout(() => {
      setFieldValue(props.name, date);
    }, 10); // TODO - not this
  }, []);

  return (
    <FieldWrapper>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      <DatePicker
        {...field}
        {...props}
        dateFormat="dd/MM/yyyyy"
        selected={date}
        onChange={(val) => {
          setDate(val);
          setFieldValue(field.name, val);
        }}
        filterDate={isNotPast}
      />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </FieldWrapper>
  );
};
