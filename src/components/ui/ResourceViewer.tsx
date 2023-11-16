import styled from 'styled-components';
import TopBar from './TopBar';
import { Body } from '../../designsystem/Typography';
import ActionButton from './ActionButton';
import Resource from '../../models/Resource';

interface ResourceViewerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'resource'> {
  resource: Resource | null;
  onClose: () => void;
}

const ResourceViewer = (props: ResourceViewerProps) => {
  if (!props.resource) {
    return null;
  }

  return (
    <ResourceViewerLayout>
      <ResourceViewerHeader>
        <ResourceTitle>{props.resource.name}</ResourceTitle>
        <ActionButton
          onClick={props.onClose}
          icon='close_19'
        />
      </ResourceViewerHeader>
      <StyledIframe
        src={props.resource.url}
        width="100%"
        height="100%"
      />
    </ResourceViewerLayout>
  );
};

export default ResourceViewer;

const ResourceViewerLayout = styled.div`
  position: relative;

  padding-top: 50px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;

  background-color:#FFF; // white
`;

const ResourceViewerHeader = styled(TopBar)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 15px;
`;

const StyledIframe = styled.iframe`
  outline: none;
  border: none;
`;

const ResourceTitle = styled(Body)`
  max-width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;