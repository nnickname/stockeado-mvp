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