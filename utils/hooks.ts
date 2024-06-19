export const ReturnUnifiedStringDateTime = (realdate: string) => {
    return new Date(realdate).getDate() + '/' + new Date(realdate).getMonth() + '/' + new Date(realdate).getFullYear()  + ' ' + new Date(realdate).getHours() + ':' + new Date(realdate).getMinutes();
}