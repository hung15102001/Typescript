import { NewType } from "../types/news";
// import { ProductType } from "../types/products";
import {isAuthenticate} from '../ultils/localStore'
import instance from "./instance";
const {token, user} = isAuthenticate()
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
    return instance.post(url, demo,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    });
}
export const view = (id:number) =>{
    const url = `/news/${id}`;
    return instance.get(url)
}
export const update = (demo:NewType) => {
    const url = `/news/${demo._id}`
    return instance.put(url, demo)
}