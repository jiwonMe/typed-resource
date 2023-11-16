import styled from '@emotion/styled';
import { Body } from '../../designsystem/Typography';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <ButtonLayout {...props}>
      <Body>
        {props.children}
      </Body>
    </ButtonLayout>
  )
}

export default Button

const ButtonLayout = styled.button`
  // clear default styles
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  // custom styles
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  border: 1px solid var(--gray-gray-90, #E5E5E5);
  background: var(--gray-gray-100, #FFF);

  height: 30px;
  width: 100%;

  &:hover {
    background: var(--gray-gray-94, #F7F7F7);
  }
`