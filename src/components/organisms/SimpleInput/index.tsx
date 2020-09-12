import React from 'react';
import { useFormContext } from 'react-hook-form';
export interface Props {
  field: string;
  label?: string;
  parent?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  type?: string;
  hint?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  registerProps?: object;
}

const SimpleInput: React.FC<Props> = ({
  field,
  placeholder,
  required,
  defaultValue,
  label,
  type,
  hint,
  registerProps,
  parent,
}) => {
  const { register, errors } = useFormContext();

  const className = parent
    ? `form-control ${
        errors && errors[parent] && errors[parent][field] && 'is-invalid'
      }`
    : `form-control ${errors && errors[field] && 'is-invalid'}`;

  const fieldRegistered = parent ? `${parent}[${field}]` : field;

  const htmlFor = parent ? `label-${parent}-${field}` : `label-${field}`;

  const ariaInvalid = parent
    ? errors && errors[parent] && errors[parent][field]
      ? 'true'
      : 'false'
    : errors && errors[field]
    ? 'true'
    : 'false';

  return (
    <div className="simple-input">
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <input
        className={className}
        id={htmlFor}
        name={fieldRegistered}
        type={type || 'text'}
        placeholder={placeholder}
        ref={register({
          required: {
            message: 'Field required',
            value: required || false,
          },
          ...registerProps,
        })}
        defaultValue={defaultValue}
        aria-invalid={ariaInvalid}
      />
      {!!hint && <span>{hint}</span>}
    </div>
  );
};

export default SimpleInput;
