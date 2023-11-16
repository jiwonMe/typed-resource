import styled, { css } from 'styled-components';
import { Body } from '../../designsystem/Typography';
import ActionButton from './ActionButton';
import editIcon from '../../assets/icon/edit-small.svg';
import trashIcon from '../../assets/icon/trash-small.svg';
import { useState } from 'react';
import Input from './Input';
import Resource from '../../models/Resource';
import { removePropFromObject } from '../../utils/removePropsFromObject';

interface ResourceCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'resource'> {
  resource: Resource;
  selected?: boolean;
  actions?: {
    edit?: (resourcePartial: Partial<Resource>) => void;
    remove?: () => void;
  }
}

const ResourceCard = (props: ResourceCardProps) => {
  const [titleInputToggle, setTitleInputToggle] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(props.resource.name);

  const toggleTitleInput = () => {
    setTitleInputToggle(!titleInputToggle);
  };

  const submitTitle = () => {
    toggleTitleInput();
    if (props.actions?.edit) {
      props.actions.edit({
        name: title,
      });
    }
  };

  return (
    <ResourceCardLayout
      {...removePropFromObject(props, 'resource')}
      selected={props.selected}
    >
      
      {
        titleInputToggle ? (
          <ResourceTitleInput
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitTitle();
              }
            }}
          />
        ):(
          <ResourceTitle>{props.resource.name || 'untitled'}</ResourceTitle>
        )
      }
      <ActionButtonWrapper>
        <ActionButton
          icon={editIcon}
          onClick={submitTitle}
        />
        <ActionButton
          icon={trashIcon}
          onClick={props.actions?.remove}
        />
      </ActionButtonWrapper>
    </ResourceCardLayout>
  );
};

export default ResourceCard;

const ResourceCardLayout = styled.div<{
  selected?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 12px;

  gap: 15px;

  border-radius: 10px;
  background: var(--gray-gray-100, #FFF);

  border: 1px solid transparent;

  ${props => props.selected && css`
    border-radius: 10px;
    border: 1px solid var(--system-blue-50, #38A5E1);
    background: var(--gray-gray-100, #FFF);
  `}
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;

const ResourceTitleInput = styled(Input)`
  width: calc(100% + 16px);
  height: 30px;

  transform: translateX(-8px) translateY(-8px);

  box-sizing: border-box;
`;

const ResourceTitle = styled(Body)`
  width: 100%;
  // maximum text line: 2
  max-height: 40px;
  word-wrap: normal;
  text-overflow: ellipsis;
  overflow: hidden;
`;