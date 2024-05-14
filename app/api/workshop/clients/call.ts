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