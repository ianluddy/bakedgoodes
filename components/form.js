import { useEffect, useState } from 'react';
import theme from '../themes/default';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { useField, useFormikContext, Field } from "formik";
import "react-datepicker/dist/react-datepicker.css";

const Error = styled.div`
  color: ${theme.red};
  font-size: 1rem;
  text-align: right;
`;

const FieldWrapper = styled.div`
  margin-bottom: 1.5rem;
  
  input, textarea {
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
  .react-datepicker {
    font-family: ${theme.fontBody};
  }
  .react-datepicker__header {
    background: none;
    border: none;
  }
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range{
    background: ${theme.secondary};
  }
  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
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
  input, label {
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
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  useEffect(() => {
    if( field.value ) {
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
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </FieldWrapper>
  );
};

export const TextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <FieldWrapper>
      <div>    
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </FieldWrapper>
  );
};

export const Checkbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <FieldWrapper>
      <Label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </Label>
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </FieldWrapper>
  );
};

export const Radio = ({ ...props }) => {
  // TODO - make this generic
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <FieldWrapper>
      <RadioWrapper>
        <Label>
          <input 
            type="radio" 
            name={field.name} 
            value="true"
            onChange={() => setFieldValue(field.name, "true")}
            defaultChecked
          />
          Delivery in Dublin
        </Label>
      </RadioWrapper>
      <RadioWrapper>
        <Label>
          <input 
            type="radio" 
            name={field.name} 
            value="false"
            onChange={() => setFieldValue(field.name, "false")}
          />
          Collection from Inchicore
        </Label>
      </RadioWrapper>
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </FieldWrapper>
  );
};

export const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FieldWrapper>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </FieldWrapper>
  );
};

export const DateInput = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <FieldWrapper>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      <DatePicker
        {...field}
        {...props}
        dateFormat="dd/MM/yyyyy"
        selected={(field.value && new Date(field.value)) || null}
        onChange={val => {
          setFieldValue(field.name, val);
        }}
      />
      {meta.touched && meta.error ? (
        <Error>{meta.error}</Error>
      ) : null}
    </FieldWrapper>
  );
};