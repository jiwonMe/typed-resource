import styled from 'styled-components';
import Button from './Button';
import TopBar from './TopBar';
import ResourceCard from './ResourceCard';

const ResourcePanel = () => {
  return (
    <ResourcePanelLayout>
      <ResourcePanelHeader>
        <Button>URL 추가</Button>
        <Button>이미지 추가</Button>
      </ResourcePanelHeader>
      <ResourceCardContainer>
        <ResourceCard
          resourceType="url"
          resource="https://www.naver.com"
          selected
        />
        <ResourceCard
          resourceType="image"
          resource="https://www.naver.com"
        />
        <ResourceCard
          resourceType="url"
          resource="https://www.naver.com"
        />
      </ResourceCardContainer>
    </ResourcePanelLayout>
  )
}

export default ResourcePanel

const ResourcePanelLayout = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  // 250~350px, 25~33%
  min-width: 250px;
  max-width: 350px;
  width: 20vw;

  padding-top: 50px;

  background-color: var(--gray-gray-94, #F7F7F7);

  border-right: 1px solid #C4C4C4;

  box-sizing: border-box;
`;

const ResourcePanelHeader = styled(TopBar)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 10px;
`

const ResourceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 10px;
`