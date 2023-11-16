import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $validation?: boolean
  ref?: React.Ref<unknown>
}
const Input = (props: InputProps) => {
  return (
    <InputLayout {...props} />
  )
}

export default Input

const InputLayout = styled.input<InputProps>`
  // clear default styles
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  // custom styles
  width: 100%;

  padding: 6px;

  border-radius: 3px;
  background: var(--gray-gray-97, #F7F7F7);
  outline: 1px solid var(--gray-gray-90, #E5E5E5);
  
  &:focus {
    outline: 1px solid var(--system-blue-50, #38A5E1);
  }

  &.invalid {
    outline: 1px solid var(--system-red-50, #E15252);
  }

  font-size: 14px;

  box-sizing: border-box;
`