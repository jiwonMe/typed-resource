export type ResourceType = 'image' | 'url';

interface Resource {
  id: string;
  type: ResourceType;
  url: string;
  name: string;
}

export default Resource;
