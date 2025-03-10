import { create } from "zustand";

interface IArrProductInBascet{    
   name:string,
   manifacture: string,
   price:number,
   imgURL: string,
   id: number 
}

interface IProductBascet{       
    productInBascet: (IArrProductInBascet | undefined)[],
    addProduct: (index:number, array: IArrProductInBascet[]) => void,    
    deleteProductInBascet: ( index:number | undefined, price:number|undefined) => void,
    isEmpty: boolean,
    sumProductInBascet: number,
    lengthProductInBascet: null|number
}

export const useProductBascet = create<IProductBascet>((set) => ({      
    sumProductInBascet: 0,
    isEmpty: true,
    productInBascet: [],
    lengthProductInBascet: null,
    addProduct: (index, array) => set((state) => {
        const toNewArr = array.find((element) => element.id === index)
        if(toNewArr && !state.productInBascet.some((item) => item?.id == toNewArr.id)){
            return{
                productInBascet: [
                    ...state.productInBascet,
                    toNewArr
                ],
                isEmpty: false,
                sumProductInBascet: state.sumProductInBascet + toNewArr.price,
                lengthProductInBascet: Number(state.lengthProductInBascet) + 1,                             
            }
        }
        return state
    }),    
    deleteProductInBascet: (index, price) =>
         set((state) => {
            const upProduct = state.productInBascet.filter((item) => item?.id !== index) 
            return{
                productInBascet: upProduct,
                isEmpty: upProduct.length === 0,
                sumProductInBascet: state.sumProductInBascet - price!,
                lengthProductInBascet: Number(state.lengthProductInBascet) - 1
            }       
    })
}))
