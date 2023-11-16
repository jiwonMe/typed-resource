import styled from '@emotion/styled';
import TopBar from './TopBar';

const ResourceViewer = () => {
  return (
    <ResourceViewerLayout>
      <ResourceViewerHeader />
      ResourceViewer
    </ResourceViewerLayout>
  )
}

export default ResourceViewer

const ResourceViewerLayout = styled.div`
  position: relative;

  padding-top: 50px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;

  background-color:#FFF; // white
`

const ResourceViewerHeader = styled(TopBar)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 15px;
`;
