import { create } from "zustand";
import { IProduct } from "../Pages/Catalog/Catalog";
import { toast } from "react-toastify";

interface IFavorite{
    addProductFavorite: (index: number|undefined, arr: IProduct[]) => void,
    removeProductFavorite: (index: number|undefined) => void,
    isEmptyinFavorite: boolean,
    productInFavorite: (IProduct | undefined)[]    
}

export const useFavoriteStore = create<IFavorite>((set) =>({
    isEmptyinFavorite: false,
    productInFavorite: [],    
    addProductFavorite: (index, arr) => set((state) => {
        const chekProduct = arr.find((item) => item.id == index)
        if(chekProduct && !state.productInFavorite.some((prod) => prod?.id == chekProduct.id)){
            toast.success('Добавлено в избранное')
            return{
                productInFavorite:[
                    ...state.productInFavorite,
                    chekProduct
                ],
                isEmptyinFavorite: true                                
            }
        }        
        return state
    }),
    removeProductFavorite: (index) => set((state) => {
        const upProduct = state.productInFavorite.filter((item) => item?.id !== index)
        toast.success('Удалено из избранного')
        return {
            productInFavorite: upProduct,
            isEmptyinFavorite: upProduct.length > 0
        }
    })
}))
