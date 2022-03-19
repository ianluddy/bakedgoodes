import { useField } from 'formik';
import { useEffect } from 'react';
import theme from '../themes/default';
import styled from 'styled-components';

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
    border: none;
    background-color: ${theme.grey};
    padding: 1rem;
    color: ${theme.darkGrey};
    
    ::placeholder {
      color: ${theme.text};
      opacity: 0.5;
    }
  }
  textarea {
    height: 120px;
  }
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.1rem;
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