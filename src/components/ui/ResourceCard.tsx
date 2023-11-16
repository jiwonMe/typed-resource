import styled, { css } from 'styled-components';
import { Body } from '../../designsystem/Typography';
import ActionButton from './ActionButton';
import editIcon from '../../assets/icon/edit-small.svg';
import trashIcon from '../../assets/icon/trash-small.svg';
import { useState } from 'react';
import Input from './Input';

interface ResourceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  resourceType: 'url' | 'image';
  resource: string;

  selected?: boolean;
}

const ResourceCard = (props: ResourceCardProps) => {
  const [titleInputToggle, setTitleInputToggle] = useState<boolean>(false);

  const toggleTitleInput = () => {
    setTitleInputToggle(!titleInputToggle);
  }

  return (
    <ResourceCardLayout
      selected={props.selected}
    >
      
      {
        titleInputToggle ? (
          <ResourceTitleInput value={props.resource} />
        ):(
          <Body>{props.resource || 'untitled'}</Body>
        )
      }
      <ActionButtonWrapper>
        <ActionButton
          icon={editIcon}
          onClick={toggleTitleInput}
        />
        <ActionButton icon={trashIcon} />
      </ActionButtonWrapper>
    </ResourceCardLayout>
  )
}

export default ResourceCard

const ResourceCardLayout = styled.div<{
  selected?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 12px;

  gap: 15px;

  border-radius: 10px;
  background: var(--gray-gray-100, #FFF);

  ${props => props.selected && css`
    border-radius: 10px;
    border: 1px solid var(--system-blue-50, #38A5E1);
    background: var(--gray-gray-100, #FFF);
  `}
`

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`

const ResourceTitleInput = styled(Input)`
  width: calc(100% + 16px);
  height: 30px;

  transform: translateX(-8px) translateY(-8px);

  box-sizing: border-box;
`