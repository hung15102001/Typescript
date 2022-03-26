import { NewType } from "../types/news";
// import { ProductType } from "../types/products";
import instance from "./instance";

export const getAll = () => {
    const url = '/news';
    return instance.get(url);
}

export const remove = (id:number) => {
    const url = `/news/${id}`;
    return instance.delete(url);
}

export const add = (demo:NewType) => {
    const url = `/news`;
    return instance.post(url, demo);
}
export const view = (id:number) =>{
    const url = `/news/${id}`;
    return instance.get(url)
}
export const update = (demo:NewType) => {
    const url = `/news/${demo.id}`
    return instance.put(url, demo)
}