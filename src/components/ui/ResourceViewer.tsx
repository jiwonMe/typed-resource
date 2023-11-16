import styled from 'styled-components';

const ResourceViewer = () => {
  return (
    <ResourceViewerLayout>
      ResourceViewer
    </ResourceViewerLayout>
  )
}

export default ResourceViewer

const ResourceViewerLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  width: 100%;

  background-color:#FFF; // white
`