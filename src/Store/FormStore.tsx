import { create } from "zustand";

interface IFromStore{
    vis:boolean,
    isVis: () => void
}

export const useFormStore = create<IFromStore>((set) =>({
    vis: false,
    isVis: () => set((state) => ({
        vis: !state.vis
    }))
}))
