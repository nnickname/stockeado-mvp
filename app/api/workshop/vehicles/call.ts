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