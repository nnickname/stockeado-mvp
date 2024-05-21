import { callApiHookPost } from "../../call";

export const createVehicle = async (body: Object) => {
    const vehicle = await callApiHookPost('/api/workshop/vehicles/create', body);
    if(vehicle !== null) return true;
    return false;
}

export const getAllVehicles = async (_id: string) => {
    const vehicle = await callApiHookPost('/api/workshop/vehicles/getall', {_id});
    if(vehicle !== null) return vehicle.vehicles;
    return null;
}

export const getVehicle = async (_id: string) => {
    const vehicle = await callApiHookPost('/api/workshop/vehicles/get', {_id});
    if(vehicle !== null) return vehicle;
    return null;
}
export const updateVehicle = async (body: object) => {
    const client = await callApiHookPost('/api/workshop/vehicles/update', body);
    if(client?.vehicle !== null) return true;
    return false;
}