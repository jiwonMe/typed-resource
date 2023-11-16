import styled from 'styled-components';
import ResourcePanel from '../components/ui/ResourcePanel';
import ResourceViewer from '../components/ui/ResourceViewer';

const ResourcePage = () => {

  return (
    <ResourcePageLayout>
      <ResourcePanel />
      <ResourceViewer />
    </ResourcePageLayout>
  )
}

export default ResourcePage

const ResourcePageLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  width: 100%;

  background-color:#F0F0F0; // gray-94
;
`