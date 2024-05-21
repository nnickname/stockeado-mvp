import { callApiHookPost } from "../../call";

export const createClient = async (body: Object) => {
    const client = await callApiHookPost('/api/workshop/clients/create', body);
    if(client !== null) return true;
    return false;
}

export const getAllClients = async (_id: string) => {
    const client = await callApiHookPost('/api/workshop/clients/getall', {_id});
    if(client !== null) return client.clients;
    return null;
}

export const getClient = async (_id: string) => {
    const client = await callApiHookPost('/api/workshop/clients/get', {_id});
    if(client !== null) return client;
    return null;
}

export const updateClient = async (body: object) => {
    const client = await callApiHookPost('/api/workshop/clients/update', body);
    if(client?.client !== null) return true;
    return false;
}