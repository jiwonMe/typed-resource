import styled from 'styled-components';

const ResourcePanel = () => {
  return (
    <ResourcePanelLayout>
      Resource
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

  background-color:#F7F7F7; // gray-94

  border-right: 1px solid #C4C4C4;
`;