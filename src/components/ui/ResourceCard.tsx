import styled from '@emotion/styled';
import { Body } from '../../designsystem/Typography';
import ActionButton from './ActionButton';
import editIcon from '../../assets/icon/edit-small.svg';
import trashIcon from '../../assets/icon/trash-small.svg';

const ResourceCard = () => {
  return (
    <ResourceCardLayout>
      <Body>https://naver.com</Body>
      <ActionButtonWrapper>
        <ActionButton icon={editIcon} />
        <ActionButton icon={trashIcon} />
      </ActionButtonWrapper>
    </ResourceCardLayout>
  )
}

export default ResourceCard

const ResourceCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;

  gap: 15px;

  border-radius: 10px;
  background: var(--gray-gray-100, #FFF);
`

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`