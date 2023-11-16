export type ResourceType = 'image' | 'url';

interface Resource {
  id: string;
  type: ResourceType;
  url: string;
  name: string;

  createdAt: Date;
  updatedAt: Date;

  // Optional
  description?: string;
  tags?: string[];
}

export default Resource;
