import { callApiHookPost } from "../../call";

export const createCalendar = async (body: Object) => {
    const calendar = await callApiHookPost('/api/workshop/calendars/create', body);
    if(calendar !== null) return true;
    return false;
}
export const getAllCalendars = async (_id: string) => {
    const calendar = await callApiHookPost('/api/workshop/calendars/getall', {_id});
    if(calendar !== null) return calendar?.calendars;
    return null;
}
export const getAllCalendarsInspections = async (_id: string) => {
    const calendar = await callApiHookPost('/api/workshop/calendars/getinspection', {_id});
    if(calendar !== null) return calendar?.calendars;
    return null;
}

export const deleteCalendar = async (_id: string) => {
    const calendar = await callApiHookPost('/api/workshop/calendars/delete', {_id});
    if(calendar?.calendar !== null) return true;
    return false;
}