import create from 'zustand';
// This store will be used to store the NEO's data fetched from the API
interface IStore {
  neo: any;
  setNeo: (neo: string[]) => void;
  choosenNeo: string;
  setChoosenNeo: (neo: string) => void;
}

export const useStore = create<IStore>((set) => ({
  neo: [],
  setNeo: (neo) => set({ neo }),
  choosenNeo: '2017 WT28',
  setChoosenNeo: (neo) => set({ choosenNeo: neo })
}));
