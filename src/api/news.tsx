import instance from "./instance";

export const getAll = () => {
    const url = '/news/';
    return instance.get(url);
}

export const remove = (id:number) => {
    const url = `/news/${id}`;
    return instance.delete(url);
}