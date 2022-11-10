import create from 'zustand';
// This store will be used to store the NEO's data fetched from the API
interface IStore {
  neo: string[];
  setNeo: (neo: string[]) => void;
}

export const useStore = create<IStore>((set) => ({
  neo: [],
  setNeo: (neo) => set({ neo }),
}));
