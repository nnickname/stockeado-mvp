export const ReturnUnifiedStringDateTime = (realdate: string) => {
    const full_date = new Date(realdate).toLocaleDateString(); //Date String
    const full_time = new Date(realdate).toLocaleTimeString(); // Time String
    return full_date + ' ' + full_time;
}