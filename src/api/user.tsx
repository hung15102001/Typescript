import axios from "axios"
import instance from "./instance";
import {User} from "../types/user"
export const getAll = () => {
    const url = '/users';
    return instance.get(url);
}
export const getDetail = (id:number)=>{
    const url = `/users/${id}`
    return instance.get(url)
}
export const signup = (user:User) => {
    const url = '/signup';
    return instance.post(url, user)
}

export const signin = (user:User) => {
    const url = '/signin';
    return instance.post(url, user)
}