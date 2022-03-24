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

export const add = (products:ProductType) => {
    const url = `/products`;
    return instance.post(url, products);
}

export const read = (id:number)=>{
    const url = `/products/`+id;
    return instance.get(url)
}
export const update = (products:ProductType) => {
    const url = `/products`;
    return instance.put(url, products)
}