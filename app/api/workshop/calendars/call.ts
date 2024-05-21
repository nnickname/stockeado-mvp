import { callApiHookPost } from "../../call";

export const createCalendar = async (body: Object) => {
    const calendar = await callApiHookPost('/api/workshop/calendars/create', body);
    if(calendar !== null) return true;
    return false;
}