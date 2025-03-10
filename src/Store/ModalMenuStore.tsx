import { create } from "zustand";

interface IModalMenu{
    isActive: boolean,
    setActive: () => void
}

export const useModalMenu = create<IModalMenu>((set) => ({
    isActive: false,
    setActive: () => set((state) => ({
        isActive: !state.isActive
    }))
}))
