import { callApiHookPost } from "../../call";

export const createOrderService = async (body: Object) => {
    const order = await callApiHookPost('/api/workshop/orders/create', body);
    if(order !== null) return  order?.order;
    return null;
}

export const getAllOrderServices = async (_id: string) => {
    const order = await callApiHookPost('/api/workshop/orders/getall', {_id});
    if(order !== null) return order?.orders;
    return null;
}
export const updateOrderService = async (body: object) => {
    const order = await callApiHookPost('/api/workshop/orders/update', body);
    if(order !== null) return order?.order;
    return null;
}


