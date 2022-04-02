import { ProductType } from "../types/products";
import instance from "./instance";

export const list = () => {
    const url = '/products';
    return instance.get(url)
}

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}

export const add = (product:ProductType) => {
    console.log(product);
    
    const url = `/products`;
    return instance.post(url, product);
}

export const view = (id:string)=>{
    const url = `/products/${id}`;
    return instance.get(url)
}
export const update = (product:ProductType) => {
    console.log(product._id);
    
    const url = `/products/${product._id}`;
    return instance.put(url, product)
}