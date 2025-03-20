import { SC } from './input.styles';

export type SelectOptions = Array<{
  id: string;
  disabled?: boolean;
  selected?: boolean;
  hidden?: boolean;
  value: string;
  text: string;
}>;
export interface InputProps {
  name: string;
  placeholder: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea' | 'select';
  selectOptions?: SelectOptions;
  required?: boolean;
}
const getFieldTypeProps = (type: InputProps['type']) => {
  switch (type) {
    case 'textarea':
    case 'select':
      return { as: type };
    default:
      return { type };
  }
};
function Input({
  placeholder,
  type,
  name,
  selectOptions,
  required,
}: InputProps) {
  const fieldTypeProps = getFieldTypeProps(type);
  return (
    <SC.InputWrapper>
      <SC.Field
        name={name}
        {...fieldTypeProps}
        placeholder={placeholder}
        required={required}
      >
        {selectOptions &&
          selectOptions.map((option) => (
            <option
              key={option.id}
              value={option.value}
              disabled={option.disabled}
              selected={option.selected}
              hidden={option.hidden}
            >
              {option.text}
            </option>
          ))}
      </SC.Field>
      <SC.ErrorMessage name={name} component="span" />
    </SC.InputWrapper>
  );
}

export default Input;
