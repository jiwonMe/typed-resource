// resource store with resource actions
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type Resource from '../models/Resource';

interface ResourceAppState {
  resources: Resource[];
  currentResourceIndex: number;
  setCurrentResourceIndex: (index: number) => void;
  addResource: (resource: Resource) => void;
  removeResource: (resource: Resource) => void;
  updateResource: (resource: Resource) => void;
}

const useResourceAppStore = create<ResourceAppState>()(
  devtools((set) => ({
    resources: [],
    currentResourceIndex: -1, // -1 means no resource is selected
    setCurrentResourceIndex: (index) => set({ currentResourceIndex: index }),
    addResource: (resource) =>
      set((state) => ({
        resources: [...state.resources, resource],
      })),
    removeResource: (resource) =>
      set((state) => ({
        resources: state.resources.filter((r) => r.id !== resource.id),
      })),

    updateResource: (resource) =>
      set((state) => ({
        resources: state.resources.map((r) =>
          r.id === resource.id ? resource : r
        ),
      })),
  }))
);

export default useResourceAppStore;
