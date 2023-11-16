import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = (props: InputProps) => {
  return (
    <InputLayout {...props} />
  )
}

export default Input

const InputLayout = styled.input`
  // clear default styles
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  // custom styles
  padding: 6px;

  border-radius: 3px;
  background: var(--gray-gray-97, #F7F7F7);
  
  &:focus {
    outline: 1px solid var(--system-blue-50, #38A5E1);
  }

  font-size: 14px;

  box-sizing: border-box;
`