import { callApiHookPost } from "../../call";

export const createInspection = async (body: Object) => {
    const inspection = await callApiHookPost('/api/workshop/inspections/create', body);
    if(inspection !== null) return inspection?.inspection;
    return null;
}

export const getAllInspections = async (_id: string) => {
    const inspection = await callApiHookPost('/api/workshop/inspections/getall', {_id});
    if(inspection !== null) return inspection.inspections;
    return null;
}