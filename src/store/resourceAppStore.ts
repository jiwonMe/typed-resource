// resource store with resource actions
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type Resource from '../models/Resource';

interface ResourceAppState {
  resources: Resource[];
  addResource: (resource: Resource) => void;
  removeResource: (resource: Resource) => void;
}

const useResourceAppStore = create<ResourceAppState>()(
  devtools((set) => ({
    resources: [],
    addResource: (resource) =>
      set((state) => ({
        resources: [...state.resources, resource],
      })),
    removeResource: (resource) =>
      set((state) => ({
        resources: state.resources.filter((r) => r.id !== resource.id),
      })),
  }))
);

export default useResourceAppStore;
