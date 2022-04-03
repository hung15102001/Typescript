import { ProductType } from "../types/products";
import {isAuthenticate} from '../ultils/localStore'
import instance from "./instance";

const { user, token} =  isAuthenticate();

export const list = (start = 0, limit = 0) => {
    let url = '/products';
    if(limit) url += `&_start=${start}&_limit=${limit}`;
    
    return instance.get(url)
}

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}

export const add = (product:ProductType) => {
    console.log(product);
    
    const url = `/products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const view = (id:string)=>{
    const url = `/products/${id}`;
    return instance.get(url)
}
export const update = (product:ProductType) => {
    console.log(product.id);
    
    const url = `/products/${product._id}`;
    return instance.put(url, product)
}