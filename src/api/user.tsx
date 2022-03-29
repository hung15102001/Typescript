import axios from "axios"
import instance from "./instance";
import {User} from "../types/user"
export const getAll = () => {
    const url = '/users';
    return instance.get(url);
}

export const add = (user:User) => {
    const url = '/users';
    return instance.post(url, user)
}