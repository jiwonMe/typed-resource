import styled from 'styled-components';
import ResourcePanel from '../components/ui/ResourcePanel';
import ResourceViewer from '../components/ui/ResourceViewer';
import useResourceAppStore from '../store/resourceAppStore';

const ResourcePage = () => {
  const {
    resources,
  } = useResourceAppStore();

  const { currentResourceIndex, setCurrentResourceIndex } = useResourceAppStore();

  return (
    <ResourcePageLayout>
      <ResourcePanel />
      <ResourceViewer
        resource={
          currentResourceIndex === -1
            ? null
            : resources[currentResourceIndex]
        }
        onClose={() => setCurrentResourceIndex(-1)}
      />
    </ResourcePageLayout>
  );
};

export default ResourcePage;

const ResourcePageLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  width: 100%;

  background-color:#F0F0F0; // gray-94
;
`;