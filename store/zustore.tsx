import create from 'zustand';
// This store will be used to store the NEO's data fetched from the API
interface IStore {
  loadingNEO: boolean;
  setLoadingNEO: (loading: boolean) => void;
  loadingNEOs: boolean;
  setLoadingNEOs: (loading: boolean) => void;
  neo: any;
  setNeo: (neo: string[]) => void;
  choosenNeo: string;
  setChoosenNeo: (neo: string) => void;
  neos: any;
  setNeos: (neos: string[]) => void;
  neosMongo: any;
  setNeosMongo: (neos: string[]) => void;
  hMax: string;
  setHMax: (hMax: string) => void;
  ps: string;
  setPs: (ps: string) => void;
  ipMin: string;
  setIpMin: (ipMin: string) => void;
}

export const useStore = create<IStore>((set) => ({
  loadingNEO: true,
  setLoadingNEO: (loadingNEO) => set({loadingNEO}),
  loadingNEOs: true,
  setLoadingNEOs: (loadingNEOs) => set({loadingNEOs}),
  neo: [],
  setNeo: (neo) => set({ neo }),
  choosenNeo: '2017 WT28',
  setChoosenNeo: (neo) => set({ choosenNeo: neo }),
  neos: [],
  setNeos: (neos) => set({ neos }),
  neosMongo: [],
  setNeosMongo: (neosMongo) => set({ neosMongo }),
  hMax: '99',
  setHMax: (hMax) => set({ hMax }),
  ps: '-4',
  setPs: (ps) => set({ ps }),
  ipMin: '1e-6',
  setIpMin: (ipMin) => set({ ipMin }),
}));
