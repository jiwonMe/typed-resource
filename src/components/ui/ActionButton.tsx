import styled from 'styled-components';
import { removePropFromObject } from '../../utils/removePropsFromObject';
import { TypedIcon } from 'typed-design-system';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // prop type of TypedIcon;
  icon: React.ComponentProps<typeof TypedIcon>['icon'];
}

const ActionButton = (props: ActionButtonProps) => {
  return (
    <ActionButtonLayout {...removePropFromObject(props, 'icon')}>
      <TypedIcon icon={props.icon} size={19}/>
    </ActionButtonLayout>
  );
};

export default ActionButton;

const ActionButtonLayout = styled.button`
  // clear default styles
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  // custom styles
  width: 19px;
  height: 19px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  border-radius: 5px;

  background: var(--gray-gray-100, #FFF);

  &:hover {
    background: var(--gray-gray-94, #F7F7F7);
  }
`;