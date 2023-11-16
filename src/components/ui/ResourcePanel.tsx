import styled from 'styled-components';
import Button from './Button';
import TopBar from './TopBar';
import ResourceCard from './ResourceCard';
import Input from './Input';
import { createRef, useEffect, useRef, useState } from 'react';
import Resource from '../../models/Resource';
import { v4 as uuid } from 'uuid';
import useResourceAppStore from '../../store/resourceAppStore';

interface ResourcePanelProps extends React.HTMLAttributes<HTMLDivElement> {}

const ResourcePanel = (props: ResourcePanelProps) => {
  const [urlInputToggle, setUrlInputToggle] = useState<boolean>(false);

  const [urlValidation, setUrlValidation] = useState<boolean>(false);

  const { resources, addResource, removeResource, updateResource, currentResourceIndex } = useResourceAppStore();

  const toggleUrlInput = () => {
    setUrlInputToggle(!urlInputToggle);
  }


  return (
    <ResourcePanelLayout>
      <ResourcePanelHeader>
        <Button
          onClick={toggleUrlInput}
        >URL 추가</Button>
        <Button>이미지 추가</Button>
        {
          urlInputToggle &&
          <URLInputContainer>
            <URLInput
              autoFocus
              type="text"
              placeholder="URL을 입력하세요"
              validation={urlValidation}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addResource({
                    id: uuid(),
                    type: 'url',
                    url: e.currentTarget.value,
                    name: e.currentTarget.value,
                  });
                  setUrlInputToggle(false);
                }
              }}
            />
          </URLInputContainer>
        }
      </ResourcePanelHeader>
      <ResourceCardContainer>
        {
          resources.map((resource, index) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              selected={index === currentResourceIndex}
              actions={{
                edit: (resourcePartial) => {
                  updateResource({
                    ...resource,
                    ...resourcePartial,
                  });
                },
                remove: () => {
                  removeResource(resource);
                },
              }}
            />
          ))
        }
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

const URLInputContainer = styled.div`
  position: absolute;
  z-index: 1;

  width: calc(100% - 20px);

  top: 42px;

  padding: 5px; 
  border-radius: 5px;
  border: 1px solid var(--gray-gray-90, #E5E5E5);
  background: var(--gray-gray-100, #FFF);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.10);

  box-sizing: border-box;
`

const URLInput = styled(Input)`
  font-size: 12px;
`