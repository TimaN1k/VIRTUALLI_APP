import { create } from "zustand";
import { IProduct } from "../Pages/Catalog/Catalog";
import { toast } from 'react-toastify';

interface IProductBascet{       
    productInBascet: (IProduct | undefined)[],//Корзина    
    isEmpty: boolean, //Проверка на пустоту корзины       
    lengthProductInBascet: number|null, //Кол-во товаров в корзине           
    addProduct: (index:number, array: IProduct[]) => void,// Добавление товара в корзину    
    deleteProductInBascet: ( index:number | undefined) => void,//Удаление с корзины   
    addQuantityProduct: ( index:number|undefined ) => void,//увелечение еденицы товара 
    removeQuantityProduct: ( index:number|undefined ) => void,//Уменьшение еденицы товара    
}

export const useProductBascet = create<IProductBascet>((set) => ({      
    isEmpty: true,           
    lengthProductInBascet: null,    
    productInBascet: [],      
    addProduct: (index, array) => set((state) => {
        const toNewArr = array.find((element) => element.id === index)
        if(toNewArr && !state.productInBascet.some((item) => item?.id == toNewArr.id)){
            toast.success('Товар добавлен в корзину')                     
            return{                        
                productInBascet: [
                    ...state.productInBascet,
                    {...toNewArr, showAnimation: true}
                ],
                isEmpty: false,                
                lengthProductInBascet: state.lengthProductInBascet! + 1,                                                 
            }                       
        }
        return state
    }),
    deleteProductInBascet: (index) =>
         set((state) => {
            const upProduct = state.productInBascet.filter((item) => item?.id !== index) 
            toast.warning('Товар удалён из корзины')          
            return{
                productInBascet: upProduct,
                isEmpty: upProduct.length === 0,                
                lengthProductInBascet: state.lengthProductInBascet! - 1,                        
            }       
    }),       
    addQuantityProduct: (index) =>
         set((state) => {
            const updatedProduct = state.productInBascet.map(prod => {
                if (prod?.id === index && prod?.quantity! < 10) {
                    return {
                        ...prod,
                        quantity: prod?.quantity! + 1
                    };
                }                
                return prod;                
            });
            return {
                productInBascet: updatedProduct
            };           
         }),
         removeQuantityProduct: (index) =>  set((state) => {
            const updatedProduct = state.productInBascet.map((item) => {
                if(item?.id === index && item?.quantity! > 1){
                    return{
                         ...item, quantity: item?.quantity! - 1
                    }
                }
                return item
            })
            return{
                productInBascet: updatedProduct
            }
         })    
}))

