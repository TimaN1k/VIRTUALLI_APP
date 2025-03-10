import { create } from "zustand";

interface ISortStore{
    value: string, 
    newValue: (event:React.SyntheticEvent, isNewValue:string|undefined) => void,
    clearValue: () => void
}

export const useSortStore = create<ISortStore>((set) => ({    
    value: '',          
    newValue: (event, isNewValue) => set(() => ({
        value: isNewValue        
    })),
    clearValue: () => set(() => ({
        value: ''
    }))
}))
