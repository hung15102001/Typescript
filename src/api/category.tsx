import { CateType } from "../types/category"
import instance from "./instance"

export const getAll = () => {
    const url =  `/category`
    return instance.get(url)
}
export const getDetail = (id:number) => {
    const url =  `/category/${id}`
    return instance.get(url)
}
export const add = (category:CateType) => {
    const url =  '/category'
    return instance.post(url, category)
}
export const edit = (category:CateType) => {
    const url =  `/category/${category._id}`
    return instance.put(url, category)
}
export const remove = (id:number) => {
    const url =  `/category/${id}`
    return instance.delete(url)
}