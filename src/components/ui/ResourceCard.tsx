import styled, { css } from 'styled-components';
import { Body } from '../../designsystem/Typography';
import ActionButton from './ActionButton';
import editIcon from '../../assets/icon/edit-small.svg';
import trashIcon from '../../assets/icon/trash-small.svg';
import { useState } from 'react';
import Input from './Input';


type Mode = 'view' | 'edit';
interface ResourceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  resourceType: 'url' | 'image';
  resource: string;

  selected?: boolean;
}

const ResourceCard = (props: ResourceCardProps) => {
  const [mode, setMode] = useState<Mode>('view');

  const toggleMode = () => {
    if (mode === 'view') {
      setMode('edit');
    } else {
      setMode('view');
    }
  }

  return (
    <ResourceCardLayout
      selected={props.selected}
    >
      {
        mode === 'view' ?
        <Body>{props.resource || 'untitled'}</Body> :
        <Input value={props.resource} />
      }
      <ActionButtonWrapper>
        <ActionButton
          icon={editIcon}
          onClick={toggleMode}
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