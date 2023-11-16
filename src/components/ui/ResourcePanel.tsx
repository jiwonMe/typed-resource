import styled from 'styled-components';
import Button from './Button';
import TopBar from './TopBar';

const ResourcePanel = () => {
  return (
    <ResourcePanelLayout>
      <ResourcePanelHeader>
        <Button>URL 추가</Button>
        <Button>이미지 추가</Button>
      </ResourcePanelHeader>
    </ResourcePanelLayout>
  )
}

export default ResourcePanel

const ResourcePanelLayout = styled.div`
  display: flex;
  flex-direction: column;

  // 250~350px, 25~33%
  min-width: 250px;
  max-width: 350px;
  width: 20vw;

  background-color: var(--gray-gray-94, #F7F7F7);

  border-right: 1px solid #C4C4C4;

  box-sizing: border-box;
`;

const ResourcePanelHeader = styled(TopBar)`
  padding: 10px;
`