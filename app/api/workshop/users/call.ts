import { callApiHookPost } from "../../call";

export const getAllWorkShopUsers = async (id: string) => {
    const user = await callApiHookPost('/api/workshop/users/getall', {_id: id});
    if(user !== null) return user?.users;
    return null;
}

export const getOneWorkShopOwner = async (id: string) => {
    const user = await callApiHookPost('/api/workshop/users/get', {_id: id});
    if(user !== null) return user?.user;
    return null;
}
export const createWorkShopUser = async (body: object) => {
    const user = await callApiHookPost('/api/workshop/users/create', body);
    if(user !== null) return user?.user;
    return null;
}

export const deleteWorkShopUser = async (_id: string) => {
    const user = await callApiHookPost('/api/workshop/users/delete', {_id});
    if(user?.deleted) return true;
    return false;
}
